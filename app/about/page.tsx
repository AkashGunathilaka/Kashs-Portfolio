import Link from "next/link";
import CharacterStat from "@/components/about/CharacterStat";

export default function About() {
  return (
    <main className="about-page">

      <header className="about-header">
        <h1 className="about-title">ABOUT ME</h1>
        <p className="about-tagline">
          Computer Science graduate. ML Engineer in progress.
          <br />
          Forever learning. Always building.
        </p>
      </header>

      {/* BIO */}
      <section className="about-intro">
        <p>
          Hi everyone! I&apos;m{" "}
          <span className="hero-name-highlight">Akash Gunathilaka</span>.
        </p>
        <p>
          I&apos;m an aspiring ML Engineer and Computer Science graduate who
          loves turning ideas into real projects.
        </p>
        <p>
          I graduated with First-Class Honours with an{" "}
          <span className="hero-name-highlight">85% average</span>, but I
          don&apos;t really see graduation as the finish line...
        </p>
      </section>

      {/* CHARACTER BUILD BOX */}
      <section className="about-panel">
        <div className="about-panel-header">
          <h2>CURRENT CHARACTER</h2>
          <span>BUILD 🎮</span>
        </div>

        <CharacterStat icon="💻" label="Computer Science Graduate" level={7} />
        <CharacterStat icon="🍕" label="Chef" level={6} />
        <CharacterStat icon="🏋️" label="Gym Rat" level={7} />
        <CharacterStat icon="🎓" label="First-Class Honours" level={7} />
        <CharacterStat icon="📸" label="Model" level={5} />
        <CharacterStat icon="🧠" label="Forever Student" level={7} />
      </section>


      <section className="about-body">
        <p className="about-highlight-line">
          85% average, but still nowhere near finished.
        </p>
        <p>
          When I&apos;m not building software, you&apos;ll probably find me lifting something unnecessarily heavy...
        </p>
        <p>
          Basically, I&apos;m usually coding, cooking, lifting, learning, or
          figuring out what comes next.
        </p>
      </section>


      <section className="about-panel">
        <div className="about-panel-header">
          <h2>WHAT I VALUE</h2>
        </div>
        <ul className="values-list">
          <li>Curiosity</li>
          <li>Consistency</li>
          <li>Discipline</li>
          <li>Continuous learning</li>
          <li>Building things</li>
        </ul>
      </section>


      <div className="about-cta">
        <Link href="/project" className="about-cta-btn">
          VIEW MY PROJECTS
        </Link>
        <a
          href="https://www.linkedin.com/in/akash-gunathilaka/"
          target="_blank"
          rel="noreferrer"
          className="about-cta-btn about-cta-btn-outline"
        >
          GET IN TOUCH
        </a>
      </div>

    </main>
  );
}