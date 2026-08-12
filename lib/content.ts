// Central content store for CINMACH PRODUCTIONS -- sourced from the site content inventory.

export const company = {
  name: "CINMACH PRODUCTIONS",
  shortName: "Cinmach",
  tagline: "Cinematic content production for brands that demand more.",
  description:
    "Cinematic content agency and creative marketing company based in Bahrain, specializing in visual storytelling, brand identity, and commercial video production that turns viewers into paying customers.",
  city: "Manama, Bahrain",
  region: "Bahrain and the wider Gulf Cooperation Council (GCC) region",
};

export const stats = [
  { value: "40+", label: "Restaurants & Brands Served" },
  { value: "300%", label: "Average Engagement Lift" },
  { value: "6", label: "Industries Covered" },
  { value: "24h", label: "Guaranteed Inquiry Response" },
];

export const contact = {
  emailContact: "contact@cinmachproductions.com",
  emailTeam: "team@cinmachproductions.com",
  emailLeads: "cinmachproductions@gmail.com",
  phoneDisplay: "+973 3XXX XXXX",
  phoneHref: "tel:+97330000000",
  whatsappDisplay: "+973 3XXX XXXX",
  whatsappHref: "https://wa.me/97330000000",
  location: "Manama, Bahrain",
  hours: [
    { days: "Sunday -- Thursday", time: "9:00 AM -- 6:00 PM" },
    { days: "Friday -- Saturday", time: "By appointment" },
  ],
};

export const social = [
  { name: "Instagram", handle: "@cinmach", href: "https://instagram.com/cinmach", soon: true },
  { name: "LinkedIn", handle: "Cinmach Productions", href: "https://linkedin.com/company/cinmach", soon: true },
  { name: "TikTok", handle: "@cinmach", href: "https://tiktok.com/@cinmach", soon: true },
  { name: "WhatsApp", handle: "Direct Contact Line", href: contact.whatsappHref, soon: false },
];

export type ServiceSlug = "content-production" | "brand-identity" | "paid-advertising";

export const services: {
  slug: ServiceSlug;
  number: string;
  name: string;
  tagline: string;
  description: string;
  deliverables: string[];
  resultsStat: string;
  disabled?: boolean;
  href: string;
}[] = [
  {
    slug: "content-production",
    number: "01",
    name: "Content Production",
    tagline: "Cinematic content designed to capture attention.",
    description:
      "From restaurants and hotels to luxury real estate and fitness brands, we produce high-end video and photo content. Every frame is meticulously crafted to tell your story and drive engagement across all digital platforms.",
    deliverables: [
      "Food & Hospitality Cinematics",
      "Real Estate & Space Walkthroughs",
      "Gym & Fitness Promo Videos",
      "Hotel & Resort Lifestyle Shoots",
      "Commercial Video Production",
      "Reels & Short-Form Content",
    ],
    resultsStat: "Our cinematic content consistently outperforms standard media in engagement and conversion.",
    href: "/content-production",
  },
  {
    slug: "brand-identity",
    number: "02",
    name: "Brand Identity",
    tagline: "We build memorable brands that stand out.",
    description:
      "A brand is more than just a logo. We craft comprehensive visual identities, strategic positioning, and brand guidelines that resonate with your audience and set you apart in a crowded market.",
    deliverables: [
      "Logo Design & Visual Identity",
      "Brand Strategy & Positioning",
      "Brand Guidelines & Tone of Voice",
      "Marketing Collateral Design",
      "Packaging & Print Design",
    ],
    resultsStat: "Brands we build see higher recognition, trust, and long-term customer loyalty.",
    href: "/brand-identity",
  },
  {
    slug: "paid-advertising",
    number: "03",
    name: "Paid Advertising",
    tagline: "Performance-driven campaigns built for sales.",
    description:
      "We don't just make things look good; we make them work. Our performance marketing team runs highly targeted Meta and Google ad campaigns, utilizing our custom creatives to generate high-quality leads and drive direct sales.",
    deliverables: [
      "Meta Ads (Facebook & Instagram)",
      "Ad Creative Strategy & Testing",
      "Retargeting & Audience Scaling",
      "High-Converting Landing Pages",
      "Campaign Analytics & Reporting",
    ],
    resultsStat: "Clients utilizing our paid ad strategies see significant improvements in ROAS and cost-per-lead.",
    disabled: true,
    href: "/paid-advertising",
  },
];

