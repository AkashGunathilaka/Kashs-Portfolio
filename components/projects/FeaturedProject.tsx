import ProjectCarousel from "./ProjectCarousel";

type FeaturedProjectProps = {
  title: string;
  badge: string;
  description: string;
  techStack: string[];
  ghLink: string;
  demoLink?: string;
  reportLink?: string;
  images?: string[];
};

export default function FeaturedProject({
  title,
  badge,
  description,
  techStack,
  ghLink,
  demoLink,
  reportLink,
  images,
}: FeaturedProjectProps) {
  return (
    <section className="featured-project">
      <div className="featured-project-content">
        <span className="featured-badge">{badge}</span>
        <h2 className="featured-title">{title}</h2>
        <p className="featured-description">{description}</p>

        <div className="featured-tech">
          {techStack.map((tech) => (
            <span key={tech} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>

        <div className="featured-links">
          <a href={ghLink} target="_blank" rel="noreferrer">
            GitHub
          </a>
          {demoLink && (
            <a href={demoLink} target="_blank" rel="noreferrer">
              Demo
            </a>
          )}
          {reportLink && (
            <a href={reportLink} target="_blank" rel="noreferrer">
              Project Report
            </a>
          )}
        </div>
      </div>

      {images && images.length > 0 && (
        <div className="featured-carousel">
          <ProjectCarousel images={images} title={title} />
        </div>
      )}
    </section>
  );
}