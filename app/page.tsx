
import Image from "next/image";

// so this is a react component 

export default function Home() {
  return (
    <main>
      <section className="hero-section" id="home">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-greeting">
              Hey There!{" "}
              <span className="wave" role="img" aria-label="wave">
              👋
              </span>
            </h1>
            <h1 className="hero-name">
              <strong className="hero-name-highlight">I am Akash</strong>
              </h1>
              <p className="hero-tagline">
                Aspiring ML engineer. Student. Builder
              </p>
          </div>
          <div className="hero-image">
            <Image
              src="/hero-pic.png"
              alt="Developer illustration"
              width={450}
              height={450}
              className="hero-image-img"
              priority
            />
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="intro-section" id="intro">
        <div className="intro-content">
          <div className="intro-text">
            <h2 className="intro-heading">
              LET ME <span className="hero-name-highlight">INTRODUCE</span> MYSELF
            </h2>
            <p className="intro-body">
            I&apos;m an aspiring ML engineer who loves turning ideas into real
              projects. I enjoy learning new technologies and building things
              that actually work.
              <br />
              <br />
              I&apos;m interested in{" "}
              <strong className="hero-name-highlight">
                machine learning, Python, and web development
              </strong>
              , and I&apos;m always looking to grow as a developer and builder.
            </p>
          </div>
          <div className="intro-avatar">
            <Image
            src="/profile-pic.png"
            alt="Profile Picture"
            width={250}
            height={250}
            />
          </div>
        </div>
      </section>
    {/* Socials Section */}
    <section className="social-section">
      <div className="social-content">
        <h2 className="social-heading">Find Me On</h2>
        <p className="social-subtext">
          Feel free to <span className="hero-name-highlight">connect</span> with me
        </p>
        <ul className="social-links">
          <li>
            <a
            href="https://github.com/AkashGunathilaka"
            target="_blank"
            rel="noreferrer"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
            href="https://www.linkedin.com/in/akash-gunathilaka/"
            target="_blank"
            rel="noreferrer"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </section>
    </main>
  );
}
