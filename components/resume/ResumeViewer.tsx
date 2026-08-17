"use client";

import { useEffect, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const CV_PATH = "/cv.pdf";

function DownloadButton() {
  return (
    <a href={CV_PATH} download className="resume-download-btn">
      Download CV
    </a>
  );
}

export default function ResumeViewer() {
  const [width, setWidth] = useState(1200);
  const [numPages, setNumPages] = useState<number | null>(null);

  useEffect(() => {
    const updateWidth = () => setWidth(window.innerWidth);
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const scale = width > 786 ? 1.7 : 0.6;

  return (
    <section className="resume-section">
      

      <div className="resume-pdf-wrap">
        <Document
          file={CV_PATH}
          onLoadSuccess={({ numPages: pages }) => setNumPages(pages)}
          loading={<p className="resume-loading">Loading CV...</p>}
          error={<p className="resume-error">Could not load CV.</p>}
        >
          {numPages &&
            Array.from({ length: numPages }, (_, index) => (
              <Page
                key={`page-${index + 1}`}
                pageNumber={index + 1}
                scale={scale}
                className="resume-pdf-page"
              />
            ))}
        </Document>
      </div>

      <div className="resume-download-wrap">
        <DownloadButton />
      </div>
    </section>
  );
}
