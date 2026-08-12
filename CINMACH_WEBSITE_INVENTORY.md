# CINMACH PRODUCTIONS - COMPLETE WEBSITE CONTENT INVENTORY & BLUEPRINT

> **Document Type:** Master Website Content & Structural Inventory  
> **Target Codebase:** CINMACH PRODUCTIONS Website (`BH-MARKETING-WEB`)  
> **Purpose:** Factual blueprint for AI-driven reconstruction. Contains ZERO design system tokens, CSS, fonts, or styling rules.

---

## 1. WEBSITE STRUCTURE

The website contains **19 user-facing content pages** (including legal, blog, and niche SEO landing pages) plus **2 dynamic API endpoints**.

### Page Registry

1. **PAGE:** Homepage  
   **URL:** `/`  
   **PURPOSE:** Primary marketing hub introducing Cinmach Productions, client metrics, portfolio highlights, core services, process, engagement models, testimonials, FAQ, and booking options.

2. **PAGE:** About Us  
   **URL:** `/about`  
   **PURPOSE:** Company narrative, founding story, operational philosophy, company statistics, and core values.

3. **PAGE:** Services Overview  
   **URL:** `/services`  
   **PURPOSE:** Comprehensive breakdown of Cinmach's three main service pillars, deliverables, expected business results, and service-specific CTAs.

4. **PAGE:** Content Production Service  
   **URL:** `/content-production`  
   **PURPOSE:** Specialized landing page detailing video and photography production services (Reels, commercials, walkthroughs, hospitality shoots).

5. **PAGE:** Brand Identity Service  
   **URL:** `/brand-identity`  
   **PURPOSE:** Specialized landing page detailing visual branding, logo design, positioning, brand guidelines, and collateral design.

6. **PAGE:** Paid Advertising Service (Upcoming)  
   **URL:** `/paid-advertising`  
   **PURPOSE:** Information on performance marketing campaigns, Meta/Google ads, and conversion optimization (currently set to disabled / coming soon status).

7. **PAGE:** Portfolio / Work Archive  
   **URL:** `/work`  
   **PURPOSE:** Interactive portfolio gallery showing all completed client projects, filterable by video and photo media, with lightbox detail view.

8. **PAGE:** Team Page  
   **URL:** `/team`  
   **PURPOSE:** Complete organizational hierarchy of Cinmach Productions, introducing executive leadership, production department, and post-production department.

9. **PAGE:** Contact & Estimate Page  
   **URL:** `/estimate`  
   **PURPOSE:** Direct contact information directory, email addresses, phone/WhatsApp links, working hours, office location, and inquiry form entry.

10. **PAGE:** Blog Overview  
    **URL:** `/blog`  
    **PURPOSE:** Article listing page showcasing industry insights, videography guides, and marketing strategy articles for Gulf businesses.

11. **PAGE:** Blog Post 1  
    **URL:** `/blog/how-cinematic-video-drives-restaurant-footfall-bahrain`  
    **PURPOSE:** In-depth article explaining how high-quality video content increases footfall and engagement for restaurants in Bahrain.

12. **PAGE:** Blog Post 2  
    **URL:** `/blog/food-videography-lighting-techniques-that-sell`  
    **PURPOSE:** Technical editorial covering food videography lighting, macro cinematography, and culinary styling.

13. **PAGE:** Niche Landing — Restaurant Videography Bahrain  
    **URL:** `/restaurant-videography-bahrain`  
    **PURPOSE:** Targeted SEO landing page for restaurant owners seeking video production in Bahrain.

14. **PAGE:** Niche Landing — Food Videography Bahrain  
    **URL:** `/food-videography-bahrain`  
    **PURPOSE:** Targeted SEO landing page for culinary, café, and food product videography services in Bahrain.

15. **PAGE:** Niche Landing — Marketing Agency Bahrain  
    **URL:** `/marketing-agency-bahrain`  
    **PURPOSE:** Targeted SEO landing page for brands looking for a creative marketing agency in Bahrain.

16. **PAGE:** Niche Landing — Video Production Company Bahrain  
    **URL:** `/video-production-company-bahrain`  
    **PURPOSE:** Targeted SEO landing page for commercial video production services in Bahrain and the GCC.

17. **PAGE:** Niche Landing — Restaurant Video Marketing Bahrain  
    **URL:** `/restaurant-video-marketing-bahrain`  
    **PURPOSE:** Targeted SEO landing page focusing on video-driven marketing strategies for dining establishments.

18. **PAGE:** Privacy Policy  
    **URL:** `/privacy-policy`  
    **PURPOSE:** Legal document specifying privacy standards, data collection methods, and user rights.

19. **PAGE:** Terms & Conditions  
    **URL:** `/terms`  
    **PURPOSE:** Legal agreement governing website usage, service terms, and intellectual property.

#### Internal System Endpoints
- **URL:** `/api/projects` (GET endpoint returning full project JSON list)
- **URL:** `/api/projects/media` (GET endpoint returning media assets)
- **URL:** `/_not-found` (404 Error fallback page)

---

## 2. NAVIGATION

### Header Navbar

