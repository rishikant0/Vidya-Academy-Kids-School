const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.post('/api/admission', async (req, res) => {
  const { student_name, parent_name, parent_email, phone, class_selection } = req.body;

  const mailOptionsToSchool = {
    from: process.env.EMAIL_USER,
    to: process.env.SCHOOL_EMAIL || 'kumarrishikant660@gmail.com',
    replyTo: parent_email,
    subject: `New Admission Application: ${student_name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
        <h2 style="color: #4a90e2; text-align: center;">New Admission Application</h2>
        <p><strong>Student Name:</strong> ${student_name}</p>
        <p><strong>Parent Name:</strong> ${parent_name}</p>
        <p><strong>Parent Email:</strong> ${parent_email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Class Selected:</strong> ${class_selection}</p>
        <div style="margin-top: 20px; font-size: 0.8em; color: #888; text-align: center;">
          Sent from Vidya Academy Admission Portal
        </div>
      </div>
    `,
  };

  const mailOptionsToParent = {
    from: process.env.EMAIL_USER,
    to: parent_email,
    subject: `Admission Application Received - Vidya Academy`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
        <h2 style="color: #4a90e2; text-align: center;">Welcome to Vidya Academy</h2>
        <p>Dear ${parent_name},</p>
        <p>We have received your admission application for <strong>${student_name}</strong> for class <strong>${class_selection}</strong>.</p>
        <p>Our team will review the details and get back to you shortly.</p>
        <p>Thank you for choosing Vidya Academy Kids School!</p>
        <br>
        <p>Regards,<br><strong>Admission Team</strong><br>Vidya Academy Kids School</p>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptionsToSchool);
    await transporter.sendMail(mailOptionsToParent);
    res.status(200).json({ success: true, message: 'Application submitted!' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ success: false, message: 'Failed to send.' });
  }
});

app.post('/api/contact', async (req, res) => {
  const { name, email, phone, message } = req.body;

  const mailOptionsToSchool = {
    from: process.env.EMAIL_USER,
    to: process.env.SCHOOL_EMAIL || 'kumarrishikant660@gmail.com',
    replyTo: email,
    subject: `New Contact Message: ${name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
        <h2 style="color: #ff6ec7; text-align: center;">New Contact Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong></p>
        <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; border-left: 4px solid #ff6ec7;">
          ${message}
        </div>
        <div style="margin-top: 20px; font-size: 0.8em; color: #888; text-align: center;">
          Sent from Vidya Academy Contact Form
        </div>
      </div>
    `,
  };

  const mailOptionsToUser = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: `We've Received Your Message - Vidya Academy`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
        <h2 style="color: #4a90ff; text-align: center;">Hello from Vidya Academy!</h2>
        <p>Dear ${name},</p>
        <p>Thank you for reaching out to us. We have received your message and will get back to you as soon as possible.</p>
        <p>If you have any urgent queries, feel free to call us at +91 6207383145.</p>
        <br>
        <p>Best Regards,<br><strong>Vidya Academy Team</strong></p>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptionsToSchool);
    await transporter.sendMail(mailOptionsToUser);
    res.status(200).json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Error sending contact email:', error);
    res.status(500).json({ success: false, message: 'Failed to send message.' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
