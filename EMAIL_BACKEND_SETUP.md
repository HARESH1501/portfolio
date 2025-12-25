# Email Backend Setup Guide

## 🎯 **Goal: Receive Emails from Your Portfolio Contact Form**

When someone fills out your contact form, you want to receive the email directly in your inbox: `knharesh1501@gmail.com`

## 🚀 **Best Solution: EmailJS (Recommended)**

EmailJS is perfect for static portfolios because:
- ✅ **No backend server needed**
- ✅ **Works with static hosting** (Vercel, Netlify)
- ✅ **Free tier available** (200 emails/month)
- ✅ **Easy setup** (5 minutes)
- ✅ **Reliable delivery**

## 📧 **Step-by-Step EmailJS Setup**

### **Step 1: Create EmailJS Account**

1. **Go to**: [https://www.emailjs.com/](https://www.emailjs.com/)
2. **Click "Sign Up"**
3. **Use your email**: `knharesh1501@gmail.com`
4. **Verify your account**

### **Step 2: Add Email Service**

1. **Go to "Email Services"** in EmailJS dashboard
2. **Click "Add New Service"**
3. **Choose "Gmail"** (recommended)
4. **Connect your Gmail**: `knharesh1501@gmail.com`
5. **Copy the Service ID** (e.g., `service_abc123`)

### **Step 3: Create Email Template**

1. **Go to "Email Templates"**
2. **Click "Create New Template"**
3. **Use this template**:

```
Subject: New Portfolio Contact: {{subject}}

From: {{from_name}} <{{from_email}}>
Subject: {{subject}}

Message:
{{message}}

---
Reply to: {{from_email}}
Sent from: Portfolio Contact Form
```

4. **Save template** and copy Template ID (e.g., `template_xyz789`)

### **Step 4: Get Public Key**

1. **Go to "Account" → "General"**
2. **Copy your Public Key** (e.g., `abc123xyz`)

### **Step 5: Add EmailJS to Your Portfolio**

**Install EmailJS:**
```bash
npm install @emailjs/browser
```

**Add environment variables** (create `.env.local`):
```env
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
```

## 🔧 **Implementation Options**

### **Option 1: EmailJS (Recommended - Free)**

**Pros:**
- ✅ Free (200 emails/month)
- ✅ No backend needed
- ✅ Works with static hosting
- ✅ Easy setup

**Cons:**
- ❌ Limited free tier
- ❌ EmailJS branding in free plan

### **Option 2: Formspree (Alternative)**

**Pros:**
- ✅ Simple setup
- ✅ Good free tier
- ✅ No coding needed

**Cons:**
- ❌ Less customization
- ❌ External dependency

### **Option 3: Netlify Forms (If using Netlify)**

**Pros:**
- ✅ Built into Netlify
- ✅ No external service
- ✅ Good integration

**Cons:**
- ❌ Only works on Netlify
- ❌ Limited customization

## 📝 **Quick Setup with EmailJS**

### **1. Create `.env.local` file:**
```env
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_actual_key
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_actual_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_actual_template_id
```

### **2. Install EmailJS:**
```bash
npm install @emailjs/browser
```

### **3. Update Contact Component:**
I've already prepared the code - just need your EmailJS keys!

## 🎯 **What Happens After Setup**

### **User Experience:**
1. **Visitor fills form** on your portfolio
2. **Clicks "Send Message"**
3. **Sees success confirmation**
4. **Form resets automatically**

### **Your Experience:**
1. **Receive email** in `knharesh1501@gmail.com`
2. **Email contains**:
   - Sender's name and email
   - Subject line
   - Full message
   - Reply-to address set correctly
3. **Reply directly** from Gmail

## 📧 **Email Template Example**

**What you'll receive:**
```
From: Portfolio Contact <noreply@emailjs.com>
To: knharesh1501@gmail.com
Subject: New Portfolio Contact: Internship Opportunity

From: John Smith <john@company.com>
Subject: Internship Opportunity

Message:
Hi Haresh,

I saw your portfolio and I'm impressed with your ML projects. 
We have an internship opportunity that might interest you.

Best regards,
John Smith

---
Reply to: john@company.com
Sent from: Portfolio Contact Form
```

## 🚀 **Testing Your Setup**

### **After Configuration:**

1. **Fill out your own contact form**
2. **Use a different email** (not knharesh1501@gmail.com)
3. **Send a test message**
4. **Check your inbox** for the email
5. **Verify reply-to works** correctly

## 🔒 **Security & Spam Protection**

### **Built-in Protection:**
- ✅ **Rate limiting** (EmailJS handles this)
- ✅ **Email validation** (client-side)
- ✅ **Required fields** validation
- ✅ **No server exposure** (static site)

### **Additional Protection:**
- **Honeypot field** (invisible to users, catches bots)
- **reCAPTCHA** (optional, for high-traffic sites)
- **Email filtering** in Gmail

## 💰 **Cost Breakdown**

### **EmailJS Pricing:**
- **Free**: 200 emails/month
- **Personal**: $20/month (2,000 emails)
- **Professional**: $50/month (10,000 emails)

**For your portfolio**: Free tier is perfect!

## 🎯 **Next Steps**

1. **Sign up for EmailJS** (5 minutes)
2. **Get your keys** (Service ID, Template ID, Public Key)
3. **Share the keys with me** - I'll configure your portfolio
4. **Test the form** - Send yourself a message
5. **Deploy** - Your contact form will work perfectly!

## 📞 **Need Help?**

If you need assistance with:
- EmailJS account setup
- Getting the configuration keys
- Testing the email functionality

Just let me know and I'll guide you through each step!

---

**Once configured, your portfolio will have a fully functional contact form that sends emails directly to your inbox!** 📧✨