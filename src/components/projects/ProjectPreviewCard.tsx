import type { Project } from "@/resources/projects";
import { ToolTags } from "@/components/projects/ToolTags";
import { Card, Column, Heading, Media, Row, Text } from "@once-ui-system/core";

interface ProjectPreviewCardProps {
  project: Project;
  priority?: boolean;
}

export function ProjectPreviewCard({ project, priority }: ProjectPreviewCardProps) {
  return (
    <Card
      href={`/projects/${project.slug}`}
      fillWidth
      direction="column"
      radius="l"
      border="neutral-alpha-weak"
      background="surface"
      overflow="hidden"
      transition="macro-medium"
    >
      <Media
        priority={priority}
        sizes="(max-width: 960px) 100vw, 560px"
        aspectRatio="16 / 9"
        objectFit="contain"
        alt={`${project.title} cover`}
        src={project.coverImage}
        style={{ background: project.accentColor, padding: "20px" }}
      />
      <Column fillWidth gap="12" padding="24">
        <Row fillWidth gap="8" vertical="center" horizontal="between" wrap>
          <Heading as="h2" variant="heading-strong-l">
            {project.title}
          </Heading>
          <Text variant="label-default-s" onBackground="neutral-weak">
            {project.timeframe}
          </Text>
        </Row>
        <Text variant="label-default-s" onBackground="brand-weak">
          {project.role}
        </Text>
        <Text variant="body-default-s" onBackground="neutral-weak" wrap="balance">
          {project.summary}
        </Text>
        <Row paddingTop="8">
          <ToolTags tools={[...project.technologies, ...project.designTools]} size="s" />
        </Row>
        <Row paddingTop="4" gap="8" vertical="center">
          <Text variant="label-strong-s" onBackground="brand-medium">
            Read case study
          </Text>
          <Text variant="label-strong-s" onBackground="brand-medium">
            →
          </Text>
        </Row>
      </Column>
    </Card>
  );
}
