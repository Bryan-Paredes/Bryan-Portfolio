import { getDictionary } from "@/app/resources/dictionaries";
import { Locale } from "@/i18n.config";
import ScrollToHash from "@/components/ScrollToHash";
import {
  Button,
  Column,
  Flex,
  Heading,
  Icon,
  SmartImage,
  Tag,
  Text,
} from "@/once-ui/components";

const techLabels: Record<string, string> = {
  nextjs: "Next.js",
  typescript: "TypeScript",
  postgresql: "PostgreSQL",
  prisma: "Prisma",
  supabase: "Supabase",
  redis: "Redis",
  turborepo: "Turborepo",
  stripe: "Stripe",
  expo: "Expo",
  react: "React",
  tailwindcss: "Tailwind",
  astro: "Astro",
  node: "Node.js",
  reactNative: "React Native",
};

export default async function Project({
  params,
}: {
  params: { slug: string; locale: Locale };
}) {
  const { slug, locale } = params;
  const dict = await getDictionary(locale);
  const { about, person } = dict;

  const t = {
    home: locale === 'es' ? 'Inicio' : 'Home',
    features: locale === 'es' ? 'Características Principales' : 'Key Features',
    tech: locale === 'es' ? 'Tecnologías' : 'Technologies',
    outcome: locale === 'es' ? 'Resultado e Impacto' : 'Outcome & Impact',
    github: locale === 'es' ? 'Ver en GitHub' : 'View on GitHub',
    demo: locale === 'es' ? 'Ver Demo' : 'View Demo',
    notFound: locale === 'es' ? 'Proyecto no encontrado' : 'Project not found'
  };

  const project = about.projects.projects.find(
    (project) => project.slug === slug
  );

  if (!project) {
    return <h1>{t.notFound}</h1>;
  }

  return (
    <Column as="section" maxWidth="m" horizontal="center" gap="l">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: project.title,
            description: project.description,
            author: {
              "@type": "Person",
              name: person.name,
            },
          }),
        }}
      />

      {/* Navigation */}
      <Column maxWidth="xs" gap="16">
        <Button
          href={`/${locale}`}
          variant="tertiary"
          weight="default"
          size="s"
          prefixIcon="chevronLeft"
        >
          {t.home}
        </Button>
      </Column>

      {/* Hero Section */}
      <Column fillWidth gap="m">
        {/* Category + Timeframe */}
        <Flex gap="12" vertical="center" wrap>
          {project.category && (
            <Tag size="l" variant="brand">
              {project.category}
            </Tag>
          )}
          {project.role && (
            <Text variant="body-default-s" onBackground="brand-weak">
              {project.role}
            </Text>
          )}
          {project.timeframe && (
            <>
              <Text variant="body-default-s" onBackground="neutral-weak">
                ·
              </Text>
              <Text variant="body-default-s" onBackground="neutral-weak">
                {project.timeframe}
              </Text>
            </>
          )}
        </Flex>

        <Heading variant="display-strong-l">{project.title}</Heading>

        {/* Tech tags */}
        <Flex gap="8" wrap>
          {project.tags?.map((tag, index) => (
            <Flex
              key={index}
              gap="4"
              vertical="center"
              padding="4"
              paddingX="8"
              radius="s"
              background="neutral-alpha-weak"
            >
              <Icon size="xs" name={tag} />
              <Text variant="label-default-s" onBackground="neutral-medium">
                {techLabels[tag] || tag}
              </Text>
            </Flex>
          ))}
        </Flex>
      </Column>

      {/* Hero Image */}
      {project.images.length > 0 && (
        <Flex
          fillWidth
          border="neutral-alpha-weak"
          radius="l"
          overflow="hidden"
          style={{ position: "relative" }}
        >
          <SmartImage
            fillWidth
            aspectRatio="16/9"
            src={project.images[0].src}
            alt={project.images[0].alt}
            radius="l"
            objectFit="cover"
          />
        </Flex>
      )}

      {/* Metrics Bar */}
      {project.metrics && project.metrics.length > 0 && (
        <Flex
          fillWidth
          gap="8"
          wrap
          horizontal="center"
          padding="m"
          radius="l"
          border="neutral-alpha-weak"
          background="surface"
        >
          {project.metrics.map((metric, index) => (
            <Flex
              key={index}
              direction="column"
              horizontal="center"
              padding="8"
              paddingX="16"
              gap="4"
              style={{ minWidth: "80px" }}
            >
              <Text
                variant="heading-strong-m"
                onBackground="brand-strong"
              >
                {metric.value}
              </Text>
              <Text
                variant="label-default-s"
                onBackground="neutral-weak"
              >
                {metric.label}
              </Text>
            </Flex>
          ))}
        </Flex>
      )}

      {/* Content Sections */}
      <Column style={{ margin: "auto" }} maxWidth="xs" gap="xl">
        {/* Overview */}
        {project.overview?.map((overview, index) => (
          <Flex direction="column" key={index} gap="16" vertical="center">
            <Heading as="h2" variant="heading-strong-l">
              {overview.title}
            </Heading>
            <Text
              as="p"
              variant="body-default-m"
              onBackground="neutral-medium"
              style={{ lineHeight: "1.75rem" }}
            >
              {overview.description}
            </Text>
          </Flex>
        ))}

        {/* Key Features */}
        <Flex direction="column" gap="16" vertical="center">
          <Heading as="h2" variant="heading-strong-l">
            {t.features}
          </Heading>
          <Column as="ul" gap="16">
            {project.keyFeatures.map((keyFeature, index) => (
              <Flex key={index} gap="12" vertical="start">
                <Flex
                  style={{
                    minWidth: "28px",
                    height: "28px",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    background: "var(--brand-alpha-weak)",
                    border: "1px solid var(--brand-alpha-medium)",
                    color: "var(--brand-on-background-weak)",
                    marginTop: "2px",
                  }}
                >
                  {keyFeature.id}
                </Flex>
                <Text
                  as="li"
                  variant="body-default-m"
                  onBackground="neutral-medium"
                  style={{
                    lineHeight: "1.75rem",
                    listStyle: "none",
                  }}
                >
                  {keyFeature.text}
                </Text>
              </Flex>
            ))}
          </Column>
        </Flex>

        {/* Technologies */}
        <Flex direction="column" gap="16" vertical="center">
          <Heading as="h2" variant="heading-strong-l">
            {t.tech}
          </Heading>
          <Column gap="12">
            {project.technologies.map((technology, index) => (
              <Flex
                key={index}
                padding="16"
                radius="m"
                border="neutral-alpha-weak"
                background="surface"
                gap="12"
                vertical="start"
              >
                <Text
                  variant="body-default-m"
                  onBackground="neutral-medium"
                  style={{ lineHeight: "1.75rem" }}
                >
                  {technology.text}
                </Text>
              </Flex>
            ))}
          </Column>
        </Flex>

        {/* Outcome */}
        <Flex direction="column" gap="16" vertical="center">
          <Heading as="h2" variant="heading-strong-l">
            {t.outcome}
          </Heading>
          {project.outcome.map((outcome, index) => (
            <Text
              key={index}
              variant="body-default-m"
              onBackground="neutral-medium"
              style={{ lineHeight: "1.75rem" }}
            >
              {outcome}
            </Text>
          ))}
        </Flex>

        {/* External Links */}
        {project.links && project.links.length > 0 && (
          <Flex gap="12" wrap>
            {project.links[0].github && (
              <Button
                href={project.links[0].github}
                variant="secondary"
                size="m"
                prefixIcon="github"
              >
                {t.github}
              </Button>
            )}
            {project.links[0].demo && (
              <Button
                href={project.links[0].demo}
                variant="secondary"
                size="m"
                prefixIcon="eye"
              >
                {t.demo}
              </Button>
            )}
          </Flex>
        )}
      </Column>
      <ScrollToHash />
    </Column>
  );
}
