import nodemailer from "nodemailer"

export function getString(value: unknown, maxLength = 2000): string {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : ""
}

export function isValidEmail(value: string): boolean {
  return value.length <= 254 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

export function escapeHtml(value: string): string {
  return value.replace(
    /[&<>'"]/g,
    (character) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        "'": "&#39;",
        '"': "&quot;",
      })[character] ?? character,
  )
}

export function getEmailCredentials() {
  const emailUser = process.env.EMAIL_USER?.trim()
  const emailPassword = process.env.EMAIL_PASSWORD?.trim()

  if (!emailUser || !emailPassword) {
    return null
  }

  return { emailUser, emailPassword }
}

export function createYahooTransporter() {
  const credentials = getEmailCredentials()

  if (!credentials) {
    throw new Error("Missing EMAIL_USER or EMAIL_PASSWORD environment variables")
  }

  return nodemailer.createTransport({
    host: "smtp.mail.yahoo.com",
    port: 465,
    secure: true,
    auth: {
      user: credentials.emailUser,
      pass: credentials.emailPassword,
    },
    tls: {
      rejectUnauthorized: true,
    },
    debug: process.env.NODE_ENV === "development",
    logger: process.env.NODE_ENV === "development",
  })
}