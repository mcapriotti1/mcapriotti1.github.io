import PageLayout from "../components/PageLayout";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <PageLayout>
      <section className="page home-page">
        <h1 className="float-in-top">
          Michael Capriotti Portfolio
        </h1>

        <section className="section">
          <h2>About Me</h2>
            <p>
              I'm a Junior at Northwestern University studying Computer Science and Mathematics. Last summer, I interned as a Software Engineer at NASA Marshall Space Flight Center, where I developed a database for the Mass Properties team. On campus, I work as a Computer Science teaching assistant and conduct research in quantum computing. In my free time, I enjoy playing ping pong.
            </p>
        </section>

        <section className="section">
          <h2>Contact Info</h2>

          <div className="socials">
            <a
              href="https://github.com/mcapriotti1"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/michael-capriotti/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>

            <a
              href="https://scholar.google.com/citations?user=BA1Ud9IAAAAJ&hl=en/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Scholar
            </a>

            <a href="mailto:michaelcapriotti2028@u.northwestern.edu">
              Email
            </a>

            <Link to="/resume" className="resume_link">
              Resume
            </Link>
          </div>
        </section>
      </section>
    </PageLayout>
  );
}