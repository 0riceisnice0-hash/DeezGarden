# Dee'z Gardens Website

Professional static website for Dee'z Gardens - a gardening and clearance company based in Northampton, Northamptonshire.

## 🌿 About

This is a fully static website built with Astro and Tailwind CSS, optimised for local SEO and designed to convert visitors into customers. The site features:

- **Professional design** with a fresh garden aesthetic
- **SEO optimised** with schema markup, meta tags, and semantic HTML
- **Local SEO** with dedicated area landing pages
- **Mobile-first** responsive design with sticky call-to-action buttons
- **Blog foundation** for content marketing
- **Automated deployment** to GitHub Pages

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/0riceisnice0-hash/DeezGarden.git
   cd DeezGarden
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   
   The site will be available at `http://localhost:4321`

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 📁 Project Structure

```
/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Pages deployment
├── public/
│   ├── robots.txt              # SEO robots file
│   └── favicon.svg             # Site favicon
├── scripts/
│   └── generate-areas.mjs      # Script to generate area pages
├── src/
│   ├── components/             # Reusable components
│   │   ├── CallToAction.astro
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   └── TrustBadges.astro
│   ├── content/                # Content collections
│   │   ├── blog/               # Blog posts (Markdown)
│   │   └── config.ts           # Content schema
│   ├── layouts/
│   │   └── BaseLayout.astro    # Main layout with SEO
│   ├── pages/                  # Page routes
│   │   ├── areas/              # Area landing pages
│   │   ├── blog/               # Blog pages
│   │   ├── services/           # Service pages
│   │   ├── contact.astro
│   │   ├── index.astro         # Homepage
│   │   └── reviews.astro
│   ├── styles/
│   │   └── global.css          # Global CSS with variables
│   └── config.ts               # Site configuration
├── astro.config.mjs            # Astro configuration
├── package.json
├── tailwind.config.mjs         # Tailwind configuration
└── tsconfig.json
```

## ⚙️ Configuration

### Business Details

Edit `src/config.ts` to update business information:

```typescript
export const siteConfig = {
  name: "Dee'z Gardens",
  location: "Northampton, Northamptonshire, England",
  phone: "07305 195098",
  email: "deez.gardensuk@gmail.com",
  facebook: "https://www.facebook.com/groups/1922611271669486",
  // ... more settings
};
```

### Trust Toggles

Enable or disable trust badges in `src/config.ts`:

```typescript
trust: {
  insured: true,                // Show "Fully Insured" badge
  licensedWasteCarrier: true,   // Show "Licensed Waste Carrier" badge
  friendlyProfessional: true,   // Show "Friendly Professional" badge
}
```

### Service Areas

Add or remove service areas in `src/config.ts`:

```typescript
primaryAreas: ["Northampton", "Wellingborough", ...],
secondaryAreas: ["Towcester", "Brackley", ...],
extendedAreas: ["Bedford", "Rugby", ...],
```

### Opening Hours

Update opening hours for schema markup:

```typescript
openingHours: "Mo-Sa 08:00-18:00",  // Schema.org format
```

## 🗺️ Adding New Area Pages

To generate area landing pages:

1. Edit `scripts/generate-areas.mjs` to add new areas
2. Run the generation script:
   ```bash
   node scripts/generate-areas.mjs
   ```

Or manually create a new page in `src/pages/areas/[area-name].astro` using existing pages as templates.

## 📝 Adding Blog Posts

1. Create a new Markdown file in `src/content/blog/`:
   ```markdown
   ---
   title: "Your Blog Post Title"
   description: "SEO-friendly description"
   pubDate: 2024-03-15
   category: "gardening"
   tags: ["northampton", "tips"]
   featured: false
   ---
   
   Your content here...
   ```

2. The post will automatically appear on the blog page

## 🎨 Customising Design

### Colour Palette

Update colours in `tailwind.config.mjs`:

```javascript
colors: {
  'deep-green': '#2f6b3f',
  'fresh-green': '#4caf50',
  'light-green': '#8bc34a',
  // ... more colours
}
```

Or update CSS variables in `src/styles/global.css`:

```css
:root {
  --color-deep-green: #2f6b3f;
  --color-fresh-green: #4caf50;
  /* ... */
}
```

## 🚀 Deployment

### GitHub Pages (Automatic)

The site automatically deploys to GitHub Pages when you push to the `main` branch.

1. **Enable GitHub Pages**:
   - Go to repository Settings → Pages
   - Set Source to "GitHub Actions"

2. **Push to main branch**:
   ```bash
   git add .
   git commit -m "Update site"
   git push origin main
   ```

3. **Visit your site**: 
   `https://0riceisnice0-hash.github.io/DeezGarden/`

### Manual Deployment

Build and deploy to any static hosting:

```bash
npm run build
```

Upload the `dist/` folder to your hosting provider.

## 📊 SEO Features

- ✅ Unique meta titles and descriptions for every page
- ✅ JSON-LD schema markup (LocalBusiness, Service, BlogPosting)
- ✅ Open Graph and Twitter Card meta tags
- ✅ Semantic HTML with proper heading hierarchy
- ✅ Canonical URLs
- ✅ Sitemap.xml (auto-generated)
- ✅ Robots.txt
- ✅ Mobile-friendly responsive design
- ✅ Fast loading times

## 📞 Contact Methods

The site includes multiple conversion-optimised contact methods:

- **Sticky header** with call button (mobile)
- **Hero CTAs** on every page
- **Multiple CTAs** throughout pages
- **Contact form** with mailto fallback
- **Click-to-call** phone links
- **Email links**
- **Facebook group** link

## 🔧 Maintenance

### Update Dependencies

```bash
npm update
```

### Check for Build Issues

```bash
npm run build
```

### Type Check

```bash
npx astro check
```

## 📋 Customisation Checklist

Before going live, update these values:

- [ ] Phone number in `src/config.ts`
- [ ] Email address in `src/config.ts`
- [ ] Facebook link in `src/config.ts`
- [ ] Service areas in `src/config.ts`
- [ ] Opening hours in `src/config.ts`
- [ ] Trust badges (insured, licensed, etc.)
- [ ] Business description
- [ ] Review placeholder text (add real reviews)
- [ ] Add real photos when available
- [ ] Set up analytics if desired

## 🆘 Support

For issues or questions:

1. Check the [Astro documentation](https://docs.astro.build)
2. Check the [Tailwind CSS documentation](https://tailwindcss.com/docs)
3. Review this README

## 📄 License

This project is proprietary and confidential.

---

Built with ❤️ using [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com)