- **Brand Identifier:** Logo vector (`/HERO-LOGO.svg`) pointing to `/`
- **Home Shortcut:** Return Home icon button (visible on non-homepage routes)
- **Primary Menu Items:**
  1. **Work:** Links to `/work`
  2. **Services:** Links to `/services`
     - **Dropdown Options:**
       - "All Services →" -> Links to `/services`
       - "Content Production" -> Links to `/content-production`
       - "Brand Identity" -> Links to `/brand-identity`
       - "Paid Advertising" -> Disabled (`#`, marked "Coming Soon")
  3. **Team:** Links to `/team`
  4. **About:** Links to `/about`
  5. **Contact:** Links to `/estimate`
- **Header Action Button:** "BOOK A STRATEGY CALL" (Triggers quote inquiry modal)

### Mobile Navigation Drawer

- Brand Logo link (`/HERO-LOGO.svg` -> `/`)
- Menu items: Home (when on secondary pages), Work, Services (with expandable dropdown menu), Team, About, Contact.
- Copyright Notice: `© 2026 Cinmach Productions`
- Bottom Action Button: "BOOK A STRATEGY CALL"

### Footer Navigation

- **Brand Block:** Logo (`/HERO-LOGO.svg`) + Company Tagline: *"Cinematic content production for brands that demand more."*
- **Navigate Column:**
  - Work (`/work`)
  - Services (`/services`)
  - Team (`/team`)
  - About (`/about`)
  - Contact (`/estimate`)
- **Expertise Column (SEO Links):**
  - Restaurant Videography (`/restaurant-videography-bahrain`)
  - Food Videography (`/food-videography-bahrain`)
  - Marketing Agency (`/marketing-agency-bahrain`)
  - Video Production (`/video-production-company-bahrain`)
  - Marketing Guide (`/restaurant-video-marketing-bahrain`)
- **Contact Column:**
  - `contact@cinmachproductions.com`
  - `team@cinmachproductions.com`
  - WhatsApp Link (`https://wa.me/97330000000`)
  - Location: Manama, Bahrain
- **Social Column (Status: Soon):**
  - Instagram
  - LinkedIn
  - TikTok
- **Bottom Legal Bar:**
  - Copyright: `© 2026 CINMACH PRODUCTIONS. All rights reserved.`
  - Privacy Policy (`/privacy-policy`)
  - Terms & Conditions (`/terms`)
  - Location Tag: `Bahrain`

---

## 3. ALL CONTACT INFORMATION

### Public Email Addresses (Total: 3)

1. **`contact@cinmachproductions.com`**
   - **Used in:** Footer (`components/Footer.tsx`), Contact Page (`app/estimate/page.tsx`)
   - **Purpose:** Primary project inquiries and general client communications.

2. **`team@cinmachproductions.com`**
   - **Used in:** Footer (`components/Footer.tsx`), Contact Page (`app/estimate/page.tsx`)
   - **Purpose:** Production team liaison and technical client support.

3. **`cinmachproductions@gmail.com`**
   - **Used in:** Quote Request Form Submission Endpoint (`components/ProjectModal.tsx`)
   - **Purpose:** FormSubmit AJAX & POST action recipient for incoming project leads.

### Phone & Instant Messaging

- **Phone Number:** `+973 3XXX XXXX` (Display Text) / `tel:+97330000000` (Clickable Tel Link)
- **WhatsApp Number:** `+973 3XXX XXXX` (Display Text) / `https://wa.me/97330000000` (Direct WhatsApp Chat Link)

### Physical Location & Operating Hours

- **City & Country:** Manama, Bahrain
- **Regional Coverage:** Bahrain and wider Gulf / GCC region (on-location shoots everywhere)
- **Working Hours:**
  - Sunday – Thursday: 9:00 AM – 6:00 PM
  - Friday – Saturday: By appointment

### Direct Booking & Consultation Links

- **Cal.com Strategy Call Booking Link:**  
  `https://app.cal.com/embed/embed.js` (Namespace: `call-req`, Path: `cinmach-productions-re7k86/call-req`)

---

## 4. TEAM

**Total Team Members Listed:** 9 members across 3 organizational tiers.

### Executive Leadership (1)

1. **Suhail Ahmad Goni**
   - **Role:** Co-Founder & CEO
   - **Bio:** *"Suhail leads the company and makes sure everything runs smoothly. He focuses on growing the business and making sure every client gets the best possible results from our team."*
   - **Where Listed:** `/team` (Executive Leadership Row)
   - **Asset:** `/team-img/suhail.png`

### Production Department (4)

2. **Shayan**
   - **Role:** Lead Videographer & Head of Production (Team Lead)
   - **Bio:** *"Leads every production from planning to execution. Oversees creative direction on set, camera operation, shot composition, and ensures every project is captured to Cinmach's quality standards."*
   - **Where Listed:** `/team`
   - **Asset:** `/team-img/shayan.png`

3. **Moomin Shafi**
   - **Role:** Camera Assistant
   - **Skills:** Camera setup, Lens management, Equipment preparation, Battery & media handling
   - **Where Listed:** `/team`
   - **Asset:** `/team-img/Moomin.png`

