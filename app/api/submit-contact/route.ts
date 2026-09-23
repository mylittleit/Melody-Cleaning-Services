import { NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"
import { escapeHtml, getString, isValidEmail } from "@/lib/email-utils"

export const runtime = "nodejs"

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json()
    const name = getString(formData.name, 200)
    const email = getString(formData.email, 254).toLowerCase()
    const subject = getString(formData.subject, 200)
    const message = getString(formData.message, 5000)

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ success: false, message: "Please complete all required contact fields." }, { status: 400 })
    }

    if (!isValidEmail(email)) {
      return NextResponse.json({ success: false, message: "Please enter a valid email address." }, { status: 400 })
    }

    const emailUser = process.env.EMAIL_USER
    const emailPassword = process.env.EMAIL_PASSWORD
    const senderName = "Melody Cleaning Services"

    if (!emailUser || !emailPassword) {
      return NextResponse.json(
        { success: false, message: "Email configuration is missing. Please set EMAIL_USER and EMAIL_PASSWORD." },
        { status: 500 }
      )
    }

    const transporter = nodemailer.createTransport({
      service: "Yahoo",
      auth: {
        user: emailUser,
        pass: emailPassword,
      },
      debug: false,
      logger: false,
    })

    const businessEmailOptions = {
      from: { name: senderName, address: emailUser },
      replyTo: email,
      to: "max_frances@yahoo.com, melodycleaningservices@yahoo.com, contactmelodycleaning@gmail.com",
      subject: `New Contact Form Submission - ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message)}</p>
        <hr>
        <p><em>This message was sent from the Melody Cleaning Services website contact form.</em></p>
      `,
    }

    // Send acknowledgement to the customer only if a valid sender email was provided
    const customerEmailOptions = email
      ? {
          from: { name: senderName, address: emailUser },
          replyTo: emailUser,
          to: email,
          subject: "Thank you for contacting Melody Cleaning Services",
          html: `
        <h2>Thank you for your inquiry!</h2>
        <p>Dear ${escapeHtml(name)},</p>
        <p>Thank you for contacting Melody Cleaning Services. We have received your message and will get back to you within 2 hours during business hours.</p>
        <p><strong>Your inquiry details:</strong></p>
        <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
        <p><strong>Message:</strong> ${escapeHtml(message)}</p>
        <p>If you need immediate assistance, please call us at 07453581984.</p>
        <p>Best regards,<br>Melody Cleaning Services Team</p>
      `,
        }
      : null

    await transporter.sendMail(businessEmailOptions)
    if (customerEmailOptions) {
      try {
        await transporter.sendMail(customerEmailOptions)
      } catch (err) {
        console.warn("Failed to send customer acknowledgement email:", err)
      }
    }

    return NextResponse.json({ success: true, message: "Your message has been sent successfully." })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ success: false, message: "Failed to send message" }, { status: 500 })
  }
}
