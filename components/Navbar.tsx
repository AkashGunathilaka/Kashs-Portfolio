"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineFundProjectionScreen,
  AiFillStar,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";

const navLinks = [
  { href: "/", label: "Home", icon: AiOutlineHome },
  { href: "/about", label: "About", icon: AiOutlineUser },
  { href: "/project", label: "Projects", icon: AiOutlineFundProjectionScreen },
  { href: "/resume", label: "Resume", icon: CgFileDocument },
];

export default function Navbar() {
  const [expanded, setExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY >= 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`site-navbar ${scrolled ? "site-navbar-scrolled" : ""}`}>
      <div className="site-navbar-inner">
        <Link href="/" className="site-navbar-brand" onClick={() => setExpanded(false)}>
          <Image
            src="/logo.png"
            alt="Akash logo"
            width={400}
            height={120}
            className="site-logo"
            priority
          />
        </Link>

        <button
          type="button"
          className={`site-navbar-toggle ${expanded ? "open" : "collapsed"}`}
          aria-label="Toggle menu"
          aria-expanded={expanded}
          aria-controls="site-navbar-menu"
          onClick={() => setExpanded(!expanded)}
        >
          <span />
          <span />
          <span />
        </button>

        <div
          className={`site-navbar-collapse ${expanded ? "open" : ""}`}
          id="site-navbar-menu"
        >
          <ul className="site-navbar-links">
            {navLinks.map(({ href, label, icon: Icon }) => (
              <li key={href}>
                <Link href={href} onClick={() => setExpanded(false)}>
                  <Icon className="nav-icon" aria-hidden="true" />
                  {label}
                </Link>
              </li>
            ))}
            <li className="nav-github-item">
              <a
                href="https://github.com/AkashGunathilaka"
                target="_blank"
                rel="noreferrer"
                className="site-navbar-github"
              >
                <AiFillStar className="nav-icon" aria-hidden="true" />
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
