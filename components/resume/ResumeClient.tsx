"use client";

import dynamic from "next/dynamic";

const ResumeViewer = dynamic(() => import("./ResumeViewer"), {
  ssr: false,
  loading: () => <p className="resume-loading">Loading CV...</p>,
});

export default function ResumeClient() {
  return <ResumeViewer />;
}
