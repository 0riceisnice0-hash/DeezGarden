// Real customer reviews — sourced from Dee'z Gardens Google Business Profile.
// Update this file whenever new reviews come in (paste from your GBP),
// and they automatically flow into:
//   - /reviews/ page
//   - ReviewsCarousel on the homepage
//   - LocalBusiness AggregateRating schema in BaseLayout
//
// IMPORTANT: only put REAL reviews here. Google's structured-data policy
// prohibits seeded / made-up reviews and can trigger a manual action.

export interface Review {
  /** Reviewer's name as shown on Google */
  author: string;
  /** Star rating 1–5 */
  rating: number;
  /** Approx date the review was posted (YYYY-MM-DD), used for schema */
  datePublished: string;
  /** Full review text */
  text: string;
  /** Optional short summary used as a card title */
  title?: string;
  /** Optional service category, e.g. "Garden Renovation - Northampton" */
  service?: string;
}

export const reviews: Review[] = [
  {
    author: "Sarah O'Connor",
    rating: 5,
    datePublished: "2026-04-22",
    title: "Couldn't be happier",
    service: "Garden services",
    text: "We couldn't be happier with the service Dwayne and his team have provided us with.",
  },
  {
    author: "Ashley Barreau",
    rating: 5,
    datePublished: "2026-04-19",
    title: "Quick & efficient clearance",
    service: "Clearance & Removals",
    text: "Needed some clearance from my house reno! Had a great team come and clear it all, quickly and efficiently! Great price too! Would definitely use again!",
  },
  {
    author: "Sarah Gordon",
    rating: 5,
    datePublished: "2026-04-17",
    title: "Truly 5-star transformation",
    service: "Garden Renovation",
    text: "My garden has been totally transformed and I couldn't be happier with the result. Truly 5 star transformation, thank you so much.",
  },
  {
    author: "Adriana Nagy",
    rating: 5,
    datePublished: "2026-04-10",
    title: "Completely transformed my garden",
    service: "Garden Maintenance & Jet Washing",
    text: "I honestly couldn't be happier with the job Dwayne did on my garden! He completely transformed it, cut the grass, trimmed all the bushes, got rid of the weeds, and even power washed the slabs so they look brand new again. He also took away all the waste — it looks like a different garden.",
  },
  {
    author: "Mrs.",
    rating: 5,
    datePublished: "2026-04-03",
    title: "Professional, quality job",
    service: "Garden services",
    text: "Dwayne and Ben did amazing job in our garden. Both very professional and quality job, explain everything start to finish. Definitely see them again.",
  },
  {
    author: "Shannon Whiteman",
    rating: 5,
    datePublished: "2026-04-03",
    title: "Brilliant service",
    service: "Garden services",
    text: "Absolutely brilliant service from Dee'z Gardens. Dwayne was fab — couldn't fault the work, amazing results. Very happy customer. Will definitely use again, thank you.",
  },
  {
    author: "Kurtis Lee",
    rating: 5,
    datePublished: "2026-03-24",
    title: "Top quality work, fast quote",
    service: "Garden services",
    text: "Top quality work done quickly. Quote was done ASAP and work has come out brilliantly. Will 100% use again.",
  },
  {
    author: "Zac Bartley",
    rating: 5,
    datePublished: "2026-02-24",
    title: "Night-and-day garden renovation",
    service: "Garden Renovation",
    text: "Absolutely brilliant service from Dee'z Gardens. Had my garden fully renovated and I couldn't be happier with the result. The transformation was night and day — everything was done professionally, quickly, and to a really high standard.",
  },
  {
    author: "Steve Anderson",
    rating: 5,
    datePublished: "2026-02-24",
    title: "Awesome service — 10/10",
    service: "Garden services",
    text: "Awesome service and excellent well-disciplined staff. Phase 1 completed. 10/10.",
  },
  {
    author: "Diane Gilbert",
    rating: 5,
    datePublished: "2026-02-24",
    title: "Highly recommend — using them again",
    service: "Garden Renovation",
    text: "Used Dee'z Gardens for my garden revamp, highly recommend this company. Very reasonably priced, the guys worked hard making sure I was informed every step of the way. I will be using them again for my next garden project later in the year. Thank you Dee'z Gardens.",
  },
  {
    author: "Lily Bootman",
    rating: 5,
    datePublished: "2026-02-24",
    title: "Hard graft — finished in 2 days",
    service: "Garden Renovation",
    text: "Dwayne and Ben really grafted — they managed to get my garden plans achieved in 2 days, despite the weather they kept going. They listened and understood exactly what I wanted to do, even when I changed things half way through they were great at adapting to the extra work.",
  },
  {
    author: "Gloria Kasa",
    rating: 5,
    datePublished: "2026-02-24",
    title: "On time and on budget",
    service: "Garden services",
    text: "Very prompt, polite, honest, hard-working lads. Job completed at price and on time. Highly recommend.",
  },
  {
    author: "Carol Medhurst",
    rating: 5,
    datePublished: "2026-02-24",
    title: "5-star service",
    service: "Garden services",
    text: "5-star service from Dee'z Gardens.",
  },
];

/** Aggregate rating computed from the real reviews above. */
export const aggregateRating = {
  ratingValue: (
    reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length
  ).toFixed(1),
  reviewCount: reviews.length,
  bestRating: 5,
  worstRating: 1,
};
