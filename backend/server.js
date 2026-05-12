const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/send-test-email", async (req, res) => {
  try {
    const {
      host,
      port,
      username,
      password,
      encryption,
      fromEmail,
      fromName,
      testEmail,
    } = req.body;

    const transporter = nodemailer.createTransport({
      host,
      port: Number(port),
      secure: encryption === "ssl",
      auth: {
        user: username,
        pass: password,
      },
      tls:
        encryption === "none"
          ? {
              rejectUnauthorized: false,
            }
          : undefined,
    });

    await transporter.verify();

    await transporter.sendMail({
      from: `${fromName} <${fromEmail}>`,
      to: testEmail,
      subject: "SMTP Test Email",
      html: `
        <div style="font-family:sans-serif;padding:20px">
          <h2>SMTP Test Successful ✅</h2>
          <p>Your SMTP credentials are working correctly.</p>
        </div>
      `,
    });

    res.json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
