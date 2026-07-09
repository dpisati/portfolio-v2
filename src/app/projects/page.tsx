import { ProjectPreviewCard } from "@/components";
import { about, baseURL, person, projects as projectsPage } from "@/resources";
import { getProjects } from "@/resources/projects";
import { Column, Grid, Heading, Meta, Schema, Text } from "@once-ui-system/core";
import styles from "./page.module.scss";

export async function generateMetadata() {
  return Meta.generate({
    title: projectsPage.title,
    description: projectsPage.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(projectsPage.title)}`,
    path: projectsPage.path,
  });
}

export default function Projects() {
  const allProjects = getProjects();

  return (
    <Column maxWidth="l" paddingTop="24" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={projectsPage.path}
        title={projectsPage.title}
        description={projectsPage.description}
        image={`/api/og/generate?title=${encodeURIComponent(projectsPage.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Column maxWidth="s" horizontal="center" gap="16" marginBottom="xl">
        <Heading variant="display-strong-m" align="center">
          {projectsPage.title}
        </Heading>
        <Text variant="body-default-l" onBackground="neutral-weak" align="center" wrap="balance">
          A closer look at the products I've helped design and build. Each project is a case study
          covering my role, the process, before &amp; after comparisons, and the outcomes.
        </Text>
      </Column>
      <Grid fillWidth columns="2" s={{ columns: 1 }} marginBottom="40" className={styles.grid}>
        {allProjects.map((project, index) => (
          <ProjectPreviewCard key={project.slug} project={project} priority={index < 2} />
        ))}
      </Grid>
    </Column>
  );
}