4. **Faisal Malik**
   - **Role:** Lighting & Grip Specialist
   - **Skills:** Lighting setup, Modifiers & reflectors, Scene lighting, On-set equipment
   - **Where Listed:** `/team`
   - **Asset:** Placeholder Avatar

5. **Iram Nabi**
   - **Role:** Production Coordinator
   - **Skills:** Client coordination, Scheduling, Shot lists, Logistics, Location management
   - **Where Listed:** `/team`
   - **Asset:** Placeholder Avatar

### Post-Production Department (4)

6. **Wasim**
   - **Role:** Lead Editor & Head of Post-Production (Team Lead)
   - **Bio:** *"Leads the complete post-production workflow from storytelling and editing to color grading, sound design, and final delivery."*
   - **Where Listed:** `/team`
   - **Asset:** `/team-img/wasim.png`

7. **Mohsin Shafi**
   - **Role:** Motion Graphics & VFX Artist
   - **Skills:** Motion graphics, Logo animation, Visual effects, Screen replacement
   - **Where Listed:** `/team`
   - **Asset:** `/team-img/mohsin.png`

8. **Omar Farooq**
   - **Role:** Colorist
   - **Skills:** Color correction, Color grading, Skin tone balancing, Cinematic finishing
   - **Where Listed:** `/team`
   - **Asset:** Placeholder Avatar

9. **Adil Nazir**
   - **Role:** Sound Designer
   - **Skills:** Audio cleanup, Dialogue enhancement, Sound effects, Music mixing, Audio mastering
   - **Where Listed:** `/team`
   - **Asset:** Placeholder Avatar

#### Key Leadership Breakdown
- **Founder / CEO:** Yes (Suhail Ahmad Goni - Co-Founder & CEO)
- **Creative Director / Head of Production:** Yes (Shayan - Lead Videographer & Head of Production)
- **Head of Post-Production:** Yes (Wasim - Lead Editor & Head of Post-Production)
- **Camera/Lighting Team:** Yes (Shayan, Moomin Shafi, Faisal Malik)
- **Specialized Post Team:** Yes (Wasim, Mohsin Shafi, Omar Farooq, Adil Nazir)

---

## 5. COMPANY INFORMATION

- **Official Company Name:** CINMACH PRODUCTIONS
- **Short Name:** Cinmach
- **Headquarters:** Manama, Bahrain
- **Founders:** Suhail Ahmad Goni (Co-Founder & CEO)
- **Company Description:** Cinematic content agency and creative marketing company based in Bahrain, specializing in visual storytelling, brand identity, and commercial video production that turns viewers into paying customers.
- **Factual Statistics:**
  - **40+** Restaurants / Brands Served
  - **300%** Average Engagement Lift
  - **6** Industries Covered
  - **24 Hours** Guaranteed Inquiry Response Time
  - **+40%** Client Brand Growth
  - **100%** Client Trust Rate
- **Target Industries:**
  - Restaurants & Cafes (F&B)
  - Real Estate & Architecture
  - Hotels & Resorts / Luxury Hospitality
  - Gyms & Active Fitness Brands
  - Luxury Goods & Consumer Brands
  - Sports & Leisure Facilities
  - E-Commerce
- **Geographic Reach:** Manama, Bahrain, and all Member States of the Gulf Cooperation Council (GCC).

---

## 6. SERVICES

**TOTAL NUMBER OF SERVICES:** 3 Core Offerings

### 1. Content Production
- **Pages:** `/services`, `/content-production`, `/`
- **Tagline:** *"Cinematic content designed to capture attention."*
- **Description:** *"From restaurants and hotels to luxury real estate and fitness brands, we produce high-end video and photo content. Every frame is meticulously crafted to tell your story and drive engagement across all digital platforms."*
- **Deliverables:**
  - Food & Hospitality Cinematics
  - Real Estate & Space Walkthroughs
  - Gym & Fitness Promo Videos
  - Hotel & Resort Lifestyle Shoots
  - Commercial Video Production
  - Reels & Short-Form Content
- **Results Stat:** *"Our cinematic content consistently outperforms standard media in engagement and conversion."*
- **Associated CTAs:** "More details" (`/content-production`), "BOOK A STRATEGY CALL"

### 2. Brand Identity
- **Pages:** `/services`, `/brand-identity`, `/`
- **Tagline:** *"We build memorable brands that stand out."*
- **Description:** *"A brand is more than just a logo. We craft comprehensive visual identities, strategic positioning, and brand guidelines that resonate with your audience and set you apart in a crowded market."*
- **Deliverables:**
  - Logo Design & Visual Identity
  - Brand Strategy & Positioning
  - Brand Guidelines & Tone of Voice
  - Marketing Collateral Design
  - Packaging & Print Design
- **Results Stat:** *"Brands we build see higher recognition, trust, and long-term customer loyalty."*
- **Associated CTAs:** "More details" (`/brand-identity`), "BOOK A STRATEGY CALL"

