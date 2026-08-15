import Section from "../components/Section";
import ProjectCard from "../components/ProjectCard";
import { researchProjects } from "../data/portfolioData";
import PageLayout from "../components/PageLayout";

export default function Research() {
  return (
    <PageLayout>
      <Section title="Research Projects" explore>
            {researchProjects.map((project) => (
              <ProjectCard
                key={project.title}
                project={project}
              />
            ))}
      </Section>
    </PageLayout>
  );
}