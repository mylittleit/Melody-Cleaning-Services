import { NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export const runtime = "nodejs"

const BUSINESS_EMAILS = (process.env.BUSINESS_EMAILS ?? "max_frances@yahoo.com, melodycleaningservices@yahoo.com, contactmelodycleaning@gmail.com")
  .split(",")
  .map((email) => email.trim())
  .filter(Boolean)

function escapeHtml(value: unknown, fallback = "Not provided") {
  if (value === null || value === undefined || value === "") return fallback

  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#039;")
}

function isValidEmail(value: unknown) {
  if (typeof value !== "string") return false
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const name = typeof body.name === "string" ? body.name.trim() : ""
    const email = typeof body.email === "string" ? body.email.trim() : ""
    const subject = typeof body.subject === "string" ? body.subject.trim() : ""
    const message = typeof body.message === "string" ? body.message.trim() : ""

    if (!name || !email || !subject || !message || !isValidEmail(email)) {
      return NextResponse.json({ success: false, message: "Please provide a valid name, email, subject, and message." }, { status: 400 })
    }

    const emailUser = process.env.EMAIL_USER?.trim() || "stephenieagboje@yahoo.com"
    const emailPassword = process.env.EMAIL_PASSWORD?.trim()

    if (!emailPassword || BUSINESS_EMAILS.length === 0) {
      console.error("Missing email configuration: EMAIL_PASSWORD or BUSINESS_EMAILS")
      return NextResponse.json({ success: false, message: "Email service is not configured." }, { status: 500 })
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.mail.yahoo.com",
      port: 465,
      secure: true,
      auth: { user: emailUser, pass: emailPassword },
      tls: { rejectUnauthorized: true },
    })

    await transporter.sendMail({
      from: `"Melody Cleaning Services" <${emailUser}>`,
      replyTo: email,
      to: BUSINESS_EMAILS.join(", "),
      subject: `New Contact Form Submission - ${escapeHtml(subject || "General Inquiry")}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Subject:</strong> ${escapeHtml(subject || "Not specified")}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message)}</p>
        <hr>
        <p><em>This message was sent from the Melody Cleaning Services website contact form.</em></p>
      `,
    })

    await transporter.sendMail({
      from: `"Melody Cleaning Services" <${emailUser}>`,
      to: email,
      subject: "Thank you for contacting Melody Cleaning Services",
      html: `
        <h2>Thank you for your inquiry!</h2>
        <p>Dear ${escapeHtml(name)},</p>
        <p>Thank you for contacting Melody Cleaning Services. We have received your message and will get back to you within 2 hours during business hours.</p>
        <p><strong>Your inquiry details:</strong></p>
        <p><strong>Subject:</strong> ${escapeHtml(subject || "General inquiry")}</p>
        <p><strong>Message:</strong> ${escapeHtml(message)}</p>
        <p>If you need immediate assistance, please call us at 07453581984.</p>
        <p>Best regards,<br>Melody Cleaning Services Team</p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ success: false, error: "Failed to send message" }, { status: 500 })
  }
}
