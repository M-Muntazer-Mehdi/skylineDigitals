import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    let body
    try {
      body = await request.json()
    } catch (parseError) {
      return NextResponse.json(
        { error: 'Invalid request body. Please check your input.' },
        { status: 400 }
      )
    }

    const { name, email, message } = body

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // Get recipient email from environment variable or use default
    const recipientEmail = process.env.CONTACT_EMAIL || 'skylinedigitals.tech@gmail.com'
    
    // SMTP Configuration from environment variables
    const smtpHost = process.env.SMTP_HOST
    const smtpPort = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT) : 587
    const smtpUser = process.env.SMTP_USER
    const smtpPassword = process.env.SMTP_PASSWORD
    const fromEmail = process.env.FROM_EMAIL || smtpUser || 'noreply@skylinedigitals.com'

    // Send email using SMTP
    if (smtpHost && smtpUser && smtpPassword) {
      try {
        // Create transporter
        const transporter = nodemailer.createTransport({
          host: smtpHost,
          port: smtpPort,
          secure: smtpPort === 465, // true for 465, false for other ports
          auth: {
            user: smtpUser,
            pass: smtpPassword,
          },
        })

        // Send email
        await transporter.sendMail({
          from: `"SkylineDigitals Contact Form" <${fromEmail}>`,
          to: recipientEmail,
          replyTo: email,
          subject: `New Contact Form Submission from ${name}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
                New Contact Form Submission
              </h2>
              <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin-top: 20px;">
                <p style="margin: 10px 0;"><strong style="color: #374151;">Name:</strong> <span style="color: #6b7280;">${name}</span></p>
                <p style="margin: 10px 0;"><strong style="color: #374151;">Email:</strong> <span style="color: #6b7280;">${email}</span></p>
                <p style="margin: 10px 0;"><strong style="color: #374151;">Message:</strong></p>
                <div style="background-color: white; padding: 15px; border-radius: 4px; margin-top: 10px; color: #4b5563; white-space: pre-wrap;">${message.replace(/\n/g, '<br>')}</div>
              </div>
              <p style="margin-top: 20px; color: #6b7280; font-size: 12px;">
                This email was sent from the SkylineDigitals contact form.
              </p>
            </div>
          `,
          text: `
New Contact Form Submission

Name: ${name}
Email: ${email}

Message:
${message}

---
This email was sent from the SkylineDigitals contact form.
          `,
        })

        console.log('Email sent successfully to:', recipientEmail)
      } catch (emailError: any) {
        // Log email error but don't fail the request
        console.error('Failed to send email via SMTP:', emailError)
        console.error('Error details:', emailError.message)
        // Still log the submission
        console.log('Contact form submission (email sending failed):', {
          name,
          email,
          message,
          timestamp: new Date().toISOString(),
        })
      }
    } else {
      // Fallback: Log if SMTP is not configured
      console.log('Contact form submission (SMTP not configured):', {
        name,
        email,
        message,
        timestamp: new Date().toISOString(),
      })
      console.warn('SMTP configuration missing. Please set SMTP_HOST, SMTP_USER, and SMTP_PASSWORD in .env.local')
    }

    return NextResponse.json(
      { message: 'Message sent successfully! We will get back to you soon.' },
      { status: 200 }
    )
  } catch (error: any) {
    console.error('Contact form error:', error)
    
    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    )
  }
}
