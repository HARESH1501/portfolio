# Deployment Guide

## Quick Deployment Steps

### 1. Vercel Deployment (Recommended)

**Step 1: Prepare Repository**
```bash
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin <your-github-repo-url>
git push -u origin main
```

**Step 2: Deploy to Vercel**
1. Go to [vercel.com](https://vercel.com)
2. Sign up/login with GitHub
3. Click "New Project"
4. Import your repository
5. Configure project:
   - Framework Preset: Next.js
   - Build Command: `npm run build`
   - Output Directory: Leave empty (default)
6. Click "Deploy"

**Step 3: Custom Domain (Optional)**
1. Go to Project Settings → Domains
2. Add your custom domain
3. Configure DNS records as instructed

### 2. Netlify Deployment

**Step 1: Build Settings**
```bash
# Build command
npm run build

# Publish directory
out
```

**Step 2: Deploy**
1. Go to [netlify.com](https://netlify.com)
2. Drag and drop the `out` folder after running `npm run build`
3. Or connect GitHub repository with these settings:
   - Build command: `npm run build`
   - Publish directory: `out`

### 3. GitHub Pages

**Step 1: Update next.config.js**
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: '/your-repo-name', // Add this line
  assetPrefix: '/your-repo-name/', // Add this line
}

module.exports = nextConfig
```

**Step 2: Deploy**
```bash
npm run build
git add out/ -f
git commit -m "Deploy to GitHub Pages"
git subtree push --prefix out origin gh-pages
```

## Pre-Deployment Checklist

### Content Updates
- [ ] Replace placeholder resume in `public/resume.pdf`
- [ ] Update personal information in all components
- [ ] Add real project GitHub links
- [ ] Update social media URLs
- [ ] Verify contact information

### Technical Checks
- [ ] Run `npm run build` successfully
- [ ] Test all animations and interactions
- [ ] Verify responsive design on mobile/tablet
- [ ] Check dark/light mode toggle
- [ ] Test all navigation links
- [ ] Validate form functionality

### SEO & Performance
- [ ] Update meta tags in `app/layout.tsx`
- [ ] Add Google Analytics (optional)
- [ ] Optimize images for web
- [ ] Test page load speed
- [ ] Verify accessibility compliance

## Post-Deployment

### Analytics Setup (Optional)
1. **Google Analytics**
   ```typescript
   // Add to app/layout.tsx
   import Script from 'next/script'
   
   // Add in head section
   <Script
     src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
     strategy="afterInteractive"
   />
   ```

2. **Vercel Analytics**
   ```bash
   npm install @vercel/analytics
   ```

### Domain Configuration
1. **Custom Domain Setup**
   - Purchase domain from registrar
   - Configure DNS records
   - Enable HTTPS/SSL

2. **SEO Submission**
   - Submit to Google Search Console
   - Submit to Bing Webmaster Tools
   - Create and submit sitemap

### Monitoring
- Set up uptime monitoring
- Monitor Core Web Vitals
- Track user engagement

## Troubleshooting

### Common Issues

**Build Errors**
```bash
# Clear cache and reinstall
rm -rf .next node_modules package-lock.json
npm install
npm run build
```

**Image Optimization Issues**
- Ensure `images.unoptimized: true` in next.config.js for static export
- Use proper image formats (WebP, AVIF)

**Routing Issues**
- Check `trailingSlash: true` in next.config.js
- Verify all internal links use proper format

**Performance Issues**
- Optimize images and assets
- Enable compression
- Use CDN for static assets

### Support Resources
- [Next.js Deployment Docs](https://nextjs.org/docs/deployment)
- [Vercel Documentation](https://vercel.com/docs)
- [Netlify Documentation](https://docs.netlify.com)

## Maintenance

### Regular Updates
- Update dependencies monthly
- Monitor security vulnerabilities
- Refresh content and projects
- Update resume and certifications

### Performance Monitoring
- Check Lighthouse scores quarterly
- Monitor Core Web Vitals
- Update SEO meta tags as needed