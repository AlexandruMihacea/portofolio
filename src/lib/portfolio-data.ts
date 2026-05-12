import type { StaticImageData } from "next/image";
import maneleImage from "@/assets/manele.io.avif";
import vengencyImage from "@/assets/vengency.com.png";

export type Project = {
  title: string;
  slug: string;
  category: string;
  shortDescription: string;
  role: string;
  impact: string;
  techStack: string[];
  accent: string;
  mockup: "audio" | "agency" | "logistics" | "marketplace" | "football";
  image?: StaticImageData;
  links: {
    demo?: string;
    github?: string;
  };
  caseStudy: {
    problem: string;
    solution: string;
    highlights: string[];
    outcome: string;
  };
};

export const metrics = [
  {
    value: "20k+",
    label: "organic users",
    detail: "Scaled Manele.io without paid acquisition.",
  },
  {
    value: "50+",
    label: "agency projects",
    detail: "Delivered full-cycle web, brand, and design work.",
  },
  {
    value: "Systematic",
    label: "software engineering",
    detail: "Worked on mission-critical defense software.",
  },
  {
    value: "AI",
    label: "native ventures",
    detail: "Building products around LLM and generation systems.",
  },
];

export const ventures = [
  {
    title: "Manele.io",
    eyebrow: "AI music platform",
    description:
      "A culturally specific prompt-to-audio product with 20k+ organic users, tuned generation flows, and scaling discipline around infrastructure costs.",
    link: "https://manele.io",
  },
  {
    title: "Vengency",
    eyebrow: "Creative tech agency",
    description:
      "Founded and scaled an execution-heavy agency delivering 50+ websites, brand systems, and digital launches for small businesses.",
    link: "https://vengency.com",
  },
  {
    title: "Seacortex",
    eyebrow: "AI-native venture studio",
    description:
      "Current operating umbrella for rapid product experiments, distribution-led growth, and applied AI systems built for narrow markets.",
    link: "https://seacortex.com",
  },
];

