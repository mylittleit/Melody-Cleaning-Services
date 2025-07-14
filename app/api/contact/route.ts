import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: Request) {
  try {
    const formData = await request.formData()
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const subject = formData.get("subject") as string
    const message = formData.get("message") as string

    // ✅ UPDATED: Use EMAIL_USER from environment variable
    const transporter = nodemailer.createTransport({
      service: "Yahoo",
      auth: {
        user: process.env.EMAIL_USER, // ✅ changed from hardcoded to env variable
        pass: process.env.EMAIL_PASSWORD,
      },
      debug: true,
      logger: true,
    })

    // ✅ UPDATED: Also use EMAIL_USER as the "from" address
    const mailOptions = {
      from: process.env.EMAIL_USER, // ✅ changed from hardcoded to env variable
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

    const info = await transporter.sendMail(mailOptions)
    console.log("Email sent:", info.response)

    return NextResponse.redirect(new URL("/contact?success=true", request.url))
  } catch (error) {
    console.error("Error submitting contact form:", error)
    return NextResponse.redirect(new URL("/contact?error=true", request.url))
  }
}
