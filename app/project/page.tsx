import FeaturedProject from "@/components/projects/FeaturedProject";

export default function Projects() {
  return (
    <main className="projects-page">
      <h1>
        My Recent <span className="hero-name-highlight">Works</span>
      </h1>
      <p className="projects-subtext">
        Here are a few projects I&apos;ve worked on
      </p>

      <FeaturedProject
        title="Early Intervention Management System (EIMS)"
        badge="95% · Final Year Project · Full Stack"
        description="A full-stack learning analytics platform that identifies at-risk university students early and helps staff manage interventions before outcomes are final. Built with FastAPI and PostgreSQL on the backend, React and Vite on the frontend, and an XGBoost model trained on the OULAD dataset for at-risk predictions, intervention tracking, and role-based admin/staff dashboards."
        techStack={["React", "TypeScript", "FastAPI", "PostgreSQL", "XGBoost", "Python"]}
        ghLink="https://github.com/AkashGunathilaka/Early-Intervention-Management-System"
        images={[
          "/projects/Login.png",
          "/projects/Dashboard.png",
          "/projects/Models.png",
          "/projects/Students.png",
        ]}
      />
    </main>
  );
}