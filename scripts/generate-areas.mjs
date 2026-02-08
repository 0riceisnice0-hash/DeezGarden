#!/usr/bin/env node

/**
 * Script to generate area landing pages
 * Run with: node scripts/generate-areas.mjs
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const areas = [
  { name: 'Wellingborough', county: 'Northamptonshire', nearby: ['Rushden', 'Kettering', 'Northampton', 'Higham Ferrers'] },
  { name: 'Rushden', county: 'Northamptonshire', nearby: ['Wellingborough', 'Kettering', 'Higham Ferrers', 'Irthlingborough'] },
  { name: 'Daventry', county: 'Northamptonshire', nearby: ['Northampton', 'Rugby', 'Towcester', 'Long Buckby'] },
  { name: 'Towcester', county: 'Northamptonshire', nearby: ['Northampton', 'Brackley', 'Milton Keynes', 'Daventry'] },
  { name: 'Brackley', county: 'Northamptonshire', nearby: ['Towcester', 'Northampton', 'Banbury', 'Buckingham'] },
  { name: 'Milton Keynes', county: 'Buckinghamshire', nearby: ['Northampton', 'Bedford', 'Bletchley', 'Newport Pagnell'] },
  { name: 'Market Harborough', county: 'Leicestershire', nearby: ['Leicester', 'Kettering', 'Corby', 'Northampton'] },
  { name: 'Corby', county: 'Northamptonshire', nearby: ['Kettering', 'Market Harborough', 'Oundle', 'Desborough'] },
  { name: 'Bedford', county: 'Bedfordshire', nearby: ['Milton Keynes', 'Northampton', 'Luton', 'Wellingborough'] },
  { name: 'Rugby', county: 'Warwickshire', nearby: ['Daventry', 'Coventry', 'Northampton', 'Leicester'] },
  { name: 'Leicester', county: 'Leicestershire', nearby: ['Market Harborough', 'Loughborough', 'Coventry', 'Hinckley'] },
  { name: 'Peterborough', county: 'Cambridgeshire', nearby: ['Stamford', 'Oundle', 'Corby', 'March'] },
  { name: 'Coventry', county: 'West Midlands', nearby: ['Rugby', 'Leicester', 'Warwick', 'Nuneaton'] },
];

const template = (area) => `---
import BaseLayout from '../../layouts/BaseLayout.astro';
import Header from '../../components/Header.astro';
import Footer from '../../components/Footer.astro';
import Hero from '../../components/Hero.astro';
import CallToAction from '../../components/CallToAction.astro';
import { siteConfig, services } from '../../config';
---

<BaseLayout 
  title="Garden Maintenance & Clearance Services in ${area.name}"
  description="Professional garden maintenance, clearance, and landscaping services in ${area.name}, ${area.county}. Fully insured. Call 07305 195098 for a free quote."
>
  <Header slot="header" />
  
  <Hero 
    title="Garden Services in ${area.name}"
    location="${area.name}, ${area.county}"
    subtitle="Professional garden and clearance services"
  />
  
  <section class="py-16">
    <div class="container mx-auto px-4">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-3xl font-bold mb-6">Garden and Clearance Services in ${area.name}</h2>
        <p class="text-lg mb-4">
          {siteConfig.name} provides professional garden maintenance, clearance, and removals services throughout ${area.name} and the surrounding areas. Based locally in Northampton, we regularly serve customers in ${area.name} with reliable, high-quality service.
        </p>
        <p class="text-lg mb-6">
          Whether you need regular garden maintenance, a complete garden renovation, rubbish clearance, or man with van services, we're here to help residents and businesses in ${area.name}.
        </p>
        
        <h3 class="text-2xl font-bold mb-4">Our Services in ${area.name}</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map(service => (
            <div class="bg-bg-light p-6 rounded-lg">
              <div class="text-4xl mb-3 text-center">{service.icon}</div>
              <h4 class="font-bold text-lg mb-2 text-center">{service.title}</h4>
              <p class="text-sm text-gray-700 text-center mb-3">{service.description}</p>
              <div class="text-center">
                <a 
                  href={\`/services/\${service.slug}/\`}
                  class="text-fresh-green font-semibold hover:text-deep-green text-sm"
                >
                  Learn More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
  
  <CallToAction />
  
  <section class="py-16 bg-white">
    <div class="container mx-auto px-4">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-3xl font-bold mb-6">Why Choose {siteConfig.name} in ${area.name}?</h2>
        
        <div class="prose max-w-none">
          <p>
            We're proud to extend our services to ${area.name}, offering the same high standards we provide in Northampton and throughout the region. Our team is fully insured and operates as a licensed waste carrier, ensuring all work is completed legally and professionally.
          </p>
          
          <h3>What We Offer</h3>
          <ul>
            <li>Garden maintenance and lawn care</li>
            <li>Garden renovations and landscaping</li>
            <li>Rubbish and garden waste clearance</li>
            <li>House and garage clearances</li>
            <li>Man with van removals</li>
            <li>Scrap metal collection</li>
            <li>Fully insured service</li>
            <li>Licensed waste carrier</li>
          </ul>
          
          <p>
            Get in touch today for a free, no-obligation quote for any of our services in ${area.name}.
          </p>
        </div>
      </div>
    </div>
  </section>
  
  <CallToAction text="Get Your Free ${area.name} Quote" />
  
  <section class="py-16">
    <div class="container mx-auto px-4">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl font-bold mb-6">Nearby Areas We Also Serve</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          {${JSON.stringify(area.nearby)}.map((nearbyArea: string) => (
            <a 
              href={\`/areas/\${nearbyArea.toLowerCase().replace(/ /g, '-')}/\`}
              class="bg-bg-light p-3 rounded-lg hover:bg-fresh-green hover:text-white transition font-semibold text-sm"
            >
              {nearbyArea}
            </a>
          ))}
        </div>
        <div class="mt-6">
          <a href="/areas/" class="text-fresh-green font-semibold hover:text-deep-green">
            View all areas →
          </a>
        </div>
      </div>
    </div>
  </section>
  
  <Footer slot="footer" />
</BaseLayout>

<script type="application/ld+json" set:html={JSON.stringify({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": siteConfig.name,
  "description": "Professional garden maintenance and clearance services in ${area.name}",
  "areaServed": {
    "@type": "City",
    "name": "${area.name}",
    "containedIn": {
      "@type": "AdministrativeArea",
      "name": "${area.county}"
    }
  },
  "telephone": siteConfig.phone,
  "email": siteConfig.email
})} />
`;

// Create areas
const areasDir = path.join(__dirname, '..', 'src', 'pages', 'areas');

areas.forEach(area => {
  const slug = area.name.toLowerCase().replace(/ /g, '-');
  const filePath = path.join(areasDir, `${slug}.astro`);
  
  // Skip if already exists
  if (fs.existsSync(filePath)) {
    console.log(`⏭️  Skipping ${area.name} (already exists)`);
    return;
  }
  
  fs.writeFileSync(filePath, template(area));
  console.log(`✅ Created ${area.name} page`);
});

console.log('\n✨ Area pages generated successfully!');
