export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "quote"; text: string };

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  body: BlogBlock[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "how-cinematic-video-drives-restaurant-footfall-bahrain",
    title: "How Cinematic Video Drives Restaurant Footfall in Bahrain",
    excerpt:
      "High-quality video content increases footfall and engagement for restaurants across Bahrain. Here's the framework we use with F&B clients.",
    date: "2026-04-02",
    readTime: "7 min read",
    body: [
      {
        type: "p",
        text: "Bahrain's restaurant scene is crowded and getting more competitive every quarter. New concepts open in Seef, Adliya and Amwaj almost monthly, and diners scroll past dozens of options before they decide where to book a table. In that environment, the quality of your video content isn't a nice-to-have -- it's often the entire reason a customer chooses you over the restaurant next door.",
      },
      { type: "h2", text: "Attention is the real currency" },
      {
        type: "p",
        text: "A phone camera can technically capture a plate of food. A cinematic production captures the steam rising off it, the sound of a sear hitting a hot pan, and the warmth of a dining room at golden hour. That difference in craft directly changes how long someone watches, and how much they trust the brand behind it.",
      },
      {
        type: "quote",
        text: "Our cinematic content consistently outperforms standard media in engagement and conversion.",
      },
      { type: "h2", text: "From views to reservations" },
      {
        type: "p",
        text: "We measure success differently than a typical content shoot. Every brand film and reel we produce for an F&B client is built around a specific action -- a reservation, a walk-in, a delivery order -- and shot with that outcome in mind. That means framing the entrance so people recognize it when they arrive, showing real portion sizes so expectations match reality, and cutting for the platform the content will actually live on.",
      },
      {
        type: "p",
        text: "Across the 40+ restaurants and hospitality brands we've worked with, the pattern holds: brands that invest in consistent, high-craft video content see engagement lift that compounds month over month, because the algorithm rewards watch time and the audience rewards authenticity.",
      },
      { type: "h2", text: "What this looks like in practice" },
      {
        type: "p",
        text: "A typical restaurant engagement starts with a single brand film -- 60 to 90 seconds that captures the space, the food, and the experience end to end. From there, we cut that footage into a library of short-form reels designed for Instagram and TikTok, so the restaurant has months of content from a single production day.",
      },
      {
        type: "p",
        text: "If you're evaluating whether cinematic content is worth the investment for your restaurant, the honest answer is: it depends on whether you're trying to fill tables or just look good online. If it's the former, the production quality is not optional.",
      },
    ],
  },
  {
    slug: "food-videography-lighting-techniques-that-sell",
    title: "Food Videography Lighting Techniques That Sell",
    excerpt:
      "A technical breakdown of food videography lighting, macro cinematography, and culinary styling that makes a dish irresistible on screen.",
    date: "2026-03-12",
    readTime: "6 min read",
    body: [
      {
        type: "p",
        text: "Food videography lives and dies on lighting. The same dish can look flat and unappetizing under the wrong setup, or genuinely mouth-watering with the right one. This is a technical look at how our production team lights food for maximum appetite appeal -- the same approach we bring to every F&B shoot.",
      },
      { type: "h2", text: "Backlight first, always" },
      {
        type: "p",
        text: "Front lighting flattens texture -- exactly what you don't want with food. We build every setup around a strong backlight or side-backlight to catch steam, glaze, and the natural texture of a sear or a crumb. That single decision does more for appetite appeal than almost anything else in the shot.",
      },
      { type: "h2", text: "Macro cinematography and focus" },
      {
        type: "p",
        text: "Shallow depth of field draws the eye exactly where you want it -- a drizzle of sauce, a cross-section of a burger, the crackle of a crust. We shoot macro-focused inserts for nearly every dish, because the close-up detail is often what makes someone stop scrolling.",
      },
      {
        type: "quote",
        text: "Colour-graded food cinematics built around texture, heat, and appetite.",
      },
      { type: "h2", text: "Styling that survives the lights" },
      {
        type: "p",
        text: "Hot lights and hot food don't mix well over time -- ice cream melts, garnish wilts, steam disappears. Our styling process works in short bursts: build the plate, shoot the hero angles fast, then rebuild for the next setup rather than trying to hold one plate under lights for twenty minutes.",
      },
      { type: "h2", text: "Colour grading for appetite, not accuracy" },
      {
        type: "p",
        text: "In the edit, we push warmth into highlights and keep shadows rich rather than crushed, because warmth reads as freshness and comfort on screen. It's a deliberate departure from colour-accurate grading -- the goal isn't a perfect reproduction of the plate, it's a reproduction of how good the dish tastes.",
      },
      {
        type: "p",
        text: "Get the lighting, the macro work, and the grade right, and food content stops being decorative and starts being a genuine sales tool -- which is exactly how we approach every shoot.",
      },
    ],
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}
