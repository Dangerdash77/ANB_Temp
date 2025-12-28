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
// Mail Transport (GMAIL ONLY)
// ==========================
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
  // Add a timeout setting so it doesn't hang indefinitely
  connectionTimeout: 10000, // 10 seconds
});

// Verify connection configuration
transporter.verify(function (error, success) {
  if (error) {
    console.log("❌ Mail Server Error:", error);
  } else {
    console.log("✅ Mail Server is ready to take our messages");
  }
});

// ==========================
// Quote / Sample / Order
// ==========================
app.post("/api/send-mail", async (req, res) => {
  try {
    console.log("📨 Incoming mail request:", req.body);

    const { type, name, email, phone, company, address, items } = req.body;

    if (!type || !name || !email || !phone) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields",
      });
    }

    const itemList = Array.isArray(items)
      ? items.map(i => `<li>${i.name} (Qty: ${i.quantity})</li>`).join("")
      : "<li>No items provided</li>";

    await transporter.sendMail({
      from: `"ANB Industries" <${process.env.MAIL_USER}>`,
      to: process.env.MAIL_USER,
      replyTo: email,
      subject: `New ${type} Request from ${name}`,
      html: `
        <h2>${type} Request</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Company:</b> ${company || "N/A"}</p>
        ${address ? `<p><b>Address:</b> ${address}</p>` : ""}
        <h3>Items</h3>
        <ul>${itemList}</ul>
      `,
    });

    console.log("✅ Mail sent successfully");
    res.json({ success: true });

  } catch (err) {
    console.error("❌ SEND MAIL ERROR:", err);
    res.status(500).json({
      success: false,
      error: err.message,
    });
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
