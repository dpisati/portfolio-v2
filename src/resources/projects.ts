// Case-study data for the /projects section.
//
// Each entry powers both the /projects listing card and the full
// /projects/[slug] case study page. Add a new project by appending an object
// to the `projects` array below — the listing and detail routes pick it up
// automatically. Tool ids reference `toolLookup` in ./tools.ts so they render
// with the matching brand colour and label.

export interface ProjectImage {
  src: string;
  alt: string;
}

export interface BeforeAfter {
  before: string;
  after: string;
  description: string;
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface Challenge {
  challenge: string;
  solution: string;
}

export interface Project {
  slug: string;
  /** Display title, usually the company / product name. */
  title: string;
  /** One-line positioning statement shown under the title. */
  tagline: string;
  /** My role on the project. */
  role: string;
  /** Timeframe worked on the project. */
  timeframe: string;
  /** Short summary used on the listing card. */
  summary: string;
  /** Hero / listing cover image. */
  coverImage: string;
  /** Accent colour used for the cover backdrop. */
  accentColor: string;
  /** Link to the live product / company site. */
  url?: string;
  /** Development technology ids (see tools.ts). */
  technologies: string[];
  /** Design tool ids (see tools.ts). */
  designTools: string[];
  /** Overview of the company behind the project. */
  company: {
    industry: string;
    about: string;
    notable?: string;
  };
  /** Project description and objectives. */
  overview: string;
  objectives: string[];
  /** My specific contributions and responsibilities. */
  contributions: string[];
  /** The design and development process (where applicable). */
  process?: ProcessStep[];
  /** Before and after comparisons. */
  beforeAfter?: BeforeAfter[];
  /** Gallery of designs, UI screens, mockups and other assets. */
  gallery?: ProjectImage[];
  /** Challenges encountered and how they were solved. */
  challenges?: Challenge[];
  /** Outcomes, impact and key achievements. */
  outcomes?: string[];
}

export const projects: Project[] = [
  {
    slug: "proworkflow",
    title: "ProWorkflow",
    tagline: "Redesigning a next-generation project management suite",
    role: "UX Designer & Frontend Developer",
    timeframe: "Dec 2023 – Present",
    summary:
      "Leading the design and frontend build of ProWorkflow's next generation of project management, time tracking, quoting and invoicing apps — from Figma mockups through to pixel-perfect React implementation.",
    coverImage: "/images/projects/proworkflow-main.png",
    accentColor: "#FF5733",
    url: "https://proworkflow.com/",
    technologies: ["react", "typescript", "graphql", "material-ui", "tailwind", "playwright"],
    designTools: ["figma"],
    company: {
      industry: "SaaS · Project Management Software",
      about:
        "ProWorkflow is a long-established cloud project management platform that helps agencies, teams and service businesses plan work, track time, and manage quotes and invoices in one place.",
      notable:
        "One of the longest-running project management tools on the market, ProWorkflow is trusted by thousands of businesses across more than 100 countries.",
    },
    overview:
      "ProWorkflow set out to modernise its ageing product suite — a set of powerful but visually dated web and mobile apps — into a cohesive, component-driven experience. The goal was to rebuild the Project Management, Time Tracker, Quote and Invoice apps around a shared design language while preserving the depth of functionality long-time customers rely on.",
    objectives: [
      "Modernise a feature-rich legacy interface without disrupting established user workflows.",
      "Establish a consistent, reusable design system spanning web and mobile.",
      "Bridge the gap between design and engineering so mockups ship pixel-perfect.",
      "Improve clarity and usability across dense, data-heavy screens.",
    ],
    contributions: [
      "Led the end-to-end UX design, creating mockups and prototypes in Figma to validate ideas with decision-makers before build.",
      "Worked hands-on with the frontend team, implementing designs in React to guarantee pixel-perfect delivery.",
      "Defined and maintained shared UI components and patterns for consistency across the app suite.",
      "Redesigned core screens including the Projects list, Kanban board, Project details and the Gantt chart module.",
      "Added end-to-end coverage with Playwright to protect critical flows as the UI evolved.",
    ],
    process: [
      {
        title: "Discovery & audit",
        description:
          "Reviewed the legacy interface screen by screen, mapping user workflows and pinpointing the biggest sources of friction in dense, data-heavy views.",
      },
      {
        title: "Design & validation",
        description:
          "Produced high-fidelity Figma mockups and interactive prototypes, validating direction with stakeholders and decision-makers before a line of code was written.",
      },
      {
        title: "Implementation",
        description:
          "Partnered with the frontend team to build the approved designs in React, translating components faithfully and refining details in-browser for a pixel-perfect result.",
      },
    ],
    beforeAfter: [
      {
        before: "/images/projects/before-after/proworkflow/PWF_B_01.png",
        after: "/images/projects/before-after/proworkflow/PWF_A_01.png",
        description: "Projects List Page",
      },
      {
        before: "/images/projects/before-after/proworkflow/PWF_B_02.png",
        after: "/images/projects/before-after/proworkflow/PWF_A_02.png",
        description: "Project Kanban Page",
      },
      {
        before: "/images/projects/before-after/proworkflow/PWF_B_03.png",
        after: "/images/projects/before-after/proworkflow/PWF_A_03.png",
        description: "Project Details Page",
      },
      {
        before: "/images/projects/before-after/proworkflow/PWF_B_04.png",
        after: "/images/projects/before-after/proworkflow/PWF_A_04.png",
        description: "Gantt Chart Module",
      },
    ],
    gallery: [
      { src: "/images/projects/mkt/proworkflow/File8.png", alt: "ProWorkflow interface design" },
      { src: "/images/projects/mkt/proworkflow/File9.png", alt: "ProWorkflow interface design" },
      { src: "/images/projects/mkt/proworkflow/File10.png", alt: "ProWorkflow interface design" },
      { src: "/images/projects/mkt/proworkflow/File11.png", alt: "ProWorkflow interface design" },
      { src: "/images/projects/mkt/proworkflow/File12.png", alt: "ProWorkflow interface design" },
      { src: "/images/projects/mkt/proworkflow/File13.png", alt: "ProWorkflow interface design" },
      { src: "/images/projects/mkt/proworkflow/File14.png", alt: "ProWorkflow interface design" },
      { src: "/images/projects/mkt/proworkflow/File15.png", alt: "ProWorkflow interface design" },
      { src: "/images/projects/mkt/proworkflow/mobile1.png", alt: "ProWorkflow mobile app design" },
      { src: "/images/projects/mkt/proworkflow/mobile2.png", alt: "ProWorkflow mobile app design" },
      { src: "/images/projects/mkt/proworkflow/mobile3.png", alt: "ProWorkflow mobile app design" },
    ],
    challenges: [
      {
        challenge:
          "Long-time customers depend on deep, established workflows, so a visual overhaul risked disrupting the way they work.",
        solution:
          "Kept information architecture and interaction patterns familiar while modernising the visual layer, and validated every direction with stakeholders before build.",
      },
      {
        challenge:
          "Screens like the Gantt chart and Kanban board pack a lot of data into limited space.",
        solution:
          "Introduced a consistent component system with clearer hierarchy, spacing and states so dense views stay readable and scannable.",
      },
    ],
    outcomes: [
      "A cohesive, component-driven design system now spans the web and mobile app suite.",
      "Core screens were rebuilt with a modern, consistent look while retaining full functionality.",
      "Pixel-perfect handoff between design and engineering, backed by Playwright end-to-end tests.",
    ],
  },
  {
    slug: "urban-intelligence",
    title: "Urban Intelligence",
    tagline: "Translating between design and engineering for climate-risk tools",
    role: "UI/UX Designer & Fullstack Developer",
    timeframe: "Mar 2023 – Dec 2023",
    summary:
      "Revamped web applications built around interactive maps and multi-dashboards, crafting the design in Figma, building a shared component library on the frontend, and shipping the supporting RESTful API on the backend.",
    coverImage: "/images/projects/ui-main.png",
    accentColor: "#336791",
    url: "https://www.urbanintelligence.co.nz/",
    technologies: [
      "react",
      "typescript",
      "material-ui",
      "emotion-css",
      "storybook",
      "jest",
      "node",
      "express",
      "postgres",
    ],
    designTools: ["figma"],
    company: {
      industry: "GovTech · Geospatial & Climate-Risk Analytics",
      about:
        "Urban Intelligence builds data-driven tools that help councils, planners and government understand natural hazard and climate risk through interactive maps and spatial dashboards.",
      notable:
        "Grown out of University of Canterbury research, the team turns complex resilience and hazard-exposure data into decisions people can actually act on.",
    },
    overview:
      "Urban Intelligence needed to revamp a suite of web applications that surface natural-hazard and climate-risk data on interactive maps and dashboards. The work spanned the full stack — from wireframes and a reusable component library through to the RESTful API and databases powering the experience.",
    objectives: [
      "Modernise map- and dashboard-heavy web apps while keeping complex data legible.",
      "Establish a reusable component library for design and engineering consistency.",
      "Ensure brand compliance across products.",
      "Keep the data flow between backend and UI fast and reliable.",
    ],
    contributions: [
      "Acted as the bridge between design and development, translating requirements into both design and working software.",
      "Designed wireframes and prototypes in Figma and ensured brand compliance across products.",
      "Integrated interactive maps, custom layers and multi-dashboard views into the web apps.",
      "Built a component library with a strong emphasis on design precision, documented in Storybook.",
      "Developed the backend with Node and Express for a RESTful API, backed by Postgres databases and AWS services.",
    ],
    process: [
      {
        title: "Design",
        description:
          "Created wireframes and interactive prototypes in Figma, aligning them to brand guidelines before handing off to development.",
      },
      {
        title: "Component library",
        description:
          "Built and documented reusable components in Storybook so design intent carried cleanly into implementation across every app.",
      },
      {
        title: "Fullstack build",
        description:
          "Implemented the UI in React while developing the Node/Express RESTful API and Postgres data layer that feed the maps and dashboards.",
      },
    ],
    beforeAfter: [
      {
        before: "/images/projects/before-after/ui/01_B.png",
        after: "/images/projects/before-after/ui/01_A.png",
        description: "Hazard Details",
      },
      {
        before: "/images/projects/before-after/ui/02_B.png",
        after: "/images/projects/before-after/ui/02_A.png",
        description: "Property Accessibility",
      },
      {
        before: "/images/projects/before-after/ui/03_B.png",
        after: "/images/projects/before-after/ui/03_A.png",
        description: "Add Hazard Layer",
      },
      {
        before: "/images/projects/before-after/ui/04_B.png",
        after: "/images/projects/before-after/ui/04_A.png",
        description: "Add Asset Layer",
      },
    ],
    gallery: [
      { src: "/images/projects/mkt/ui/01.png", alt: "Urban Intelligence interface design" },
      { src: "/images/projects/mkt/ui/02.png", alt: "Urban Intelligence interface design" },
      { src: "/images/projects/mkt/ui/03.png", alt: "Urban Intelligence interface design" },
      { src: "/images/projects/mkt/ui/04.png", alt: "Urban Intelligence interface design" },
      { src: "/images/projects/mkt/ui/05.png", alt: "Urban Intelligence interface design" },
      { src: "/images/projects/mkt/ui/06.png", alt: "Urban Intelligence interface design" },
    ],
    challenges: [
      {
        challenge:
          "Natural-hazard data is dense and spatial, which makes it easy to overwhelm users on a map-based interface.",
        solution:
          "Designed clear layer controls and dashboard views that let users add and interpret data progressively, one layer at a time.",
      },
      {
        challenge: "Design and engineering needed to move in step across several products.",
        solution:
          "Built a documented component library in Storybook so the same building blocks — and the same design decisions — were reused everywhere.",
      },
    ],
    outcomes: [
      "Delivered modernised, map-driven web apps with clearer hazard and accessibility views.",
      "A reusable, documented component library kept design and engineering consistent across products.",
      "End-to-end ownership from Figma to a Node/Express + Postgres backend kept the data-to-UI flow smooth.",
    ],
  },
];

export function getProjects(): Project[] {
  return projects;
}

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
