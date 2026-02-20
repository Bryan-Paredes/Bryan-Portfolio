const person = {
  firstName: "Bryan",
  lastName: "Paredes",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Full-Stack Software Engineer",
  avatar: "/images/avatar.jpeg",
  location: "America / Guatemala",
  languages: ["Español", "Inglés"],
};

const newsletter = {
  display: true,
  title: <h3>Contactame</h3>,
  description: <p>¿Hablamos?</p>,
};

const social = [
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
        Ingeniero de software full-stack especializado en construir productos
        digitales complejos — desde plataformas SaaS multi-tenant hasta sistemas
        logísticos y marketplaces. Trabajo con startups y empresas para llevar
        sus ideas de concepto a producción usando arquitecturas modernas con
        Next.js, TypeScript, PostgreSQL y Supabase.
      </p>
    ),
  },
  work: {
    display: true,
    title: "Experiencia Laboral",
    experiences: [
      {
        company: "Freelance",
        timeframe: "2024 - Presente",
        role: "Full-Stack Software Engineer",
        achievements: [
          <p>
            Diseño, desarrollo y despliegue de productos digitales completos
            para clientes — plataformas SaaS, sistemas logísticos y
            marketplaces. Responsable de la arquitectura técnica, base de datos,
            APIs, interfaces de usuario y despliegue en producción.
          </p>,
        ],
        images: [],
      },
      {
        company: "ClinControl",
        timeframe: "2025 - Presente",
        role: "Full-Stack Developer — Plataforma SaaS Médica",
        achievements: [
          <p>
            Arquitectura e implementación de una plataforma multi-tenant para
            gestión de clínicas médicas. 35+ modelos de datos, 55 server
            actions, Row-Level Security en PostgreSQL, y sistema de
            suscripciones con Recurrente.
          </p>,
        ],
        images: [],
      },
      {
        company: "Xipitt",
        timeframe: "2024 - 2025",
        role: "Full-Stack Developer — Marketplace Logístico",
        achievements: [
          <p>
            Desarrollo de marketplace para transporte de equipo pesado en
            EE.UU. Web (Next.js), API REST para móvil, app React Native/Expo, y
            panel admin. Integración con Stripe, GPS tracking en tiempo real, y
            sistema de cotizaciones.
          </p>,
        ],
        images: [],
      },
      {
        company: "TPC Express",
        timeframe: "2024 - 2025 (4 meses)",
        role: "Full-Stack Developer — Sistema Logístico",
        achievements: [
          <p>
            Sistema integral de gestión logística para empresa de mensajería.
            Monorepo con 3 apps (Admin, Empresas, Mensajeros), generación de
            guías con QR, evidencia de entrega con GPS, y motor de tarifas
            por zonas.
          </p>,
        ],
        images: [],
      },
    ],
  },
  projects: {
    display: true,
    title: "Proyectos",
    projects: [
      {
        title: "ClinControl",
        slug: "clincontrol",
        category: "Plataforma SaaS",
        role: "Full-Stack Developer",
        timeframe: "2025 - Presente",
        description: (
          <p>
            Plataforma multi-tenant SaaS para la gestión integral de clínicas
            médicas en Latinoamérica. Gestiona pacientes, citas, consultas en
            tiempo real, prescripciones, laboratorio, inventario y analytics
            con IA.
          </p>
        ),
        images: [
          {
            src: "/images/projects/clincontrol.png",
            alt: "ClinControl - Plataforma SaaS Médica",
            width: 33,
            height: 17,
          },
        ],
        links: [
          {
            github: "",
            demo: "",
          },
        ],
        tags: [
          "nextjs",
          "typescript",
          "postgresql",
          "prisma",
          "supabase",
          "redis",
          "turborepo",
        ],
        metrics: [
          { label: "Modelos", value: "35+" },
          { label: "Server Actions", value: "55" },
          { label: "Módulos UI", value: "32" },
          { label: "Roles", value: "6" },
          { label: "Tests E2E", value: "12" },
        ],
        overview: [
          {
            title: "Visión General",
            description: (
              <p>
                ClinControl es una plataforma SaaS multi-tenant diseñada para
                digitalizar y optimizar las operaciones de clínicas médicas en
                Latinoamérica. Soporta múltiples especialidades — Medicina
                General, Veterinaria, Pediatría, Ginecología, Psiquiatría — a
                través de un único codebase adaptativo. Implementa un modelo de
                seguridad defense-in-depth con Row-Level Security a nivel de
                base de datos para garantizar aislamiento completo entre
                clínicas.
              </p>
            ),
          },
        ],
        keyFeatures: [
          {
            id: 1,
            text: "Gestión completa de pacientes con campos adaptativos por especialidad médica, importación masiva por Excel/CSV y búsqueda global.",
          },
          {
            id: 2,
            text: "Sistema de citas con calendario por doctor, sincronización bidireccional con Google Calendar, y recordatorios automáticos por email.",
          },
          {
            id: 3,
            text: "Workflow de consulta en tiempo real: check-in → sala de espera → consulta → notas médicas → prescripción → cierre post-consulta.",
          },
          {
            id: 4,
            text: "Analytics con IA (Groq/Llama 3.3 70B) para insights conversacionales, detección de tendencias y recomendaciones operativas.",
          },
          {
            id: 5,
            text: "Sistema de suscripciones SaaS con trial de 15 días, planes tiered (Basic, Pro, Enterprise) y pagos vía Recurrente.",
          },
        ],
        technologies: [
          {
            text: (
              <p>
                <strong>Next.js 16 (App Router): </strong>Arquitectura
                server-first con React Server Components y Server Actions para
                eliminación de API layer.
              </p>
            ),
          },
          {
            text: (
              <p>
                <strong>PostgreSQL + Prisma 7: </strong>35+ modelos con
                Row-Level Security, 100+ índices compuestos para queries
                multi-tenant.
              </p>
            ),
          },
          {
            text: (
              <p>
                <strong>Supabase: </strong>Auth + Storage + Realtime en un solo
                servicio. Chat interno, notificaciones y almacenamiento de
                archivos médicos.
              </p>
            ),
          },
          {
            text: (
              <p>
                <strong>Turborepo: </strong>Monorepo con paquetes compartidos
                (database, ui, emails, supabase) entre apps admin y plataforma.
              </p>
            ),
          },
        ],
        outcome: [
          <p>
            Digitalizó el workflow clínico completo — desde la llegada del
            paciente hasta el cierre post-consulta — reemplazando procesos
            fragmentados de papel y hojas de cálculo con una plataforma
            unificada. La arquitectura multi-especialidad permite servir
            prácticas médicas fundamentalmente diferentes sin forks del
            codebase.
          </p>,
        ],
      },
      {
        title: "TPC Express",
        slug: "tpc-express",
        category: "Sistema Logístico",
        role: "Full-Stack Developer",
        timeframe: "2024 - 2025",
        description: (
          <p>
            Sistema integral de gestión logística para empresa de mensajería en
            Guatemala. Digitaliza el ciclo completo de envíos — desde la
            solicitud hasta la entrega con evidencia fotográfica y GPS — con 3
            apps independientes.
          </p>
        ),
        images: [
          {
            src: "/images/projects/tpc-express.png",
            alt: "TPC Express - Sistema Logístico",
            width: 33,
            height: 17,
          },
        ],
        links: [
          {
            github: "",
            demo: "",
          },
        ],
        tags: [
          "nextjs",
          "typescript",
          "postgresql",
          "prisma",
          "supabase",
          "redis",
          "turborepo",
        ],
        metrics: [
          { label: "Apps", value: "3" },
          { label: "Modelos", value: "12" },
          { label: "Server Actions", value: "43+" },
          { label: "Estados de Guía", value: "8" },
          { label: "Índices BD", value: "30+" },
        ],
        overview: [
          {
            title: "Visión General",
            description: (
              <p>
                TPC Express es una plataforma de gestión logística de punta a
                punta para una empresa de mensajería. El sistema digitaliza el
                ciclo de vida completo de una orden de envío — desde la
                solicitud del cliente empresarial hasta la entrega final con
                evidencia fotográfica y coordenadas GPS. Implementado como un
                monorepo con tres aplicaciones: Admin (centro de control),
                Empresas (portal de autoservicio) y Mensajeros (app móvil).
              </p>
            ),
          },
        ],
        keyFeatures: [
          {
            id: 1,
            text: "Generación de guías con QR únicos mediante Redis INCR atómico, con códigos semánticos de 13 caracteres y fallback criptográfico.",
          },
          {
            id: 2,
            text: "Evidencia de entrega con foto, nombre del receptor y coordenadas GPS del dispositivo, validada con schemas Zod.",
          },
          {
            id: 3,
            text: "Rutas multi-parada donde un solo envío puede tener múltiples destinos, cada uno con estado independiente.",
          },
          {
            id: 4,
            text: "Motor de tarifas por zonas con 3 capas: municipios → grupos → tarifas origen-destino, más costos personalizados por empresa.",
          },
          {
            id: 5,
            text: "Sistema de depósitos bancarios con flujo de verificación para empresas y mensajeros (COD - Cash on Delivery).",
          },
        ],
        technologies: [
          {
            text: (
              <p>
                <strong>Next.js 16 (App Router): </strong>3 apps independientes
                con Server Actions como default para lógica de negocio.
              </p>
            ),
          },
          {
            text: (
              <p>
                <strong>PostgreSQL + Prisma: </strong>12 modelos con 30+
                índices optimizados para patrones de consulta del negocio.
              </p>
            ),
          },
          {
            text: (
              <p>
                <strong>Clerk + Supabase Auth: </strong>Estrategia dual — Clerk
                para admin con MFA, Supabase Auth + hCaptcha para empresas y
                mensajeros.
              </p>
            ),
          },
          {
            text: (
              <p>
                <strong>Redis: </strong>Contadores atómicos para generación de
                guías y caching de datos frecuentes con graceful degradation.
              </p>
            ),
          },
        ],
        outcome: [
          <p>
            Redujo el tiempo de creación de órdenes de ~15 min (manual) a
            menos de 2 min. Eliminó errores de transcripción del ~12% a ~0%.
            Proporcionó visibilidad en tiempo real a clientes corporativos y
            trazabilidad completa con 8 estados de guía + timeline. 100% de
            entregas con evidencia verificable (foto + GPS + nombre).
          </p>,
        ],
      },
      {
        title: "Xipitt",
        slug: "xipitt",
        category: "Marketplace",
        role: "Full-Stack Developer",
        timeframe: "2024 - 2025",
        description: (
          <p>
            Marketplace de logística para transporte de equipo pesado en
            Estados Unidos. Conecta shippers con carriers verificados para el
            transporte de maquinaria, vehículos y carga pesada con cotización
            competitiva y tracking GPS.
          </p>
        ),
        images: [
          {
            src: "/images/projects/xipitt.png",
            alt: "Xipitt - Marketplace de Logística",
            width: 33,
            height: 17,
          },
        ],
        links: [
          {
            github: "",
            demo: "",
          },
        ],
        tags: [
          "nextjs",
          "typescript",
          "postgresql",
          "prisma",
          "supabase",
          "stripe",
          "expo",
          "turborepo",
        ],
        metrics: [
          { label: "Apps", value: "4" },
          { label: "Modelos", value: "20+" },
          { label: "Server Actions", value: "65+" },
          { label: "API Endpoints", value: "17+" },
          { label: "Componentes", value: "197+" },
        ],
        overview: [
          {
            title: "Visión General",
            description: (
              <p>
                Xipitt es un marketplace full-stack que conecta shippers con
                carriers verificados para el transporte de equipo pesado,
                vehículos y carga en EE.UU. Opera como un loadboard donde los
                shippers publican envíos, los carriers envían cotizaciones
                competitivas, y el sistema orquesta todo el ciclo — cotización,
                pago vía Stripe, tracking GPS en tiempo real y confirmación de
                entrega bilateral.
              </p>
            ),
          },
        ],
        keyFeatures: [
          {
            id: 1,
            text: "Loadboard en tiempo real con cotizaciones competitivas, sistema de comisión configurable (default 20%) almacenado en PlatformConfig.",
          },
          {
            id: 2,
            text: "Tracking multi-etapa con 9 estados, confirmación bilateral (carrier + shipper), y coordenadas GPS en tiempo real vía Supabase Realtime.",
          },
          {
            id: 3,
            text: "Pagos integrados con Stripe: PaymentIntents, tarjetas guardadas, lifecycle de transacciones y gestión de comisiones.",
          },
          {
            id: 4,
            text: "Verificación de carriers con 8 documentos requeridos (licencia, placas, MC/DOT, trailer) y flujo de aprobación admin.",
          },
          {
            id: 5,
            text: "App móvil React Native/Expo para carriers con push notifications, tracking de ubicación, y gestión de entregas en campo.",
          },
        ],
        technologies: [
          {
            text: (
              <p>
                <strong>Next.js 15 + React 19: </strong>Web loadboard con
                Server Actions (65+ acciones) y API REST versionada para
                clientes móviles.
              </p>
            ),
          },
          {
            text: (
              <p>
                <strong>React Native / Expo: </strong>App móvil
                cross-platform para carriers con GPS tracking, push
                notifications y gestión de entregas.
              </p>
            ),
          },
          {
            text: (
              <p>
                <strong>Stripe: </strong>Procesamiento de pagos PCI-compliant
                con PaymentIntents, comisiones configurables y lifecycle
                completo de transacciones.
              </p>
            ),
          },
          {
            text: (
              <p>
                <strong>Supabase + Mapbox: </strong>Auth, Realtime para GPS
                tracking, Storage para documentos, y cálculo de distancias con
                geocoding.
              </p>
            ),
          },
        ],
        outcome: [
          <p>
            Marketplace end-to-end cubriendo discovery, cotización, pago,
            tracking y reviews post-entrega. 20+ modelos Prisma con 870 líneas
            de schema, 65+ Server Actions para web y 17+ REST endpoints para
            móvil. Sistema cross-platform sirviendo web, móvil y admin desde
            un solo codebase monorepo.
          </p>,
        ],
      },
    ],
  },
  studies: {
    display: true,
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
    display: true,
    title: "Skills Técnicos",
    skills: [
      {
        title: "React",
        images: [
          {
            src: "/images/technical/react.svg",
            alt: "React",
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
            alt: "JavaScript",
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
            alt: "TypeScript",
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
            alt: "HTML5",
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
            alt: "CSS",
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
            alt: "Tailwind CSS",
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
            alt: "Astro",
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
            alt: "Next.js",
            width: 4,
            height: 2,
          },
        ],
      },
    ],
  },
};

export { person, social, newsletter, about, home };
