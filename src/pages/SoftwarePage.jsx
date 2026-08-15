import Section from "../components/Section";
import ProjectCard from "../components/ProjectCard";
import { softwareProjects } from "../data/portfolioData";
import PageLayout from "../components/PageLayout";

export default function SoftwarePage() {
  return (
    <PageLayout>
      <Section title="Software Projects" explore>
        {softwareProjects.map((project) => (
          <ProjectCard
            key={project.title}
            project={project}
          />
        ))}
      </Section>
    </PageLayout>
  );
}