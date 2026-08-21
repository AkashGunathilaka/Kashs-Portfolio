"use client";

import Typewriter from "typewriter-effect";

export default function TypewriterTagline() {
  return (
    <Typewriter
      options={{
        strings: [
          "ML Engineer in Progress...",
          "First Class Graduate",
          "Full-Stack ML Developer",
          "",
        ],
        autoStart: true,
        loop: true,
        delay: 50,
        deleteSpeed: 10,
      }}
    />
  );
}