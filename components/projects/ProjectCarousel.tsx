"use client";

import { useState } from "react";
import Image from "next/image";

type ProjectCarouselProps = {
  images: string[];
  title: string;
};

export default function ProjectCarousel({ images, title }: ProjectCarouselProps) {
  const [current, setCurrent] = useState(0);

  function next() {
    setCurrent((prev) => (prev + 1) % images.length);
  }

  function prev() {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  }

  return (
    <div className="carousel">
      <div className="carousel-image-wrap">
        <Image
          src={images[current]}
          alt={`${title} screenshot ${current + 1}`}
          width={1100}
          height={980}
          sizes="(max-width: 768px) 100vw, 1100px"
          className="carousel-image"
          style={{ width: "100%", height: "auto" }}
        />
      </div>

      <div className="carousel-controls">
        <button type="button" onClick={prev} aria-label="Previous image">
          ←
        </button>
        <span>
          {current + 1} / {images.length}
        </span>
        <button type="button" onClick={next} aria-label="Next image">
          →
        </button>
      </div>

      <div className="carousel-dots">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            className={index === current ? "dot active" : "dot"}
            onClick={() => setCurrent(index)}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}