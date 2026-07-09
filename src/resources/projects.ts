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
      "Helping lead the design and frontend build of ProWorkflow's next generation of project management, time tracking, quoting and invoicing apps — from Figma mockups through to pixel-perfect React implementation.",
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
      "Helped lead the end-to-end UX design, creating mockups and prototypes in Figma to validate ideas with decision-makers before build.",
      "Worked hands-on with the frontend team, implementing designs in React to help deliver a pixel-perfect result.",
      "Helped define and maintain shared UI components and patterns for consistency across the app suite.",
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
      
      { src: "/images/projects/mkt/proworkflow/nexus-mobile.png", alt: "ProWorkflow mobile app design" },

      { src: "/images/projects/mkt/proworkflow/File24.jpg", alt: "ProWorkflow interface design" },
      { src: "/images/projects/mkt/proworkflow/File25.jpg", alt: "ProWorkflow interface design" },
      { src: "/images/projects/mkt/proworkflow/File26.jpg", alt: "ProWorkflow interface design" },
      { src: "/images/projects/mkt/proworkflow/File27.jpg", alt: "ProWorkflow interface design" },

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
  {
    slug: "phocas",
    title: "Phocas Software",
    tagline: "Building data-rich micro-frontends for 30,000+ business users",
    role: "Software Developer",
    timeframe: "Oct 2021 – Mar 2023",
    summary:
      "Built micro-frontend applications in a fast-paced Agile team, turning complex business data into interactive dashboards and charts used by more than 30,000 people worldwide.",
    coverImage: "/images/projects/phocas-main.png",
    accentColor: "#07b8d6",
    url: "https://www.phocassoftware.com/",
    technologies: [
      "react",
      "typescript",
      "redux",
      "material-ui",
      "emotion-css",
      "storybook",
      "jest",
    ],
    designTools: [],
    company: {
      industry: "SaaS · Business Intelligence & Analytics",
      about:
        "Phocas Software builds business intelligence tools that help companies explore their data and make faster, more confident decisions through interactive dashboards and reporting.",
      notable:
        "Phocas serves thousands of customers across manufacturing, distribution and retail, and is consistently rated one of the highest-satisfaction BI platforms on the market.",
    },
    overview:
      "Phocas was scaling a large business intelligence platform built from independently deployable micro-frontends. The work centred on translating designs into fast, reliable applications that surface business insights — interactive dashboards and charts — for a user base of more than 30,000 people, all within an Agile delivery process.",
    objectives: [
      "Ship features as independently deployable micro-frontends within a large, established platform.",
      "Turn complex, high-volume data into dashboards and charts that stay fast and readable.",
      "Collaborate closely across product, design and engineering at every stage of delivery.",
      "Maintain quality and consistency across a codebase serving tens of thousands of users.",
    ],
    contributions: [
      "Built and maintained micro-frontend applications serving over 30,000 users.",
      "Translated designs into dynamic, data-driven dashboards and interactive charts.",
      "Worked in a fast-paced Agile team alongside development managers, product owners, designers and fellow developers.",
      "Contributed reusable components documented in Storybook and covered by Jest tests.",
    ],
    process: [
      {
        title: "Agile delivery",
        description:
          "Worked in short, iterative cycles with product owners and development managers, breaking large features into shippable increments.",
      },
      {
        title: "Component-driven build",
        description:
          "Implemented UI as reusable React components documented in Storybook, keeping the micro-frontends consistent and testable.",
      },
      {
        title: "Data visualisation",
        description:
          "Turned complex datasets into interactive dashboards and charts, tuning them for performance at scale.",
      },
    ],
    outcomes: [
      "Delivered dashboard and charting features used daily by a 30,000+ user base.",
      "Reusable, Storybook-documented components kept the micro-frontend suite consistent.",
      "Close cross-functional collaboration kept a large platform shipping smoothly in Agile cycles.",
    ],
  },
  {
    slug: "tripod-digital",
    title: "Tripod Digital",
    tagline: "Designing and building Mixr, an augmented-reality experience creator",
    role: "Frontend Developer & UI/UX Designer",
    timeframe: "Mar 2021 – Sep 2021",
    summary:
      "Designed and built Mixr, an AR experience creator — defining the design system and user flow in Figma, then shipping a frontend app powered by Firebase cloud functions.",
    coverImage: "/images/projects/mixr.png",
    accentColor: "#15aca3",
    url: "https://tripod-digital.co.nz/",
    technologies: ["react", "typescript", "sass", "firebase"],
    designTools: ["figma"],
    company: {
      industry: "AR/VR · Immersive Experiences",
      about:
        "Tripod Digital builds augmented-reality experiences and the tools to create them, making immersive content approachable for teams without deep technical backgrounds.",
    },
    overview:
      "Tripod Digital needed a creator tool that let people build augmented-reality experiences through a friendly web interface. Wearing both hats, I owned the design and the frontend build of Mixr — shaping the product's usability from the design system through to a working application backed by Firebase cloud functions.",
    objectives: [
      "Make creating augmented-reality experiences approachable through a clear web interface.",
      "Define a design system and user flow that improve the product's usability.",
      "Communicate features and functionality with interactive prototypes.",
      "Ship a frontend that talks smoothly to a serverless Firebase backend.",
    ],
    contributions: [
      "Acted as both designer and developer for the AR experience creator.",
      "Defined the design system and end-to-end user flow to improve usability.",
      "Built interactive prototypes to showcase the product's features and functionality.",
      "Implemented the frontend application, powered by Firebase cloud functions, that drives the creation of augmented realities.",
    ],
    process: [
      {
        title: "Design system & flow",
        description:
          "Established the visual language and mapped the user flow in Figma so the AR creation process felt guided rather than technical.",
      },
      {
        title: "Prototyping",
        description:
          "Built interactive prototypes to validate and communicate features before committing them to code.",
      },
      {
        title: "Frontend build",
        description:
          "Implemented the app in React, wiring it up to Firebase cloud functions to power the augmented-reality creation flow.",
      },
    ],
    gallery: [
      { src: "/images/projects/mkt/mixr/mixr-0.png", alt: "Mixr AR experience creator interface" },
      { src: "/images/projects/mkt/mixr/mixr-1.png", alt: "Mixr AR experience creator interface" },
    ],
    outcomes: [
      "Delivered Mixr as a working AR experience creator with a coherent design system and user flow.",
      "Interactive prototypes made the product's features easy to communicate and validate.",
      "A Firebase-powered frontend let users create augmented realities smoothly end to end.",
    ],
  },
  {
    slug: "motorly",
    title: "Motorly",
    tagline: "A seamless vehicle search and comparison tool",
    role: "Frontend Developer & UI/UX Designer",
    timeframe: "Mar 2021 – Sep 2021",
    summary:
      "Shaped the design system and user flow in Figma and built the frontend for a vehicle search and comparison tool, with a focus on a seamless, user-friendly interface.",
    coverImage: "/images/projects/motorly.png",
    accentColor: "#FF0042",
    url: "https://www.motorly.co.nz/",
    technologies: ["nextjs", "react", "css-modules", "firebase"],
    designTools: ["figma"],
    company: {
      industry: "Automotive · Online Marketplace",
      about:
        "Motorly is a vehicle search and comparison platform that helps people find and weigh up cars through a clean, easy-to-use online experience.",
    },
    overview:
      "Motorly set out to make finding and comparing vehicles effortless. My role spanned design and development: shaping the design system and user flow in Figma, then implementing the frontend with a primary focus on a seamless, user-friendly interface for search and comparison.",
    objectives: [
      "Make vehicle search and comparison fast and intuitive.",
      "Establish a design system and user flow that keep the experience consistent.",
      "Deliver a clean, responsive, user-friendly interface.",
      "Build on a modern Next.js and Firebase stack.",
    ],
    contributions: [
      "Shaped the design system and user flow using Figma.",
      "Implemented the frontend, focused on a seamless interface for vehicle search and comparison.",
      "Built the app on Next.js and React with CSS Modules for styling.",
      "Integrated a Firebase backend to power the product.",
    ],
    process: [
      {
        title: "Design system & flow",
        description:
          "Defined the visual language and user flow in Figma so search and comparison stayed consistent and intuitive.",
      },
      {
        title: "Frontend build",
        description:
          "Implemented the interface with Next.js, React and CSS Modules, prioritising a seamless, user-friendly experience.",
      },
      {
        title: "Backend integration",
        description:
          "Connected the app to Firebase to serve vehicle data behind the search and comparison views.",
      },
    ],
    outcomes: [
      "Delivered a clean, user-friendly interface for searching and comparing vehicles.",
      "A shared design system and user flow kept the experience consistent throughout.",
      "A Next.js + Firebase build gave the product a fast, modern foundation.",
    ],
  },
];

export function getProjects(): Project[] {
  return projects;
}

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