### 3. Paid Advertising (Upcoming / Disabled)
- **Pages:** `/services`, `/paid-advertising`, `/`
- **Tagline:** *"Performance-driven campaigns built for sales."*
- **Description:** *"We don't just make things look good; we make them work. Our performance marketing team runs highly targeted Meta and Google ad campaigns, utilizing our custom creatives to generate high-quality leads and drive direct sales."*
- **Deliverables:**
  - Meta Ads (Facebook & Instagram)
  - Ad Creative Strategy & Testing
  - Retargeting & Audience Scaling
  - High-Converting Landing Pages
  - Campaign Analytics & Reporting
- **Results Stat:** *"Clients utilizing our paid ad strategies see significant improvements in ROAS and cost-per-lead."*
- **Associated CTAs:** "Coming Soon" (Disabled)

---

## 7. PORTFOLIO / WORK

- **TOTAL PORTFOLIO PROJECTS:** 7 Projects
- **TOTAL CATEGORIES:** 3 Categories ("Sports & Leisure", "Real Estate", "F&B")

### Individual Project Inventory

1. **The Royal Golf Club**
   - **Client Name:** The Royal Golf Club
   - **Category:** Sports & Leisure
   - **Year:** 2024
   - **Description:** *"A cinematic tour of Bahrain's premier championship golf course. Captured during the golden hour to highlight the manicured greens, water hazards, and luxury clubhouse architecture."*
   - **Location:** Riffa / Manama, Bahrain
   - **Services Involved:** Drone, Twilight, Cinematic, 4K (Video & Photo)
   - **Appears On:** `/`, `/work`
   - **Media Assets:** Video (`golf-player.mp4`), Photos (`green-18.jpg`, `clubhouse.jpg`)

2. **Dilmunia Waterfront Residences**
   - **Client Name:** Dilmunia Waterfront Residences
   - **Category:** Real Estate
   - **Year:** 2024
   - **Description:** *"A cinematic study of luxury coastal living. We captured the Dilmunia Waterfront Residences from dawn to dusk — drone sweeps over the sea, intimate interior moments, and golden hour light."*
   - **Location:** Dilmunia Island, Bahrain
   - **Services Involved:** Drone, HDR, Interior, 4K (Video & Photo)
   - **Appears On:** `/`, `/work`
   - **Media Assets:** Video (`dilmunia-tour.mp4`), Photos (`exterior-dusk.jpg`, `lobby.jpg`, `penthouse-view.jpg`)

3. **The Palm Villa — Al Areen**
   - **Client Name:** The Palm Villa
   - **Category:** Real Estate
   - **Year:** 2024
   - **Description:** *"Twilight cinematics for an ultra-luxury villa in Al Areen. Every shot captures the interplay between architecture and desert light."*
   - **Location:** Al Areen, Bahrain
   - **Services Involved:** Aerial, Twilight, 4K (Video & Photo)
   - **Appears On:** `/`, `/work`
   - **Media Assets:** Video (`villa-twilight.mp4`), Photos (`poolside.jpg`, `facade.jpg`)

4. **Seef District Tower**
   - **Client Name:** Seef District Tower
   - **Category:** Real Estate
   - **Year:** 2023
   - **Description:** *"City-living redefined. A slow-motion study of one of Bahrain's most prominent commercial towers."*
   - **Location:** Seef District, Bahrain
   - **Services Involved:** Interior, Slow Motion (Photo only)
   - **Appears On:** `/`, `/work`
   - **Media Assets:** Photo (`atrium.jpg`)

5. **Khaleej & Co.**
   - **Client Name:** Khaleej & Co.
   - **Category:** F&B
   - **Year:** 2024
   - **Description:** *"A brand film for Bahrain's most iconic café chain. We brought the warmth of Khaleeji culture into motion — rich textures, steam rising, intimate moments over coffee."*
   - **Location:** Bahrain
   - **Services Involved:** Food Motion, Brand Film, Editorial (Video & Photo)
   - **Appears On:** `/`, `/work`
   - **Media Assets:** Video (`coffee-pour.mp4`), Photos (`latte-art.jpg`, `brunch.jpg`)

6. **Flame & Salt**
   - **Client Name:** Flame & Salt
   - **Category:** F&B
   - **Year:** 2023
   - **Description:** *"Colour-graded food cinematics built around texture, heat, and appetite. Shot in slow motion to let every drop and char read on screen."*
   - **Location:** Bahrain
   - **Services Involved:** Texture, Colour Graded (Video & Photo)
   - **Appears On:** `/`, `/work`
   - **Media Assets:** Video (`chef-cooking-flambe.mp4`), Photo (`steak-grill.jpg`)

7. **Zafran House**
   - **Client Name:** Zafran House
   - **Category:** F&B
   - **Year:** 2023
   - **Description:** *"A full identity rollout — from brand film to motion graphics for social. Zafran House is a modern take on the traditional Khaleeji dining experience."*
   - **Location:** Bahrain
   - **Services Involved:** Identity, Motion (Photo only)
   - **Appears On:** `/`, `/work`
   - **Media Assets:** Photo (`interior-tables.jpg`)

---

## 8. WEBSITE SECTIONS BY PAGE

