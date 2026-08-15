import PageLayout from "../components/PageLayout";

export default function ResumePage() {
  return (
    <PageLayout>
      <section className="resume-page">
        <h1>Resume</h1>

        <div className="resume-container">
          <iframe
            src="/Michael_Capriotti_Resume.pdf"
            title="Michael Capriotti Resume"
          />
        </div>
      </section>
    </PageLayout>
  );
}