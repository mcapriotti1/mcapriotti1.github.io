import Card from "./Card";

export default function ProjectCard({ project }) {
  return (
    <Card title={project.title}>
      <div className="project-links">
        {project.links?.map((link) => (
          <a
            key={link.url}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.text}
          </a>
        ))}

        {project.note && <span>{project.note}</span>}
      </div>

      <p>{project.description}</p>

      {project.tech && (
        <p>
          <strong>Tech Used:</strong> {project.tech}
        </p>
      )}

      {project.media?.type === "video" && (
        <div className="video-container">
          <video controls width="100%">
            <source src={project.media.src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}

      {project.media?.type === "images" && (
        <div className="image-container">
          {project.media.sources.map((src) => (
            <img key={src} src={src} alt={project.title} />
          ))}
        </div>
      )}
    </Card>
  );
}