### HOME (`/`)
1. **Navbar:** Header navigation with logo, page links, services dropdown, and CTA button.
2. **Hero Section:** Live location clock, display headline, red accent indicator, subtext, main CTAs, conversion booking card with rotating quotes, and bottom key metrics bar.
3. **Featured Work (Portfolio Section):** Tabbed filter (All, Videos, Photos), responsive 9:16 vertical reel grid, secondary project cards, lightbox modal trigger, and link to full work archive.
4. **Services Table Section:** Sticky vertical scroll column showcasing Content Production and Brand Identity with image previews and deliverables.
5. **Process Section (ProcessSection):** Four-step methodology timeline ("We Scale Your Brand").
6. **Engagement Models Section (EngagementModels):** Three pricing/contract tiers ("Project Basis", "Monthly Retainer", "Bespoke Package").
7. **Call to Action Section (CTASection):** "Ready to elevate your brand?" full-width banner.
8. **Social Proof Section:** Brand growth stats (+40% Brand Growth, 100% Client Trust) paired with rotating client quote wheel.
9. **FAQ Section (FAQSection):** 5 collapsible accordion questions and answers.
10. **Footer:** Comprehensive site directory, contact details, social links, and copyright text.

### ABOUT US (`/about`)
1. Navbar
2. Hero Section ("About Us - A production company built on results")
3. Our Story Section ("We started with one camera" - founding narrative & 40+ restaurant stat)
4. By The Numbers Section (40+ Restaurants Served, 300% Engagement Lift, 6 Industries, 24h Response)
5. Call to Action Section (CTASection)
6. Footer

### SERVICES OVERVIEW (`/services`)
1. Navbar
2. Hero Section ("Our Services - Built to turn attention into real customers")
3. Detailed Services Stack:
   - Service 01: Content Production (Details, Image, Deliverables, Results, Action Links)
   - Service 02: Brand Identity (Details, Image, Deliverables, Results, Action Links)
   - Service 03: Paid Advertising (Details, Image, Deliverables, Results, Disabled Status)
4. Call to Action Section (CTASection)
5. Footer

### CONTENT PRODUCTION (`/content-production`)
1. Navbar
2. Hero Section ("Content Production")
3. Service Deep-Dive & Deliverables Grid
4. Call to Action Section (CTASection)
5. Footer

### BRAND IDENTITY (`/brand-identity`)
1. Navbar
2. Hero Section ("Brand Identity")
3. Branding Offerings & Identity Deliverables
4. Call to Action Section (CTASection)
5. Footer

### PORTFOLIO ARCHIVE (`/work`)
1. Navbar
2. Hero Section ("Our Work - Archive")
3. Media Filter Switcher (ALL, VIDEOS, PHOTOS)
4. Project Grid Gallery (7 Projects with Lightbox trigger)
5. Call to Action Section (CTASection)
6. Footer

### TEAM PAGE (`/team`)
1. Navbar
2. Hero Section ("Our Team - Small team. Big results.")
3. Executive Leadership Section (Suhail Ahmad Goni Card)
4. Departmental Structure Section:
   - Department 01: Production Department (Shayan, Moomin Shafi, Faisal Malik, Iram Nabi)
   - Department 02: Post-Production Department (Wasim, Mohsin Shafi, Omar Farooq, Adil Nazir)
5. Core Values Section ("Quality Over Quantity", "Results First", "Direct Communication")
6. Call to Action Section (CTASection)
7. Footer

### CONTACT & ESTIMATE (`/estimate`)
1. Navbar
2. Hero Section ("Contact Us - Ready to start a project?")
3. Reach Us Directly List (Email, Support, WhatsApp, Phone)
4. Follow Us / Social Section (Instagram, LinkedIn, TikTok)
5. Location Block (Manama, Bahrain details)
6. Working Hours Block (Sunday-Thursday 9-6, Friday-Saturday by appointment)
7. Footer

### BLOG OVERVIEW (`/blog`)
1. Navbar
2. Hero Section ("Insights & Strategy")
3. Article List Grid (2 published articles with read time and excerpts)
4. Call to Action Section (CTASection)
5. Footer

### BLOG POST PAGES (`/blog/[slug]`)
1. Navbar
2. Article Header (Title, Publish Date, Read Time)
3. Full Article Body Text & Embedded Links
4. Related Articles / Back Link
5. Call to Action Section (CTASection)
6. Footer

### SEO NICHE LANDING PAGES (`/restaurant-videography-bahrain`, etc.)
1. Navbar
2. Specialized Niche Hero Section
3. Tailored Value Proposition & Industry Stats
4. Niche Deliverables & Use Cases
5. Relevant FAQ Accordion
6. Call to Action Section (CTASection)
7. Footer

### LEGAL PAGES (`/privacy-policy`, `/terms`)
1. Navbar
2. Legal Document Header
3. Full Policy Clauses & Terms Text
4. Footer

---

## 9. FORMS

**TOTAL FORMS:** 1 Core Form (`ProjectModal` Lead Generation & Quote Request Form)

