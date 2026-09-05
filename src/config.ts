// Business configuration - edit these values to update site-wide information
export const siteConfig = {
  name: "Dee'z Gardens",
  location: "Northampton, Northamptonshire, England",
  phone: "+447305195098",
  phoneFormatted: "07305 195098",
  email: "deez.gardensuk@gmail.com",
  facebook: "https://www.facebook.com/groups/1922611271669486",
  // Google Business Profile (Maps) listing URL — fills in `sameAs` for local SEO.
  // Get this from your Google Business Profile share link, e.g.
  //   https://g.page/your-business-name  OR  https://maps.app.goo.gl/...
  // Leave empty until you have it.
  googleBusinessProfile: "https://share.google/Iutxxn93F6DN5rOL2",
  // WhatsApp: uses UK international format (07305 195098 → +447305195098)
  whatsapp: "https://wa.me/447305195098?text=Hi%2C%20I%27d%20like%20a%20free%20quote%20from%20Dee%27z%20Gardens.",
  
  // Trust toggles - set to true/false to show/hide
  trust: {
    insured: true,
    licensedWasteCarrier: true,
    friendlyProfessional: true,
    acceptsCardAndApplePay: true,
  },
  
  // Opening hours (for schema markup)
  openingHours: "Mo-Sa 08:00-18:00",
  
  // Service areas
  primaryAreas: ["Northampton", "Wellingborough", "Kettering", "Rushden", "Daventry"],
  secondaryAreas: ["Towcester", "Brackley", "Milton Keynes", "Market Harborough", "Corby", "Aylesbury"],
  extendedAreas: ["Bedford", "Rugby", "Leicester", "Peterborough", "Coventry"],
  
  // Address — TODO: confirm exact street address with owner before publishing
  address: {
    streetAddress: "", // TODO: confirm with owner (e.g. "123 Example Street")
    postalCode: "",    // TODO: confirm with owner (e.g. "NN1 1AA")
  },

  // SEO
  baseUrl: "https://deezgardens.co.uk",
  description: "Professional landscaping, patios, paving, turfing, garden clearance and maintenance in Northampton and surrounding areas. Fully insured with licensed waste carrier.",
  
  // Google Analytics 4 Measurement ID — set this to your GA4 ID (e.g. "G-XXXXXXXXXX")
  // Get your ID from https://analytics.google.com → Admin → Data Streams → your stream
  googleAnalyticsId: "", // e.g. "G-XXXXXXXXXX"
  
  // Open Graph / Social sharing image
  ogImage: {
    path: "/assets/images/projects-2026/family-garden-turf-gravel-after.webp",
    width: 1600,
    height: 1200,
    type: "image/webp",
  },
};

export const services = [
  {
    id: "garden-maintenance",
    title: "Garden Renovations and Maintenance",
    slug: "garden-maintenance",
    description: "Complete garden care including lawn mowing, hedge trimming, and general upkeep",
    icon: "",
  },
  {
    id: "landscaping",
    title: "Landscaping & Garden Design",
    slug: "landscaping",
    description: "Professional garden landscaping, design, patios, fencing, turfing and complete garden transformations across Northamptonshire",
    icon: "",
  },
  {
    id: "garden-clearance",
    title: "Garden Clearance & Overgrown Gardens",
    slug: "garden-clearance",
    description: "Overgrown garden clearance, vegetation clearance, site clearance and garden waste removal throughout Northamptonshire",
    icon: "",
  },
  {
    id: "hedge-cutting",
    title: "Hedge Cutting & Trimming",
    slug: "hedge-cutting",
    description: "Professional hedge cutting, trimming and shaping across Northampton and Northamptonshire",
    icon: "",
  },
  {
    id: "clearance-removals",
    title: "Rubbish Clearance and Removals",
    slug: "clearance-removals",
    description: "House, garage, and garden clearances with licensed waste carrier service",
    icon: "",
  },
  {
    id: "man-with-van",
    title: "Man with Van and Scrap Metal",
    slug: "man-with-van",
    description: "Removals, delivery service, and scrap metal collection across Northamptonshire",
    icon: "",
  },
  {
    id: "property-maintenance",
    title: "Property Maintenance Services",
    slug: "property-maintenance",
    description: "Practical property jobs including gutter cleaning, insulation, and plastering",
    icon: "",
  },
];
