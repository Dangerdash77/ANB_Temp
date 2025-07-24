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

// MongoDB Connection
connectToDB(process.env.MONGO_URI);

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// ✅ CORS setup — allows multiple origins (dev & prod)
const allowedOrigins = [
  process.env.CLIENT_ORIGIN,
  // "http://localhost:3000"
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
}));

// Mail transport setup (secure with env vars)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.MAIL_USER,       // e.g. anbind2020@gmail.com
    pass: process.env.MAIL_PASS        // app password stored in .env
  },
});

// Routes
app.use("/api", routes);

// 🚀 Quote / Sample / Order Request
app.post("/api/send-mail", async (req, res) => {
  const { type, name, email, phone, company, address, items } = req.body;

  const itemList = items?.map(item =>
    `<li>${item.name} (Qty: ${item.quantity})</li>`).join('') || '';

  const addressLine = address ? `<p><strong>Address:</strong> ${address}</p>` : '';

  const mailOptions = {
    from: process.env.MAIL_USER,
    to: process.env.MAIL_USER,
    subject: `New ${type} Request from ${name}`,
    html: `
      <h2>${type} Request</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Company:</strong> ${company || 'N/A'}</p>
      ${addressLine}
      <h3>Requested Items:</h3>
      <ul>${itemList}</ul>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ success: true, message: "Mail sent successfully" });
  } catch (error) {
    console.error("❌ Mail error:", error);
    res.status(500).json({ success: false, message: "Mail sending failed" });
  }
});

// 📩 Contact Form Submission
app.post("/api/contact", async (req, res) => {
  const { name, email, phone, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ success: false, message: "All required fields must be filled." });
  }

  const mailOptions = {
    from: process.env.MAIL_USER,
    to: process.env.MAIL_USER,
    subject: `Contact Us Message from ${name}`,
    html: `
      <h2>New Contact Message</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong><br>${message}</p>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ success: true, message: "Message sent successfully!" });
  } catch (error) {
    console.error("❌ Contact mail error:", error);
    res.status(500).json({ success: false, message: "Message sending failed" });
  }
});

// Start Server
app.listen(port, () => {
  console.log(`🚀 Server started at http://localhost:${port}`);
});
