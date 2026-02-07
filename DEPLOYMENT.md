# Deployment Guide

## Quick Start

The website is ready to deploy! Follow these steps:

### 1. Enable GitHub Pages

1. Go to your repository settings: https://github.com/0riceisnice0-hash/DeezGarden/settings/pages
2. Under "Build and deployment":
   - Set **Source** to "GitHub Actions"
3. Save the changes

### 2. Push to Main Branch

The deployment workflow is triggered on pushes to the `main` branch. You can either:

**Option A: Merge this PR**
```bash
# After reviewing and approving the PR, merge it to main
# The deployment will start automatically
```

**Option B: Manual Trigger**
1. Go to Actions tab in your repository
2. Select "Deploy to GitHub Pages" workflow
3. Click "Run workflow" → "Run workflow"

### 3. Access Your Site

Once deployed and DNS is configured, your site will be available at:
```
https://deezgardens.co.uk
```

The first deployment may take 2-3 minutes. See "Custom Domain Setup" section below for DNS configuration.

## Local Testing

Before deploying, you can test locally:

```bash
# Install dependencies
npm install

# Start development server
npm run dev
# Visit http://localhost:4321

# Build for production
npm run build

# Preview production build
npm run preview
```

## Configuration

Before going live, update these settings in `src/config.ts`:

- [ ] Phone number
- [ ] Email address
- [ ] Facebook link
- [ ] Service areas
- [ ] Opening hours
- [ ] Trust badges (insured, licensed, etc.)

## Next Steps After Deployment

1. **Verify all pages work** - click through the entire site
2. **Test on mobile** - ensure mobile navigation and CTAs work
3. **Check SEO**:
   - View source and verify meta tags
   - Check sitemap: `/sitemap-index.xml`
   - Verify robots.txt: `/robots.txt`
4. **Submit to Google Search Console**:
   - Add property
   - Submit sitemap
   - Request indexing for key pages
5. **Test contact form** - ensure email client opens correctly
6. **Add real reviews** when available
7. **Add photos** when available

## Troubleshooting

### Build Fails
- Check the Actions tab for error messages
- Ensure all dependencies are in package.json
- Test locally with `npm run build`

### Pages Not Loading
- Verify GitHub Pages is enabled
- Check that DNS is configured correctly (see Custom Domain Setup section)
- Ensure deployment completed successfully

### 404 Errors
- Verify the CNAME file exists in the public folder
- Check that the custom domain matches in GitHub Pages settings

## Custom Domain Setup (deezgardens.co.uk)

The site is configured to use the custom domain `deezgardens.co.uk`. Follow these steps to complete the setup:

### Step 1: Configure GitHub Pages

1. Go to your repository settings: https://github.com/0riceisnice0-hash/DeezGarden/settings/pages
2. Under "Custom domain", enter: `deezgardens.co.uk`
3. Click **Save**
4. Check "Enforce HTTPS" (available after DNS propagates)

### Step 2: Configure DNS on GoDaddy

Log in to your GoDaddy account and navigate to **DNS Management** for `deezgardens.co.uk`.

#### For Apex Domain (deezgardens.co.uk):

Add the following **A Records** pointing to GitHub Pages IPs:

| Type | Name | Value | TTL |
|------|------|-------|-----|
| A | @ | 185.199.108.153 | 600 seconds |
| A | @ | 185.199.109.153 | 600 seconds |
| A | @ | 185.199.110.153 | 600 seconds |
| A | @ | 185.199.111.153 | 600 seconds |

#### For WWW Subdomain (optional but recommended):

Add a **CNAME Record** for the www subdomain:

| Type | Name | Value | TTL |
|------|------|-------|-----|
| CNAME | www | 0riceisnice0-hash.github.io | 600 seconds |

### GoDaddy Step-by-Step Instructions:

1. Log in to **GoDaddy.com**
2. Go to **My Products** → Find your domain `deezgardens.co.uk`
3. Click **DNS** (or **Manage DNS**)
4. **Delete any existing A records** pointing to @ (the apex domain)
5. Click **Add** and select **A** record:
   - Host: `@`
   - Points to: `185.199.108.153`
   - TTL: 600 seconds
6. Repeat step 5 for the other three IPs:
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`
7. Click **Add** and select **CNAME** record:
   - Host: `www`
   - Points to: `0riceisnice0-hash.github.io`
   - TTL: 600 seconds
8. Click **Save**

### Step 3: Verify Setup

1. Wait 10-30 minutes for DNS to propagate (can take up to 48 hours in some cases)
2. Test the domain by visiting: https://deezgardens.co.uk
3. Verify HTTPS is working (green padlock in browser)
4. Check that www.deezgardens.co.uk redirects to deezgardens.co.uk

### Troubleshooting DNS

**DNS not working yet?**
- Use https://dnschecker.org to check if DNS has propagated
- Verify A records are correct in GoDaddy
- Clear your browser cache or try incognito mode

**Certificate/HTTPS issues?**
- Wait for DNS to fully propagate
- Go to GitHub Pages settings and re-enable "Enforce HTTPS"
- GitHub automatically provisions an SSL certificate

**Site shows 404?**
- Ensure the `CNAME` file exists in the repository
- Verify the domain in GitHub Pages settings matches `deezgardens.co.uk`
- Push any changes and wait for the deployment to complete

## Support

For Astro-specific issues, see: https://docs.astro.build
For GitHub Pages issues, see: https://docs.github.com/pages