export const projects: Project[] = [
  {
    title: "Manele.io",
    slug: "manele-io",
    category: "AI Product",
    shortDescription:
      "Prompt-to-audio platform built for a specific cultural genre, scaled to 20k+ users with zero marketing spend.",
    role: "Founder, product engineer, infrastructure owner",
    impact: "20k+ organic users",
    techStack: ["Next.js", "AI audio", "Cloud infra", "Prompt systems"],
    accent: "#d5ff3f",
    mockup: "audio",
    image: maneleImage,
    links: {
      demo: "https://manele.io",
    },
    caseStudy: {
      problem:
        "Generic AI music tools did not understand the sound, language, and cultural expectations of a specific genre audience.",
      solution:
        "Built a focused generation experience with prompt shaping, audio pipeline tuning, and product flows optimized for fast experimentation.",
      highlights: [
        "Designed the prompt-to-audio loop from user input to generated track.",
        "Managed infrastructure scaling and cost pressure as organic traffic grew.",
        "Kept acquisition fully organic by leaning on shareability and cultural specificity.",
      ],
      outcome:
        "Reached 20k+ users without a marketing budget, proving both demand and distribution efficiency.",
    },
  },
  {
    title: "Danube River Logistics",
    slug: "danube-logistics",
    category: "Logistics Platform",
    shortDescription:
      "Real-time grain logistics system for the Romanian Danube sector, built around vessel telemetry and cargo workflows.",
    role: "Bachelor's thesis, full-stack product builder",
    impact: "Digitized port coordination workflows",
    techStack: ["Real-time data", "Maps", "Workflow systems", "Dashboards"],
    accent: "#00c8bc",
    mockup: "logistics",
    links: {},
    caseStudy: {
      problem:
        "Port operators coordinated vessel and cargo loading workflows through fragmented, paper-heavy processes.",
      solution:
        "Created a centralized data layer combining vessel telemetry, cargo status, and loading coordination into one operational interface.",
      highlights: [
        "Modeled vessels, cargo, and port-side loading states.",
        "Turned manual updates into a shared real-time operating picture.",
        "Focused the UX on dispatch clarity and exception visibility.",
      ],
      outcome:
        "A functional applied logistics platform showing how niche infrastructure workflows can be modernized with software.",
    },
  },
  {
    title: "Funeral Services Marketplace",
    slug: "funeraria",
    category: "Vertical Marketplace",
    shortDescription:
      "Death-care marketplace focused on transparent pricing and urgent, high-stress decision-making flows.",
    role: "Master's thesis, product and marketplace engineer",
    impact: "Transparent pricing for a low-trust market",
    techStack: ["Marketplace UX", "Pricing engine", "Full-stack", "Conversion"],
    accent: "#8f5cff",
    mockup: "marketplace",
    links: {
      github: "https://github.com/AlexandruMihacea/Funeraria",
    },
    caseStudy: {
      problem:
        "Families often need to compare funeral services under time pressure, with unclear pricing and low trust.",
      solution:
        "Developed a specialized marketplace with structured offers, transparent pricing, and a UX designed for fast comprehension.",
      highlights: [
        "Built a pricing model for service packages and provider comparison.",
        "Reduced cognitive load with clear flows and concise choices.",
        "Designed for urgency without making the experience feel transactional or cold.",
      ],
      outcome:
        "A functional thesis product for a difficult vertical where clarity and trust matter more than feature volume.",
    },
  },
  {
    title: "Footbud",
    slug: "footbud",
    category: "Mobile Marketplace",
    shortDescription:
      "Marketplace for amateur football that helps solo players and small groups organize local matches.",
    role: "Co-founder and product architect",
    impact: "Solved local match liquidity around players and bookings",
    techStack: ["Mobile app", "Matchmaking", "Bookings", "Marketplace logic"],
    accent: "#1db954",
    mockup: "football",
    links: {},
    caseStudy: {
      problem:
        "Amateur football players struggle to find enough people, available pitches, and reliable coordination for local matches.",
      solution:
        "Architected social matchmaking and booking flows that connect solo players, small groups, and available games.",
      highlights: [
        "Designed the liquidity logic around open spots, groups, and recurring play.",
        "Connected social intent with concrete booking workflows.",
        "Balanced marketplace density with a simple mobile-first experience.",
      ],
      outcome:
        "A product concept and build focused on reducing friction in a highly local, habit-driven marketplace.",
    },
  },
  {
    title: "Vengency",
    slug: "vengency",
    category: "Agency Execution",
    shortDescription:
      "Creative tech agency scaled through fast delivery of web development, branding, and graphic design projects.",
    role: "Founder, operator, delivery lead",
    impact: "50+ client projects",
    techStack: ["Web development", "Branding", "Design systems", "Deployment"],
    accent: "#ff7a3f",
    mockup: "agency",
    image: vengencyImage,
    links: {
      demo: "https://vengency.com",
    },
    caseStudy: {
      problem:
        "Small businesses needed fast, end-to-end digital execution without coordinating separate brand, design, and development vendors.",
      solution:
        "Built an agency delivery system covering lead generation, discovery, visual identity, web production, and launch.",
      highlights: [
        "Managed the full lifecycle from sales to deployment.",
        "Delivered websites, graphics, and brand assets across different industries.",
        "Built a repeatable operating rhythm for high-volume client work.",
      ],
      outcome:
        "Delivered 50+ projects, sharpening both commercial judgment and execution speed before moving deeper into own products.",
    },
  },
];

export const experience = [
  {
    title: "Systematic",
    meta: "Software Engineering",
    description:
      "Selected to work on mission-critical defense software used by NATO and allied forces, where reliability, security, and architectural discipline are non-negotiable.",
  },
  {
    title: "Seacortex",
    meta: "Current Ventures",
    description:
      "Scaling AI-native products through rapid iteration, organic distribution, and technically disciplined infrastructure choices.",
  },
  {
    title: "Vengency",
    meta: "Agency Founder",
    description:
      "Founded a creative tech agency and delivered 50+ digital projects across web development, branding, and graphic design.",
  },
];

export const education = [
  {
    title: "BSc Computer Science",
    meta: "Bucharest University of Economic Studies, CIBE",
    description:
      "Bachelor's thesis focused on real-time logistics coordination for grain transport on the Romanian Danube sector.",
  },
  {
    title: "MSc E-Business",
    meta: "Bucharest University of Economic Studies, CIBE",
    description:
      "Master's thesis focused on a vertical marketplace and pricing engine for funeral services.",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
