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
    // Send to school
    await transporter.sendMail(mailOptionsToSchool);
    // Send to parent
    await transporter.sendMail(mailOptionsToParent);

    res.status(200).json({ success: true, message: 'Application submitted and emails sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, message: 'Failed to send emails. Error: ' + error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
