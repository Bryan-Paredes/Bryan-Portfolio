import { about, person } from "@/app/resources";
import ScrollToHash from "@/components/ScrollToHash";
import {
  AvatarGroup,
  Button,
  Carousel,
  Column,
  Flex,
  Heading,
  Text,
} from "@/once-ui/components";

export default async function Project({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  const project = about.projects.projects.find(
    (project) => project.slug === slug
  );

  if (!project) {
    return <h1>Project not found</h1>;
  }

  return (
    <Column as="section" maxWidth="m" horizontal="center" gap="l">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: project.title,
            description: project.description,
            // image: project.images
            //   ? `https://${baseURL}${post.metadata.image}`
            //   : `https://${baseURL}/og?title=${post.metadata.title}`,
            // url: `https://${baseURL}/work/${post.slug}`,
            author: {
              "@type": "Person",
              name: person.name,
            },
          }),
        }}
      />
      <Column maxWidth="xs" gap="16">
        <Button
          href="/"
          variant="tertiary"
          weight="default"
          size="s"
          prefixIcon="chevronLeft"
        >
          Home
        </Button>
        <Heading variant="display-strong-s">{project.title}</Heading>
      </Column>
      {project.images.length > 0 && (
        <Carousel
          aspectRatio="16/9"
          indicator="line"
          marginBottom="l"
          images={project.images}
        />
      )}

      <Column style={{ margin: "auto" }} maxWidth="xs" gap="l">
        <Flex direction="column" gap="12" vertical="center" marginY="l">
          {project.overview?.map((overview, index) => (
            <Flex direction="column" key={index} gap="12" vertical="center">
              <Text as="h1" key={index}>
                {overview.title}
              </Text>
              <Text
                as="p"
                size="xl"
                variant="body-default-s"
                onBackground="neutral-medium"
                style={{ fontSize: "1rem", lineHeight: "1.5rem" }}
              >
                {overview.description}
              </Text>
            </Flex>
          ))}
        </Flex>
        <Flex direction="column" gap="12" vertical="center">
          <Text as="h1">Caracteristicas Principales</Text>
          <Column as="ul" gap="16">
            {project.keyFeatures.map((keyFeature, index) => (
              <Text
                key={index}
                as="li"
                size="xl"
                variant="body-default-s"
                onBackground="neutral-medium"
                style={{ fontSize: "1rem", lineHeight: "1.5rem" }}
              >
                {keyFeature.text}
              </Text>
            ))}
          </Column>
        </Flex>
        <Flex direction="column" gap="12" vertical="center">
          <Text as="h1">Tecnologías Utilizadas</Text>
          <Column as="ul" gap="16">
            {project.technologies.map((technology, index) => (
              <Text
                key={index}
                as="li"
                size="xl"
                variant="body-default-s"
                onBackground="neutral-medium"
                style={{ fontSize: "1rem", lineHeight: "1.5rem" }}
              >
                {technology.text}
              </Text>
            ))}
          </Column>
        </Flex>
        <Flex direction="column" gap="12" vertical="center">
          <Text as="h1">Resultado</Text>
          {project.outcome.map((outcome, index) => (
            <Text
              key={index}
              size="xl"
              variant="body-default-s"
              onBackground="neutral-medium"
              style={{ fontSize: "1rem", lineHeight: "1.5rem" }}
            >
              {outcome}
            </Text>
          ))}
        </Flex>
      </Column>
      <ScrollToHash />
    </Column>
  );
}
