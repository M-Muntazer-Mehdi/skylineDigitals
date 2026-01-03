# SMTP Email Setup Guide

The contact form is configured to send emails using SMTP (Simple Mail Transfer Protocol).

## Quick Setup

### Step 1: Choose Your Email Provider

You can use any email provider that supports SMTP:
- **Gmail** (Recommended for testing)
- **Outlook/Hotmail**
- **Yahoo**
- **Custom SMTP server**

### Step 2: Get SMTP Credentials

#### For Gmail:

1. **Enable 2-Factor Authentication** on your Google account
2. **Generate App Password**:
   - Go to [Google App Passwords](https://myaccount.google.com/apppasswords)
   - Select "Mail" and "Other (Custom name)"
   - Enter "SkylineDigitals Contact Form"
   - Copy the 16-character password (you'll use this as SMTP_PASSWORD)

3. **Gmail SMTP Settings**:
   - Host: `smtp.gmail.com`
   - Port: `587` (TLS) or `465` (SSL)
   - Username: Your Gmail address
   - Password: The App Password you generated

#### For Outlook/Hotmail:

1. **SMTP Settings**:
   - Host: `smtp-mail.outlook.com`
   - Port: `587`
   - Username: Your Outlook email
   - Password: Your Outlook password

#### For Yahoo:

1. **SMTP Settings**:
   - Host: `smtp.mail.yahoo.com`
   - Port: `587`
   - Username: Your Yahoo email
   - Password: Your Yahoo password (or App Password if 2FA enabled)

### Step 3: Configure Environment Variables

1. Create a `.env.local` file in the root of your project
2. Add the following (replace with your actual values):

```env
# SMTP Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=skylinedigitals.tech@gmail.com
SMTP_PASSWORD=your-app-password-here

# Email Configuration
CONTACT_EMAIL=skylinedigitals.tech@gmail.com
FROM_EMAIL=skylinedigitals.tech@gmail.com
```

**Important:** 
- For Gmail, use an **App Password**, not your regular password
- Never commit `.env.local` to git (it's already in `.gitignore`)

### Step 4: Restart Your Development Server

After creating/updating `.env.local`, you MUST restart the server:

```bash
# Stop the server (Ctrl+C)
# Then restart:
npm run dev
```

## Testing

1. Fill out and submit the contact form
2. Check `skylinedigitals.tech@gmail.com` inbox (and spam folder)
3. You should receive an email with the form submission

## Common SMTP Providers

### Gmail
```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
```

### Outlook
```
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
SMTP_USER=your-email@outlook.com
SMTP_PASSWORD=your-password
```

### Yahoo
```
SMTP_HOST=smtp.mail.yahoo.com
SMTP_PORT=587
SMTP_USER=your-email@yahoo.com
SMTP_PASSWORD=your-password
```

### Custom SMTP
```
SMTP_HOST=mail.yourdomain.com
SMTP_PORT=587
SMTP_USER=noreply@yourdomain.com
SMTP_PASSWORD=your-password
```

## Troubleshooting

### "SMTP not configured" in logs
- Make sure `.env.local` exists in the project root
- Verify all SMTP variables are set (SMTP_HOST, SMTP_USER, SMTP_PASSWORD)
- Restart the dev server after adding environment variables

### "Authentication failed" error
- **For Gmail**: Make sure you're using an App Password, not your regular password
- Verify your email and password are correct
- Check if 2FA is enabled (required for Gmail App Passwords)

### "Connection timeout" error
- Check your SMTP_HOST and SMTP_PORT are correct
- Verify your firewall/network allows SMTP connections
- Try port 465 (SSL) instead of 587 (TLS)

### Emails going to spam
- Make sure FROM_EMAIL matches your SMTP_USER
- Use a proper email address (not a no-reply address)
- Consider setting up SPF/DKIM records for your domain

## Security Notes

- Never commit `.env.local` to version control
- Use App Passwords for Gmail (more secure than regular passwords)
- Keep your SMTP credentials secure
- Consider using environment-specific configurations for production

## Production Deployment

When deploying to production (Vercel, Netlify, etc.):

1. Add the same environment variables in your hosting platform's dashboard
2. Use the same SMTP settings
3. Make sure your SMTP server allows connections from your hosting provider's IPs

---

**Need Help?** Check the server console logs for detailed error messages when testing the contact form.

