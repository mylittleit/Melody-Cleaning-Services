import { NextResponse } from "next/server"
import nodemailer from "nodemailer"
import { escapeHtml, getString, isValidEmail } from "@/lib/email-utils"

export const runtime = "nodejs"

export async function POST(request: Request) {
  try {
    const formData = await request.json()
    const name = getString(formData.name, 200)
    const email = getString(formData.email, 254).toLowerCase()
    const phone = getString(formData.phone, 50)
    const address = getString(formData.address, 500)
    const serviceType = getString(formData.serviceType, 100)
    const date = getString(formData.date, 30)
    const time = getString(formData.time, 100)
    const message = getString(formData.message, 2000)

    if (!name || !email || !phone || !address || !serviceType || !date || !time) {
      return NextResponse.json({ success: false, message: "Please complete all required booking fields." }, { status: 400 })
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

    const mailOptions = {
      from: { name: senderName, address: emailUser },
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

    const info = await transporter.sendMail(mailOptions)
    console.log("Email sent:", info)

    return NextResponse.json({ success: true, message: "Booking request submitted successfully" })
  } catch (error) {
    console.error("Error submitting booking:", error)
    return NextResponse.json({ success: false, message: "Failed to submit booking request" }, { status: 500 })
  }
}
