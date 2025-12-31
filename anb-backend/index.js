require("dotenv").config(); // MUST be first

const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { Resend } = require("resend");

const connectToDB = require("./database/connect");
const routes = require("./routes/routes");

const app = express();
const PORT = process.env.PORT || 10000;

/* ------------------ DATABASE ------------------ */
connectToDB(process.env.MONGO_URI);

/* ------------------ MIDDLEWARE ------------------ */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://www.anbindustries.com",
    ],
    credentials: true,
  })
);

app.options("*", cors());

/* ------------------ RESEND ------------------ */
if (!process.env.RESEND_API_KEY) {
  console.error("❌ RESEND_API_KEY missing");
  process.exit(1);
}

const resend = new Resend(process.env.RESEND_API_KEY);

/* ------------------ ROUTES ------------------ */
app.use("/api", routes);

/* ------------------ SEND MAIL ------------------ */
app.post("/api/send-mail", async (req, res) => {
  try {
    const { type, name, email, phone, company, address, items } = req.body;

    await resend.emails.send({
      from: "ANB Industries <no-reply@anbindustries.com>",
      to: [process.env.MAIL_TO],
      subject: `New ${type} Request from ${name}`,
      html: `
        <h2>${type} Request</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Company:</b> ${company || "N/A"}</p>
        <p><b>Address:</b> ${address || "N/A"}</p>
        <ul>
          ${(items || []).map(
            (i) => `<li>${i.name} (Qty: ${i.quantity})</li>`
          ).join("")}
        </ul>
      `,
    });
    console.log("📧 Sending mail to:", process.env.MAIL_TO);

    res.json({ success: true, message: "Mail sent successfully" });
  } catch (err) {
    console.error("❌ Mail error:", err);
    res.status(500).json({ success: false, error: err.message });
  }
});

/* ------------------ CONTACT FORM ------------------ */
app.post("/api/contact", async (req, res) => {
  try {
    const { firstName,lastName, email, phone, message } = req.body;

    await resend.emails.send({
      from: "Website Contact <no-reply@anbindustries.com>",
      to: [process.env.MAIL_TO],
      subject:`Contact Form Submission from ${firstName} ${lastName}`,
      html: `
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Message:</b><br/>${message}</p>
      `,
    });

    res.json({ success: true, message: "Message sent" });
  } catch (err) {
    console.error("❌ Contact mail error:", err);
    res.status(500).json({ success: false, error: err.message });
  }
});

/* ------------------ HEALTH CHECK ------------------ */
app.get("/", (req, res) => {
  res.send("ANB Backend Running ✅");
});

/* ------------------ START SERVER ------------------ */
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
