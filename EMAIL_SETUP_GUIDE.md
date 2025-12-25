# Email Setup Guide - Receive Contact Form Emails

## 🎯 **Goal: Receive Emails from Your Portfolio Contact Form**

When someone fills out your contact form, you want to receive the email directly in your inbox: `knharesh1501@gmail.com`

## 📧 **Best Solution: EmailJS (Recommended)**

**EmailJS** is perfect for static portfolios because:
- ✅ **No backend required** - works with static sites
- ✅ **Free tier available** - 200 emails/month
- ✅ **Direct to your Gmail** - emails go straight to your inbox
- ✅ **Easy setup** - just a few configuration steps
- ✅ **Reliable delivery** - professional email service

## 🚀 **Step-by-Step Setup**

### **Step 1: Create EmailJS Account**

1. **Go to**: https://www.emailjs.com/
2. **Click "Sign Up"**
3. **Use your Gmail**: `knharesh1501@gmail.com`
4. **Verify your email**
5. **Login to EmailJS dashboard**

### **Step 2: Connect Your Gmail**

1. **In EmailJS dashboard**, click "Email Services"
2. **Click "Add New Service"**
3. **Select "Gmail"**
4. **Click "Connect Account"**
5. **Login with**: `knharesh1501@gmail.com`
6. **Allow EmailJS permissions**
7. **Service will be created** (note the Service ID)

### **Step 3: Create Email Template**

1. **Click "Email Templates"**
2. **Click "Create New Template"**
3. **Use this template**:

```
Subject: New Portfolio Contact: {{subject}}

From: {{from_name}} ({{from_email}})
Subject: {{subject}}

Message:
{{message}}

---
Reply to: {{from_email}}
Sent via Portfolio Contact Form
```

4. **Save template** (note the Template ID)

### **Step 4: Get Your Keys**

1. **Go to "Account" → "API Keys"**
2. **Copy your Public Key**
3. **Note down**:
   - Public Key: `your_public_key`
   - Service ID: `your_service_id` 
   - Template ID: `your_template_id`

### **Step 5: Update Your Portfolio**

I'll help you add these keys to your portfolio:

<function_calls>
<invoke name="fsWrite">
<parameter name="path">.env.local EmailJS Configuration
# Replace these with your actual EmailJS keys

NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here  
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here

# Your email (where you want to receive messages)
NEXT_PUBLIC_CONTACT_EMAIL=knharesh1501@gmail.com