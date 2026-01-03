# Troubleshooting Contact Form

If you're getting a "Network error" when submitting the contact form, try these steps:

## 1. Check if the Development Server is Running

Make sure your Next.js development server is running:

```bash
npm run dev
```

The server should be running on `http://localhost:3000`

## 2. Verify the API Route Exists

The API route should be at: `app/api/contact/route.ts`

You can test if it's working by visiting:
- `http://localhost:3000/api/contact` (should return 405 Method Not Allowed for GET, which is normal)

## 3. Check Browser Console

Open your browser's developer console (F12) and check for any errors when submitting the form.

## 4. Check Server Logs

Look at your terminal where `npm run dev` is running. You should see:
- Any errors from the API route
- Log messages when the form is submitted

## 5. Test the API Route Directly

You can test the API route using curl or Postman:

```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test User","email":"test@example.com","message":"Test message"}'
```

## 6. Common Issues

### Issue: "Network error" or "Failed to fetch"
**Solution:**
- Make sure the dev server is running
- Check that you're accessing the site at `http://localhost:3000` (not a different port)
- Restart the dev server: Stop it (Ctrl+C) and run `npm run dev` again

### Issue: "Email service not configured"
**Solution:**
- This is normal if you haven't set up Resend API key yet
- The form will still work and log submissions to the console
- To enable email sending, follow the `EMAIL_SETUP.md` guide

### Issue: API route returns 404
**Solution:**
- Make sure `app/api/contact/route.ts` exists
- Restart the dev server after creating the API route
- Check that the file exports `POST` function correctly

### Issue: CORS errors
**Solution:**
- Next.js API routes don't have CORS issues by default
- If you see CORS errors, check your browser console for more details

## 7. Verify Environment Variables

If you're using Resend, make sure `.env.local` exists with:

```env
RESEND_API_KEY=re_your_api_key_here
CONTACT_EMAIL=skylinedigitals.tech@gmail.com
FROM_EMAIL=onboarding@resend.dev
```

**Important:** After adding/changing `.env.local`, you MUST restart the dev server.

## 8. Check Network Tab

1. Open browser DevTools (F12)
2. Go to the "Network" tab
3. Submit the form
4. Look for the request to `/api/contact`
5. Check the status code and response

## Still Having Issues?

1. Check the server terminal for error messages
2. Check the browser console for JavaScript errors
3. Verify the API route file exists and is correct
4. Try restarting the development server
5. Clear browser cache and try again

