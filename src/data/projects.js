/**
 * Curated Flagship Engineering Systems
 * Exactly the 6 core systems requested, with unified web & mobile ecosystems,
 * ordered by technical capacity, architectural depth, and real-world impact.
 */

const rawProjects = [
    {
        id: 'healthnet',
        title: 'HealthNet (Web & Mobile)',
        shortTitle: 'HealthNet',
        selectorLabel: 'Web & Mobile',
        subtitle: 'Unified National Healthcare Records & Patient Companion Ecosystem',
        problem: 'Healthcare facilities faced fragmented patient records across regional clinics, while patients suffered long hospital queues without digital appointment or record access.',
        solution: 'Architected an end-to-end healthcare ecosystem: a centralized hospital web platform for multi-facility clinical records and RBAC administration, paired with a cross-platform patient mobile companion.',
        architecture: 'Web: React, Express/Node.js, PostgreSQL via Prisma ORM (3NF Schema, RBAC). Mobile: React Native / Expo, Supabase sync, encrypted offline caching.',
        description: 'National-scale healthcare ecosystem uniting Ethiopian hospitals and patients through unified electronic health records, multi-tenant hospital administration, and mobile patient scheduling.',
        tags: ['React', 'React Native', 'Node.js', 'PostgreSQL', 'Prisma', 'Supabase', 'Expo', 'TypeScript'],
        category: 'Full-Stack & Mobile',
        featured: true,
        link: 'https://health-net-ethiopia.vercel.app/',
        mobileLink: 'https://github.com/lemigobena/My-Portfolio/releases/download/v1.0.0/HealthNet.apk',
        github: 'https://github.com/lemigobena/HealthNet.git',
        githubMobile: 'https://github.com/lemigobena/HealthNet-App.git',
        image: '/Images/HealthNet_web.png',
        mobileImage: '/Images/HealthNet_App.png',
        logo: '/Images/healthnet_figma_mockup.png',
        hasDualPlatforms: true,
        platforms: [
            { 
                id: 'web', 
                label: 'Web Platform', 
                image: '/Images/HealthNet_web.png', 
                link: 'https://health-net-ethiopia.vercel.app/', 
                urlText: 'health-net-ethiopia.vercel.app',
                badge: 'EHR HOSPITAL PORTAL'
            },
            { 
                id: 'mobile', 
                label: 'Mobile App', 
                image: '/Images/HealthNet_App.png', 
                link: 'https://github.com/lemigobena/My-Portfolio/releases/download/v1.0.0/HealthNet.apk', 
                urlText: 'healthnet-mobile.app',
                badge: 'PATIENT COMPANION (APK)'
            }
        ]
    },
    {
        id: 'lean-finance',
        title: 'Lean Finance Verification',
        shortTitle: 'Lean Finance',
        selectorLabel: 'Fintech Verification',
        subtitle: 'Automated Financial Verification & Ledger Audit Engine',
        problem: 'Financial institutions and accounting teams face error-prone manual reconciliation when verifying ledgers, statements, and multi-bank transactions.',
        solution: 'Led technical architecture and full-stack implementation of an enterprise financial audit platform with automated general ledger reconciliation, multi-bank OCR parsing (CBE, Berhan, Hijra, Siinqee), and double-entry validation.',
        architecture: 'Express.js, TypeScript, Prisma ORM, PostgreSQL, React, Vite, Tailwind CSS, Docker, OCR parsing engines.',
        description: 'Enterprise financial verification platform for automated bank statement reconciliation, general ledger auditing, and OCR-powered parsing across major Ethiopian banking institutions.',
        tags: ['React', 'TypeScript', 'Prisma', 'PostgreSQL', 'Express.js', 'Docker', 'Tailwind CSS'],
        category: 'Full-Stack & Fintech',
        featured: true,
        image: '/Images/lean_finance.png',
        hasDualPlatforms: false
    },
    {
        id: 'mereb',
        title: 'Mereb (Portfolio & ATS)',
        shortTitle: 'Mereb Technologies',
        selectorLabel: 'Portfolio & ATS',
        subtitle: 'Enterprise Talent Acquisition Engine & Corporate Digital Platform',
        problem: 'Modern enterprises require intelligent, automated recruitment pipelines to handle high-volume applicant screening, paired with an authoritative digital brand presence.',
        solution: 'Architected an enterprise Applicant Tracking System (ATS) with automated candidate evaluation pipelines and asynchronous Redis & Bull worker queues, alongside Mereb’s official high-performance Next.js 16 corporate platform.',
        architecture: 'ATS: Next.js, Express.js, TypeScript, PostgreSQL via TypeORM, Redis, Bull Queues. Corporate Platform: Next.js 16, React 19, Tailwind CSS, Framer Motion.',
        description: 'Comprehensive enterprise ecosystem combining an intelligent applicant tracking system with automated background queue processing and the official corporate platform for Mereb Technologies.',
        tags: ['Next.js', 'Express.js', 'TypeScript', 'PostgreSQL', 'TypeORM', 'Redis', 'Bull', 'Tailwind CSS'],
        category: 'Full-Stack Enterprise',
        featured: true,
        link: 'https://talent.mereb.tech/',
        mobileLink: 'https://mereb.tech/',
        image: '/Images/mereb_talent.png',
        hasDualPlatforms: true,
        platforms: [
            { 
                id: 'ats', 
                label: 'Talent (ATS)', 
                image: '/Images/mereb_talent.png', 
                link: 'https://talent.mereb.tech/', 
                urlText: 'talent.mereb.tech',
                badge: 'RECRUITMENT PIPELINE'
            },
            { 
                id: 'corporate', 
                label: 'Corporate Platform', 
                image: '/Images/mereb.png', 
                link: 'https://mereb.tech/', 
                urlText: 'mereb.tech',
                badge: 'ENTERPRISE SHOWCASE'
            }
        ]
    },
    {
        id: 'guardiannet',
        title: 'GuardianNet (Mobile & Web)',
        shortTitle: 'GuardianNet',
        selectorLabel: 'Mobile & Web',
        subtitle: 'Real-Time Campus & Community Security Incident & SOS Network',
        problem: 'Universities and gated institutions suffered from slow emergency response times, lack of real-time geospatial incident tracking, and fragmented panic reporting channels.',
        solution: 'Built a unified safety monitoring ecosystem combining an administrative real-time web dispatch portal with live incident mapping, and a cross-platform mobile SOS companion for instant emergency broadcasts.',
        architecture: 'Web: Next.js, Tailwind CSS, Prisma, PostgreSQL, WebSockets. Mobile: React Native, Expo, Firebase Realtime Database, background GPS tracking.',
        description: 'Unified campus safety network equipping security teams with live geospatial incident dispatch and enabling students to trigger instant SOS panic alerts with real-time location streaming.',
        tags: ['Next.js', 'React Native', 'Expo', 'Firebase', 'Prisma', 'PostgreSQL', 'TypeScript'],
        category: 'Full-Stack & Mobile',
        featured: true,
        link: 'https://myguardiannet.vercel.app/',
        mobileLink: 'https://github.com/lemigobena/My-Portfolio/releases/download/v1.0.0/GuardianNet.apk',
        github: 'https://github.com/lemigobena/GuardianNet/tree/main/web.git',
        githubMobile: 'https://github.com/lemigobena/GuardianNet/tree/main/mobile',
        image: '/Images/GuardianNet_web.png',
        mobileImage: '/Images/GuardianNet_App.png',
        logo: '/Images/GuardianNet_App.png',
        hasDualPlatforms: true,
        platforms: [
            { 
                id: 'web', 
                label: 'Incident Portal (Web)', 
                image: '/Images/GuardianNet_web.png', 
                link: 'https://myguardiannet.vercel.app/', 
                urlText: 'myguardiannet.vercel.app',
                badge: 'DISPATCH CONSOLE'
            },
            { 
                id: 'mobile', 
                label: 'SOS Mobile App', 
                image: '/Images/GuardianNet_App.png', 
                link: 'https://github.com/lemigobena/My-Portfolio/releases/download/v1.0.0/GuardianNet.apk', 
                urlText: 'guardiannet-sos.app',
                badge: 'PANIC SOS (APK)'
            }
        ]
    },
    {
        id: 'jegnit-app',
        title: 'Jegnit',
        shortTitle: 'Jegnit',
        selectorLabel: 'Maternal Health',
        subtitle: 'Bilingual Maternal Healthcare & Fetal Development Tracker',
        problem: 'Expectant mothers often lack access to localized, bilingual maternal healthcare tracking and reliable weekly fetal development milestones.',
        solution: 'Built and published a bilingual (English & Amharic) mobile app on Google Play with interactive pregnancy stage calculators, weekly fetal development milestones, and maternal bodily change tracking.',
        architecture: 'React Native / Expo, Express.js, Drizzle ORM, PostgreSQL (Neon DB), offline-first SQLite sync.',
        description: 'Published on Google Play for expectant mothers, delivering weekly fetal development milestones, maternal health trackers, and localized bilingual healthcare insights in English and Amharic.',
        tags: ['React Native', 'Expo', 'Express.js', 'PostgreSQL', 'Drizzle ORM', 'Mobile'],
        category: 'Mobile Healthcare',
        featured: true,
        link: 'https://play.google.com/store/apps/details?id=com.jegnit.pregnancytracker',
        image: '/Images/jegnit_app.png',
        hasDualPlatforms: false
    },
    {
        id: 'mini-git',
        title: 'MiniGit System',
        shortTitle: 'MiniGit',
        selectorLabel: 'C++ VCS Engine',
        subtitle: 'Low-Level Version Control Engine from Scratch in C++',
        problem: 'Understanding Git internals requires practical implementation of low-level hashing, staging trees, and commit graphs from first principles.',
        solution: 'Engineered a distributed version control engine in C++ with custom cryptographic SHA hashing, blob compression, and Directed Acyclic Graph (DAG) commit tracking.',
        architecture: 'C++ with custom file system operations, directed acyclic graphs, and custom hashing algorithms.',
        description: 'Ground-up version control engine in C++ implementing Git internals with cryptographic SHA hashing, content-addressable blob storage, and directed acyclic graph commit traversal.',
        tags: ['C++', 'Data Structures', 'Algorithms', 'Git Internals', 'Systems'],
        category: 'Systems Programming',
        featured: true,
        github: 'https://github.com/lemigobena/DSA-MiniGit-Project.git',
        image: '/Images/MiniGit.png',
        hasDualPlatforms: false
    }
];

