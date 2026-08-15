import Section from "../components/Section";
import ProjectCard from "../components/ProjectCard";
import { consultingProjects } from "../data/portfolioData";
import PageLayout from "../components/PageLayout";

export default function ClubPage() {
  return (
    <PageLayout>
      <Section title="Club Projects" explore>
          {consultingProjects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
            />
          ))}
      </Section>
    </PageLayout>
  );
}