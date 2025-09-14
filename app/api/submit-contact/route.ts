import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = 'nodejs'; // Ensure Node.js runtime

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, service, message } = await request.json();

    // Create transporter using Yahoo SMTP
    const transporter = nodemailer.createTransport({
      host: "smtp.mail.yahoo.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
      tls: {
        rejectUnauthorized: true,
      },
    });

    // Email to business
    const businessEmailOptions = {
      from: "stephenieagboje@yahoo.com", // Update to match your EMAIL_USER
      to: "max_frances@yahoo.com, melodycleaningservices@yahoo.com, contactmelodycleaning@gmail.com",
      subject: `New Contact Form Submission - ${service || "General Inquiry"}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Service:</strong> ${service || "Not specified"}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        <hr>
        <p><em>This message was sent from the Melody Cleaning Services website contact form.</em></p>
      `,
    };

    // Auto-reply to customer
    const customerEmailOptions = {
      from: "stephenieagboje@yahoo.com", // Update to match your EMAIL_USER
      to: email,
      subject: "Thank you for contacting Melody Cleaning Services",
      html: `
        <h2>Thank you for your inquiry!</h2>
        <p>Dear ${name},</p>
        <p>Thank you for contacting Melody Cleaning Services. We have received your message and will get back to you within 2 hours during business hours.</p>
        <p><strong>Your inquiry details:</strong></p>
        <p><strong>Service:</strong> ${service || "General inquiry"}</p>
        <p><strong>Message:</strong> ${message}</p>
        <p>If you need immediate assistance, please call us at 07453581984.</p>
        <p>Best regards,<br>Melody Cleaning Services Team</p>
      `,
    };

    // Send both emails
    await transporter.sendMail(businessEmailOptions);
    await transporter.sendMail(customerEmailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}
