import Section from "../components/Section";
import { experiences } from "../data/portfolioData";
import PageLayout from "../components/PageLayout";


export default function ExperiencePage() {
  return (
    <PageLayout>
      <Section title="Work Experience">

        {experiences.map((experience) => (
          <div
            className="experience-entry"
            key={`${experience.title}-${experience.organization}`}
          >
            <div className="experience-header">
              <div>
                <h3>{experience.title}</h3>
                <span className="experience-organization">
                  {experience.organization}
                </span>
              </div>

              <span className="experience-date">
                {experience.date}
              </span>
            </div>

            <div className="experience-details">
              <p>{experience.description}</p>
            </div>
          </div>
        ))}

      </Section>
    </PageLayout>
  );
}