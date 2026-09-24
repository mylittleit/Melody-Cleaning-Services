import { NextRequest, NextResponse } from "next/server"
import { createYahooTransporter, escapeHtml, getEmailCredentials, getString, isValidEmail } from "@/lib/email-utils"

export const runtime = "nodejs"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json().catch(() => null)

    if (!body || typeof body !== "object") {
      return NextResponse.json({ success: false, message: "Invalid request payload." }, { status: 400 })
    }

    const name = getString(body.name, 200)
    const email = getString(body.email, 254).toLowerCase()
    const phone = getString(body.phone, 50)
    const address = getString(body.address, 500)
    const serviceType = getString(body.serviceType, 100)
    const date = getString(body.date, 30)
    const time = getString(body.time, 100)
    const message = getString(body.message, 2000)

    if (!name || !email || !phone || !address || !serviceType || !date || !time) {
      return NextResponse.json({ success: false, message: "Please complete all required booking fields." }, { status: 400 })
    }

    if (!isValidEmail(email)) {
      return NextResponse.json({ success: false, message: "Please enter a valid email address." }, { status: 400 })
    }

    const credentials = getEmailCredentials()
    const senderName = "Melody Cleaning Services"

    if (!credentials) {
      console.error("Booking form failed: EMAIL_USER or EMAIL_PASSWORD is missing in the server environment")
      return NextResponse.json(
        { success: false, message: "We couldn't send your booking request right now. Please try again later." },
        { status: 500 }
      )
    }

    const transporter = createYahooTransporter()

    const mailOptions = {
      from: { name: senderName, address: credentials.emailUser },
      replyTo: email,
      to: "max_frances@yahoo.com, melodycleaningservices@yahoo.com, contactmelodycleaning@gmail.com",
      subject: `New Booking Request: ${serviceType}`,
      html: `
        <h1>New Booking Request</h1>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
        <p><strong>Address:</strong> ${escapeHtml(address)}</p>
        <p><strong>Service Type:</strong> ${escapeHtml(serviceType)}</p>
        <p><strong>Preferred Date:</strong> ${escapeHtml(date)}</p>
        <p><strong>Preferred Time:</strong> ${escapeHtml(time)}</p>
        <p><strong>Additional Information:</strong> ${escapeHtml(message || "None provided")}</p>
      `,
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json({ success: true, message: "Booking request submitted successfully" })
  } catch (error) {
    console.error("Error submitting booking:", error)
    return NextResponse.json(
      { success: false, message: "We could not send your booking request right now. Please try again later." },
      { status: 500 }
    )
  }
}
