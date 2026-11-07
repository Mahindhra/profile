# DODDI MAHINDHRA — Aspiring Software Developer Portfolio

A personal brand portfolio website crafted under the design direction of **Luxury Minimalism × Swiss Editorial × Creative Developer Portfolio**.

![Portfolio Preview](/images/mahindhra.jpg)

---

## 🏛️ Design Identity & Architecture

- **Visual Concept**: Swiss editorial typography, Apple-style clarity, luxury minimalism, and Awwwards-inspired motion details.
- **Color Tokens**:
  - Light: Pure surfaces (`#FFFFFF`), warm canvas (`#F8F8F5`), high-contrast ink (`#17191C`), secondary text (`#737780`), accent royal blue (`#315CFD`).
  - Dark: Deep graphite (`#101114`), elevated surface (`#191B20`), crisp white (`#F7F7F5`), muted text (`#A0A4AE`), soft accent (`#7892FF`).
- **Typography**: Fluid type scaling using `clamp()`:
  - **Space Grotesk**: Editorial display headings and large titles.
  - **Inter**: Body text, paragraphs, and UI actions.
  - **JetBrains Mono**: Technical labels, metadata, numbers, and tags.

---

## 📦 Project Structure

```
profile/
├── public/
│   ├── images/
│   │   └── mahindhra.jpg          # Official verified portrait
│   └── resume.pdf                 # Authentic downloadable PDF resume
│
├── src/
│   ├── components/
│   │   ├── Button.jsx             # Accessible button with animated arrow states
│   │   ├── Footer.jsx             # Swiss editorial footer with live IST clock
│   │   ├── Navbar.jsx             # Floating glassmorphism dock & mobile drawer
│   │   ├── SectionHeading.jsx     # Editorial eyebrow, section number & heading
│   │   └── ThemeToggle.jsx        # Persistent Light/Dark theme controller
│   │
│   ├── data/
│   │   └── portfolioData.js       # Single source of verified truth from resume
│   │
│   ├── sections/
│   │   ├── Hero.jsx               # Asymmetric 2-column hero with status badge
│   │   ├── TechTicker.jsx         # Continuous kinetic typography ticker
│   │   ├── About.jsx              # 01 — Editorial story & 4 core pillars
│   │   ├── Skills.jsx             # 02 — Technical dashboard by discipline
│   │   ├── Experience.jsx         # 03 — Timeline of AWS & AI/ML internships
│   │   ├── Projects.jsx           # 04 — Verified Android Hackathon showcase
│   │   ├── Education.jsx          # 05 — Academic achievements (7.5 CGPA, 97% SSC)
│   │   ├── Certifications.jsx     # 06 — MS Office, C Programming, Pearson MePro
│   │   ├── Achievements.jsx       # 07 — Distinction & leadership activities
│   │   ├── Interests.jsx          # 08 — Piano, Cooking, Painting, Drawing
│   │   └── Contact.jsx            # 09 — Form validation & direct recruiter channels
│   │
│   ├── styles/
│   │   ├── variables.css          # Color tokens, shadows, fluid typography vars
│   │   ├── reset.css              # Universal reset & smooth scroll behavior
│   │   ├── typography.css         # Font styling & fluid clamp calculations
│   │   ├── layout.css             # Container widths, background grid, spacing
│   │   ├── components.css         # Buttons, glassmorphism, cards, inputs
│   │   ├── animations.css         # Keyframes, ticker, pulse dot, reduced-motion
│   │   ├── themes.css             # Light & Dark theme transition properties
│   │   ├── responsive.css         # 360px to 1920px responsive rules
│   │   └── index.css              # Unified style cascading entry point
│   │
│   ├── App.jsx                    # Top scroll progress bar & layout root
│   └── main.jsx                   # React 18 DOM mount point
│
├── .codegraph/                    # Local CodeGraph SQLite intelligence database
├── index.html                     # Semantic SEO HTML5 shell & Open Graph tags
├── package.json                   # React, Vite, Lucide React, Framer Motion
└── vite.config.js                 # Vite compiler configuration
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18.0.0 or higher recommended)
- npm or yarn

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Visit `http://localhost:3000` in your browser.

### 3. Production Build
```bash
npm run build
```
Creates an optimized, tree-shaken static production bundle in `dist/`.

### 4. Preview Production Build
```bash
npm run preview
```

---

## 🌐 Deployment Instructions

### Vercel (Zero Configuration)
1. Push this repository to GitHub (`Mahindhra/portfolio`).
2. Import repository on [Vercel](https://vercel.com).
3. Framework preset: **Vite**.
4. Build command: `npm run build`.
5. Output directory: `dist`.
6. Click **Deploy**.

### Netlify
1. Connect repository on [Netlify](https://netlify.com).
2. Set Build Command: `npm run build`.
3. Set Publish Directory: `dist`.
4. Deploy!

### GitHub Pages
1. Install `gh-pages`: `npm install -D gh-pages`
2. Add `"base": "/<repo-name>/"` to `vite.config.js`.
3. Add deploy script: `"deploy": "gh-pages -d dist"`.

---

## 🔒 Factual Integrity

Every piece of information (education scores, internship roles, hackathon dates, technical stack, contact details) is strictly mapped from Doddi Mahindhra's official resume without simulated metrics or fabricated proficiency percentages.
