export default async function handler(req, res) {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Handle preflight request
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }

  try {
    // Vercel serverless functions require importing inside or having it available globally, standard import is fine
    const nodemailer = require('nodemailer');

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
      secure: encryption === 'ssl',
      auth: {
        user: username,
        pass: password,
      },
      tls:
        encryption === 'none'
          ? {
              rejectUnauthorized: false,
            }
          : undefined,
    });

    await transporter.verify();

    await transporter.sendMail({
      from: `${fromName} <${fromEmail}>`,
      to: testEmail,
      subject: 'SMTP Test Email',
      html: `
        <div style="font-family:sans-serif;padding:20px">
          <h2>SMTP Test Successful ✅</h2>
          <p>Your SMTP credentials are working correctly.</p>
        </div>
      `,
    });

    res.status(200).json({
      success: true,
      message: 'Email sent successfully',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}
