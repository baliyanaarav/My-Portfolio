# EmailJS Setup Guide

## Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email

## Step 2: Add Email Service
1. Go to Email Services in your dashboard
2. Click "Add New Service"
3. Choose "Gmail" or "Outlook"
4. Connect your email account (aaravbaliyan0001@gmail.com)

## Step 3: Create Email Template
1. Go to Email Templates
2. Click "Create New Template"
3. Use this template:

```
Subject: New Contact Form Message from {{from_name}}

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

## Step 4: Get Your IDs
After setup, you'll get:
- **Service ID**: (e.g., "service_abc123")
- **Template ID**: (e.g., "template_xyz789")
- **User ID**: (e.g., "user_def456")

## Step 5: Update Contact.js
Replace the placeholder values in `src/components/Contact.js`:

```javascript
// Line 25: Replace "YOUR_USER_ID"
emailjs.init("your_actual_user_id");

// Line 45: Replace all three IDs
await emailjs.send(
  'your_actual_service_id',
  'your_actual_template_id',
  templateParams,
  'your_actual_user_id'
);
```

## Step 6: Test
1. Fill out the contact form
2. Click "Send Message"
3. Check your email for the message

## Free Plan Limits
- 200 emails per month
- Perfect for portfolio contact forms

## Security Note
The User ID is public and safe to use in frontend code.
