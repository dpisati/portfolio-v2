import { BeforeAndAfter, ScrollToHash, ToolTags } from "@/components";
import { about, baseURL, person, projects as projectsPage } from "@/resources";
import { getProject, getProjects, type Project } from "@/resources/projects";
import {
  Column,
  Flex,
  Grid,
  Heading,
  Line,
  Media,
  Meta,
  Row,
  Schema,
  SmartLink,
  Tag,
  Text,
} from "@once-ui-system/core";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  return getProjects().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  return Meta.generate({
    title: `${project.title} — ${projectsPage.title}`,
    description: project.summary,
    baseURL: baseURL,
    image: project.coverImage || `/api/og/generate?title=${encodeURIComponent(project.title)}`,
    path: `${projectsPage.path}/${project.slug}`,
  });
}

function Bullet() {
  return <Flex minWidth="8" height="8" radius="full" background="brand-strong" marginTop="8" />;
}

function BulletList({ items }: { items: string[] }) {
  return (
    <Column gap="16">
      {items.map((item, i) => (
        <Row key={i} gap="12" vertical="start">
          <Bullet />
          <Text variant="body-default-m" onBackground="neutral-weak">
            {item}
          </Text>
        </Row>
      ))}
    </Column>
  );
}

function Section({
  id,
  title,
  children,
}: {
  id?: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Column id={id} maxWidth="s" fillWidth gap="24">
      <Heading as="h2" variant="heading-strong-l">
        {title}
      </Heading>
      {children}
    </Column>
  );
}

