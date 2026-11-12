export const SITE_URL = 'https://lemigobena.me';

export const seoRoutes = {
    '/': {
        path: '/',
        canonical: `${SITE_URL}/`,
        title: 'Lemi Gobena — Full-Stack Engineer',
        description:
            'Full-Stack Engineer specializing in scalable web, mobile, and distributed systems architecture with Next.js, Express.js, React Native, and PostgreSQL.',
        schemaType: 'ProfilePage',
        breadcrumbName: 'Home',
    },
    '/about': {
        path: '/about',
        canonical: `${SITE_URL}/about`,
        title: 'About — Lemi Gobena | Full-Stack Engineer',
        description:
            "Learn about Lemi Gobena Jaleta — Full-Stack Engineer in Addis Ababa, Ethiopia, AAU Software Engineering ('28), and ESSLCE Top 10 National Scorer building systems from first principles.",
        schemaType: 'AboutPage',
        breadcrumbName: 'About',
    },
    '/experience': {
        path: '/experience',
        canonical: `${SITE_URL}/experience`,
        title: 'Experience — Lemi Gobena | Full-Stack Engineer',
        description:
            'Industry experience of Lemi Gobena: Junior Full-Stack Developer at Mereb Technologies (ATS & corporate platform) and Full-Stack & Mobile Developer at Tech Med (Jegnit app).',
        schemaType: 'ProfilePage',
        breadcrumbName: 'Experience',
    },
    '/projects': {
        path: '/projects',
        canonical: `${SITE_URL}/projects`,
        title: 'Projects — Lemi Gobena | Full-Stack Engineer',
        description:
            'Explore 11+ production engineering systems by Lemi Gobena including HealthNet, Lean Finance Verification, Mereb Talent ATS, GuardianNet, Jegnit, MiniGit (C++), LF-Hotels, and DecentVote.',
        schemaType: 'CollectionPage',
        breadcrumbName: 'Projects',
    },
    '/skills': {
        path: '/skills',
        canonical: `${SITE_URL}/skills`,
        title: 'Skills & Architecture — Lemi Gobena | Full-Stack Engineer',
        description:
            'Technical architecture stack of Lemi Gobena across Frontend & Mobile (React, Next.js, TypeScript, React Native), Backend (Node.js, Express, Python, C++, Java), Cloud/DevOps, and PostgreSQL.',
        schemaType: 'WebPage',
        breadcrumbName: 'Skills',
    },
    '/certificates': {
        path: '/certificates',
        canonical: `${SITE_URL}/certificates`,
        title: 'Certificates & Credentials — Lemi Gobena | Full-Stack Engineer',
        description:
            'Verified engineering certifications and technical credentials earned by Lemi Gobena from Frontend Masters and Udemy covering React, Next.js, TypeScript, Node.js, Python, C++, and Flutter.',
        schemaType: 'CollectionPage',
        breadcrumbName: 'Certificates',
    },
    '/contact': {
        path: '/contact',
        canonical: `${SITE_URL}/contact`,
        title: 'Contact — Lemi Gobena | Full-Stack Engineer',
        description:
            'Contact Lemi Gobena Jaleta for full-stack software engineering, distributed backend architecture, or mobile development collaborations via email, GitHub, LinkedIn, Telegram, or Upwork.',
        schemaType: 'ContactPage',
        breadcrumbName: 'Contact',
    },
};

export function getSeoForPath(pathname) {
    const normalized = pathname !== '/' ? pathname.replace(/\/+$/, '') : '/';
    return seoRoutes[normalized] || seoRoutes['/'];
}