// Preserved historical projects for archival reference
export const historicalArchiveProjects = [
    {
        id: 'lfhotels-web',
        title: 'LF-Hotels (Web)',
        problem: 'Multi-hotel businesses struggle to manage various services and room reservations centrally.',
        solution: 'Engineering a premium multi-hotel management system with administrative dashboards.',
        architecture: 'React, Node.js, Prisma, PostgreSQL.',
        description: 'Premium multi-hotel management system allowing users to browse services and book luxury stays.',
        tags: ['React', 'Node.js', 'PostgreSQL', 'Prisma'],
        category: 'Full-Stack',
        link: 'https://lf-hotels-7226.vercel.app/',
        github: 'https://github.com/lemigobena/LF-Hotels.git',
        image: '/Images/LF_Hotels_Web.png',
        logo: '/Images/LF_Hotels_App.png'
    },
    {
        id: 'mystudy',
        title: 'MyStudy AI',
        subtitle: 'Personalized Academic Knowledge & Automated Assessment Engine',
        problem: 'Students are overwhelmed by unstructured study materials and lack automated self-quizzing workflows.',
        solution: 'Built an AI-powered study companion using LLMs to structure lecture notes, synthesize flashcards, and generate quizzes.',
        architecture: 'Vite/React with PyTorch and Gemini AI inference pipelines.',
        description: 'AI-powered study assistant that helps students organize materials, synthesize topics, and generate interactive quizzes.',
        tags: ['React', 'PyTorch', 'Gemini AI', 'Node.js', 'AI'],
        category: 'AI',
        link: 'https://my-study-front.vercel.app/',
        github: 'https://github.com/lemigobena/My-Study.git',
        image: '/Images/MyStudy.png'
    },
    {
        id: 'libravault',
        title: 'LibraVault',
        subtitle: 'High-Performance Digital Library Management System',
        problem: 'Managing personal or small library collections is often done via spreadsheets or paper, leading to lost inventory.',
        solution: 'Engineered a modern digital library management system with fast indexing, check-in/check-out tracking, and member analytics.',
        architecture: 'React, Node.js, PostgreSQL, Supabase.',
        description: 'Digital library management system for organizing and tracking book collections, checkouts, and student reader histories.',
        tags: ['React', 'Node.js', 'PostgreSQL', 'Supabase'],
        category: 'Full-Stack',
        link: 'https://mylibravault.vercel.app/',
        github: 'https://github.com/lemigobena/mybookhub.git',
        image: '/Images/LibraVault.png'
    },
    {
        id: 'decentvote',
        title: 'DecentVote',
        subtitle: 'Decentralized Immutable Blockchain Ballot Verification',
        problem: 'Centralized electronic voting architectures are susceptible to database tampering and lack verifiable public audits.',
        solution: 'Architected a decentralized cryptographic ballot verification engine where votes are sealed on-chain and verified in real time.',
        architecture: 'Solidity smart contracts on EVM with React web interface.',
        description: 'Decentralized voting platform ensuring transparency, cryptographic proof, and tamper-resistant election tallying.',
        tags: ['Blockchain', 'Solidity', 'React', 'Supabase'],
        category: 'Blockchain',
        link: 'https://mydecentvote.vercel.app/',
        github: 'https://github.com/lemigobena/secure-ballot.git',
        image: '/Images/DecentVote.png'
    },
    {
        id: 'cinematch',
        title: 'CineMatch',
        subtitle: 'Personalized Film Discovery & Recommendation Engine',
        problem: 'Movie streaming enthusiasts face choice paralysis across disparate catalogs without contextual recommendations.',
        solution: 'Engineered an AI-assisted recommendation engine leveraging TMDB graph metadata and user preference vector weighting.',
        architecture: 'React with TMDB API integration and Supabase PostgreSQL backend.',
        description: 'Movie discovery and recommendation platform tailored to user preferences with dynamic genre discovery and watchlists.',
        tags: ['React', 'Node.js', 'Supabase', 'PostgreSQL'],
        category: 'Full-Stack',
        featured: true,
        link: 'https://my-cine-match.vercel.app/',
        github: 'https://github.com/lemigobena/your-next-favorite-movie.git',
        image: '/Images/CineMatch.png'
    }
];

const baseUrl = import.meta.env.BASE_URL || '/';

const resolveUrl = (url) => {
    if (!url || typeof url !== 'string') return url;
    if (url.startsWith('/Images/')) {
        return `${baseUrl}${url.slice(1)}`;
    }
    return url;
};

export const projects = rawProjects.map(p => ({
    ...p,
    image: resolveUrl(p.image),
    mobileImage: resolveUrl(p.mobileImage),
    logo: resolveUrl(p.logo),
    platforms: p.platforms ? p.platforms.map(plat => ({
        ...plat,
        image: resolveUrl(plat.image)
    })) : p.platforms
}));
