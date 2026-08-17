"use client";

import dynamic from "next/dynamic";

const ResumeViewer = dynamic(() => import("./ResumeViewer"), {
  ssr: false,
  loading: () => (
    <section className="resume-section">
      <p className="resume-loading">Loading CV...</p>
    </section>
  ),
});

export default function ResumeClient() {
  return <ResumeViewer />;
}
