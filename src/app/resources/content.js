import { title } from "process";

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
        timeframe: "2024 - Presente",
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
          // {
          //   src: "/images/projects/tpcxpress.webp",
          //   alt: "TPC Express Project",
          //   width: 33,
          //   height: 17,
          // },
        ],
        links: [
          {
            github: "https://github.com/Bryan-Paredes/TPCEXPRESS-WEBSITE",
            demo: "https://tpcxpress.com",
          },
        ],
        tags: ["react", "astro", "tailwindcss", "typescript"],
        overview: [
          {
            title: "Visión General",
            description: (
              <p>
                Rediseño de la página web para la empresa de mensajería TPC
                Express, enfocado en una interfaz intuitiva y fácil de usar para
                la solicitud de servicios.
              </p>
            ),
          },
        ],
        keyFeatures: [
          {
            id: 1,
            text: "La aplicación web permite a los usuarios solicitar un servicio de mensajería como contacto con la empresa de forma más rápida, mediante una red social como WhatsApp y un formulario de contacto.",
          },
          {
            id: 2,
            text: "Se tomó como prioridad la experiencia del usuario y la facilidad de uso, por lo que se ha implementado un formulario de cotización rápida con validaciones de campos y un sistema de validaciones para evitar errores en la entrada de datos.",
          },
        ],
        technologies: [
          {
            text: (
              <p>
                <strong>Astro: </strong>Para mejorar la velocidad de carga de la
                página web y optimizar el SEO.
              </p>
            ),
          },
          {
            text: (
              <p>
                <strong>React: </strong>Para mejorar la experiencia del usuario
                e implementar una librería de componentes como HeroUI.
              </p>
            ),
          },
          {
            text: (
              <p>
                <strong>Tailwind: </strong>Dando diseño rápido y consistente a
                la página web.
              </p>
            ),
          },
          {
            text: (
              <p>
                <strong>TypeScript: </strong>Mejora de tipado y seguridad de la
                aplicación.
              </p>
            ),
          },
        ],
        outcome: [
          <p>
            Se han alcanzado los puntos más importantes para el cliente,
            logrando un alto rendimiento y una buena configuración de SEO,
            además de contar con una forma fácil de cotizar servicios y
            solicitarlos mediante un formulario, ofreciendo en todo momento
            transparencia a los usuarios.
          </p>,
        ],
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
        overview: [
          {
            title: "Visión General",
            description: (
              <p>
                Dashboard para empresas que permite agregar, editar y eliminar
                registros de empresas, contactos enlazados a cada empresa y la
                opción de un calendario en el cual se pueden agregar y eliminar
                eventos o reuniones importantes.
              </p>
            ),
          },
        ],
        keyFeatures: [
          {
            id: 1,
            text: "Interfaz de Usuario Dinámica: Gracias a Next.js y React, el panel ofrece una experiencia interactiva y fluida para el usuario.",
          },
          {
            id: 2,
            text: "Estilos Consistentes y Responsivos: La integración de Tailwind CSS asegura una apariencia uniforme y adaptativa en diferentes dispositivos.",
          },
          {
            id: 3,
            text: "Gestión Eficiente de Datos: Prisma facilita operaciones CRUD rápidas y seguras sobre la base de datos PostgreSQL.",
          },
          {
            id: 4,
            text: "Despliegue en la Nube: Alojado en Vercel, el proyecto garantiza una entrega de contenido rápida y confiable a nivel global.",
          },
        ],
        technologies: [
          {
            text: (
              <p>
                <strong>NextJS: </strong>Mejora de rendimiento con SSR y
                facilidades de despliegue.
              </p>
            ),
          },
          {
            text: (
              <p>
                <strong>React: </strong>Mejorar experiencia e interfaz de
                usuario dinámicas con componentes reutilizables.
              </p>
            ),
          },
          {
            text: (
              <p>
                <strong>Tailwind: </strong>Diseño rapido y consistente con
                componentes de React.
              </p>
            ),
          },
          {
            text: (
              <p>
                <strong>Prisma: </strong>Integración rápida de bases de datos y
                manejo de datos, errores, validaciones y seguridad de forma más
                rápida.
              </p>
            ),
          },
          {
            text: (
              <p>
                <strong>PostgreSQL: </strong>Alto rendimiento y escalabilidad de
                bases de datos relacionales.
              </p>
            ),
          },
        ],
        outcome: [
          <p>
            Más que solo una interfaz para gestionar datos empresariales, este
            proyecto está diseñado para ser intuitivo, rápido y seguro,
            permitiendo a los usuarios acceder y administrar información de
            manera sencilla y eficaz. Su arquitectura permite el mantenimiento y
            la escalabilidad, también asegura una experiencia de usuario
            optimizada en distintos dispositivos.
          </p>,
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
        overview: [
          {
            title: "Visión General",
            description: (
              <p>
                Página para una agencia inmobiliaria, diseñada para facilitar la
                visualizacion y datos de las propiedades. La plataforma ofrece
                una experiencia de usuario moderna y eficiente.
              </p>
            ),
          },
        ],
        keyFeatures: [
          {
            id: 1,
            text: "Interfaz de usuario atractiva y responsiva: La página presenta un diseño limpio y adaptable a diferentes dispositivos, mejorando la accesibilidad para todos los usuarios.",
          },
          {
            id: 2,
            text: "Funcionalidades clave para el sector inmobiliario: La plataforma permite a los usuarios visualizar las propiedades disponibles según categoría y precio, facilitando la navegación y selección de inmuebles.",
          },
        ],
        technologies: [
          {
            text: (
              <p>
                <strong>NextJS: </strong>Mejora de rendimiento con SSR y
                facilidades de despliegue.
              </p>
            ),
          },
          {
            text: (
              <p>
                <strong>React: </strong>Mejorar experiencia e interfaz de
                usuario dinámicas con componentes reutilizables.
              </p>
            ),
          },
          {
            text: (
              <p>
                <strong>Tailwind: </strong>Diseño rapido y consistente con
                componentes de React.
              </p>
            ),
          },
          {
            text: (
              <p>
                <strong>TypeScript: </strong>Mejora de tipado y seguridad de la
                aplicación.
              </p>
            ),
          },
        ],
        outcome: [
          <p>
            La aplicación está pensada para facilitar la visualización y el
            filtrado de propiedades. La página proporciona a los usuarios una
            experiencia intuitiva, permitiéndoles encontrar inmuebles de manera
            rápida y sencilla. Además, su desarrollo con TypeScript asegura un
            código más seguro y fácil de mantener, lo que contribuye a su
            escalabilidad y estabilidad a largo plazo.
          </p>,
        ],
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

// const work = {
//   label: "Trabajo",
//   title: "Mis proyectos",
//   description: `Proyectos de ${person.name}`,
//   // Create new project pages by adding a new .mdx file to app/blog/posts
//   // All projects will be listed on the /home and /work routes
// };

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

export { person, social, newsletter, about, home };
