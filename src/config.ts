// Business configuration - edit these values to update site-wide information
export const siteConfig = {
  name: "Dee'z Gardens",
  location: "Northampton, Northamptonshire, England",
  phone: "07305 195098",
  phoneFormatted: "07305 195098",
  email: "deez.gardensuk@gmail.com",
  facebook: "https://www.facebook.com/groups/1922611271669486",
  whatsapp: "", // Optional - add WhatsApp link if available
  
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
  
  // SEO
  baseUrl: "https://deezgardens.co.uk",
  description: "Professional garden maintenance, clearance, and landscaping services in Northampton and surrounding areas. Fully insured with licensed waste carrier.",
  
  // Open Graph / Social sharing image
  ogImage: {
    path: "/assets/images/hero.jpg",
    width: 1536,
    height: 1024,
    type: "image/jpeg",
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
