import Section from "../components/Section";
import PageLayout from "../components/PageLayout";

export default function EducationPage() {
  return (
    <PageLayout>
      <Section title="Education">

        <div className="education-entry">
          <div className="education-header">
            <h3>Northwestern University</h3>
            <span>2024 - 2028</span>
          </div>

          <div className="education-details">
            <p>
              <strong>Relevant Coursework:</strong>{" "}
              MENU Linear Algebra and Multivariable Calculus, Data Structures
              and Algorithms, Operating Systems, Design and Analysis of
              Algorithms, Discrete Mathematics, Human-Computer Interaction.
            </p>
            <p>
              <strong>GPA:</strong>{" "}
              3.92
            </p>
          </div>
        </div>

        <div className="education-entry">
          <div className="education-header">
            <h3>Illinois Mathematics and Science Academy</h3>
            <span>2021 - 2024</span>
          </div>

          <div className="education-details">
            <p>
              <strong>Relevant Coursework:</strong>{" "}
              Modern Physics, Physics Calculus-based Mechanics, Physics Calculus-based Electricity / Magnetism, Differential Equations, Physical Chemistry.
            </p>
            <p>
              <strong>GPA:</strong>{" "}
              3.95
            </p>
          </div>
        </div>

        <div className="education-entry">
          <div className="education-header">
            <h3>Downers Grove North High School</h3>
            <span>2020 - 2021</span>
          </div>
        </div>

      </Section>
    </PageLayout>
  );
}