export const process = [
  {
    step: "01",
    title: "Discover",
    description: "We learn your brand, your audience, and the business result you actually need -- not just deliverables.",
  },
  {
    step: "02",
    title: "Plan",
    description: "Concept, shot list, location and creative direction locked before a single camera rolls.",
  },
  {
    step: "03",
    title: "Produce",
    description: "On-set execution with a full crew -- camera, lighting, sound, direction -- built to your quality bar.",
  },
  {
    step: "04",
    title: "Deliver & Elevate",
    description: "Cinematic edit, color grade, sound design, and platform-ready exports, delivered on schedule.",
  },
];

export const engagementModels = [
  {
    number: "01",
    title: "Project Basis",
    description: "A single shoot or campaign with a fixed scope, timeline and deliverable count. Ideal for a launch, a new menu, or a one-off brand film.",
    cta: "Inquire for project rates",
  },
  {
    number: "02",
    title: "Monthly Retainer",
    description: "Ongoing monthly video and photo content to keep your feed, ads and website consistently fresh. Built for brands that publish often.",
    cta: "Apply for monthly spot",
  },
  {
    number: "03",
    title: "Bespoke Package",
    description: "Complete branding and video under one roof -- identity, guidelines, and a full content library, planned as a single engagement.",
    cta: "Book a consultation",
  },
];

export const industries = [
  "Restaurants & Cafes (F&B)",
  "Real Estate & Architecture",
  "Hotels & Resorts / Luxury Hospitality",
  "Gyms & Active Fitness Brands",
  "Luxury Goods & Consumer Brands",
  "Sports & Leisure Facilities",
  "E-Commerce",
];

export type Project = {
  slug: string;
  client: string;
  category: "Sports & Leisure" | "Real Estate" | "F&B";
  year: number;
  description: string;
  location: string;
  tags: string[];
  media: "video" | "photo";
};

export const projects: Project[] = [
  {
    slug: "the-royal-golf-club",
    client: "The Royal Golf Club",
    category: "Sports & Leisure",
    year: 2024,
    description:
      "A cinematic tour of Bahrain's premier championship golf course. Captured during the golden hour to highlight the manicured greens, water hazards, and luxury clubhouse architecture.",
    location: "Riffa / Manama, Bahrain",
    tags: ["Drone", "Twilight", "Cinematic", "4K"],
    media: "video",
  },
  {
    slug: "dilmunia-waterfront-residences",
    client: "Dilmunia Waterfront Residences",
    category: "Real Estate",
    year: 2024,
    description:
      "A cinematic study of luxury coastal living. We captured the Dilmunia Waterfront Residences from dawn to dusk -- drone sweeps over the sea, intimate interior moments, and golden hour light.",
    location: "Dilmunia Island, Bahrain",
    tags: ["Drone", "HDR", "Interior", "4K"],
    media: "video",
  },
  {
    slug: "the-palm-villa-al-areen",
    client: "The Palm Villa",
    category: "Real Estate",
    year: 2024,
    description:
      "Twilight cinematics for an ultra-luxury villa in Al Areen. Every shot captures the interplay between architecture and desert light.",
    location: "Al Areen, Bahrain",
    tags: ["Aerial", "Twilight", "4K"],
    media: "video",
  },
  {
    slug: "seef-district-tower",
    client: "Seef District Tower",
    category: "Real Estate",
    year: 2023,
    description: "City-living redefined. A slow-motion study of one of Bahrain's most prominent commercial towers.",
    location: "Seef District, Bahrain",
    tags: ["Interior", "Slow Motion"],
    media: "photo",
  },
  {
    slug: "khaleej-and-co",
    client: "Khaleej & Co.",
    category: "F&B",
    year: 2024,
    description:
      "A brand film for Bahrain's most iconic cafe chain. We brought the warmth of Khaleeji culture into motion -- rich textures, steam rising, intimate moments over coffee.",
    location: "Bahrain",
    tags: ["Food Motion", "Brand Film", "Editorial"],
    media: "video",
  },
  {
    slug: "flame-and-salt",
    client: "Flame & Salt",
    category: "F&B",
    year: 2023,
    description:
      "Colour-graded food cinematics built around texture, heat, and appetite. Shot in slow motion to let every drop and char read on screen.",
    location: "Bahrain",
    tags: ["Texture", "Colour Graded"],
    media: "video",
  },
  {
    slug: "zafran-house",
    client: "Zafran House",
    category: "F&B",
    year: 2023,
    description:
      "A full identity rollout -- from brand film to motion graphics for social. Zafran House is a modern take on the traditional Khaleeji dining experience.",
    location: "Bahrain",
    tags: ["Identity", "Motion"],
    media: "photo",
  },
];

