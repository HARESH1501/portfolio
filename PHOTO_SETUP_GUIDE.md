# Professional Photo Setup Guide

## Adding Your Photo to the Portfolio

### Step 1: Prepare Your Photo

Based on your provided image, I recommend the following professional edits:

#### Background Enhancement
Your current photo has a textured beige/brown wall background. For a more professional portfolio look, consider:

**Option 1: Gradient Background (Recommended)**
- Use a photo editor (Photoshop, GIMP, or online tools like remove.bg + Canva)
- Remove the current background
- Add a gradient background matching the site theme:
  - Primary gradient: Blue (#3b82f6) to Purple (#9333ea)
  - Alternative: Purple (#9333ea) to Pink (#ec4899)
  - Subtle gradient: Light blue to light purple for a softer look

**Option 2: Professional Studio Background**
- Solid dark blue or navy background
- Subtle gradient from dark to light
- Professional gray backdrop

#### Photo Editing Steps

1. **Background Removal**
   - Use remove.bg (https://www.remove.bg/) - Free and automatic
   - Or use Photoshop's "Select Subject" tool
   - Or use GIMP with foreground select tool

2. **Add Gradient Background**
   - In Canva:
     - Upload your background-removed photo
     - Add a gradient background layer
     - Use colors: #3b82f6 (blue) to #9333ea (purple)
     - Adjust opacity and blend mode for best look
   
   - In Photoshop:
     - Create new layer behind subject
     - Use Gradient Tool
     - Select colors matching site theme
     - Apply radial or linear gradient

3. **Professional Enhancements**
   - Adjust brightness and contrast
   - Enhance colors slightly
   - Ensure good lighting on face
   - Keep the professional attire (blue blazer looks great!)

4. **Export Settings**
   - Format: JPG or PNG
   - Size: 800x800px (square format for circular display)
   - Quality: High (90-100%)
   - File size: Under 500KB for web optimization

### Step 2: Add Photo to Project

1. **Save your edited photo as:**
   ```
   public/haresh-photo.jpg
   ```

2. **Recommended dimensions:**
   - Width: 800px
   - Height: 800px
   - Format: JPG or PNG
   - Aspect ratio: 1:1 (square)

3. **Alternative formats supported:**
   - `haresh-photo.png` (if you prefer PNG with transparency)
   - `haresh-photo.webp` (for better compression)

### Step 3: Update Image Path (if needed)

If you use a different filename, update in `components/sections/Hero.tsx`:

```typescript
<Image
  src="/your-photo-name.jpg"  // Change this
  alt="Haresh K N - Machine Learning Engineer"
  fill
  className="object-cover object-center"
  priority
/>
```

## Quick Online Tools

### Background Removal
- **remove.bg** - https://www.remove.bg/ (Free, automatic)
- **Photopea** - https://www.photopea.com/ (Free Photoshop alternative)
- **Canva** - https://www.canva.com/ (Free, easy to use)

### Gradient Background Creation
1. **Canva Method:**
   - Create 800x800px design
   - Add gradient background (Elements → Gradients)
   - Use colors: #3b82f6 to #9333ea
   - Upload your photo (background removed)
   - Position and resize
   - Download as JPG

2. **CSS Gradient Generator:**
   - Use https://cssgradient.io/ to preview gradients
   - Match the site's gradient colors
   - Apply in your photo editor

## Professional Photo Tips

### Current Photo Analysis
Your photo shows:
- ✅ Professional attire (blue blazer, white shirt)
- ✅ Good posture and confident stance
- ✅ Clear facial features
- ⚠️ Background could be more modern/professional
- ⚠️ Lighting could be enhanced

### Recommended Improvements
1. **Background**: Replace with gradient matching site theme
2. **Lighting**: Brighten face slightly for better visibility
3. **Contrast**: Enhance to make you stand out from background
4. **Color**: Ensure blue blazer complements the site's blue theme

## Example Gradient Colors

Based on your site theme, use these gradient combinations:

### Primary Gradient (Recommended)
```
Top: #3b82f6 (Primary Blue)
Bottom: #9333ea (Purple)
```

### Alternative Gradients
```
Option 2: #3b82f6 (Blue) → #06b6d4 (Cyan)
Option 3: #8b5cf6 (Purple) → #ec4899 (Pink)
Option 4: #1e40af (Dark Blue) → #3b82f6 (Light Blue)
```

## Final Checklist

Before deploying:
- [ ] Photo background matches site theme
- [ ] Image is 800x800px
- [ ] File size is under 500KB
- [ ] Photo is saved as `public/haresh-photo.jpg`
- [ ] Face is clearly visible and well-lit
- [ ] Professional appearance maintained
- [ ] Image loads correctly in browser
- [ ] Circular crop looks good

## Need Help?

If you need assistance with photo editing:
1. Share your background-removed photo
2. I can provide specific gradient recommendations
3. Or use Canva's free templates for professional headshots

---

**Your current photo is already professional - just needs a modern background to match the portfolio theme!**