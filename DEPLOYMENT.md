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

Once deployed, your site will be available at:
```
https://0riceisnice0-hash.github.io/DeezGarden/
```

The first deployment may take 2-3 minutes.

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
- Check the base URL in `astro.config.mjs`
- Ensure deployment completed successfully

### 404 Errors
- Verify the base path `/DeezGarden` is correct
- Check internal links use the correct base path

## Custom Domain (Optional)

To use a custom domain like `www.deezgardens.co.uk`:

1. Purchase domain from registrar
2. Add custom domain in repository Settings → Pages
3. Update DNS records:
   - Add CNAME record: `www` → `0riceisnice0-hash.github.io`
   - Or A records for apex domain
4. Update `astro.config.mjs`:
   ```javascript
   site: 'https://www.deezgardens.co.uk',
   base: '/',  // Change from '/DeezGarden'
   ```
5. Rebuild and redeploy

## Support

For Astro-specific issues, see: https://docs.astro.build
For GitHub Pages issues, see: https://docs.github.com/pages