- **Form Name:** Start Your Project Quote Request
- **Location:** Modal overlay accessible site-wide via "Book a Strategy Call" or quote buttons.
- **Purpose:** Capture detailed project requirements, budget, industry, and contact info for new clients.
- **Fields List:**
  1. **Full Name** (Input: `text`, Required)
  2. **Brand Name** (Input: `text`, Required)
  3. **WhatsApp Number** (Input: `tel`, Required)
  4. **Service Needed** (Custom Dropdown Options: *Content Production*, *Brand Identity*, *Paid Advertising*, *Other*)
  5. **Industry** (Custom Dropdown Options: *Restaurants & Cafes*, *Real Estate*, *Hotels & Resorts*, *Gyms & Fitness*, *Luxury Brands*, *E-commerce*, *Other*)
  6. **Estimated Budget** (Custom Dropdown Options: *Less than 500 BHD*, *500 - 1,500 BHD*, *1,500 - 5,000 BHD*, *5,000+ BHD*, *Not sure yet*)
  7. **Project Details & Vision** (Textarea, Optional)
- **Submit Button Text:** `SUBMIT REQUEST →` (Shows `SUBMITTING...` during execution)
- **Success State Messages:**
  - **Standard Success:** *"Request Received - Thank you for reaching out. Our team will review your inquiry and get back to you within 24 hours."*
  - **Activation Fallback Notice:** *"Activation Needed - FormSubmit has sent an activation email to cinmachproductions@gmail.com. Please check your inbox and click the confirmation link."*
- **Submission Destination:** FormSubmit AJAX POST (`https://formsubmit.co/ajax/cinmachproductions@gmail.com`) with HTTP form fallback to `https://formsubmit.co/cinmachproductions@gmail.com`. All leads arrive at `cinmachproductions@gmail.com`.

---

## 10. BOOKING / CALENDAR

- **Platform:** Cal.com
- **Embed Component:** `components/CalEmbed.tsx`
- **Embed Script Source:** `https://app.cal.com/embed/embed.js`
- **Namespace:** `call-req`
- **Calendar Direct Path:** `cinmach-productions-re7k86/call-req`
- **Purpose:** Enables clients to directly schedule a live strategy call with the Cinmach leadership team.
- **Trigger Locations:** "Book a Strategy Call" buttons across Navbar, Mobile Drawer, Hero Section, Conversion Card, Services Page, and CTA Section.

---

## 11. SOCIAL MEDIA

1. **Platform:** Instagram  
   **Account Handle:** `@cinmach`  
   **URL:** `https://instagram.com/cinmach`  
   **Where Used:** Footer, Contact Page (`/estimate`)  
   **Status:** Labeled "(Soon)"

2. **Platform:** LinkedIn  
   **Account Handle:** `Cinmach Productions`  
   **URL:** `https://linkedin.com/company/cinmach`  
   **Where Used:** Footer, Contact Page (`/estimate`)  
   **Status:** Labeled "(Soon)"

3. **Platform:** TikTok  
   **Account Handle:** `@cinmach`  
   **URL:** `https://tiktok.com/@cinmach`  
   **Where Used:** Footer, Contact Page (`/estimate`)  
   **Status:** Labeled "(Soon)"

4. **Platform:** WhatsApp  
   **Account Handle:** Direct Contact Line  
   **URL:** `https://wa.me/97330000000`  
   **Where Used:** Footer, Contact Page (`/estimate`)  
   **Status:** Active Link

---

## 12. TESTIMONIALS & CLIENT REVIEWS

**TOTAL TESTIMONIAL QUOTES:** 15 Quotes

### Hero Conversion Card Quotes (5 Rotating Quotes)
1. *"We started getting real clients within weeks."*
2. *"Our conversions increased almost instantly."*
3. *"The campaign actually brought people to our business."*
4. *"We saw a clear jump in engagement after working with them."*
5. *"Finally, creative marketing that converts into real business."*

### Social Proof Section Wheel (10 Named Testimonials)
1. *"Our engagement started bringing in real clients. People were reaching out saying they saw our campaign."*  
   — **Ayaan Khan** (Real Estate Director)
2. *"The quality of the video immediately changed how people perceived our brand. We look premium now."*  
   — **Sara Malik** (Fashion Founder)
3. *"We've seen a massive spike in conversions since the campaign went live. It actually works."*  
   — **Omar Hussain** (Tech Startup)
4. *"They understood our vision and translated it into visuals that actually represent who we are."*  
   — **Zaid Ahmed** (Hospitality Group)
5. *"The footage is stunning, but the results are better. Our digital presence is at an all-time high."*  
   — **Layla Yusuf** (Lifestyle Brand)
6. *"Finally found an agency that treats our brand like art. The response from our audience was huge."*  
   — **Faisal Aziz** (Fitness Franchise)
7. *"It's rare to find creative direction this high in the region. They've set a new standard for us."*  
   — **Noor Al-Bahrani** (Corporate Leader)
8. *"Our product launch was a success because the brand film built so much hype before we even went live."*  
   — **Hamad Qasim** (Product Designer)
9. *"The cinematic look they gave us helped us secure a major partnership. It was a game changer."*  
   — **Mariam Shah** (Retail Brand)