export const projectCategories = ["All", "F&B", "Real Estate", "Sports & Leisure"] as const;

export type TeamMember = {
  name: string;
  role: string;
  department: "Executive" | "Production" | "Post-Production";
  bio?: string;
  skills?: string[];
  lead?: boolean;
};

export const team: TeamMember[] = [
  {
    name: "Suhail Ahmad Goni",
    role: "Co-Founder & CEO",
    department: "Executive",
    bio: "Suhail leads the company and makes sure everything runs smoothly. He focuses on growing the business and making sure every client gets the best possible results from our team.",
  },
  {
    name: "Shayan",
    role: "Lead Videographer & Head of Production",
    department: "Production",
    lead: true,
    bio: "Leads every production from planning to execution. Oversees creative direction on set, camera operation, shot composition, and ensures every project is captured to Cinmach's quality standards.",
  },
  {
    name: "Moomin Shafi",
    role: "Camera Assistant",
    department: "Production",
    skills: ["Camera setup", "Lens management", "Equipment preparation", "Battery & media handling"],
  },
  {
    name: "Faisal Malik",
    role: "Lighting & Grip Specialist",
    department: "Production",
    skills: ["Lighting setup", "Modifiers & reflectors", "Scene lighting", "On-set equipment"],
  },
  {
    name: "Iram Nabi",
    role: "Production Coordinator",
    department: "Production",
    skills: ["Client coordination", "Scheduling", "Shot lists", "Logistics", "Location management"],
  },
  {
    name: "Wasim",
    role: "Lead Editor & Head of Post-Production",
    department: "Post-Production",
    lead: true,
    bio: "Leads the complete post-production workflow from storytelling and editing to color grading, sound design, and final delivery.",
  },
  {
    name: "Mohsin Shafi",
    role: "Motion Graphics & VFX Artist",
    department: "Post-Production",
    skills: ["Motion graphics", "Logo animation", "Visual effects", "Screen replacement"],
  },
  {
    name: "Omar Farooq",
    role: "Colorist",
    department: "Post-Production",
    skills: ["Color correction", "Color grading", "Skin tone balancing", "Cinematic finishing"],
  },
  {
    name: "Adil Nazir",
    role: "Sound Designer",
    department: "Post-Production",
    skills: ["Audio cleanup", "Dialogue enhancement", "Sound effects", "Music mixing", "Audio mastering"],
  },
];

export const coreValues = [
  {
    title: "Quality Over Quantity",
    description: "We would rather deliver one cinematic frame that converts than a hundred that don't. Every shot earns its place.",
  },
  {
    title: "Results First",
    description: "Beautiful content is the baseline. We measure success in footfall, bookings, and revenue -- not just views.",
  },
  {
    title: "Direct Communication",
    description: "No account managers relaying messages. You talk directly to the people making your content.",
  },
];

export const heroQuotes = [
  "We started getting real clients within weeks.",
  "Our conversions increased almost instantly.",
  "The campaign actually brought people to our business.",
  "We saw a clear jump in engagement after working with them.",
  "Finally, creative marketing that converts into real business.",
];

