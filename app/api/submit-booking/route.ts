import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: Request) {
  try {
    const formData = await request.json()

    // Create a transporter
    const transporter = nodemailer.createTransport({
      service: "yahoo",
      auth: {
        user: process.env.EMAIL_USER || "melodycleaningservices@yahoo.com",
        pass: process.env.EMAIL_PASSWORD, // This should be set in your environment variables
      },
    })

    // Format the date
    const formattedDate = formData.date ? new Date(formData.date).toLocaleDateString() : "Not specified"

    // Email content
    const mailOptions = {
      from: "melodycleaningservices@yahoo.com",
      to: ["melodycleaningservices@yahoo.com", "contactmelodycleaning@gmail.com"],
      subject: "New Booking Request from Website",
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
    await transporter.sendMail(mailOptions)

    return NextResponse.json({ success: true, message: "Booking request submitted successfully" })
  } catch (error) {
    console.error("Error submitting booking:", error)
    return NextResponse.json({ success: false, message: "Failed to submit booking request" }, { status: 500 })
  }
}