10. *"The best investment we've made this year. The campaign paid for itself within the first month."*  
    — **Rashid Mahmood** (Hospitality Director)

### Explicit Client Portfolio Brands
- The Royal Golf Club
- Dilmunia Waterfront Residences
- The Palm Villa — Al Areen
- Seef District Tower
- Khaleej & Co.
- Flame & Salt
- Zafran House
- Over 40 unnamed restaurants, hotels, and luxury brands across Bahrain and the Gulf.

---

## 13. FREQUENTLY ASKED QUESTIONS (FAQ)

**Location:** `components/FAQSection.tsx` (Appears on Homepage, SEO landing pages, and Services context)

1. **Q:** How does cinematic content help my brand?  
   **A:** High-end visual content elevates your brand's perceived value, increases engagement, and drives targeted conversions. It turns digital views into real business growth. Learn more about our Creative Services.

2. **Q:** What is included in a content production project?  
   **A:** We handle everything from start to finish: creative concept development, pre-production planning, high-end filming, and professional post-production including cinematic editing, color grading, and sound design.

3. **Q:** Can you help with my company's branding and logo design?  
   **A:** Absolutely. We offer complete Brand Identity design services, including custom logo design, visual positioning, curated color palettes, typography, and professional brand guidelines to make your business memorable.

4. **Q:** Do you produce content optimized for social media?  
   **A:** Yes, we produce high-end, short-form cinematic video reels and photography specifically formatted and optimized to stand out and capture attention on modern digital platforms like Instagram and TikTok.

5. **Q:** Where are you based?  
   **A:** We are a creative marketing and production agency located in Manama, partnering with ambitious brands across Bahrain and the GCC.

---

## 14. CTA INVENTORY

1. **CTA Text:** `BOOK A STRATEGY CALL` / `Book a Strategy Call`  
   **Location:** Navbar, Mobile Menu, Hero Section, Conversion Card, Services Page, Global CTA Banner  
   **Destination/Action:** Triggers Cal.com scheduler or opens `ProjectModal`.

2. **CTA Text:** `View Our Work →` / `OUR WORK`  
   **Location:** Hero Section, Homepage Portfolio Block, Work Page Banner  
   **Destination/Action:** Scrolls to `#work` or navigates to `/work`.

3. **CTA Text:** `ALL SERVICES` / `ALL SERVICES →` / `All Services →`  
   **Location:** Navbar Dropdown, Homepage Services Block, Mobile Menu  
   **Destination/Action:** Navigates to `/services`.

4. **CTA Text:** `More details`  
   **Location:** Services Page (`/services`) service cards  
   **Destination/Action:** Navigates to `/content-production` or `/brand-identity`.

5. **CTA Text:** `Inquire for project rates →`  
   **Location:** Engagement Models section (Card 01: One-Time Projects)  
   **Destination/Action:** Opens `ProjectModal`.

6. **CTA Text:** `Apply for monthly spot →`  
   **Location:** Engagement Models section (Card 02: Monthly Videos & Photos)  
   **Destination/Action:** Opens `ProjectModal`.

7. **CTA Text:** `Book a consultation →`  
   **Location:** Engagement Models section (Card 03: Complete Branding & Video)  
   **Destination/Action:** Opens `ProjectModal`.

8. **CTA Text:** `SUBMIT REQUEST →`  
   **Location:** Lead Form (`ProjectModal`)  
   **Destination/Action:** Sends lead payload to FormSubmit.co.

---

## 15. EXTERNAL SERVICES / INTEGRATIONS

1. **Cal.com:** Appointment scheduling engine embedded via JavaScript script (`https://app.cal.com/embed/embed.js`).
2. **FormSubmit.co:** Form backend service processing lead inquiries (`https://formsubmit.co/ajax/cinmachproductions@gmail.com`).
3. **Cloudinary API:** External video/image CDN asset repository manager (`lib/projects.ts`).
4. **Mixkit Video CDN:** Public preview video stream host for fallback portfolio reel playback.
5. **Unsplash CDN:** High-resolution image asset host for project thumbnails and service backgrounds.
6. **Pinterest Media CDN:** Image host for service card media (`i.pinimg.com`).
7. **Google Fonts API:** Web font pre-connect and asset loader (`fonts.googleapis.com`).

---

## 16. MEDIA & ASSETS INVENTORY

| Asset Filename / Reference | Purpose | Associated Page / Section |
| :--- | :--- | :--- |
| `/HERO-LOGO.svg` | Main corporate vector logo | Navbar, Footer, Hero |
| `/logo.svg` | Secondary logo asset | Public assets |
| `/logo.png` | PNG logo file | Public assets |
| `/bg-rest.mp4` | Restaurant ambient background video | Hero & Landing Media |
| `/team-img/suhail.png` | Team photo: Suhail Ahmad Goni | `/team` Executive Leadership |
| `/team-img/shayan.png` | Team photo: Shayan | `/team` Production Department |
| `/team-img/wasim.png` | Team photo: Wasim | `/team` Post-Production Department |
| `/team-img/mohsin.png` | Team photo: Mohsin Shafi | `/team` Post-Production Department |
| `/team-img/Moomin.png` | Team photo: Moomin Shafi | `/team` Production Department |

