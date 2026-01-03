# Email Setup Guide

The contact form is configured to automatically send emails to you when someone submits the form.

## Quick Setup (5 minutes)

### Step 1: Create a Resend Account
1. Go to [https://resend.com](https://resend.com)
2. Sign up for a free account (100 emails/day free)
3. Verify your email address

### Step 2: Get Your API Key
1. Go to [Resend API Keys](https://resend.com/api-keys)
2. Click "Create API Key"
3. Give it a name (e.g., "SkylineDigitals Contact Form")
4. Copy the API key (starts with `re_`)

### Step 3: Configure Environment Variables
1. Create a `.env.local` file in the root of your project
2. Add the following:

```env
RESEND_API_KEY=re_your_actual_api_key_here
CONTACT_EMAIL=skylinedigitals.tech@gmail.com
FROM_EMAIL=onboarding@resend.dev
```

**Important:** Replace:
- `re_your_actual_api_key_here` with your actual Resend API key
- The `CONTACT_EMAIL` is already set to `skylinedigitals.tech@gmail.com` - you can change it if needed

### Step 4: Restart Your Development Server
```bash
npm run dev
```

## Testing

1. Go to your contact form page
2. Fill out and submit the form
3. Check your email inbox (and spam folder)
4. You should receive an email with the form submission

## Production Deployment

When deploying to production (Vercel, Netlify, etc.):

1. Add the same environment variables in your hosting platform's dashboard
2. For `FROM_EMAIL`, you can:
   - Use `onboarding@resend.dev` for testing
   - Set up a custom domain in Resend and use `contact@yourdomain.com` for production

## Custom Domain Setup (Optional)

For production, you can set up a custom domain in Resend:

1. Go to [Resend Domains](https://resend.com/domains)
2. Add your domain
3. Verify DNS records
4. Update `FROM_EMAIL` to use your domain (e.g., `contact@yourdomain.com`)

## Troubleshooting

### Emails not sending?
- Check that `RESEND_API_KEY` is set correctly in `.env.local`
- Make sure you've restarted your dev server after adding environment variables
- Check the browser console and server logs for errors
- Verify your Resend API key is active in the Resend dashboard

### Getting "Email service not configured" error?
- Make sure `.env.local` file exists in the project root
- Verify `RESEND_API_KEY` is set (not empty)
- Restart your development server

## Alternative Email Services

If you prefer a different email service, you can modify `app/api/contact/route.ts`:

- **SendGrid**: Similar setup, get API key from sendgrid.com
- **Nodemailer**: Use SMTP credentials from your email provider
- **Formspree**: No backend needed, just add form action URL

---

**Note:** The `.env.local` file is already in `.gitignore` and won't be committed to your repository.

