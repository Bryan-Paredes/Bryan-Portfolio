import React from "react";

const person = {
  firstName: "Bryan",
  lastName: "Paredes",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Full-Stack Software Engineer",
  avatar: "/images/avatar.jpeg",
  location: "America / Guatemala",
  languages: ["Spanish", "English"],
};

const newsletter = {
  display: true,
  title: <h3>Contact Me</h3>,
  description: <p>Let's talk?</p>,
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
  title: `${person.name} Portfolio`,
  description: `Web portfolio showcasing my work as a ${person.role}`,
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
        Full-stack software engineer specialized in building complex digital
        products — from multi-tenant SaaS platforms to logistics systems and
        marketplaces. I work with startups and companies to take their ideas
        from concept to production using modern architectures with Next.js,
        TypeScript, PostgreSQL, and Supabase.
      </p>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "Freelance",
        timeframe: "2024 - Present",
        role: "Full-Stack Software Engineer",
        achievements: [
          <p>
            Design, development, and deployment of end-to-end digital products
            for clients — SaaS platforms, logistics systems, and marketplaces.
            Responsible for technical architecture, database, APIs, user
            interfaces, and production deployment.
          </p>,
        ],
        images: [],
      },
      {
        company: "ClinControl",
        timeframe: "2025 - Present",
        role: "Full-Stack Developer — Medical SaaS Platform",
        achievements: [
          <p>
            Architecture and implementation of a multi-tenant platform for
            medical clinic management. 35+ data models, 55 server actions,
            Row-Level Security in PostgreSQL, and subscription system with
            Recurrente.
          </p>,
        ],
        images: [],
      },
      {
        company: "Xipitt",
        timeframe: "2024 - 2025",
        role: "Full-Stack Developer — Logistics Marketplace",
        achievements: [
          <p>
            Development of a heavy equipment transportation marketplace in the
            US. Web (Next.js), REST API for mobile, React Native/Expo app, and
            admin panel. Integration with Stripe, real-time GPS tracking, and
            quoting system.
          </p>,
        ],
        images: [],
      },
      {
        company: "TPC Express",
        timeframe: "2024 - 2025 (4 months)",
        role: "Full-Stack Developer — Logistics System",
        achievements: [
          <p>
            Comprehensive logistics management system for a courier company.
            Monorepo with 3 apps (Admin, Companies, Couriers), QR guide
            generation, delivery evidence with GPS, and zone-based pricing
            engine.
          </p>,
        ],
        images: [],
      },
    ],
  },
  projects: {
    display: true,
    title: "Projects",
    projects: [
      {
        title: "ClinControl",
        slug: "clincontrol",
        category: "SaaS Platform",
        role: "Full-Stack Developer",
        timeframe: "2025 - Present",
        description: (
          <p>
            Multi-tenant SaaS platform for the comprehensive management of
            medical clinics in Latin America. Manages patients, appointments,
            real-time consultations, prescriptions, laboratory, inventory, and
            AI analytics.
          </p>
        ),
        images: [
          {
            src: "/images/projects/clincontrol.png",
            alt: "ClinControl - Medical SaaS Platform",
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
          { label: "Models", value: "35+" },
          { label: "Server Actions", value: "55" },
          { label: "UI Modules", value: "32" },
          { label: "Roles", value: "6" },
          { label: "E2E Tests", value: "12" },
        ],
        overview: [
          {
            title: "Overview",
            description: (
              <p>
                ClinControl is a multi-tenant SaaS platform designed to digitize
                and optimize the operations of medical clinics in Latin America.
                It supports multiple specialties — General Medicine, Veterinary,
                Pediatrics, Gynecology, Psychiatry — through a single adaptive
                codebase. It implements a defense-in-depth security model with
                Row-Level Security at the database level to ensure complete
                isolation between clinics.
              </p>
            ),
          },
        ],
        keyFeatures: [
          {
            id: 1,
            text: "Complete patient management with adaptive fields per medical specialty, mass import via Excel/CSV, and global search.",
          },
          {
            id: 2,
            text: "Appointment system with calendar per doctor, bidirectional synchronization with Google Calendar, and automatic email reminders.",
          },
          {
            id: 3,
            text: "Real-time consultation workflow: check-in → waiting room → consultation → medical notes → prescription → post-consultation closure.",
          },
          {
            id: 4,
            text: "AI Analytics (Groq/Llama 3.3 70B) for conversational insights, trend detection, and operational recommendations.",
          },
          {
            id: 5,
            text: "SaaS subscription system with a 15-day trial, tiered plans (Basic, Pro, Enterprise), and payments via Recurrente.",
          },
        ],
        technologies: [
          {
            text: (
              <p>
                <strong>Next.js 16 (App Router): </strong>Server-first
                architecture with React Server Components and Server Actions to
                eliminate the API layer.
              </p>
            ),
          },
          {
            text: (
              <p>
                <strong>PostgreSQL + Prisma 7: </strong>35+ models with Row-Level
                Security, 100+ composite indexes for multi-tenant queries.
              </p>
            ),
          },
          {
            text: (
              <p>
                <strong>Supabase: </strong>Auth + Storage + Realtime in a single
                service. Internal chat, notifications, and medical file storage.
              </p>
            ),
          },
          {
            text: (
              <p>
                <strong>Turborepo: </strong>Monorepo with shared packages (database,
                ui, emails, supabase) between admin apps and platform.
              </p>
            ),
          },
        ],
        outcome: [
          <p>
            Digitized the complete clinical workflow — from patient arrival to
            post-consultation closure — replacing fragmented paper and spreadsheet
            processes with a unified platform. The multi-specialty architecture
            allows serving fundamentally different medical practices without
            forking the codebase.
          </p>,
        ],
      },
      {
        title: "TPC Express",
        slug: "tpc-express",
        category: "Logistics System",
        role: "Full-Stack Developer",
        timeframe: "2024 - 2025",
        description: (
          <p>
            Comprehensive logistics management system for a courier company in
            Guatemala. Digitizes the entire shipping lifecycle — from request to
            delivery with photographic evidence and GPS — using 3 independent apps.
          </p>
        ),
        images: [
          {
            src: "/images/projects/tpc-express.png",
            alt: "TPC Express - Logistics System",
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
          { label: "Models", value: "12" },
          { label: "Server Actions", value: "43+" },
          { label: "Guide States", value: "8" },
          { label: "DB Indexes", value: "30+" },
        ],
        overview: [
          {
            title: "Overview",
            description: (
              <p>
                TPC Express is an end-to-end logistics management platform for a
                courier company. The system digitizes the complete lifecycle of a
                shipping order — from the corporate client's request to final
                delivery with photographic evidence and GPS coordinates.
                Implemented as a monorepo with three applications: Admin (control
                center), Companies (self-service portal), and Couriers (mobile app).
              </p>
            ),
          },
        ],
        keyFeatures: [
          {
            id: 1,
            text: "Generation of unique QR guides using atomic Redis INCR, with 13-character semantic codes and cryptographic fallback.",
          },
          {
            id: 2,
            text: "Delivery evidence with photo, receiver's name, and device GPS coordinates, validated with Zod schemas.",
          },
          {
            id: 3,
            text: "Multi-stop routes where a single shipment can have multiple destinations, each with an independent status.",
          },
          {
            id: 4,
            text: "Zone-based pricing engine with 3 layers: municipalities → groups → origin-destination rates, plus custom costs per company.",
          },
          {
            id: 5,
            text: "Bank deposit system with verification workflow for companies and couriers (COD - Cash on Delivery).",
          },
        ],
        technologies: [
          {
            text: (
              <p>
                <strong>Next.js 16 (App Router): </strong>3 independent apps with
                Server Actions as default for business logic.
              </p>
            ),
          },
          {
            text: (
              <p>
                <strong>PostgreSQL + Prisma: </strong>12 models with 30+ optimized
                indexes for business query patterns.
              </p>
            ),
          },
          {
            text: (
              <p>
                <strong>Clerk + Supabase Auth: </strong>Dual strategy — Clerk for
                admin with MFA, Supabase Auth + hCaptcha for companies and couriers.
              </p>
            ),
          },
          {
            text: (
              <p>
                <strong>Redis: </strong>Atomic counters for guide generation and
                frequent data caching with graceful degradation.
              </p>
            ),
          },
        ],
        outcome: [
          <p>
            Reduced order creation time from ~15 min (manual) to less than 2
            min. Eliminated transcription errors from ~12% to ~0%. Provided
            real-time visibility to corporate clients and full traceability with
            8 guide states + timeline. 100% of deliveries with verifiable
            evidence (photo + GPS + name).
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
            Logistics marketplace for heavy equipment transportation in the
            United States. Connects shippers with verified carriers for hauling
            machinery, vehicles, and heavy freight with competitive quoting and
            GPS tracking.
          </p>
        ),
        images: [
          {
            src: "/images/projects/xipitt.png",
            alt: "Xipitt - Logistics Marketplace",
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
          { label: "Models", value: "20+" },
          { label: "Server Actions", value: "65+" },
          { label: "API Endpoints", value: "17+" },
          { label: "Components", value: "197+" },
        ],
        overview: [
          {
            title: "Overview",
            description: (
              <p>
                Xipitt is a full-stack marketplace connecting shippers with
                verified carriers for the transportation of heavy equipment,
                vehicles, and freight in the US. It operates as a loadboard
                where shippers post loads, carriers submit competitive quotes,
                and the system orchestrates the entire cycle — quoting, payment
                via Stripe, real-time GPS tracking, and bilateral delivery
                confirmation.
              </p>
            ),
          },
        ],
        keyFeatures: [
          {
            id: 1,
            text: "Real-time loadboard with competitive quoting, configurable commission system (default 20%) stored in PlatformConfig.",
          },
          {
            id: 2,
            text: "Multi-stage tracking with 9 states, bilateral confirmation (carrier + shipper), and real-time GPS coordinates via Supabase Realtime.",
          },
          {
            id: 3,
            text: "Integrated payments with Stripe: PaymentIntents, saved cards, transaction lifecycle, and commission management.",
          },
          {
            id: 4,
            text: "Carrier verification with 8 required documents (license, plates, MC/DOT, trailer) and admin approval flow.",
          },
          {
            id: 5,
            text: "React Native/Expo mobile app for carriers with push notifications, location tracking, and field delivery management.",
          },
        ],
        technologies: [
          {
            text: (
              <p>
                <strong>Next.js 15 + React 19: </strong>Web loadboard with
                Server Actions (65+ actions) and versioned REST API for mobile
                clients.
              </p>
            ),
          },
          {
            text: (
              <p>
                <strong>React Native / Expo: </strong>Cross-platform mobile app
                for carriers with GPS tracking, push notifications, and delivery
                management.
              </p>
            ),
          },
          {
            text: (
              <p>
                <strong>Stripe: </strong>PCI-compliant payment processing with
                PaymentIntents, configurable commissions, and full transaction
                lifecycle.
              </p>
            ),
          },
          {
            text: (
              <p>
                <strong>Supabase + Mapbox: </strong>Auth, Realtime for GPS
                tracking, Storage for documents, and distance calculation with
                geocoding.
              </p>
            ),
          },
        ],
        outcome: [
          <p>
            End-to-end marketplace covering discovery, quoting, payment,
            tracking, and post-delivery reviews. 20+ Prisma models with 870 lines
            of schema, 65+ Server Actions for web, and 17+ REST endpoints for
            mobile. Cross-platform system serving web, mobile, and admin from a
            single monorepo codebase.
          </p>,
        ],
      },
    ],
  },
  studies: {
    display: true,
    title: "Education",
    institutions: [
      {
        name: "Self-Taught",
        description: (
          <p>I have learned through online courses and personal projects.</p>
        ),
      },
      {
        name: "High School in Computer Sciences",
        description: (
          <p>
            Acquired knowledge in software development and the use of
            technological tools, laying the foundation for my growth as a
            developer.
          </p>
        ),
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical Skills",
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
