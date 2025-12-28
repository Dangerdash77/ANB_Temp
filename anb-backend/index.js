const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");

const connectToDB = require("./database/connect");
const routes = require("./routes/routes");

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

// ==========================
// MongoDB
// ==========================
connectToDB(process.env.MONGO_URI);

// ==========================
// Middleware
// ==========================
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// ==========================
// ✅ INDUSTRY-STANDARD CORS
// ==========================
const clientOrigins = process.env.CLIENT_ORIGIN
  ? process.env.CLIENT_ORIGIN.split(",").map(o => o.trim())
  : [];

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin) return callback(null, true);

    const allowed = [
      process.env.CLIENT_ORIGIN,
      `https://www.${process.env.CLIENT_ORIGIN?.replace(/^https?:\/\//, "")}`
    ];

    if (allowed.includes(origin)) {
      callback(null, true);
    } else {
      console.error("❌ CORS blocked:", origin);
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
};

app.use(cors(corsOptions));

// ==========================
// Routes
// ==========================
app.use("/api", routes);

// ==========================
// Mail Transport
// ==========================
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,          // ✅ important
  secure: true,       // ✅ TLS
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
  connectionTimeout: 20_000, // 20s
  greetingTimeout: 20_000,
  socketTimeout: 20_000,
});


transporter.verify((error, success) => {
  if (error) {
    console.error("❌ Mail transporter error:", error);
  } else {
    console.log("✅ Mail transporter ready");
  }
});

// ==========================
// Quote / Sample / Order
// ==========================
app.post("/api/send-mail", async (req, res) => {
  try {
    const { type, name, email, phone, company, address, items } = req.body;

    const itemList = items?.map(
      item => `<li>${item.name} (Qty: ${item.quantity})</li>`
    ).join("") || "";

    const addressLine = address
      ? `<p><strong>Address:</strong> ${address}</p>`
      : "";

    await transporter.sendMail({
      from: process.env.MAIL_USER,
      to: process.env.MAIL_USER,
      subject: `New ${type} Request from ${name}`,
      html: `
        <h2>${type} Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Company:</strong> ${company || "N/A"}</p>
        ${addressLine}
        <h3>Requested Items:</h3>
        <ul>${itemList}</ul>
      `,
    });

    res.json({ success: true, message: "Mail sent successfully" });
  } catch (err) {
    console.error("❌ Mail error:", err);
    res.status(500).json({ success: false, message: "Mail sending failed" });
  }
});

// ==========================
// Contact Form
// ==========================
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: "All required fields must be filled.",
      });
    }

    await transporter.sendMail({
      from: process.env.MAIL_USER,
      to: process.env.MAIL_USER,
      subject: `Contact Message from ${name}`,
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "N/A"}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong><br>${message}</p>
      `,
    });

    res.json({ success: true, message: "Message sent successfully!" });
  } catch (err) {
    console.error("❌ Contact error:", err);
    res.status(500).json({ success: false, message: "Message sending failed" });
  }
});

// ==========================
// Global Error Handler
// ==========================
app.use((err, req, res, next) => {
  console.error("🔥 Unhandled error:", err);
  res.status(500).json({ success: false, message: "Server error" });
});

// ==========================
// Start Server
// ==========================
app.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
});
