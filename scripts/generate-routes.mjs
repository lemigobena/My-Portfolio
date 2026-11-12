import fs from 'node:fs';
import path from 'node:path';
import { seoRoutes, SITE_URL } from '../src/data/seoRoutes.js';

const escapeHtml = (str) =>
  String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

const navHtml = `
<nav aria-label="Primary Navigation" class="mb-8 flex flex-wrap gap-4 text-sm font-medium">
  <a href="/">Home</a>
  <a href="/about">About</a>
  <a href="/experience">Experience</a>
  <a href="/projects">Projects</a>
  <a href="/skills">Skills</a>
  <a href="/certificates">Certificates</a>
  <a href="/contact">Contact</a>
</nav>`.trim();

const routeBodies = {
  '/': `
<div class="min-h-screen bg-[#F1F1F1] text-[#111827] max-w-4xl mx-auto px-6 py-16 space-y-8">
  ${navHtml}
  <main id="main-content" class="space-y-6">
    <h1 class="text-4xl font-black tracking-tight">Lemi Gobena Jaleta — Full-Stack Engineer &amp; Systems Architect</h1>
    <p class="text-base leading-relaxed">
      Full-Stack Engineer in Addis Ababa, Ethiopia specializing in scalable web, mobile, and distributed systems architecture
      with Next.js, Express.js, React Native, TypeScript, and PostgreSQL. Software Engineering student at Addis Ababa University ('28)
      and ESSLCE Top 10 National Scorer.
    </p>
    <section aria-labelledby="home-exp">
      <h2 id="home-exp" class="text-2xl font-bold">Industry Experience</h2>
      <ul class="space-y-2 mt-2">
        <li><strong>Junior Full-Stack Developer</strong> at Mereb Technologies (March 2026 — Present): Architected Mereb Talent ATS (Next.js, Express.js, TypeScript, PostgreSQL, TypeORM, Redis, Bull Queues) and Mereb corporate digital platform.</li>
        <li><strong>Full-Stack &amp; Mobile App Developer</strong> at Tech Med (January 2026 — August 2026): Engineered Jegnit, a bilingual (English &amp; Amharic) maternal healthcare mobile platform published on Google Play Store.</li>
      </ul>
    </section>
    <section aria-labelledby="home-projects">
      <h2 id="home-projects" class="text-2xl font-bold">Featured Engineering Systems</h2>
      <ul class="space-y-2 mt-2">
        <li><strong>HealthNet</strong> — National healthcare records &amp; patient companion ecosystem (React, React Native, Node.js, PostgreSQL, Prisma).</li>
        <li><strong>Lean Finance Verification</strong> — Automated financial verification &amp; multi-bank ledger audit engine (Express.js, TypeScript, PostgreSQL, Docker).</li>
        <li><strong>Mereb (Portfolio &amp; ATS)</strong> — Enterprise talent acquisition engine &amp; corporate platform (Next.js 16, Express.js, Redis, Bull).</li>
        <li><strong>GuardianNet</strong> — Real-time campus &amp; community security incident dispatch and SOS mobile network.</li>
        <li><strong>Jegnit</strong> — Bilingual maternal healthcare &amp; fetal development tracker on Google Play.</li>
        <li><strong>MiniGit System</strong> — Low-level distributed version control engine built from scratch in C++.</li>
      </ul>
    </section>
  </main>
</div>`,

  '/about': `
<div class="min-h-screen bg-[#F1F1F1] text-[#111827] max-w-4xl mx-auto px-6 py-16 space-y-8">
  ${navHtml}
  <main id="main-content" class="space-y-6">
    <h1 class="text-4xl font-black tracking-tight">About Lemi Gobena — Engineering with Mathematical Rigor</h1>
    <p class="text-base leading-relaxed">
      I am Lemi Gobena Jaleta, a software engineer based in Addis Ababa, Ethiopia, driven by building robust, high-performance systems from first principles.
      I specialize in designing scalable web architectures, resilient distributed backends, and intuitive client interfaces that remain fast and dependable under load.
    </p>
    <p class="text-base leading-relaxed">
      My approach is anchored in mathematical structure and analytical problem solving — from custom object storage internals in C++ and 3NF relational schemas in PostgreSQL
      to optimizing React Native client runtime latency.
    </p>
    <section aria-labelledby="about-credentials">
      <h2 id="about-credentials" class="text-2xl font-bold">Background &amp; Credentials</h2>
      <ul class="space-y-2 mt-2">
        <li><strong>Location:</strong> Addis Ababa, Ethiopia</li>
        <li><strong>Education:</strong> B.Sc. in Software Engineering, Addis Ababa University (Class of '28)</li>
        <li><strong>Academic Distinction:</strong> ESSLCE Top 10 National Scorer in Ethiopia</li>
        <li><strong>Languages:</strong> English, Amharic, Oromo</li>
      </ul>
    </section>
  </main>
</div>`,

  '/experience': `
<div class="min-h-screen bg-[#F1F1F1] text-[#111827] max-w-4xl mx-auto px-6 py-16 space-y-8">
  ${navHtml}
  <main id="main-content" class="space-y-6">
    <h1 class="text-4xl font-black tracking-tight">Industry Experience &amp; Engineering Roles — Lemi Gobena</h1>
    <article class="space-y-2">
      <h2 class="text-2xl font-bold">Junior Full-Stack Developer — Mereb Technologies</h2>
      <p><em>March 2026 — Present • Addis Ababa, Ethiopia</em></p>
      <p>Leading end-to-end full-stack engineering for core enterprise digital products and automated recruitment infrastructure.</p>
      <ul class="space-y-1">
        <li>Architected and deployed the Mereb Talent ATS platform automating candidate pipeline ingestion, resume evaluation, and interview scheduling.</li>
        <li>Engineered modular REST APIs with Node.js, Express, TypeScript, PostgreSQL, and TypeORM alongside asynchronous Redis and Bull worker queues.</li>
        <li>Built and scaled the official Mereb corporate digital platform with Next.js 16, React 19, and Tailwind CSS.</li>
      </ul>
    </article>
    <article class="space-y-2">
      <h2 class="text-2xl font-bold">Full-Stack &amp; Mobile App Developer — Tech Med</h2>
      <p><em>January 2026 — August 2026 • Addis Ababa, Ethiopia</em></p>
      <p>Spearheaded technical architecture, mobile engineering, and production deployment of Jegnit on Google Play Store.</p>
      <ul class="space-y-1">
        <li>Architected the cross-platform Jegnit mobile application in React Native and Expo with offline-first SQLite synchronization.</li>
        <li>Developed scalable REST API microservices in Node.js, Express, and PostgreSQL for authenticated clinical profiles.</li>
        <li>Implemented bilingual English and Amharic localization for maternal health tracking and fetal development insights.</li>
      </ul>
    </article>
  </main>
</div>`,

  '/projects': `
<div class="min-h-screen bg-[#F1F1F1] text-[#111827] max-w-4xl mx-auto px-6 py-16 space-y-8">
  ${navHtml}
  <main id="main-content" class="space-y-6">
    <h1 class="text-4xl font-black tracking-tight">Engineering Projects &amp; Systems Portfolio — Lemi Gobena</h1>
    <p class="text-base leading-relaxed">Selected production web platforms, mobile applications, fintech systems, and low-level systems engineering software.</p>
    <ul class="space-y-4">
      <li><strong>HealthNet (Web &amp; Mobile)</strong> — Unified national healthcare records &amp; patient companion ecosystem built with React, React Native, Node.js, PostgreSQL, Prisma, and Supabase.</li>
      <li><strong>Lean Finance Verification</strong> — Automated financial verification &amp; multi-bank ledger audit engine supporting OCR parsing and reconciliation with Express.js, TypeScript, Prisma, PostgreSQL, and Docker.</li>
      <li><strong>Mereb (Portfolio &amp; ATS)</strong> — Enterprise Applicant Tracking System and official Mereb Technologies corporate platform built with Next.js 16, Express.js, TypeORM, PostgreSQL, Redis, and Bull Queues.</li>
      <li><strong>GuardianNet (Mobile &amp; Web)</strong> — Real-time campus and community security incident dispatch portal and SOS emergency broadcast mobile app.</li>
      <li><strong>Jegnit</strong> — Bilingual (English &amp; Amharic) maternal healthcare and fetal development tracker published on Google Play Store.</li>
      <li><strong>MiniGit System</strong> — Distributed version control engine built from scratch in C++ featuring SHA hashing and Directed Acyclic Graph commit traversal.</li>
      <li><strong>LF-Hotels</strong> — Multi-hotel hospitality reservation and administration platform.</li>
      <li><strong>MyStudy AI</strong> — AI-powered study companion for organizing lecture materials and generating quizzes using React, PyTorch, and Gemini AI.</li>
      <li><strong>LibraVault</strong> — Digital library management and checkout analytics system.</li>
      <li><strong>DecentVote</strong> — Decentralized blockchain ballot verification platform using Solidity and React.</li>
      <li><strong>CineMatch</strong> — Personalized movie discovery and recommendation platform powered by TMDB and Supabase.</li>
    </ul>
  </main>
</div>`,

  '/skills': `
<div class="min-h-screen bg-[#F1F1F1] text-[#111827] max-w-4xl mx-auto px-6 py-16 space-y-8">
  ${navHtml}
  <main id="main-content" class="space-y-6">
    <h1 class="text-4xl font-black tracking-tight">Technical Skills &amp; Systems Architecture — Lemi Gobena</h1>
    <p class="text-base leading-relaxed">Core engineering stack organized across four foundational architectural layers.</p>
    <section class="space-y-2">
      <h2 class="text-2xl font-bold">Frontend &amp; Mobile — Client &amp; Reactive Systems</h2>
      <p>React.js, Next.js, TypeScript, Tailwind CSS, React Native</p>
    </section>
    <section class="space-y-2">
      <h2 class="text-2xl font-bold">Backend &amp; Runtimes — Distributed Services &amp; Systems</h2>
      <p>Node.js, Express.js, Python, C++, Java</p>
    </section>
    <section class="space-y-2">
      <h2 class="text-2xl font-bold">Cloud &amp; DevOps — Infrastructure as Code &amp; CI/CD</h2>
      <p>Docker, Kubernetes, Terraform, GitHub CI/CD, Linux / POSIX</p>
    </section>
    <section class="space-y-2">
      <h2 class="text-2xl font-bold">Data Architecture — Relational, NoSQL &amp; BaaS Stores</h2>
      <p>PostgreSQL, MongoDB, Firebase, Supabase, Prisma ORM</p>
    </section>
  </main>
</div>`,

  '/certificates': `
<div class="min-h-screen bg-[#F1F1F1] text-[#111827] max-w-4xl mx-auto px-6 py-16 space-y-8">
  ${navHtml}
  <main id="main-content" class="space-y-6">
    <h1 class="text-4xl font-black tracking-tight">Certificates &amp; Technical Credentials — Lemi Gobena</h1>
    <p class="text-base leading-relaxed">Verified engineering certifications from Frontend Masters and Udemy across full-stack web, mobile, and systems programming.</p>
    <section class="space-y-2">
      <h2 class="text-2xl font-bold">Frontend Masters Certifications</h2>
      <p>Complete React v9, Intermediate Next.js, Next.js v4, Intermediate TypeScript v2, TypeScript v4, React Native v2, Node.js v3, SQL, JavaScript Hard Parts v3, Git In-Depth, Hard Parts AI, Intermediate Python, Java, Flutter, Tailwind CSS, CSS Fundamentals.</p>
    </section>
    <section class="space-y-2">
      <h2 class="text-2xl font-bold">Udemy Engineering Specializations</h2>
      <p>The Complete JavaScript Developer, Scalable Node.js Backend Development, C and C++ Step-by-Step Mastery, Java Mastery &amp; Full-Stack AI, Flutter for Web &amp; Mobile, Flask Framework &amp; Python Essentials, HTML5 &amp; Python 3, Advanced CSS &amp; Responsive Design, Figma Essential for UI/UX.</p>
    </section>
  </main>
</div>`,

  '/contact': `
<div class="min-h-screen bg-[#F1F1F1] text-[#111827] max-w-4xl mx-auto px-6 py-16 space-y-8">
  ${navHtml}
  <main id="main-content" class="space-y-6">
    <h1 class="text-4xl font-black tracking-tight">Contact Lemi Gobena Jaleta</h1>
    <p class="text-base leading-relaxed">
      Available for full-stack software engineering, distributed backend architecture, and mobile application collaborations.
    </p>
    <ul class="space-y-2">
      <li><strong>Email:</strong> <a href="mailto:lemigobena12@gmail.com">lemigobena12@gmail.com</a></li>
      <li><strong>Phone:</strong> <a href="tel:+251939740755">+251 939 740 755</a></li>
      <li><strong>Location:</strong> Addis Ababa, Ethiopia</li>
      <li><strong>GitHub:</strong> <a href="https://github.com/lemigobena">github.com/lemigobena</a></li>
      <li><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/lemigobena">linkedin.com/in/lemigobena</a></li>
      <li><strong>X (Twitter):</strong> <a href="https://x.com/lemigobena">x.com/lemigobena</a></li>
      <li><strong>Telegram:</strong> <a href="https://t.me/lemigobena">t.me/lemigobena</a></li>
      <li><strong>Upwork:</strong> <a href="https://www.upwork.com/freelancers/~01b4b47e3004d3a932?mp_source=share">Upwork Profile</a></li>
    </ul>
  </main>
</div>`,
};

