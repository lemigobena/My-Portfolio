const udemyCertificates = [
    {
        id: 'ud-01',
        title: "The Complete JavaScript Developer",
        issuer: "Udemy",
        date: "2024",
        description: "Mastery of modern ES6+, asynchronous JS, and deep dives into the engine internals.",
        link: "https://ude.my/UC-3f52a3b1-9020-4587-86d0-c5e971c9ebb5",
        image: '/Certificates/cert_js.png',
        type: 'Udemy',
        category: 'Development'
    },
    {
        id: 'ud-02',
        title: "HTML 5 & Python 3 Complete",
        issuer: "Udemy",
        date: "2024",
        description: "Comprehensive training in semantic web standards and Python backend fundamentals.",
        link: "https://ude.my/UC-4a125df1-7c55-49b8-84b3-d75e74992350",
        image: '/Certificates/cert_python.png',
        type: 'Udemy',
        category: 'Development'
    },
    {
        id: 'ud-03',
        title: "Advanced CSS & Responsive Design",
        issuer: "Udemy",
        date: "2024",
        description: "Advanced styling, responsive layouts, and modern CSS architecture.",
        link: "https://ude.my/UC-4b73bc45-446e-4efb-82de-b26f6c2d293a",
        image: '/Certificates/cert_css.png',
        type: 'Udemy',
        category: 'Design'
    },
    {
        id: 'ud-04',
        title: "Scalable Node.js Backend Development",
        issuer: "Udemy",
        date: "2024",
        description: "Building production-ready RESTful APIs and real-time backend systems.",
        link: "https://ude.my/UC-5249a142-6c37-49d4-adff-0838fb11a2ea",
        image: '/Certificates/cert_nodejs.png',
        type: 'Udemy',
        category: 'Development'
    },
    {
        id: 'ud-05',
        title: "Foundations of Web Development",
        issuer: "Udemy",
        date: "2024",
        description: "Full-stack entry covering foundational frontend libraries and frameworks.",
        link: "https://ude.my/UC-5fba027e-942e-425c-9e4d-3d7c9d0b682d",
        image: '/Certificates/cert_js.png',
        type: 'Udemy',
        category: 'Development'
    },
    {
        id: 'ud-06',
        title: "Figma Essential for UI/UX",
        issuer: "Udemy",
        date: "2024",
        description: "Designing premium user interfaces and complex user experience flows.",
        link: "https://ude.my/UC-b251cecd-19de-4639-aab4-a34863414dcd",
        image: '/Certificates/cert_uiux.png',
        type: 'Udemy',
        category: 'Design'
    },
    {
        id: 'ud-07',
        title: "Flask Framework & Python Essentials",
        issuer: "Udemy",
        date: "2024",
        description: "Building micro-services and web applications using Flask and Python.",
        link: "https://ude.my/UC-c36c3e1b-1b20-4cf0-b0e1-03742bbc465f",
        image: '/Certificates/cert_python.png',
        type: 'Udemy',
        category: 'Development'
    },
    {
        id: 'ud-08',
        title: "Web Design with WordPress",
        issuer: "Udemy",
        date: "2024",
        description: "Focus on visual web design and CMS management for efficient deployment.",
        link: "https://ude.my/UC-c54abb2e-6359-43e9-ba7b-80efe6024b91",
        image: '/Certificates/cert_css.png',
        type: 'Udemy',
        category: 'Design'
    },
    {
        id: 'ud-09',
        title: "C and C++ Step-by-Step Mastery",
        issuer: "Udemy",
        date: "2024",
        description: "Low-level system programming and memory management fundamentals.",
        link: "https://ude.my/UC-c7fa8c0f-0e34-476b-a80a-5607c7807dee",
        image: '/Certificates/cert_cpp.png',
        type: 'Udemy',
        category: 'Systems'
    },
    {
        id: 'ud-10',
        title: "Java Mastery & Full-Stack AI",
        issuer: "Udemy",
        date: "2024",
        description: "Object-oriented programming and AI-integrated Java applications.",
        link: "https://ude.my/UC-d4f3b933-da0c-4d8b-be5e-d8c5f1fe618a",
        image: '/Certificates/cert_java.png',
        type: 'Udemy',
        category: 'Development'
    },
    {
        id: 'ud-11',
        title: "Flutter for Web & Mobile",
        issuer: "Udemy",
        date: "2024",
        description: "Creating high-performance cross-platform mobile and web apps.",
        link: "https://ude.my/UC-d62328ef-8324-4c51-8b80-d7b96eb49e4b",
        image: '/Certificates/cert_flutter.png',
        type: 'Udemy',
        category: 'App'
    }
];

const fmCertificates = [
    { title: "Complete React v9", theme: "js" },
    { title: "CSS Fundamentals", theme: "css" },
    { title: "Figma v2", theme: "uiux" },
    { title: "Flutter", theme: "flutter" },
    { title: "Getting Started CSS v2", theme: "css" },
    { title: "Getting Started JavaScript v3", theme: "js" },
    { title: "Git In-Depth", theme: "cpp" },
    { title: "Hard Parts AI", theme: "python" },
    { title: "Intermediate Next.js", theme: "nextjs" },
    { title: "Intermediate Python", theme: "python" },
    { title: "Intermediate React v6", theme: "js" },
    { title: "Intermediate TypeScript v2", theme: "typescript" },
    { title: "Java", theme: "java" },
    { title: "JavaScript Hard Parts v3", theme: "js" },
    { title: "Next.js v4", theme: "nextjs" },
    { title: "Next.js", theme: "nextjs" },
    { title: "Node.js v3", theme: "nodejs" },
    { title: "Python", theme: "python" },
    { title: "React Native v2", theme: "flutter" },
    { title: "React TypeScript v3", theme: "typescript" },
    { title: "SQL", theme: "nodejs" },
    { title: "Tailwind CSS", theme: "css" },
    { title: "TypeScript First Steps", theme: "typescript" },
    { title: "TypeScript v4", theme: "typescript" },
    { title: "Vanilla JS Apps", theme: "js" }
].map((item, index) => ({
    id: `fm-${index}`,
    title: item.title,
    issuer: "Frontend Masters",
    date: "2024",
    description: `Verified mastery of ${item.title} and associated professional engineering principles at Frontend Masters.`,
    curriculum: [
        "Advanced Core Concepts",
        "Under-the-hood Internals",
        "Performance Optimization",
        "Enterprise Architecture Patterns"
    ],
    image: `/Certificates/cert_${item.theme}.png`,
    document: `/Documents/${item.title.toLowerCase().replace(/\s+/g, '-').replace(/\./g, '-')}.pdf`,
    type: 'FM'
}));

export const allCertificates = [...udemyCertificates, ...fmCertificates].sort((a, b) => a.title.localeCompare(b.title));
export { udemyCertificates, fmCertificates };

