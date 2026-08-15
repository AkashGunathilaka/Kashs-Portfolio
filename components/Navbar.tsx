import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/project">Projects</Link>
      <Link href="/resume">Resume</Link>
    </nav>
  );
}