export const testimonials = [
  {
    quote: "Our engagement started bringing in real clients. People were reaching out saying they saw our campaign.",
    name: "Ayaan Khan",
    title: "Real Estate Director",
  },
  {
    quote: "The quality of the video immediately changed how people perceived our brand. We look premium now.",
    name: "Sara Malik",
    title: "Fashion Founder",
  },
  {
    quote: "We've seen a massive spike in conversions since the campaign went live. It actually works.",
    name: "Omar Hussain",
    title: "Tech Startup",
  },
  {
    quote: "They understood our vision and translated it into visuals that actually represent who we are.",
    name: "Zaid Ahmed",
    title: "Hospitality Group",
  },
  {
    quote: "The footage is stunning, but the results are better. Our digital presence is at an all-time high.",
    name: "Layla Yusuf",
    title: "Lifestyle Brand",
  },
  {
    quote: "Finally found an agency that treats our brand like art. The response from our audience was huge.",
    name: "Faisal Aziz",
    title: "Fitness Franchise",
  },
  {
    quote: "It's rare to find creative direction this high in the region. They've set a new standard for us.",
    name: "Noor Al-Bahrani",
    title: "Corporate Leader",
  },
  {
    quote: "Our product launch was a success because the brand film built so much hype before we even went live.",
    name: "Hamad Qasim",
    title: "Product Designer",
  },
  {
    quote: "The cinematic look they gave us helped us secure a major partnership. It was a game changer.",
    name: "Mariam Shah",
    title: "Retail Brand",
  },
  {
    quote: "The best investment we've made this year. The campaign paid for itself within the first month.",
    name: "Rashid Mahmood",
    title: "Hospitality Director",
  },
];

export const faqs = [
  {
    question: "How does cinematic content help my brand?",
    answer:
      "High-end visual content elevates your brand's perceived value, increases engagement, and drives targeted conversions. It turns digital views into real business growth.",
  },
  {
    question: "What is included in a content production project?",
    answer:
      "We handle everything from start to finish: creative concept development, pre-production planning, high-end filming, and professional post-production including cinematic editing, color grading, and sound design.",
  },
  {
    question: "Can you help with my company's branding and logo design?",
    answer:
      "Absolutely. We offer complete Brand Identity design services, including custom logo design, visual positioning, curated color palettes, typography, and professional brand guidelines to make your business memorable.",
  },
  {
    question: "Do you produce content optimized for social media?",
    answer:
      "Yes, we produce high-end, short-form cinematic video reels and photography specifically formatted and optimized to stand out and capture attention on modern digital platforms like Instagram and TikTok.",
  },
  {
    question: "Where are you based?",
    answer:
      "We are a creative marketing and production agency located in Manama, partnering with ambitious brands across Bahrain and the GCC.",
  },
];

type NavDropdownItem = { label: string; href: string; comingSoon?: boolean };
type NavItem = { label: string; href: string; dropdown?: NavDropdownItem[] };

