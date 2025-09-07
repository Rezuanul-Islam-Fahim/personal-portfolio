# 🚀 Deployment Guide - Vercel + Namecheap Domain Setup

This guide will help you deploy your professional portfolio to Vercel and configure your Namecheap domain `rezuanulislamfahim.me`.

## 📋 Prerequisites

- [Vercel Account](https://vercel.com) (free)
- [GitHub Account](https://github.com)
- Domain purchased from Namecheap: `rezuanulislamfahim.me`
- Node.js 18+ installed locally

## 🔧 Pre-Deployment Setup

### 1. Add Required Images

Before deploying, add these images to the `/public` directory:

```
public/
├── favicon.ico
├── favicon-16x16.png
├── favicon-32x32.png
├── apple-touch-icon.png
├── android-chrome-192x192.png
├── android-chrome-512x512.png
├── safari-pinned-tab.svg
├── og-image.jpg (1200x630)
├── og-about.jpg (1200x630)
├── og-projects.jpg (1200x630)
├── og-services.jpg (1200x630)
├── og-contact.jpg (1200x630)
├── profile-image.jpg (400x400)
└── logo.png (200x200)
```

**Quick Favicon Generation:** Use [RealFaviconGenerator](https://realfavicongenerator.net/) to generate all favicon formats.

### 2. Environment Variables Setup

Update `.env.local` with your actual details:

```env
NEXT_PUBLIC_SITE_URL=https://rezuanulislamfahim.me
NEXT_PUBLIC_CONTACT_EMAIL=your-actual-email@domain.com
# Add Google Analytics, etc.
```

### 3. Test Build Locally

```bash
npm run build
npm run start
```

## 🚀 Vercel Deployment

### Step 1: Connect to Vercel

1. Go to [vercel.com](https://vercel.com) and sign up/login
2. Click "Add New Project"
3. Import your GitHub repository
4. Select the repository containing your portfolio

### Step 2: Configure Project Settings

- **Framework Preset:** Next.js
- **Root Directory:** `./` (default)
- **Build Command:** `npm run build` (default)
- **Output Directory:** `.next` (default)
- **Install Command:** `npm install` (default)

### Step 3: Add Environment Variables

In Vercel dashboard → Settings → Environment Variables, add:

```
NEXT_PUBLIC_SITE_URL = https://rezuanulislamfahim.me
NEXT_PUBLIC_CONTACT_EMAIL = contact@rezuanulislamfahim.me
NEXT_PUBLIC_GITHUB_USERNAME = Rezuanul-Islam-Fahim
NEXT_PUBLIC_LINKEDIN_USERNAME = rezuanul-islam-fahim
NEXT_PUBLIC_TWITTER_USERNAME = rezuanul_fahim
```

### Step 4: Deploy

Click "Deploy" - Vercel will build and deploy your site with a temporary URL like `your-project.vercel.app`

## 🌐 Domain Configuration (Namecheap + Vercel)

### Step 1: Add Domain to Vercel

1. In Vercel dashboard → Settings → Domains
2. Add `rezuanulislamfahim.me`
3. Add `www.rezuanulislamfahim.me` (optional)
4. Vercel will show you DNS records to configure

### Step 2: Configure Namecheap DNS

1. Login to [Namecheap](https://namecheap.com)
2. Go to Domain List → Manage → Advanced DNS
3. Delete existing A/CNAME records for @ and www
4. Add these DNS records:

**For rezuanulislamfahim.me (apex domain):**

```
Type: A Record
Host: @
Value: 76.76.19.19
TTL: Automatic
```

**For www.rezuanulislamfahim.me:**

```
Type: CNAME Record
Host: www
Value: cname.vercel-dns.com
TTL: Automatic
```

**Alternative Method (CNAME for apex):**
If your DNS provider supports ALIAS/ANAME records:

```
Type: CNAME
Host: @
Value: cname.vercel-dns.com
TTL: Automatic
```

### Step 3: Wait for Propagation

- DNS changes can take 24-48 hours to fully propagate
- Check status using [DNS Checker](https://dnschecker.org/)
- Vercel will automatically provision SSL certificates

## 📊 SEO & Analytics Setup

### 1. Google Search Console

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add your domain: `rezuanulislamfahim.me`
3. Verify ownership using HTML tag method
4. Submit your sitemap: `https://rezuanulislamfahim.me/sitemap.xml`

### 2. Google Analytics (Optional)

1. Create Google Analytics 4 property
2. Get your GA4 Tracking ID
3. Add to environment variables:

```env
NEXT_PUBLIC_GA_TRACKING_ID=G-XXXXXXXXXX
```

### 3. Submit to Search Engines

- **Google:** Use Search Console sitemap submission
- **Bing:** [Bing Webmaster Tools](https://www.bing.com/webmasters)
- **Yandex:** [Yandex Webmaster](https://webmaster.yandex.com/)

## ✅ Post-Deployment Checklist

### Technical SEO

- [ ] SSL certificate active (https)
- [ ] Sitemap accessible: `/sitemap.xml`
- [ ] Robots.txt accessible: `/robots.txt`
- [ ] All favicon formats loading
- [ ] Open Graph images loading
- [ ] Page speed good (use PageSpeed Insights)

### SEO Testing Tools

- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [Rich Results Test](https://search.google.com/test/rich-results)

### Functionality Tests

- [ ] All navigation links work
- [ ] Contact form submits (if implemented)
- [ ] Mobile responsiveness
- [ ] Dark/light theme switching
- [ ] All images load properly
- [ ] Performance metrics are good

## 🔧 Ongoing Maintenance

### Regular Updates

```bash
# Update dependencies monthly
npm update

# Check for security vulnerabilities
npm audit

# Rebuild and redeploy
git push origin main  # Auto-deploys via Vercel
```

### SEO Monitoring

- Monitor search rankings monthly
- Update content regularly
- Check Core Web Vitals monthly
- Monitor backlinks and mentions

## 🆘 Troubleshooting

### Domain Not Connecting

1. Verify DNS records in Namecheap
2. Wait 24-48 hours for propagation
3. Check DNS with `dig rezuanulislamfahim.me`
4. Contact Vercel support if issues persist

### Build Errors

1. Check Vercel build logs
2. Test build locally: `npm run build`
3. Verify all environment variables
4. Check for TypeScript errors

### SEO Issues

1. Validate HTML: [W3C Validator](https://validator.w3.org/)
2. Test structured data: [Rich Results Test](https://search.google.com/test/rich-results)
3. Check robots.txt: `domain.com/robots.txt`
4. Verify sitemap: `domain.com/sitemap.xml`

## 📞 Support Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [Namecheap Support](https://www.namecheap.com/support/)
- [Google Search Central](https://developers.google.com/search)

---

## 🎉 Success!

Once deployed, your portfolio will be accessible at:

- **Primary:** https://rezuanulislamfahim.me
- **Alternate:** https://www.rezuanulislamfahim.me (redirects to primary)

Your site is now production-ready with:
✅ Professional SEO optimization  
✅ Fast performance  
✅ SSL security  
✅ Mobile responsiveness  
✅ Search engine visibility  
✅ Social media optimization
