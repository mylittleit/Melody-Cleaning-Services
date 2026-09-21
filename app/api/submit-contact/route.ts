import { NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export const runtime = "nodejs"

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json()
    const emailUser = process.env.EMAIL_USER || "stephenieagboje@yahoo.com"
    const emailPassword = process.env.EMAIL_PASSWORD

    if (!emailPassword) {
      return NextResponse.json(
        { success: false, error: "Email configuration is missing. Please set EMAIL_PASSWORD." },
        { status: 500 }
      )
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.mail.yahoo.com",
      port: 465,
      secure: true,
      auth: {
        user: emailUser,
        pass: emailPassword,
      },
      tls: {
        rejectUnauthorized: true,
      },
    })

    const businessEmailOptions = {
      from: emailUser,
      to: "max_frances@yahoo.com, melodycleaningservices@yahoo.com, contactmelodycleaning@gmail.com",
      subject: `New Contact Form Submission - ${subject || "General Inquiry"}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name || "Not provided"}</p>
        <p><strong>Email:</strong> ${email || "Not provided"}</p>
        <p><strong>Subject:</strong> ${subject || "Not specified"}</p>
        <p><strong>Message:</strong></p>
        <p>${message || "No message provided"}</p>
        <hr>
        <p><em>This message was sent from the Melody Cleaning Services website contact form.</em></p>
      `,
    }

    const customerEmailOptions = {
      from: emailUser,
      to: email,
      subject: "Thank you for contacting Melody Cleaning Services",
      html: `
        <h2>Thank you for your inquiry!</h2>
        <p>Dear ${name || "Customer"},</p>
        <p>Thank you for contacting Melody Cleaning Services. We have received your message and will get back to you within 2 hours during business hours.</p>
        <p><strong>Your inquiry details:</strong></p>
        <p><strong>Subject:</strong> ${subject || "General inquiry"}</p>
        <p><strong>Message:</strong> ${message || "No message provided"}</p>
        <p>If you need immediate assistance, please call us at 07453581984.</p>
        <p>Best regards,<br>Melody Cleaning Services Team</p>
      `,
    }

    await transporter.sendMail(businessEmailOptions)
    await transporter.sendMail(customerEmailOptions)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 })
  }
}
