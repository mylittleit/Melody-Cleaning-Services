import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: Request) {
  try {
    const formData = await request.json()

    // Create a transporter
    const transporter = nodemailer.createTransport({
      service: "Yahoo",
      auth: {
        user: "stephenie@yahoo.com",
        pass: process.env.EMAIL_PASSWORD,
      },
      debug: true, // Enable debug output
      logger: true, // Log information to the console
    })

    // Format the date if it's a string
    const formattedDate = formData.date || "Not specified"

    // Email content
    const mailOptions = {
      from: "stephenieagboje@yahoo.com",
      to: "max_frances@yahoo.com, melodycleaningservices@yahoo.com, contactmelodycleaning@gmail.com",
      subject: `New Booking Request: ${formData.serviceType}`,
      html: `
        <h1>New Booking Request</h1>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Phone:</strong> ${formData.phone}</p>
        <p><strong>Address:</strong> ${formData.address}</p>
        <p><strong>Service Type:</strong> ${formData.serviceType}</p>
        <p><strong>Preferred Date:</strong> ${formattedDate}</p>
        <p><strong>Preferred Time:</strong> ${formData.time}</p>
        <p><strong>Additional Information:</strong> ${formData.message || "None provided"}</p>
      `,
    }

    // Send email
    const info = await transporter.sendMail(mailOptions)
    console.log("Email sent:", info.response)

    return NextResponse.json({ success: true, message: "Booking request submitted successfully" })
  } catch (error) {
    console.error("Error submitting booking:", error)
    return NextResponse.json({ success: false, message: "Failed to submit booking request" }, { status: 500 })
  }
}
