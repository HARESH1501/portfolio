# Debug Steps - Blank Page Issue

## 🔍 **Step-by-Step Debugging**

### **Step 1: Test Basic Setup**
1. **Open your browser**
2. **Go to**: `http://localhost:3002/test`
3. **Expected**: You should see a test page with green checkmarks

**If Step 1 works**: Next.js and Tailwind are working ✅
**If Step 1 fails**: There's a fundamental setup issue ❌

### **Step 2: Test Main Page**
1. **Go to**: `http://localhost:3002`
2. **Check browser console** (Press F12 → Console tab)
3. **Look for red error messages**

### **Step 3: Check Browser Console**
**Open Developer Tools:**
- **Chrome/Edge**: Press `F12` or `Ctrl+Shift+I`
- **Firefox**: Press `F12`

**Look for errors in:**
- **Console tab**: Red error messages
- **Network tab**: Failed requests (red entries)

### **Step 4: Common Error Messages**

**If you see:**
- `ChunkLoadError`: Cache issue - clear browser cache
- `Module not found`: Missing dependency
- `Hydration error`: Server/client mismatch
- `Image optimization error`: Image loading issue

## 🛠️ **Quick Fixes to Try**

### **Fix 1: Clear Browser Cache**
```
Chrome/Edge: Ctrl+Shift+R (hard refresh)
Firefox: Ctrl+F5
Or: Ctrl+Shift+Delete → Clear browsing data
```

### **Fix 2: Try Different Browser**
- Test in Chrome (recommended)
- Test in Firefox
- Test in Edge

### **Fix 3: Check Different URLs**
```
http://localhost:3002/test    (Test page)
http://localhost:3002         (Main portfolio)
```

### **Fix 4: Restart Everything**
```bash
# Stop server (Ctrl+C in terminal)
# Then restart:
npm run dev
```

## 📱 **What You Should See**

### **Test Page (http://localhost:3002/test)**
```
Portfolio Test Page
If you can see this, the basic setup is working!

✅ Next.js Working
✅ Tailwind CSS Working  
✅ Components Loading

[Go to Main Portfolio] (button)
```

### **Main Page (http://localhost:3002)**
```
[Your professional photo in circular frame]

Haresh K N
Machine Learning Engineer & AI Specialist

Computer Science Engineering student...

[View Projects] [Download Resume] [Contact Me]

[GitHub] [LinkedIn] [Email] (social icons)
```

## 🚨 **If Still Blank**

### **Check These:**

1. **Server Running?**
   - Terminal should show "Ready in X.Xs"
   - No error messages in terminal

2. **Correct URL?**
   - `http://localhost:3002` (not 3000 or 3001)
   - Check the port number in terminal output

3. **Browser Issues?**
   - Try incognito/private mode
   - Disable browser extensions
   - Clear all cookies/cache

4. **Antivirus/Firewall?**
   - Temporarily disable antivirus
   - Check Windows Firewall settings

## 📞 **Report Back**

**Please tell me:**
1. **What happens at**: `http://localhost:3002/test`
2. **What happens at**: `http://localhost:3002`
3. **Any error messages** in browser console (F12)
4. **Which browser** you're using

## 🔧 **Emergency Fallback**

**If nothing works, try production build:**
```bash
npm run build
npm run start
```

Then try: `http://localhost:3000`

---

**Start with Step 1: Test the basic setup at http://localhost:3002/test**