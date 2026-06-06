// utils/sendEmail.js
import nodemailer from 'nodemailer';

/**
 * Utility function to send emails using nodemailer.
 * 
 * @param {string} to - Recipient email address.
 * @param {string} subject - Email subject line.
 * @param {string} text - Plain text email content.
 * @returns {Promise<Object>} - The nodemailer info object.
 */
const sendEmail = async (to, subject, text) => {
  try {
    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      secure: process.env.EMAIL_SECURE === 'true',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    // Send email
    const info = await transporter.sendMail({
      from: `"${process.env.EMAIL_FROM_NAME}" <${process.env.EMAIL_FROM}>`,
      to,
      subject,
      text
    });

    console.log(`Email sent: ${info.messageId}`);
    return info;
  } catch (error) {
    console.error(`[Email Service Error] Failed to send email to: ${to}. Subject: "${subject}". Error Details:`, error);
    throw new Error(`Failed to send email to ${to}`);
  }
};

export default sendEmail;