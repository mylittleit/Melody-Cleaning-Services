import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: Request) {
  try {
    const formData = await request.formData()
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const subject = formData.get("subject") as string
    const message = formData.get("message") as string

    // Create a transporter
    const transporter = nodemailer.createTransport({
      service: "Yahoo",
      auth: {
        user: "max_frances@yahoo.com",
        pass: process.env.EMAIL_PASSWORD,
      },
      debug: true, // Enable debug output
      logger: true, // Log information to the console
    })

    // Email content
    const mailOptions = {
      from: "max_frances@yahoo.com",
      to: "max_frances@yahoo.com, melodycleaningservices@yahoo.com, contactmelodycleaning@gmail.com",
      subject: `New Contact Message: ${subject}`,
      html: `
        <h1>New Contact Message</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    }

    // Send email
    const info = await transporter.sendMail(mailOptions)
    console.log("Email sent:", info.response)

    return NextResponse.redirect(new URL("/contact?success=true", request.url))
  } catch (error) {
    console.error("Error submitting contact form:", error)
    return NextResponse.redirect(new URL("/contact?error=true", request.url))
  }
}
