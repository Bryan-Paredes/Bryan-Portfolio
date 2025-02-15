import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Bryan",
  lastName: "Paredes",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Software Developer",
  avatar: "/images/avatar.jpeg",
  location: "America / Guatemala", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["Español", "Inglés"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <h3>Contactame</h3>,
  description: <p>¿Hablamos?</p>,
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Bryan-Paredes",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/bryan-paredes-a99130256/",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:paredes.bryan2@icloud.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name} Portafolio`,
  description: `Portafolio web que muestra mi trabajo como ${person.role}`,
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: false,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com/bryan-paredes-ttypzy/15min",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <p>
        ¡Hola! , Soy desarrollador de software junior con pasión por crear
        soluciones funcionales y eficientes. Me encanta aprender, asumir nuevos
        retos y aportar valor a cada proyecto en el que trabajo.
      </p>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Experiencia Laboral",
    experiences: [
      {
        company: "Freelance",
        timeframe: "2023 - Presente",
        role: "Full Stack Developer",
        achievements: [
          <p>
            Desarrollo aplicaciones web completas para clientes, manejando tanto
            el frontend como en ocasiones el backend para garantizar soluciones
            eficientes y escalables.
          </p>,
        ],
        images: [],
      },
      {
        company: "TPC Express",
        timeframe: "(4 meses) 2024 - 2025",
        role: "Frontend Developer",
        achievements: [
          <p>
            Rediseño de pagina web para la empresa de mensajeria TPC Express,
            enfocado en una interfaz intuitiva y fácil de usar.
          </p>,
        ],
        images: [],
      },
    ],
  },
  projects: {
    display: true, // set to false to hide this section
    title: "Proyectos",

    projects: [
      {
        title: "TPC Express - Freelance",
        slug: "tpc-express-freelance",
        description: (
          <p>
            Aplicación web que te permite solicitar un servicio de mensajeria de
            manera rápida y sencilla, como conocer información de la empresa.
          </p>
        ),
        images: [
          {
            src: "/images/projects/tpcxpress.webp",
            alt: "TPC Express Project",
            width: 33,
            height: 17,
          },
        ],
        links: [
          {
            github: "https://github.com/Bryan-Paredes/TPCEXPRESS-WEBSITE",
            demo: "https://tpcxpress.com",
          },
        ],
        tags: ["react", "astro", "tailwindcss", "typescript"],
      },
      {
        title: "Company Dashboard - Proyecto",
        slug: "company-dashboard-proyecto",
        description: (
          <p>
            Dashboard para gestionar empresas, contactos y reuniones, mostrando
            datos relevante en su pagna principal todo conectado a una base de
            datos postgresql en la nube.
          </p>
        ),
        images: [
          {
            src: "/images/projects/dashboard-companies.webp",
            alt: "TPC Express Project",
            width: 33,
            height: 17,
          },
        ],
        links: [
          {
            github: "https://github.com/Bryan-Paredes/dashboard-companies",
            demo: "https://dashboard-companies-ten.vercel.app",
          },
        ],
        tags: [
          "react",
          "nextjs",
          "tailwindcss",
          "typescript",
          "prisma",
          "postgresql",
        ],
      },
      {
        title: "Bienes Raíces - Proyecto",
        slug: "bienes-raices-proyecto",
        description: (
          <p>
            Landing Page de Bienes Raíces, permite a los clientes ver las
            propiedades por categoria y filtrar por precio, tambein permite ver
            toda la información de las propiedades.
          </p>
        ),
        images: [
          {
            src: "/images/projects/real-state.webp",
            alt: "TPC Express Project",
            width: 33,
            height: 17,
          },
        ],
        links: [
          {
            github: "https://github.com/Bryan-Paredes/real-state-landingpage",
            demo: "https://real-state-landingpage.vercel.app/",
          },
        ],
        tags: ["react", "nextjs", "tailwindcss", "typescript"],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Estudios",
    institutions: [
      {
        name: "Autodidacta",
        description: (
          <p>He aprendido mediante cursos en línea y proyectos personales.</p>
        ),
      },
      {
        name: "Bachillerato en Computación",
        description: (
          <p>
            Adquirí conocimientos en el desarrollo de software y el manejo de
            herramientas tecnológicas, sentando las bases para mi crecimiento
            como desarrollador.
          </p>
        ),
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Skills Técnicos",
    skills: [
      {
        title: "React",
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/technical/react.svg",
            alt: "Project image",
            width: 4,
            height: 2,
          },
        ],
      },
      {
        title: "JavaScript",
        images: [
          {
            src: "/images/technical/javascript.svg",
            alt: "Project image",
            width: 4,
            height: 2,
          },
        ],
      },
      {
        title: "TypeScript",
        images: [
          {
            src: "/images/technical/typescript.svg",
            alt: "Project image",
            width: 4,
            height: 2,
          },
        ],
      },
      {
        title: "HTML",
        images: [
          {
            src: "/images/technical/html5.svg",
            alt: "Project image",
            width: 4,
            height: 2,
          },
        ],
      },
      {
        title: "CSS",
        images: [
          {
            src: "/images/technical/css.svg",
            alt: "Project image",
            width: 4,
            height: 2,
          },
        ],
      },
      {
        title: "Tailwind",
        images: [
          {
            src: "/images/technical/tailwindcss.svg",
            alt: "Project image",
            width: 4,
            height: 2,
          },
        ],
      },
      {
        title: "Astro",
        images: [
          {
            src: "/images/technical/astro.svg",
            alt: "Project image",
            width: 4,
            height: 2,
          },
        ],
      },
      {
        title: "NextJs",
        images: [
          {
            src: "/images/technical/nextjs.svg",
            alt: "Project image",
            width: 4,
            height: 2,
          },
        ],
      },
      // {
      //   title: "PostgreSQL",
      //   images: [
      //     {
      //       src: "/images/technical/postgresql.svg",
      //       alt: "Project image",
      //       width: 4,
      //       height: 2,
      //     },
      //   ],
      // },
    ],
  },
};

// const blog = {
//   label: "Blog",
//   title: "Writing about design and tech...",
//   description: `Read what ${person.name} has been up to recently`,
//   // Create new blog posts by adding a new .mdx file to app/blog/posts
//   // All posts will be listed on the /blog route
// };

const work = {
  label: "Trabajo",
  title: "Mis proyectos",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

// const gallery = {
//   label: "Gallery",
//   title: "My photo gallery",
//   description: `A photo collection by ${person.name}`,
//   // Images from https://pexels.com
//   images: [
//     {
//       src: "/images/gallery/img-01.jpg",
//       alt: "image",
//       orientation: "vertical",
//     },
//     {
//       src: "/images/gallery/img-02.jpg",
//       alt: "image",
//       orientation: "horizontal",
//     },
//     {
//       src: "/images/gallery/img-03.jpg",
//       alt: "image",
//       orientation: "vertical",
//     },
//     {
//       src: "/images/gallery/img-04.jpg",
//       alt: "image",
//       orientation: "horizontal",
//     },
//     {
//       src: "/images/gallery/img-05.jpg",
//       alt: "image",
//       orientation: "horizontal",
//     },
//     {
//       src: "/images/gallery/img-06.jpg",
//       alt: "image",
//       orientation: "vertical",
//     },
//     {
//       src: "/images/gallery/img-07.jpg",
//       alt: "image",
//       orientation: "horizontal",
//     },
//     {
//       src: "/images/gallery/img-08.jpg",
//       alt: "image",
//       orientation: "vertical",
//     },
//     {
//       src: "/images/gallery/img-09.jpg",
//       alt: "image",
//       orientation: "horizontal",
//     },
//     {
//       src: "/images/gallery/img-10.jpg",
//       alt: "image",
//       orientation: "horizontal",
//     },
//     {
//       src: "/images/gallery/img-11.jpg",
//       alt: "image",
//       orientation: "vertical",
//     },
//     {
//       src: "/images/gallery/img-12.jpg",
//       alt: "image",
//       orientation: "horizontal",
//     },
//     {
//       src: "/images/gallery/img-13.jpg",
//       alt: "image",
//       orientation: "horizontal",
//     },
//     {
//       src: "/images/gallery/img-14.jpg",
//       alt: "image",
//       orientation: "horizontal",
//     },
//   ],
// };

export { person, social, newsletter, about, work, home };