export default async function ProjectCaseStudy({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project: Project | undefined = getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <Column as="section" maxWidth="l" horizontal="center" gap="xl" paddingTop="24">
      <Schema
        as="article"
        baseURL={baseURL}
        path={`${projectsPage.path}/${project.slug}`}
        title={project.title}
        description={project.summary}
        image={project.coverImage}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      {/* Header */}
      <Column maxWidth="s" horizontal="center" align="center" gap="16">
        <SmartLink href={projectsPage.path}>
          <Text variant="label-strong-xl">←  Back to {projectsPage.title}</Text>
        </SmartLink>
        <Text variant="label-default-s" onBackground="neutral-weak">
          {project.timeframe}
        </Text>
        <Heading variant="display-strong-m" align="center" wrap="balance">
          {project.title}
        </Heading>
        <Text variant="body-default-l" onBackground="neutral-weak" align="center" wrap="balance">
          {project.tagline}
        </Text>
      </Column>

      {/* Hero */}
      <Media
        priority
        sizes="(max-width: 1024px) 100vw, 1024px"
        aspectRatio="16 / 9"
        radius="l"
        objectFit="contain"
        alt={`${project.title} cover`}
        src={project.coverImage}
        style={{ background: project.accentColor , padding: "60px"}}
      />

      {/* At a glance */}
      <Column maxWidth="s" fillWidth gap="24">
        <Grid columns="2" s={{ columns: 1 }} gap="24" fillWidth>
          <Column gap="8">
            <Text variant="label-strong-s" onBackground="neutral-strong">
              Role
            </Text>
            <Text variant="body-default-m" onBackground="neutral-weak">
              {project.role}
            </Text>
          </Column>
          {project.url && (
            <Column gap="8">
              <Text variant="label-strong-s" onBackground="neutral-strong">
                Live
              </Text>
              <SmartLink href={project.url} suffixIcon="arrowUpRightFromSquare">
                <Text variant="body-default-m">Visit website</Text>
              </SmartLink>
            </Column>
          )}
        </Grid>
        <Column gap="12">
          <Text variant="label-strong-s" onBackground="neutral-strong">
            Technologies
          </Text>
          <ToolTags tools={project.technologies} size="m" />
        </Column>
        {project.designTools.length > 0 && (
          <Column gap="12">
            <Text variant="label-strong-s" onBackground="neutral-strong">
              Design tools
            </Text>
            <ToolTags tools={project.designTools} size="m" />
          </Column>
        )}
      </Column>

      <Line maxWidth="s" background="neutral-alpha-weak" />

      {/* Company overview */}
      <Section title="About the company">
        <Column gap="16">
          <Row gap="8" wrap>
            <Tag size="m" variant="neutral">
              {project.company.industry}
            </Tag>
          </Row>
          <Text variant="body-default-m" onBackground="neutral-weak">
            {project.company.about}
          </Text>
          {project.company.notable && (
            <Text variant="body-default-m" onBackground="neutral-weak">
              {project.company.notable}
            </Text>
          )}
        </Column>
      </Section>

      {/* Overview & objectives */}
      <Section title="Overview & objectives">
        <Text variant="body-default-m" onBackground="neutral-weak">
          {project.overview}
        </Text>
        <BulletList items={project.objectives} />
      </Section>

      {/* Contributions */}
      <Section title="What I did">
        <BulletList items={project.contributions} />
      </Section>

      {/* Process */}
      {project.process && project.process.length > 0 && (
        <Section title="Process">
          <Column gap="24">
            {project.process.map((step, i) => (
              <Row key={i} gap="16" vertical="start">
                <Flex
                  minWidth="32"
                  height="32"
                  radius="full"
                  horizontal="center"
                  vertical="center"
                  background="brand-alpha-weak"
                >
                  <Text variant="label-strong-s" onBackground="brand-strong">
                    {i + 1}
                  </Text>
                </Flex>
                <Column gap="4">
                  <Heading as="h3" variant="heading-strong-s">
                    {step.title}
                  </Heading>
                  <Text variant="body-default-m" onBackground="neutral-weak">
                    {step.description}
                  </Text>
                </Column>
              </Row>
            ))}
          </Column>
        </Section>
      )}

      {/* Before & After */}
      {project.beforeAfter && project.beforeAfter.length > 0 && (
        <Column fillWidth horizontal="center" gap="40">
          <Heading as="h2" variant="heading-strong-l" align="center">
            Before &amp; After
          </Heading>
          <Column fillWidth gap="64">
            {project.beforeAfter.map((ba, i) => (
              <Column key={i} gap="12">
                <Text variant="label-strong-s" align="center">
                  {ba.description}
                </Text>
                <BeforeAndAfter
                  frame
                  frameTitle={`${project.title} — ${ba.description}`}
                  aspectRatio="16 / 9"
                  initial={0.5}
                  hover
                  before={{ src: ba.before, alt: `${ba.description} before`, label: "Before" }}
                  after={{ src: ba.after, alt: `${ba.description} after`, label: "After" }}
                />
              </Column>
            ))}
          </Column>
        </Column>
      )}

      {/* Gallery */}
      {project.gallery && project.gallery.length > 0 && (
        <Column fillWidth horizontal="center" gap="40">
          <Heading as="h2" variant="heading-strong-l" align="center">
            Gallery
          </Heading>
          <Grid columns="2" s={{ columns: 1 }} gap="16" fillWidth>
            {project.gallery.map((image, i) => (
              <Media
                key={i}
                enlarge
                radius="m"
                objectFit="contain"
                sizes="(max-width: 1024px) 100vw, 512px"
                aspectRatio="16 / 9"
                alt={image.alt}
                src={image.src}
                // border="neutral-alpha-weak"
              />
            ))}
          </Grid>
        </Column>
      )}

      {/* Challenges */}
      {project.challenges && project.challenges.length > 0 && (
        <Section title="Challenges & solutions">
          <Column gap="24">
            {project.challenges.map((item, i) => (
              <Column
                key={i}
                gap="12"
                padding="24"
                radius="l"
                border="neutral-alpha-weak"
                background="surface"
              >
                <Column gap="4">
                  <Text variant="label-strong-s" onBackground="neutral-strong">
                    Challenge
                  </Text>
                  <Text variant="body-default-m" onBackground="neutral-weak">
                    {item.challenge}
                  </Text>
                </Column>
                <Column gap="4">
                  <Text variant="label-strong-s" onBackground="brand-strong">
                    Solution
                  </Text>
                  <Text variant="body-default-m" onBackground="neutral-weak">
                    {item.solution}
                  </Text>
                </Column>
              </Column>
            ))}
          </Column>
        </Section>
      )}

      {/* Outcomes */}
      {project.outcomes && project.outcomes.length > 0 && (
        <Section title="Outcomes & impact">
          <BulletList items={project.outcomes} />
        </Section>
      )}

      {/* Footer nav */}
      <Column maxWidth="s" fillWidth horizontal="center" gap="24" paddingTop="24">
        <Line background="neutral-alpha-weak" />
        <SmartLink href={projectsPage.path}>
          <Text variant="label-strong-m">← Back to all projects</Text>
        </SmartLink>
      </Column>

      <ScrollToHash />
    </Column>
  );
}
