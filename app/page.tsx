
import Image from "next/image";
import TypewriterTagline from "@/components/home/Typewriter";



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
              <div className="hero-tagline">
                <TypewriterTagline />
              </div>
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
              I&apos;m a Software Engineer who turns ideas into solid, scalable
              products. I recently graduated with a{" "}
              <strong className="hero-name-highlight">
                First Class BSc in Computer Science
              </strong>{" "}
              and approach code the same way I approach the gym — progressive
              overload, clean form, and always chasing the next PR.
              <br />
              <br />
              I&apos;m deep into{" "}
              <strong className="hero-name-highlight">
                Python and anything data-related
              </strong>
              . There&apos;s nothing more satisfying than taking messy data,
              cleaning it up, and using it to actually solve problems. Outside
              of that I&apos;m obsessed with crypto — the tech, the markets, the
              chaos, all of it.
              <br />
              <br />
              My current stack lives around{" "}
              <strong className="hero-name-highlight">
                JavaScript/TypeScript, React, Next.js and Node
              </strong>
              , but Python is still my first love when it comes to data and
              building intelligent systems. I like mixing clean code with a bit
              of intensity.
              <br />
              <br />
              If it&apos;s fast, useful, and a little bit obsessive… I&apos;m
              probably already building it.
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
