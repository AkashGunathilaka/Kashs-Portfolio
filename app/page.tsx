
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
            src="/images/hero-image.png"
            alt="Developer Illustration"
            width={200}
            height={200}
            priority
            />
          </div>
        </div>
      </section>
    </main>
  );
}
