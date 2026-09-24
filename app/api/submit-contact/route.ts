import { NextRequest, NextResponse } from "next/server"
import { createYahooTransporter, escapeHtml, getString, isValidEmail } from "@/lib/email-utils"

export const runtime = "nodejs"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json().catch(() => null)

    if (!body || typeof body !== "object") {
      return NextResponse.json({ success: false, message: "Invalid request payload." }, { status: 400 })
    }

    const name = getString(body.name, 200)
    const email = getString(body.email, 254).toLowerCase()
    const subject = getString(body.subject, 200)
    const message = getString(body.message, 5000)

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ success: false, message: "Please complete all required contact fields." }, { status: 400 })
    }

    if (!isValidEmail(email)) {
      return NextResponse.json({ success: false, message: "Please enter a valid email address." }, { status: 400 })
    }

    const credentials = getEmailCredentials()
    const senderName = "Melody Cleaning Services"

    if (!credentials) {
      console.error("Contact form failed: EMAIL_USER or EMAIL_PASSWORD is missing in the server environment")
      return NextResponse.json(
        { success: false, message: "We couldn't send your message right now. Please try again later." },
        { status: 500 }
      )
    }

    const transporter = createYahooTransporter()

    const businessEmailOptions = {
      from: { name: senderName, address: credentials.emailUser },
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

    const customerEmailOptions = {
      from: { name: senderName, address: credentials.emailUser },
      replyTo: credentials.emailUser,
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

    await transporter.sendMail(businessEmailOptions)

    try {
      await transporter.sendMail(customerEmailOptions)
    } catch (customerError) {
      console.warn("Failed to send customer acknowledgement email:", customerError)
    }

    return NextResponse.json({
      success: true,
      message: "Thank you, your message has been received and our team will get back to you.",
    })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json(
      { success: false, message: "We could not send your message right now. Please try again later." },
      { status: 500 }
    )
  }
}
