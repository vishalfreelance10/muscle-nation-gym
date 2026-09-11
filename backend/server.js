import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import fs from 'fs';

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// In-memory storage for inquiries (replace with DB later)
const inquiries = [];

// Email configuration (update with actual email)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER || 'your-email@gmail.com',
    pass: process.env.EMAIL_PASSWORD || 'your-app-password'
  }
});

// Contact form endpoint
app.post('/api/contact', (req, res) => {
  const { name, email, phone, message } = req.body;

  // Validation
  if (!name || !email || !phone || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  // Store inquiry
  const inquiry = {
    id: Date.now(),
    name,
    email,
    phone,
    message,
    timestamp: new Date().toISOString()
  };

  inquiries.push(inquiry);

  // Log to file (simple persistence)
  fs.appendFileSync('inquiries.json', JSON.stringify(inquiry) + '\n', 'utf-8');

  // Send email notification (optional)
  const mailOptions = {
    from: process.env.EMAIL_USER || 'your-email@gmail.com',
    to: process.env.GYM_EMAIL || 'gym@example.com',
    subject: `New Inquiry from ${name}`,
    html: `
      <h2>New Membership Inquiry</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
      <p><strong>Received:</strong> ${new Date().toLocaleString('en-IN')}</p>
    `
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Email error:', error);
      // Still return success to user even if email fails
    } else {
      console.log('Email sent:', info.response);
    }
  });

  res.status(200).json({
    success: true,
    message: 'Inquiry received. We will contact you soon!',
    id: inquiry.id
  });
});

// Get all inquiries (admin endpoint)
app.get('/api/inquiries', (req, res) => {
  res.json(inquiries);
});

// Get inquiry by ID
app.get('/api/inquiries/:id', (req, res) => {
  const inquiry = inquiries.find(i => i.id === parseInt(req.params.id));
  if (!inquiry) {
    return res.status(404).json({ error: 'Inquiry not found' });
  }
  res.json(inquiry);
});

// Delete inquiry
app.delete('/api/inquiries/:id', (req, res) => {
  const index = inquiries.findIndex(i => i.id === parseInt(req.params.id));
  if (index === -1) {
    return res.status(404).json({ error: 'Inquiry not found' });
  }
  inquiries.splice(index, 1);
  res.json({ success: true, message: 'Inquiry deleted' });
});

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'Server is running' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
