import {
  Avatar,
  Button,
  Column,
  Flex,
  Heading,
  Icon,
  IconButton,
  SmartImage,
  Tag,
  Text,
} from "@/once-ui/components";
import { baseURL } from "@/app/resources";
import styles from "@/components/about.module.scss";
import { getDictionary } from "@/app/resources/dictionaries";
import { Locale } from "@/i18n.config";
import { Mailchimp } from "@/components";
import { ProjectCard } from "@/components/ProjectCard";
import ScrollToHash from "@/components/ScrollToHash";

export async function generateMetadata({ params: { locale } }: { params: { locale: Locale } }) {
  const dict = await getDictionary(locale);
  const home = dict.home;
  const title = home.title;
  const description = home.description;
  const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://${baseURL}`,
      images: [
        {
          url: ogImage,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function About({ params: { locale } }: { params: { locale: Locale } }) {
  const dict = await getDictionary(locale);
  const { person, about, social, newsletter, home } = dict;

  return (
    <Column maxWidth="m">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: person.name,
            jobTitle: person.role,
            description: about.intro.description,
            url: `https://${baseURL}`,
            image: `${baseURL}/images/${person.avatar}`,

            sameAs: social
              .filter((item) => item.link && !item.link.startsWith("mailto:")) // Filter out empty links and email links
              .map((item) => item.link),
            // worksFor: {
            //   "@type": "Organization",
            //   name: about.work.experiences[0].company || "",
            // },
          }),
        }}
      />
      <Flex
        fillWidth
        mobileDirection="column"
        horizontal="center"
        vertical="center"
      >
        <ScrollToHash />
        <Column flex={9} maxWidth={45}>
          {about.avatar.display && (
            <Column
              // className={styles.avatar}
              minWidth="160"
              paddingX="l"
              paddingBottom="l"
              gap="m"
              flex={1}
              horizontal="center"
              vertical="center"
            >
              <Avatar src={person.avatar} size="xl" />
              <Flex gap="8" vertical="center">
                <Icon onBackground="accent-weak" name="location" />
                {person.location}
              </Flex>
              {person.languages.length > 0 && (
                <Flex wrap gap="8">
                  {person.languages.map((language, index) => (
                    <Tag key={index} size="l">
                      {language}
                    </Tag>
                  ))}
                </Flex>
              )}
            </Column>
          )}
          <Column
            id={about.intro.title}
            fillWidth
            minHeight="160"
            vertical="center"
            horizontal="center"
            marginBottom="32"
          >
            {about.calendar.display && (
              <Flex
                fitWidth
                border="brand-alpha-medium"
                className={styles.blockAlign}
                style={{
                  backdropFilter: "blur(var(--static-space-1))",
                }}
                background="brand-alpha-weak"
                radius="full"
                padding="4"
                gap="8"
                marginBottom="m"
                vertical="center"
              >
                <Icon
                  paddingLeft="12"
                  name="calendar"
                  onBackground="brand-weak"
                />
                <Flex paddingX="8">Programa una llamada</Flex>
                <IconButton
                  href={about.calendar.link}
                  data-border="rounded"
                  variant="secondary"
                  icon="chevronRight"
                />
              </Flex>
            )}
            <Heading className={styles.textAlign} variant="display-strong-xl">
              {person.name}
            </Heading>
            <Text
              className={styles.textAlign}
              variant="display-default-xs"
              onBackground="neutral-weak"
              marginTop="s"
            >
              {person.role}
            </Text>
            {social.length > 0 && (
              <Flex
                className={styles.blockAlign}
                paddingTop="20"
                paddingBottom="8"
                gap="8"
                wrap
                horizontal="center"
                fitWidth
              >
                {social.map(
                  (item) =>
                    item.link && (
                      <>
                        <Button
                          className="s-flex-hide"
                          key={item.name}
                          href={item.link}
                          prefixIcon={item.icon}
                          label={item.name}
                          size="s"
                          variant="secondary"
                        />
                        <IconButton
                          className="s-flex-show"
                          size="l"
                          key={`${item.name}-icon`}
                          href={item.link}
                          icon={item.icon}
                          variant="secondary"
                        />
                      </>
                    )
                )}
                <Button
                  className="s-flex-hide"
                  download
                  href="/cv.pdf"
                  variant="secondary"
                  size="s"
                  prefixIcon="download"
                  label="Curriculum"
                />
                <IconButton
                  className="s-flex-show"
                  download
                  href="/cv.pdf"
                  icon="download"
                  variant="secondary"
                  size="l"
                />
              </Flex>
            )}
          </Column>

          {about.intro.display && (
            <Column
              textVariant="body-default-l"
              fillWidth
              gap="m"
              marginBottom="xl"
            >
              {about.intro.description}
            </Column>
          )}

          {about.work.display && (
            <>
              <Heading
                as="h2"
                id={about.work.title}
                variant="display-strong-s"
                marginBottom="m"
              >
                {about.work.title}
              </Heading>
              <Column fillWidth gap="l" marginBottom="40">
                {about.work.experiences.map((experience, index) => (
                  <Column
                    key={`${experience.company}-${experience.role}-${index}`}
                    fillWidth
                  >
                    <Flex
                      fillWidth
                      horizontal="space-between"
                      vertical="end"
                      marginBottom="4"
                    >
                      <Text id={experience.company} variant="heading-strong-l">
                        {experience.company}
                      </Text>
                      <Text
                        variant="heading-default-xs"
                        onBackground="neutral-weak"
                      >
                        {experience.timeframe}
                      </Text>
                    </Flex>
                    <Text
                      variant="body-default-s"
                      onBackground="brand-weak"
                      marginBottom="m"
                    >
                      {experience.role}
                    </Text>
                    <Column as="ul" gap="16">
                      {experience.achievements.map(
                        (achievement: JSX.Element, index: number) => (
                          <Text
                            as="li"
                            variant="body-default-m"
                            key={`${experience.company}-${index}`}
                            onBackground="info-weak"
                          >
                            {achievement}
                          </Text>
                        )
                      )}
                    </Column>
                    {experience.images.length > 0 && (
                      <Flex fillWidth paddingTop="m" paddingLeft="40" wrap>
                        {experience.images.map((image, index) => (
                          <Flex
                            key={index}
                            border="neutral-medium"
                            radius="m"
                            //@ts-ignore
                            minWidth={image.width}
                            //@ts-ignore
                            height={image.height}
                          >
                            <SmartImage
                              enlarge
                              radius="m"
                              //@ts-ignore
                              sizes={image.width.toString()}
                              //@ts-ignore
                              alt={image.alt}
                              //@ts-ignore
                              src={image.src}
                            />
                          </Flex>
                        ))}
                      </Flex>
                    )}
                  </Column>
                ))}
              </Column>
            </>
          )}

          {about.studies.display && (
            <>
              <Heading
                as="h2"
                id={about.studies.title}
                variant="display-strong-s"
                marginBottom="m"
              >
                {about.studies.title}
              </Heading>
              <Column fillWidth gap="m" marginBottom="40">
                {about.studies.institutions.map((institution, index) => (
                  <>
                    <Text id={institution.name} variant="heading-strong-l">
                      {institution.name}
                    </Text>
                    <Column
                      as="ul"
                      key={`${institution.name}-${index}`}
                      fillWidth
                    >
                      <Text
                        as="li"
                        variant="body-default-m"
                        onBackground="info-weak"
                      >
                        {institution.description}
                      </Text>
                    </Column>
                  </>
                ))}
              </Column>
            </>
          )}

          {about.projects.display && (
            <div>
              <Heading
                marginY="20"
                as="h2"
                id={about.projects.title}
                variant="display-strong-s"
                marginBottom="m"
              >
                {about.projects.title}
              </Heading>
              <Column fillWidth gap="l" marginY="xl">
                {about.projects.projects.map((project, index) => (
                  <ProjectCard
                    key={project.slug}
                    title={project.title}
                    slug={project.slug}
                    category={project.category}
                    role={project.role}
                    timeframe={project.timeframe}
                    description={project.description}
                    images={project.images}
                    tags={project.tags}
                    metrics={project.metrics}
                    links={project.links}
                    reversed={index % 2 !== 0}
                    locale={locale}
                  />
                ))}
              </Column>
            </div>
          )}

          {about.technical.display && (
            <>
              <Heading
                as="h2"
                id={about.technical.title}
                variant="display-strong-s"
                marginBottom="40"
              >
                {about.technical.title}
              </Heading>
              <Flex fillWidth gap="1" horizontal="start" vertical="center">
                {about.technical.skills.map((skill, index) => (
                  <Flex
                    wrap
                    maxWidth={3}
                    key={index}
                    vertical="center"
                    horizontal="center"
                  >
                    {skill.images.map((image, index) => (
                      <>
                        <SmartImage
                          key={index}
                          src={image.src}
                          alt={image.alt}
                          width={image.width}
                          height={image.height}
                          aspectRatio="16/9"
                          objectFit="contain"
                          className="s-flex-max-width-2"
                        />
                      </>
                    ))}
                  </Flex>
                ))}
              </Flex>
            </>
          )}
        </Column>
      </Flex>
      {newsletter.display && <Mailchimp newsletter={newsletter} />}
    </Column>
  );
}
