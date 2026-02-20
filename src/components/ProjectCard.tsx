"use client";

import { Button, Column, Flex, Heading, Icon, SmartImage, Tag, Text } from "@/once-ui/components";
import styles from "./ProjectCard.module.scss";

interface ProjectMetric {
  label: string;
  value: string;
}

interface ProjectImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface ProjectLink {
  github: string;
  demo: string;
}

interface ProjectCardProps {
  title: string;
  slug: string;
  category?: string;
  role?: string;
  timeframe?: string;
  description: React.ReactNode;
  images: ProjectImage[];
  tags: string[];
  metrics?: ProjectMetric[];
  links?: ProjectLink[];
  reversed?: boolean;
  locale?: string;
}

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

export function ProjectCard({
  title,
  slug,
  category,
  role,
  timeframe,
  description,
  images,
  tags,
  metrics,
  links,
  reversed = false,
  locale = "es",
}: ProjectCardProps) {
  return (
    <div className={`${styles.projectCard} ${reversed ? styles.reversed : ""}`}>
      {/* Image side */}
      <div className={styles.imageContainer}>
        <div className={styles.imageOverlay} />
        {images.length > 0 && (
          <SmartImage
            fillWidth
            aspectRatio="16/9"
            src={images[0].src}
            alt={images[0].alt}
            radius="m"
            objectFit="cover"
            style={{ height: "100%" }}
          />
        )}
      </div>

      {/* Content side */}
      <div className={styles.contentContainer}>
        {/* Category badge */}
        {category && <span className={styles.categoryBadge}>{category}</span>}

        {/* Title */}
        <Heading as="h3" variant="heading-strong-l">
          {title}
        </Heading>

        {/* Role + Timeframe */}
        {(role || timeframe) && (
          <Flex gap="8" vertical="center">
            {role && (
              <Text variant="body-default-s" onBackground="brand-weak">
                {role}
              </Text>
            )}
            {role && timeframe && (
              <Text variant="body-default-s" onBackground="neutral-weak">
                ·
              </Text>
            )}
            {timeframe && (
              <Text variant="body-default-s" onBackground="neutral-weak">
                {timeframe}
              </Text>
            )}
          </Flex>
        )}

        {/* Description */}
        <Text onBackground="neutral-weak" variant="body-default-m">
          {description}
        </Text>

        {/* Metrics */}
        {metrics && metrics.length > 0 && (
          <div className={styles.metricsGrid}>
            {metrics.map((metric, index) => (
              <div key={index} className={styles.metricItem}>
                <span className={styles.metricValue}>{metric.value}</span>
                <span className={styles.metricLabel}>{metric.label}</span>
              </div>
            ))}
          </div>
        )}

        {/* Tech tags */}
        <div className={styles.tagsRow}>
          {tags.map((tag, index) => (
            <span key={index} className={styles.techTag}>
              <Icon size="xs" name={tag} />
              {techLabels[tag] || tag}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className={styles.ctaRow}>
          {links &&
            links.length > 0 &&
            links[0].github && (
              <Button
                href={links[0].github}
                variant="secondary"
                size="s"
                prefixIcon="github"
              >
                GitHub
              </Button>
            )}
          {links &&
            links.length > 0 &&
            links[0].demo && (
              <Button
                href={links[0].demo}
                variant="secondary"
                size="s"
                prefixIcon="eye"
              >
                Demo
              </Button>
            )}
          <Button
            variant="primary"
            size="m"
            href={`/${locale}/project/${slug}`}
            suffixIcon="arrowRight"
          >
            {locale === 'en' ? 'View case study' : 'Ver caso de estudio'}
          </Button>
        </div>
      </div>
    </div>
  );
}
