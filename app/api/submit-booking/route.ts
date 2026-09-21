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

function cleanHeaderValue(value: string) {
  return value.replace(/[\r\n]/g, " ").trim()
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
    const phone = typeof body.phone === "string" ? body.phone.trim() : ""
    const address = typeof body.address === "string" ? body.address.trim() : ""
    const serviceType = typeof body.serviceType === "string" ? body.serviceType.trim() : ""
    const date = typeof body.date === "string" ? body.date.trim() : ""
    const time = typeof body.time === "string" ? body.time.trim() : ""
    const message = typeof body.message === "string" ? body.message.trim() : ""

    if (!name || !email || !phone || !address || !serviceType || !date || !time || !isValidEmail(email)) {
      return NextResponse.json(
        { success: false, message: "Please complete all required booking fields with a valid email address." },
        { status: 400 },
      )
    }

    const emailUser = process.env.EMAIL_USER?.trim()
    const emailPassword = process.env.EMAIL_PASSWORD

    if (!emailUser || !emailPassword || BUSINESS_EMAILS.length === 0) {
      console.error("Missing email configuration: EMAIL_USER, EMAIL_PASSWORD, or BUSINESS_EMAILS")
      return NextResponse.json({ success: false, message: "Email service is not configured." }, { status: 500 })
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

    const mailOptions = {
      from: `"Melody Cleaning Services" <${emailUser}>`,
      replyTo: email,
      to: BUSINESS_EMAILS.join(", "),
      subject: `New Booking Request: ${cleanHeaderValue(serviceType)}`,
      html: `
        <h1>New Booking Request</h1>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
        <p><strong>Address:</strong> ${escapeHtml(address)}</p>
        <p><strong>Service Type:</strong> ${escapeHtml(serviceType)}</p>
        <p><strong>Preferred Date:</strong> ${escapeHtml(date)}</p>
        <p><strong>Preferred Time:</strong> ${escapeHtml(time)}</p>
        <p><strong>Additional Information:</strong> ${escapeHtml(message, "None provided")}</p>
      `,
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json({ success: true, message: "Booking request submitted successfully" })
  } catch (error) {
    console.error("Error submitting booking:", error)
    return NextResponse.json({ success: false, message: "Failed to submit booking request" }, { status: 500 })
  }
}
