import { mappedCareerHistory } from "@/resources/career-history";
import type {
  About,
  Blog,
  Gallery,
  Home,
  Newsletter,
  Person,
  Projects,
  Social,
  Work,
} from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Daniel",
  lastName: "Pisati",
  name: "Daniel Pisati",
  role: "Frontend Developer and UX Designer",
  avatar: "/images/avatar.png",
  email: "daniel@pisati.dev",
  location: "Pacific/Auckland",
  languages: ["English", "Portuguese"],
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/dpisati",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/daniel-pisati/",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Front-end Developer and UX Designer</>,
  featured: {
    display: false,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Once UI</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      I love crafting intuitive user experiences <br /> and sweating the details alongside the teams
      I work with.
    </>
  ),
  quickPitch: (
    <>
      I'm an easy-going, collaborative product creator with a background in design and a love for
      modern front-end engineering. Beyond implementing layouts, I try to stay curious about the
      product decisions, business goals, and UX practices that help a team deliver real value to
      customers.
    </>
  ),
  philosophy: {
    display: true,
    title: "How I think",
    items: [
      {
        icon: "figma",
        title: "Design-to-code synergy",
        description: (
          <>
            Having a foot in both the creative and development worlds helps smooth out engineering
            handoffs. I try to design with code constraints in mind and build with real care for
            pixel-perfection, interaction design, and fluid transitions.
          </>
        ),
      },
      {
        icon: "rocket",
        title: "AI & tooling integration",
        description: (
          <>
            I like exploring new technology paradigms, leaning on AI tools to take care of
            repetitive, boilerplate work so I can spend more energy on the things that matter most:
            complex UX flows, performance, and features that make a difference for users.
          </>
        ),
      },
      {
        icon: "globe",
        title: "Staying flexible",
        description: (
          <>
            Startups and modern product teams move fast. I try to adapt to shifting priorities and
            changing routes without losing momentum, keeping the big picture in view so I can help
            out where the team needs it most.
          </>
        ),
      },
    ],
  },
  toolkit: {
    display: true,
    title: "Toolkit & multidisciplinary impact",
    categories: [
      {
        icon: "figma",
        title: "Design & UX",
        items: ["UI/UX Design", "Prototyping (Figma)", "Design Systems", "User-Centric Research"],
      },
      {
        icon: "nextjs",
        title: "Frontend Engineering",
        items: [
          "TypeScript / JavaScript",
          "React / Next.js",
          "HTML5 / CSS3 / SASS",
          "Tailwind / Shadcn UI / Material UI",
        ],
      },
      {
        icon: "grid",
        title: "Cross-Team Contribution",
        items: [
          "Product Strategy",
          "Marketing Collaterals",
          "Brand & Asset Design",
          "Custom Illustrations",
        ],
      },
    ],
  },
  collaboration: {
    display: true,
    title: "How I work with teams",
    items: [
      {
        icon: "book",
        title: "Lifelong student",
        description: (
          <>
            I love sharing what I've learned with teammates and, just as much, listening to
            different perspectives — I really believe growth is a collective effort.
          </>
        ),
      },
      {
        icon: "document",
        title: "Happy to lend a hand",
        description: (
          <>
            Beyond coding and wireframes, I'm always happy to jump into marketing assets, custom
            illustrations, or product discussions — wherever I can be useful to the team.
          </>
        ),
      },
      {
        icon: "person",
        title: "Customer-obsessed",
        description: (
          <>
            Every line of code or visual element I create passes through one filter: how does this
            make the user's life easier or better?
          </>
        ),
      },
    ],
  },
  selectedWork: {
    display: true,
    title: "Selected work",
    description: (
      <>
        A handful of products I've helped design and build — each one a full case study covering my
        role, the process, and the outcomes.
      </>
    ),
    cta: "View all projects",
    count: 2,
  },
  designMindset: {
    display: true,
    eyebrow: "Design × Engineering",
    title: "Developing with a Designer's Mindset",
    lead: (
      <>
        My background in design and frontend development shapes how I approach UI.{" "}
        <span className="mindset-highlight">I design for implementation</span>.
      </>
    ),
    paragraphs: [
      <div key="single">
        My process considers component composition, states, responsiveness, accessibility, and how
        each design translates into frontend code. This results in interfaces that are easier to
        build, maintain, and scale, creating a smoother collaboration between design and
        development.
      </div>,
    ],
    concepts: ["Component composition", "States", "Variants", "Responsiveness", "Accessibility"],
    closing: (
      <>
        I enjoy collaborating across design and development to create user experiences that are both
        thoughtful and practical.
      </>
    ),
  },
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I’m a designer-turned-developer who loves the space where 'how it looks' meets 'how it
        works.' With over a decade in design and the last 4 years focused on code, I’ve learned that
        the best digital tools aren't just pretty—they’re built on solid systems that make life
        easier for both users and developers. I’m a big fan of pixel-perfection, but I’m even more
        passionate about being the bridge between creative ideas and technical reality. Whether I’m
        tinkering in Figma or building out components in React, my goal is always the same: to
        create something useful, scalable, and intuitive.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: mappedCareerHistory,
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Bachelor of Industrial Design",
        description: <>Mackenzie University (2007 - 2011)</>,
      },
      {
        name: "UX Design Certificate",
        description: (
          <>
            Google. Completed seven-course program covering full UX process: user research, defining
            pain points, ideation, wireframes, prototyping, usability testing, and iterative
            refinement (2023).
          </>
        ),
      },
      {
        name: "Fullstack Development Certification",
        description: <>Rocketseat – Fullstack Development (2022) - React / Node / TypeScript.</>,
      },
      // {
      //   name: "Skynet – Inventor Assembly & Machine Design (2011)",
      //   description: <>Certification – Credential ID 1729889642.</>,
      // },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      { title: "HTML", src: "/images/icons/html.png" },
      { title: "CSS", src: "/images/icons/css.png" },
      { title: "SASS", src: "/images/icons/sass.png" },
      { title: "Tailwind", src: "/images/icons/tailwind.png" },
      { title: "Emotion CSS", src: "/images/icons/emotion.png" },
      { title: "Material UI", src: "/images/icons/mui.png" },
      { title: "React", src: "/images/icons/react.png" },
      { title: "JavaScript", src: "/images/icons/javascript.png" },
      { title: "Typescript", src: "/images/icons/typescript.png" },
      { title: "Node", src: "/images/icons/node.png" },
      { title: "Git", src: "/images/icons/github.png" },
      { title: "Graphql", src: "/images/icons/graphql.png" },

      { title: "Figma", src: "/images/icons/figma.png" },
      { title: "Layout", src: "/images/icons/ui-ux.png" },
      { title: "Wireframing", src: "/images/icons/wireframing.png" },
      { title: "Prototyping", src: "/images/icons/prototyping.png" },
      { title: "Responsive Design", src: "/images/icons/responsive.png" },
      // { title: "AutoCAD", src: "/images/icons/autocad.png" },
      // { title: "3D Modelling", src: "/images/icons/inventor.png" },
      // { title: "Photoshop", src: "/images/icons/photoshop.png" },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: "Work",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const projects: Projects = {
  path: "/projects",
  label: "Projects",
  title: "Projects",
  description: `In-depth case studies of design and dev projects by ${person.name}`,
  // Add a new case study by appending to the `projects` array in resources/projects.ts
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: "Gallery - Marketing Images",
  description: `One of my favorite parts of being a designer is helping people 'get it.' Throughout my career, I’ve used my spare cycles to support marketing and sales teams by turning technical concepts into clear, engaging visuals. From posters to educational graphics, these projects are all about making knowledge more accessible.`,
  projects: [
    {
      title: "ProWorkflow",
      desc: "A collection of screenshots and UI from the ProWorkflow project.",
      images: [
        {
          src: "/images/projects/mkt/proworkflow/File10.png",
          alt: "File10.png",
          orientation: "horizontal",
        },
        {
          src: "/images/projects/mkt/proworkflow/File11.png",
          alt: "File11.png",
          orientation: "horizontal",
        },
        {
          src: "/images/projects/mkt/proworkflow/File12.png",
          alt: "File12.png",
          orientation: "horizontal",
        },
        {
          src: "/images/projects/mkt/proworkflow/File13.png",
          alt: "File13.png",
          orientation: "horizontal",
        },
        {
          src: "/images/projects/mkt/proworkflow/File14.png",
          alt: "File14.png",
          orientation: "horizontal",
        },
        {
          src: "/images/projects/mkt/proworkflow/File15.png",
          alt: "File15.png",
          orientation: "horizontal",
        },
        {
          src: "/images/projects/mkt/proworkflow/File16.png",
          alt: "File16.png",
          orientation: "horizontal",
        },
        {
          src: "/images/projects/mkt/proworkflow/File17.png",
          alt: "File17.png",
          orientation: "horizontal",
        },
        {
          src: "/images/projects/mkt/proworkflow/File18.png",
          alt: "File18.png",
          orientation: "horizontal",
        },
        {
          src: "/images/projects/mkt/proworkflow/File19.png",
          alt: "File19.png",
          orientation: "horizontal",
        },
        // {
        //   src: "/images/projects/mkt/proworkflow/File2.png",
        //   alt: "File2.png",
        //   orientation: "horizontal",
        // },
        {
          src: "/images/projects/mkt/proworkflow/File20.png",
          alt: "File20.png",
          orientation: "horizontal",
        },
        {
          src: "/images/projects/mkt/proworkflow/File21.png",
          alt: "File21.png",
          orientation: "horizontal",
        },
        {
          src: "/images/projects/mkt/proworkflow/File22.png",
          alt: "File22.png",
          orientation: "horizontal",
        },
        {
          src: "/images/projects/mkt/proworkflow/File23-2.png",
          alt: "File23-2.png",
          orientation: "horizontal",
        },
        {
          src: "/images/projects/mkt/proworkflow/File23.png",
          alt: "File23.png",
          orientation: "horizontal",
        },

        // {
        //   src: "/images/projects/mkt/proworkflow/File3.png",
        //   alt: "File3.png",
        //   orientation: "horizontal",
        // },
        // {
        //   src: "/images/projects/mkt/proworkflow/File4.png",
        //   alt: "File4.png",
        //   orientation: "horizontal",
        // },
        // {
        //   src: "/images/projects/mkt/proworkflow/File5.png",
        //   alt: "File5.png",
        //   orientation: "horizontal",
        // },
        // {
        //   src: "/images/projects/mkt/proworkflow/File6.png",
        //   alt: "File6.png",
        //   orientation: "horizontal",
        // },
        // {
        //   src: "/images/projects/mkt/proworkflow/File7.png",
        //   alt: "File7.png",
        //   orientation: "horizontal",
        // },
        {
          src: "/images/projects/mkt/proworkflow/File8.png",
          alt: "File8.png",
          orientation: "horizontal",
        },
        {
          src: "/images/projects/mkt/proworkflow/File9.png",
          alt: "File9.png",
          orientation: "horizontal",
        },
        // {
        //   src: "/images/projects/mkt/proworkflow/mobile1.png",
        //   alt: "mobile1.png",
        //   orientation: "vertical",
        // },
        // {
        //   src: "/images/projects/mkt/proworkflow/mobile2.png",
        //   alt: "mobile2.png",
        //   orientation: "vertical",
        // },
        // {
        //   src: "/images/projects/mkt/proworkflow/mobile3.png",
        //   alt: "mobile3.png",
        //   orientation: "vertical",
        // },
        {
          src: "/images/projects/mkt/proworkflow/File24.jpg",
          alt: "File24.jpg",
          orientation: "horizontal",
        },
        {
          src: "/images/projects/mkt/proworkflow/File25.jpg",
          alt: "File25.jpg",
          orientation: "horizontal",
        },
        {
          src: "/images/projects/mkt/proworkflow/File26.jpg",
          alt: "File26.jpg",
          orientation: "horizontal",
        },
        {
          src: "/images/projects/mkt/proworkflow/File27.jpg",
          alt: "File27.jpg",
          orientation: "horizontal",
        },
      ],
    },
    {
      title: "Urban Intelligence",
      desc: "UI kit and design system screens.",
      images: [
        {
          src: "/images/projects/mkt/ui/01.png",
          alt: "01.png",
          orientation: "horizontal",
        },
        {
          src: "/images/projects/mkt/ui/02.png",
          alt: "02.png",
          orientation: "horizontal",
        },
        {
          src: "/images/projects/mkt/ui/03.png",
          alt: "03.png",
          orientation: "horizontal",
        },
        {
          src: "/images/projects/mkt/ui/04.png",
          alt: "04.png",
          orientation: "horizontal",
        },
        {
          src: "/images/projects/mkt/ui/05.png",
          alt: "05.png",
          orientation: "horizontal",
        },
        {
          src: "/images/projects/mkt/ui/06.png",
          alt: "06.png",
          orientation: "horizontal",
        },
      ],
    },
    {
      title: "Additional Samples",
      desc: "A few more marketing images and posters.",
      images: [
        // {
        //   src: "/images/projects/mkt/mixr/mixr-0.png",
        //   alt: "01.png",
        //   orientation: "vertical",
        // },
        {
          src: "/images/projects/mkt/mixr/mixr-1.png",
          alt: "01.png",
          orientation: "vertical",
        },
        {
          src: "/images/projects/mkt/joinery-scene/js-1.png",
          alt: "01.png",
          orientation: "horizontal",
        },
        {
          src: "/images/projects/mkt/suncorp/suncorp-1.jpg",
          alt: "01.png",
          orientation: "horizontal",
        },
      ],
    },
  ],
};

export { about, blog, gallery, home, newsletter, person, projects, social, work };
