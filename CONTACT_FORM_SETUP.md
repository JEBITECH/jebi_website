# Contact Form Gmail SMTP Setup Guide

## Overview
The contact form is now configured to send emails using Gmail SMTP. Follow these steps to set it up.

## Prerequisites
- A Gmail account
- Node.js and npm installed

## Step 1: Install nodemailer

Run this command in your project directory:

```bash
npm install nodemailer
npm install --save-dev @types/nodemailer
```

## Step 2: Generate Gmail App Password

1. Go to your Google Account: https://myaccount.google.com/
2. Click on "Security" in the left sidebar
3. Enable "2-Step Verification" if not already enabled
4. After enabling 2-Step Verification, go back to Security
5. Click on "App passwords" (you'll see this option after enabling 2-Step Verification)
6. Select "Mail" and "Other (Custom name)"
7. Enter "JebiTech Website" as the name
8. Click "Generate"
9. Copy the 16-character password (it will look like: xxxx xxxx xxxx xxxx)

## Step 3: Create .env.local file

Create a file named `.env.local` in your project root (same level as package.json):

```env
# Gmail SMTP Configuration
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASSWORD=xxxx xxxx xxxx xxxx

# Admin email (where contact form submissions will be sent)
ADMIN_EMAIL=sales@jebitech.com

# Site URL (optional, for links in emails)
NEXT_PUBLIC_SITE_URL=https://jebitech.com
```

Replace:
- `your-email@gmail.com` with your actual Gmail address
- `xxxx xxxx xxxx xxxx` with the app password you generated
- `sales@jebitech.com` with the email where you want to receive contact form submissions

## Step 4: Test the Contact Form

1. Start your development server:
```bash
npm run dev
```

2. Navigate to the contact page: http://localhost:9000/contact

3. Fill out and submit the form

4. Check:
   - The email address specified in `ADMIN_EMAIL` should receive the form submission
   - The customer should receive an auto-reply confirmation email

## Email Features

### Admin Email (You receive):
- Professional formatted email with all form details
- Contact information (name, email, phone, company)
- Inquiry type and product selection
- Full message content
- Subscription preference

### Customer Email (Auto-reply):
- Thank you message
- Information about next steps
- Links to your website
- Your contact information
- Social media links

## Troubleshooting

### "Invalid login" error
- Make sure you're using an App Password, not your regular Gmail password
- Verify 2-Step Verification is enabled
- Check that the email and app password are correct in .env.local

### Emails not sending
- Check your .env.local file exists and has correct values
- Restart your development server after creating/modifying .env.local
- Check the browser console and terminal for error messages

### Emails going to spam
- Add your domain to Gmail's SPF records (for production)
- Consider using a professional email service for production (SendGrid, AWS SES, etc.)

## Security Notes

1. **Never commit .env.local to git** - it's already in .gitignore
2. **Use App Passwords** - never use your actual Gmail password
3. **For Production**: Consider using a dedicated email service like:
   - SendGrid
   - AWS SES
   - Mailgun
   - Postmark

## Production Deployment

For production, you'll need to:

1. Add environment variables to your hosting platform (Vercel, Netlify, etc.)
2. Consider rate limiting to prevent spam
3. Add CAPTCHA for additional security
4. Use a professional email service instead of Gmail SMTP

## File Structure

```
project/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts          # API endpoint for form submission
│   └── contact/
│       └── page.tsx               # Contact form page
├── .env.local                     # Your environment variables (create this)
├── .env.example                   # Example environment variables
└── CONTACT_FORM_SETUP.md         # This file
```

## Support

If you encounter any issues, check:
1. Environment variables are set correctly
2. nodemailer is installed
3. Gmail App Password is valid
4. Development server was restarted after adding .env.local
