# Kash's Portfolio

Personal portfolio website built with Next.js, showcasing my projects, background, and resume.

## Live Demo

- **Website:** https://www.akashwg.com
- **Repository:** [github.com/AkashGunathilaka/Kashs-Portfolio](https://github.com/AkashGunathilaka/Kashs-Portfolio)

## Features

- Responsive home page with hero section and animated typewriter tagline
- Animated particle background
- About page with character-style stats
- Projects page with featured project cards and image carousel
- Resume page with in-browser PDF viewer and CV download
- Mobile-friendly navbar with slide-down menu and animated hamburger icon
- Dark theme with custom styling

## Tech Stack

### Core
- [Next.js 16](https://nextjs.org/) (App Router)
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- CSS (custom styling in `app/globals.css`)
- [Tailwind CSS 4](https://tailwindcss.com/) (layout utilities)

### Libraries
- [react-icons](https://react-icons.github.io/react-icons/) — navigation and UI icons
- [typewriter-effect](https://www.npmjs.com/package/typewriter-effect) — hero typewriter animation
- [react-pdf](https://www.npmjs.com/package/react-pdf) + PDF.js — resume viewer
- [tsParticles](https://particles.js.org/) — particle background
- [next/font](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) — Google Font (Outfit)

### Tools
- Git & GitHub
- [Vercel](https://vercel.com/) — deployment
- ESLint

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — hero, intro, and social links |
| `/about` | About — bio and character stats |
| `/project` | Projects — featured work with carousel |
| `/resume` | Resume — PDF viewer and download |

## Project Structure

```
kashs-portfolio/
├── app/
│   ├── about/page.tsx
│   ├── project/page.tsx
│   ├── resume/page.tsx
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   ├── icon.png
│   └── favicon.ico
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── ParticleBackground.tsx
│   ├── home/Typewriter.tsx
│   ├── about/CharacterStat.tsx
│   ├── projects/FeaturedProject.tsx
│   ├── projects/ProjectCarousel.tsx
│   └── resume/ResumeClient.tsx
└── public/
    ├── logo.png
    ├── cv.pdf
    └── projects/
```

## Getting Started

### Prerequisites
- Node.js 18+
- npm

### Installation

```bash
git clone https://github.com/AkashGunathilaka/Kashs-Portfolio.git
cd Kashs-Portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Create production build |
| `npm run start` | Run production server locally |
| `npm run lint` | Run ESLint |

## Deployment

This project is deployed on [Vercel](https://vercel.com/).

1. Push changes to the `main` branch on GitHub
2. Vercel automatically builds and deploys the site

Make sure the Vercel project root directory points to this repository folder.

## Author

**Akash Gunathilaka**

- GitHub: [@AkashGunathilaka](https://github.com/AkashGunathilaka)
- LinkedIn: [akash-gunathilaka](https://www.linkedin.com/in/akash-gunathilaka/)

## License

This project is open source and available for personal reference. Please credit me if used as a template.
