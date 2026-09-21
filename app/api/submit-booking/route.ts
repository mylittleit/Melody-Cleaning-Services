import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export const runtime = "nodejs"

export async function POST(request: Request) {
  try {
    const formData = await request.json()
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

    const formattedDate = formData.date || "Not specified"

    const mailOptions = {
      from: { name: senderName, address: emailUser },
      replyTo: formData.email || emailUser,
      to: "max_frances@yahoo.com, melodycleaningservices@yahoo.com, contactmelodycleaning@gmail.com",
      subject: `New Booking Request: ${formData.serviceType || "General Inquiry"}`,
      html: `
        <h1>New Booking Request</h1>
        <p><strong>Name:</strong> ${formData.name || "Not provided"}</p>
        <p><strong>Email:</strong> ${formData.email || "Not provided"}</p>
        <p><strong>Phone:</strong> ${formData.phone || "Not provided"}</p>
        <p><strong>Address:</strong> ${formData.address || "Not provided"}</p>
        <p><strong>Service Type:</strong> ${formData.serviceType || "Not specified"}</p>
        <p><strong>Preferred Date:</strong> ${formattedDate}</p>
        <p><strong>Preferred Time:</strong> ${formData.time || "Not specified"}</p>
        <p><strong>Additional Information:</strong> ${formData.message || "None provided"}</p>
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
