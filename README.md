# Lemi Gobena Jaleta — 3D Engineering Portfolio

Award-level 3D portfolio website for **Lemi Gobena Jaleta** (Software Engineering student at Addis Ababa University, Class of 2028; Top 10 National Scorer, ESSLCE 2023; Junior Full-Stack Developer at Mereb Technologies).

Built with **Vite**, **React**, **Three.js**, **GLSL Custom Shaders**, **Tailwind CSS**, and **Lenis Smooth Scroll**.

---

## 🎨 Visual Identity & Architecture

- **Color Palette**:
  - Deep Charcoal / Near-Black Background: `#0B0D10`
  - Off-White Primary Typography: `#F2F2EE`
  - Electric Amber Primary Accent: `#FFB020`
  - Cool Teal Secondary Accent: `#2DD4BF`
- **Typography**:
  - Headings: `Space Grotesk`
  - Body & Descriptions: `Inter`
  - Code & System Metrics: `JetBrains Mono`
- **3D WebGL Scene (`/src/three/SceneManager.js`)**:
  - **Fixed Full-Viewport Canvas**: Rendered behind DOM content (`position: fixed; inset: 0; z-index: -1`).
  - **Hero Focal Plane**: Subtly curved `PlaneGeometry(64, 64)` running custom GLSL shaders with UV "cover" aspect-ratio preservation, pointer-driven parallax tilt, ripple distortion on hover, and thin chromatic RGB-split on rapid cursor velocity.
  - **Particle Constellation**: Floating particle field (~3,000 desktop / 800 mobile) drifting in Z-depth with cursor magnetics.
  - **3D Helix Project Carousel**: 3D mesh cards arranged on a spatial helix driven by scroll progress.
  - **Skills Node Graph**: Rotating wireframe icosahedron and interconnected technology nodes in teal and amber.
  - **Lighting & Ambiance**: Soft atmospheric gradient fog (`#0B0D10`) and slow-orbiting electric amber point light (`#FFB020`).
- **Accessibility & 2D Fallback**:
  - Zero-WebGL fallback using clean semantic HTML and `<img>` element with exact alt text: `"Portrait of Lemi Gobena, full-stack software engineer"`.
  - Respects `prefers-reduced-motion` media query.
  - WCAG AA color contrast across all UI surfaces and interactive elements.
  - Accessible `#main-content` skip link.

---

## 🚀 Quickstart & Commands

### Prerequisites
- Node.js 18+ or 20+
- npm or pnpm

### 1. Installation
```bash
npm install
```

### 2. Development Server
```bash
npm run dev
```
The site will run at `http://localhost:5173/` with hot module replacement (HMR).

### 3. Production Build
```bash
npm run build
```
Builds optimized production chunks to `/dist`. Three.js and animation libraries are automatically split into vendor chunks to keep the primary JS bundle under ~130KB gzipped.

### 4. Local Production Preview
```bash
npm run preview
```

---

## 📸 Where to Drop `lemi.jpg`

Place your portrait photo at:
```text
public/assets/lemi.jpg
```
The application will automatically:
1. Use `/assets/lemi.jpg` for avatar and profile documentation assets.
2. Render the 2D accessible image with matching framing and alt text.

---

## ☁️ Deploy to Vercel

### Option 1: Vercel CLI
```bash
npx vercel
```

### Option 2: GitHub Integration
1. Push your repository to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new) and import `My-Portfolio`.
3. Set Framework Preset to **Vite**.
4. Root Directory: `./`
5. Click **Deploy**.

---

## 📱 Mobile Performance & Responsiveness

- **Screen Testing**: Verified from 360px (mobile) to 3840px (4K ultra-wide).
- **Particle Throttling**: Particle count is dynamically capped from 3,000 on desktop down to 800 on mobile devices (`window.innerWidth < 768`).
- **Device Pixel Ratio**: Clamped to `Math.min(window.devicePixelRatio, 2)` to eliminate thermal throttling and GPU overhead on high-DPI retina screens.
- **Background Pause**: The render loop automatically pauses via `document.visibilitychange` when the browser tab is hidden or minimized.