---

## 17. PAGE-BY-PAGE MASTER MAP

```
CINMACH PRODUCTIONS WEBSITE
Total Pages: 19

1. Homepage
   URL: /
   Sections: Navbar, Hero (Clock, Headline, Conversion Card, Metrics), Featured Work (Filterable Grid), Services Table, Process (4 Steps), Engagement Models (3 Tiers), CTA Banner, Social Proof (Stats & Wheel), FAQ (5 Accordions), Footer.

2. About Us
   URL: /about
   Sections: Navbar, Hero Header, Our Story, By The Numbers, CTA Banner, Footer.

3. Services Overview
   URL: /services
   Sections: Navbar, Hero Header, Service 01 (Content Production), Service 02 (Brand Identity), Service 03 (Paid Advertising), CTA Banner, Footer.

4. Content Production Service
   URL: /content-production
   Sections: Navbar, Hero Header, Deliverables Grid, CTA Banner, Footer.

5. Brand Identity Service
   URL: /brand-identity
   Sections: Navbar, Hero Header, Deliverables & Offerings, CTA Banner, Footer.

6. Paid Advertising (Upcoming)
   URL: /paid-advertising
   Sections: Navbar, Hero Header (Disabled Notice), CTA Banner, Footer.

7. Portfolio / Work Archive
   URL: /work
   Sections: Navbar, Hero Header, Filter Switcher (ALL, VIDEOS, PHOTOS), Project Grid (7 Projects + Lightbox), CTA Banner, Footer.

8. Team Page
   URL: /team
   Sections: Navbar, Hero Header, Executive Leadership (CEO), Departmental Structure (Production & Post-Production), Core Values, CTA Banner, Footer.

9. Contact & Estimate Page
   URL: /estimate
   Sections: Navbar, Hero Header, Direct Contact Details, Social Channels, Location Map/Info, Working Hours, Footer.

10. Blog Overview
    URL: /blog
    Sections: Navbar, Hero Header, Article Listing Grid, CTA Banner, Footer.

11. Blog Article 1
    URL: /blog/how-cinematic-video-drives-restaurant-footfall-bahrain
    Sections: Navbar, Article Header, Article Body Content, Related Articles, CTA Banner, Footer.

12. Blog Article 2
    URL: /blog/food-videography-lighting-techniques-that-sell
    Sections: Navbar, Article Header, Article Body Content, Related Articles, CTA Banner, Footer.

13. SEO Niche — Restaurant Videography Bahrain
    URL: /restaurant-videography-bahrain
    Sections: Navbar, Specialized Hero, Value Proposition, Deliverables, Niche FAQ, CTA Banner, Footer.

14. SEO Niche — Food Videography Bahrain
    URL: /food-videography-bahrain
    Sections: Navbar, Specialized Hero, Value Proposition, Deliverables, Niche FAQ, CTA Banner, Footer.

15. SEO Niche — Marketing Agency Bahrain
    URL: /marketing-agency-bahrain
    Sections: Navbar, Specialized Hero, Value Proposition, Deliverables, Niche FAQ, CTA Banner, Footer.

16. SEO Niche — Video Production Company Bahrain
    URL: /video-production-company-bahrain
    Sections: Navbar, Specialized Hero, Value Proposition, Deliverables, Niche FAQ, CTA Banner, Footer.

17. SEO Niche — Restaurant Video Marketing Bahrain
    URL: /restaurant-video-marketing-bahrain
    Sections: Navbar, Specialized Hero, Value Proposition, Deliverables, Niche FAQ, CTA Banner, Footer.

18. Privacy Policy
    URL: /privacy-policy
    Sections: Navbar, Policy Document Body, Footer.

19. Terms & Conditions
    URL: /terms
    Sections: Navbar, Terms Document Body, Footer.
```

---

## 18. IMPORTANT NUMBERS SUMMARY

- **Pages:** 19 (19 user-facing pages + 2 API routes)
- **Main Navigation Items:** 5 links + 1 CTA button
- **Services:** 3 (Content Production, Brand Identity, Paid Advertising)
- **Portfolio Projects:** 7
- **Portfolio Categories:** 3 ("Sports & Leisure", "Real Estate", "F&B")
- **Team Members:** 9
- **Testimonials:** 15 (5 in Hero rotation, 10 in Social Proof wheel)
- **Forms:** 1 (Start Your Project Lead Form Modal)
- **Email Addresses:** 3 (`contact@cinmachproductions.com`, `team@cinmachproductions.com`, `cinmachproductions@gmail.com`)
- **Phone Numbers:** 1 (`+973 3XXX XXXX` / `tel:+97330000000`)
- **Social Platforms:** 4 (Instagram, LinkedIn, TikTok, WhatsApp)
- **Booking Systems:** 1 (Cal.com embed `call-req`)
- **External Integrations:** 7 (Cal.com, FormSubmit.co, Cloudinary, Mixkit, Unsplash, Pinterest Media CDN, Google Fonts)