export const nav: NavItem[] = [
  { label: "Work", href: "/work" },
  {
    label: "Services",
    href: "/services",
    dropdown: [
      { label: "All Services", href: "/services" },
      { label: "Content Production", href: "/content-production" },
      { label: "Brand Identity", href: "/brand-identity" },
      { label: "Paid Advertising", href: "/paid-advertising", comingSoon: true },
    ],
  },
  { label: "Team", href: "/team" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/estimate" },
];

export const footerNav = {
  navigate: [
    { label: "Work", href: "/work" },
    { label: "Services", href: "/services" },
    { label: "Team", href: "/team" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/estimate" },
  ],
  expertise: [
    { label: "Restaurant Videography", href: "/restaurant-videography-bahrain" },
    { label: "Food Videography", href: "/food-videography-bahrain" },
    { label: "Marketing Agency", href: "/marketing-agency-bahrain" },
    { label: "Video Production", href: "/video-production-company-bahrain" },
    { label: "Marketing Guide", href: "/restaurant-video-marketing-bahrain" },
  ],
};

export type SeoLandingPage = {
  slug: string;
  h1: string;
  kicker: string;
  intro: string;
  valueProps: { title: string; description: string }[];
  useCases: string[];
  faqs: { question: string; answer: string }[];
};

export const seoLandingPages: SeoLandingPage[] = [
  {
    slug: "restaurant-videography-bahrain",
    h1: "Restaurant Videography in Bahrain",
    kicker: "Restaurant Videography",
    intro:
      "Cinematic video production built specifically for restaurants and cafes in Bahrain -- content designed to drive footfall, not just views.",
    valueProps: [
      {
        title: "Built for footfall, not just views",
        description: "Every shot is planned around one outcome: getting someone to walk through your door or place an order.",
      },
      {
        title: "Local crew, local knowledge",
        description: "Our team has shot in kitchens and dining rooms across Manama, Seef, Adliya and Amwaj -- we know the permits, the light, and the timing.",
      },
      {
        title: "A content library, not a single video",
        description: "One production day becomes months of Reels, ads and website footage, cut from the same cinematic shoot.",
      },
    ],
    useCases: [
      "New restaurant or cafe launch films",
      "Menu and seasonal dish showcases",
      "Interior and ambience walkthroughs",
      "Chef and kitchen brand storytelling",
      "Social-first Reels for daily posting",
    ],
    faqs: [
      {
        question: "How long does a restaurant video shoot take?",
        answer: "Most restaurant productions take a single half-day to full-day on location, covering both cinematic footage and a full library of short-form content.",
      },
      {
        question: "Do you shoot during service hours?",
        answer: "We can shoot before opening, during a quiet service window, or during peak hours for authentic ambience -- we'll recommend the best approach during planning.",
      },
      {
        question: "Can you deliver content for Instagram and TikTok specifically?",
        answer: "Yes -- every restaurant package includes short-form cuts formatted and optimized for Instagram Reels and TikTok alongside the main brand film.",
      },
    ],
  },
  {
    slug: "food-videography-bahrain",
    h1: "Food Videography in Bahrain",
    kicker: "Food Videography",
    intro:
      "Macro-level food cinematography and culinary styling for cafes, restaurants and food brands across Bahrain -- every dish shot to sell.",
    valueProps: [
      {
        title: "Macro cinematography that sells",
        description: "Shallow depth of field, backlighting and texture-first framing make every dish look worth ordering.",
      },
      {
        title: "Styling that survives hot lights",
        description: "Our on-set styling process is built around fast, precise shots -- so food looks fresh in every frame, not wilted.",
      },
      {
        title: "Colour grading built for appetite",
        description: "We grade for warmth and appetite appeal, not just colour accuracy -- the same approach used across our F&B portfolio.",
      },
    ],
    useCases: [
      "Menu photography and video for delivery apps",
      "Slow-motion hero shots for signature dishes",
      "Cafe and bakery product content",
      "Recipe and process videos for social",
      "Packaging and product line photography",
    ],
    faqs: [
      {
        question: "What's the difference between food videography and standard content?",
        answer: "Food videography uses specialized macro lenses, controlled lighting and food styling techniques that a standard video shoot doesn't -- it's a dedicated discipline.",
      },
      {
        question: "Do you provide food styling on set?",
        answer: "Yes, our production process includes on-set styling to ensure every dish looks its best under camera and lighting conditions.",
      },
      {
        question: "Can this content be used for delivery platforms like Talabat?",
        answer: "Absolutely -- we deliver assets sized and formatted for delivery app listings alongside your social and website content.",
      },
    ],
  },
  {
    slug: "marketing-agency-bahrain",
    h1: "Creative Marketing Agency in Bahrain",
    kicker: "Marketing Agency",
    intro:
      "A full-stack creative marketing agency in Bahrain -- content production, brand identity, and (soon) performance advertising under one roof.",
    valueProps: [
      {
        title: "One team, full-funnel creative",
        description: "Content production and brand identity work together under one roof, so your visual identity and your video content always match.",
      },
      {
        title: "Direct communication, no account layers",
        description: "You work directly with the people producing your content -- not a rotating cast of account managers.",
      },
      {
        title: "Results measured in business outcomes",
        description: "We track engagement lift, brand growth, and client trust -- not just deliverable counts.",
      },
    ],
    useCases: [
      "Full brand launches -- identity plus content",
      "Ongoing monthly content retainers",
      "Campaign concepting and creative direction",
      "Multi-industry creative for hospitality, real estate and fitness",
      "Creative partner for in-house marketing teams",
    ],
    faqs: [
      {
        question: "What industries do you work with?",
        answer: "We work across restaurants and cafes, real estate, hotels and resorts, gyms and fitness brands, luxury goods, sports and leisure, and e-commerce.",
      },
      {
        question: "Do you only work with Bahrain-based brands?",
        answer: "We're based in Manama and primarily serve Bahrain, but we shoot on location across the wider GCC region as needed.",
      },
      {
        question: "What's the difference between a project and a retainer?",
        answer: "A project is a fixed-scope engagement for a single shoot or campaign. A retainer is ongoing monthly content designed for brands that publish consistently.",
      },
    ],
  },
  {
    slug: "video-production-company-bahrain",
    h1: "Video Production Company in Bahrain",
    kicker: "Video Production",
    intro:
      "Commercial video production for brands across Bahrain and the GCC -- from concept to final cinematic delivery.",
    valueProps: [
      {
        title: "Full production pipeline in-house",
        description: "Concept, filming, editing, colour grading and sound design all handled by one team -- no outsourced links in the chain.",
      },
      {
        title: "Multi-industry production experience",
        description: "From championship golf courses to luxury villas to F&B brand films, our crew adapts to the demands of each industry.",
      },
      {
        title: "4K delivery, drone-capable crew",
        description: "Aerial, twilight, interior and slow-motion capture -- the technical range to match any commercial brief.",
      },
    ],
    useCases: [
      "Commercial and brand films",
      "Real estate and architecture walkthroughs",
      "Corporate and hospitality video",
      "Drone and aerial cinematography",
      "Short-form campaign content",
    ],
    faqs: [
      {
        question: "What does a typical production timeline look like?",
        answer: "From initial discovery to final delivery, most commercial productions take two to four weeks, depending on scope and revisions.",
      },
      {
        question: "Do you offer drone videography?",
        answer: "Yes -- aerial and drone cinematography is part of our standard production toolkit, used across real estate, hospitality and sports projects.",
      },
      {
        question: "Can you handle both video and photography on the same shoot?",
        answer: "Yes, most of our productions capture both video and photo assets in a single shoot day for efficiency.",
      },
    ],
  },
  {
    slug: "restaurant-video-marketing-bahrain",
    h1: "Restaurant Video Marketing in Bahrain",
    kicker: "Restaurant Video Marketing",
    intro:
      "Video-driven marketing strategy for dining establishments in Bahrain -- content built around a single goal: filling tables.",
    valueProps: [
      {
        title: "Strategy before the camera rolls",
        description: "We plan content around your booking patterns and slow periods, not just what looks good on a reel.",
      },
      {
        title: "Consistent publishing, not one-off shoots",
        description: "Our monthly retainer model keeps your feed active with fresh content that keeps your restaurant top of mind.",
      },
      {
        title: "Proven with 40+ Bahrain F&B brands",
        description: "From cafes to fine dining, we've built the playbook for what actually drives reservations in this market.",
      },
    ],
    useCases: [
      "Monthly content calendars for restaurants",
      "Launch campaigns for new locations or menus",
      "Influencer-style brand films",
      "Paid social creative for reservations campaigns",
      "Seasonal and holiday promotional content",
    ],
    faqs: [
      {
        question: "How is this different from just hiring a videographer?",
        answer: "We combine production with marketing strategy -- planning content around your goals, not just capturing footage and handing it over.",
      },
      {
        question: "What results have other restaurants seen?",
        answer: "Clients report a real jump in engagement and, in many cases, a direct increase in walk-ins and reservations tied to specific campaigns.",
      },
      {
        question: "Do you help with paid advertising too?",
        answer: "Our paid advertising service is launching soon -- in the meantime, we produce ad-ready creative for you to run through your own channels.",
      },
    ],
  },
];
