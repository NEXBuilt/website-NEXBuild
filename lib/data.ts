// ─────────────────────────────────────────────────────────────
//  NEXBuild — all editable site content lives in this file.
//  Anything marked EDIT ME is placeholder copy you should replace.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: "NEXBuild",
  tagline: "We build what's next.",
  description:
    "NEXBuild is a small software studio building websites, dashboards, backend systems and AI-powered products for growing businesses.",
  email: "hello@nexbuild.dev", // EDIT ME
  links: {
    github: "https://github.com/NEXBuild", // EDIT ME
    linkedin: "https://www.linkedin.com/company/nexbuild", // EDIT ME
    instagram: "https://instagram.com/nexbuild", // EDIT ME
  },
};

export const nav = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "Process", href: "/process" },
  { label: "Team", href: "/team" },
  { label: "Contact", href: "/contact" },
];

export const stack = ["React", "Next.js", "Python", "FastAPI", "AI", "APIs"];

export type ServiceIcon = "web" | "chart" | "spark" | "server";

export const services: {
  title: string;
  blurb: string;
  tags: string[];
  icon: ServiceIcon;
}[] = [
  {
    title: "Web development",
    blurb:
      "Fast, responsive websites and web applications, designed to look sharp and load quickly on any device.",
    tags: ["React", "Next.js"],
    icon: "web",
  },
  {
    title: "Dashboards",
    blurb:
      "Admin panels and analytics tools that turn raw data into screens your team can actually act on.",
    tags: ["React", "APIs"],
    icon: "chart",
  },
  {
    title: "AI solutions",
    blurb:
      "AI-powered features and automation that fit into your product, not bolted on top of it.",
    tags: ["Python", "LLMs"],
    icon: "spark",
  },
  {
    title: "Backend & APIs",
    blurb:
      "Reliable APIs and backend systems that stay quick, documented and easy to extend.",
    tags: ["Python", "FastAPI"],
    icon: "server",
  },
];

export type Project = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  stack: string[];
  /**
   * Drop your real screenshot into /public/projects and set the path here,
   * e.g. "/projects/urban-sensing.png". Until then a mockup placeholder shows.
   */
  image?: string;
  liveUrl?: string; // EDIT ME — link to the live project
  problem: string;
  solution: string;
  features: string[];
  result: string;
};

export const projects: Project[] = [
  {
    slug: "urban-sensing",
    title: "AI-Powered Urban Sensing Dashboard",
    category: "Dashboard · AI",
    summary:
      "A live city map that surfaces road damage and incidents so teams can see problems the moment they appear.",
    stack: ["React", "Vite", "Leaflet", "APIs"],
    image: "/projects/urban-sensing.jpg",
    liveUrl: undefined,
    problem:
      "City teams collect road and incident data from many sources, but it sits in separate tools. Spotting where damage is clustering, and what to fix first, takes manual digging.",
    solution:
      "We built a single dashboard that plots incoming reports on a live map, analyses road damage, and shows trends alongside the map so the next action is obvious.",
    features: [
      "Live interactive map",
      "Road damage analysis",
      "Incident tracking",
      "Analytics and trends",
      "Responsive on desktop and mobile",
    ],
    // EDIT ME — replace with a real outcome or metric
    result:
      "One screen replaces several tools. Teams can see what is happening across the city and where to send people first.",
  },
  {
    slug: "volunteer-system",
    title: "Volunteer Registration Platform",
    category: "Web app",
    summary:
      "A mobile-friendly registration flow that gets volunteers signed up in minutes and gives organisers a clean list.",
    stack: ["React", "Backend", "Responsive UI"],
    image: "/projects/volunteer-system.jpg",
    problem:
      "Organisers were collecting volunteer sign-ups through scattered forms and messages, then cleaning the data by hand before every event.",
    solution:
      "We built a simple registration platform with a short sign-up flow, validation on every field, and a backend that keeps every entry in one organised place.",
    features: [
      "Short, mobile-first sign-up flow",
      "Field validation and clear errors",
      "Central registration data store",
      "Responsive layout for any screen",
    ],
    // EDIT ME — replace with a real outcome or metric
    result:
      "Sign-ups arrive in one consistent format, ready to use.",
  },
  {
    slug: "devstudenttools",
    title: "DevStudentTools",
    category: "Web platform",
    summary:
      "A collection of practical developer tools for students, built as one fast, clean web platform.",
    stack: ["Web platform", "Tools", "Analytics"],
    problem:
      "Students hunting for small developer utilities end up jumping between ad-heavy sites that are slow and inconsistent.",
    solution:
      "We built one platform that groups the tools they reach for most, with a fast interface and analytics that show which tools people actually use.",
    features: [
      "Focused set of developer tools",
      "Fast, distraction-free interface",
      "Usage analytics",
      "Works on any device",
    ],
    // EDIT ME — replace with a real outcome or metric
    result:
      "One place for everyday tools, with usage data that guides what gets built next.",
  },
];

export const processSteps = [
  {
    step: "Discover",
    text: "We learn your business, your users and what the product needs to achieve.",
  },
  {
    step: "Design",
    text: "Requirements become a clear product experience you can review before we write code.",
  },
  {
    step: "Build",
    text: "We develop the real product in short cycles and show progress along the way.",
  },
  {
    step: "Test",
    text: "We check functionality, edge cases and responsiveness on real devices.",
  },
  {
    step: "Launch",
    text: "We deploy, hand everything over and stay around for what comes next.",
  },
];

export const reasons = [
  {
    title: "Fast",
    text: "Short communication loops and focused development keep projects moving.",
  },
  {
    title: "Technical",
    text: "Modern frontend, backend, AI and data skills under one roof.",
  },
  {
    title: "Direct",
    text: "You talk to the people building your product, with no account managers in between.",
  },
];

export const team = [
  {
    name: "Thinakar",
    role: "Tech Lead",
    skills: ["React", "Python", "Next.js", "APIs"],
    photo: undefined as string | undefined, // e.g. "/team/thinakar.jpg"
  },
  {
    name: "Raghul",
    role: "Developer", // EDIT ME
    skills: ["React", "UI", "APIs"], // EDIT ME
    photo: undefined as string | undefined,
  },
  {
    name: "Karthi",
    role: "Developer", // EDIT ME
    skills: ["Backend", "Data", "AI"], // EDIT ME
    photo: undefined as string | undefined,
  },
];

export const budgets = [
  "Not sure yet",
  "Under ₹50,000",
  "₹50,000 – ₹1,50,000",
  "₹1,50,000 – ₹5,00,000",
  "₹5,00,000+",
];