function updateRouteJsonLd(html, routeMeta) {
  if (routeMeta.path === '/') {
    return html;
  }

  return html.replace(
    /<script type="application\/ld\+json">([\s\S]*?)<\/script>/,
    (_, jsonStr) => {
      const data = JSON.parse(jsonStr);
      const graph = Array.isArray(data['@graph']) ? data['@graph'] : [];

      // Replace homepage ProfilePage node with the route-specific WebPage/CollectionPage/etc. node
      const filtered = graph.filter((item) => item['@id'] !== `${SITE_URL}/#profilepage`);

      const pageNode = {
        '@type': routeMeta.schemaType,
        '@id': `${routeMeta.canonical}#webpage`,
        url: routeMeta.canonical,
        name: routeMeta.title,
        description: routeMeta.description,
        isPartOf: { '@id': `${SITE_URL}/#website` },
        mainEntity: { '@id': `${SITE_URL}/#person` },
        breadcrumb: { '@id': `${routeMeta.canonical}#breadcrumb` },
        inLanguage: 'en-US',
      };

      if (routeMeta.schemaType === 'ProfilePage') {
        pageNode.dateCreated = '2024-01-01T00:00:00+03:00';
        pageNode.dateModified = '2026-11-12T09:30:00+03:00';
      }

      const breadcrumbNode = {
        '@type': 'BreadcrumbList',
        '@id': `${routeMeta.canonical}#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: `${SITE_URL}/`,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: routeMeta.breadcrumbName,
            item: routeMeta.canonical,
          },
        ],
      };

      data['@graph'] = [...filtered, pageNode, breadcrumbNode];
      return `<script type="application/ld+json">\n  ${JSON.stringify(data, null, 2)}\n  </script>`;
    }
  );
}

function buildRouteHtml(templateHtml, routeMeta) {
  const safeTitle = escapeHtml(routeMeta.title);
  const safeDesc = escapeHtml(routeMeta.description);
  const safeCanonical = escapeHtml(routeMeta.canonical);

  let out = templateHtml;

  out = out.replace(/<title>[\s\S]*?<\/title>/, `<title>${safeTitle}</title>`);
  out = out.replace(
    /<meta name="title" content="[^"]*"\s*\/>/,
    `<meta name="title" content="${safeTitle}" />`
  );
  out = out.replace(
    /<meta name="description"\s+content="[^"]*"\s*\/>/,
    `<meta name="description" content="${safeDesc}" />`
  );
  out = out.replace(
    /<link rel="canonical" href="[^"]*"\s*\/>/,
    `<link rel="canonical" href="${safeCanonical}" />`
  );
  out = out.replace(
    /<meta property="og:url" content="[^"]*"\s*\/>/,
    `<meta property="og:url" content="${safeCanonical}" />`
  );
  out = out.replace(
    /<meta property="og:title" content="[^"]*"\s*\/>/,
    `<meta property="og:title" content="${safeTitle}" />`
  );
  out = out.replace(
    /<meta property="og:description"\s+content="[^"]*"\s*\/>/,
    `<meta property="og:description" content="${safeDesc}" />`
  );
  out = out.replace(
    /<meta name="twitter:url" content="[^"]*"\s*\/>/,
    `<meta name="twitter:url" content="${safeCanonical}" />`
  );
  out = out.replace(
    /<meta name="twitter:title" content="[^"]*"\s*\/>/,
    `<meta name="twitter:title" content="${safeTitle}" />`
  );
  out = out.replace(
    /<meta name="twitter:description"\s+content="[^"]*"\s*\/>/,
    `<meta name="twitter:description" content="${safeDesc}" />`
  );

  out = updateRouteJsonLd(out, routeMeta);

  const bodyFallback = routeBodies[routeMeta.path] || '';
  out = out.replace('<div id="root"></div>', `<div id="root">${bodyFallback}</div>`);

  return out;
}

export function generateRouteHtmlFiles(distDir = path.resolve(process.cwd(), 'dist')) {
  const indexPath = path.join(distDir, 'index.html');
  if (!fs.existsSync(indexPath)) {
    throw new Error(`Expected built index.html at ${indexPath}`);
  }

  const templateHtml = fs.readFileSync(indexPath, 'utf8');

  for (const [routePath, routeMeta] of Object.entries(seoRoutes)) {
    const html = buildRouteHtml(templateHtml, routeMeta);
    const outFile =
      routePath === '/'
        ? indexPath
        : path.join(distDir, `${routePath.replace(/^\//, '')}.html`);
    fs.writeFileSync(outFile, html, 'utf8');
    console.log(`[seo-routes] Generated ${path.relative(process.cwd(), outFile)} -> ${routeMeta.canonical}`);
  }
}

// Allow direct CLI invocation
if (process.argv[1] && path.resolve(process.argv[1]) === path.resolve(new URL(import.meta.url).pathname)) {
  generateRouteHtmlFiles();
}
