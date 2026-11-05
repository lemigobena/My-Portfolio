import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    Laptop, 
    Server, 
    CloudUpload, 
    Database 
} from 'lucide-react';
import { 
    FaReact, 
    FaNodeJs, 
    FaPython, 
    FaDocker, 
    FaGithub, 
    FaJava, 
    FaLinux 
} from 'react-icons/fa';
import { 
    SiNextdotjs, 
    SiTypescript, 
    SiTailwindcss, 
    SiPostgresql, 
    SiMongodb, 
    SiFirebase, 
    SiSupabase, 
    SiPrisma, 
    SiCplusplus, 
    SiExpress, 
    SiKubernetes, 
    SiTerraform 
} from 'react-icons/si';
import { TbBrandReactNative } from 'react-icons/tb';

// Curated 5 technologies per quadrant strictly following user specification
const quadrantsData = {
    frontend: {
        id: 'frontend',
        tag: 'FRONTEND & MOBILE',
        title: 'Client & Reactive Systems',
        category: 'Frontend & Mobile',
        badgeIcon: Laptop,
        badgeLabel: 'Client Interface',
        description: 'Engineering modular web & mobile applications with sub-second rendering, atomic design patterns, and cross-platform offline state sync.',
        skills: [
            { 
                id: 'react', 
                name: 'React.js', 
                icon: FaReact, 
                left: 17.50, 
                top: 31.25, 
                summary: 'Component hierarchy, concurrent rendering, custom hooks, and reactive state systems.',
                level: 'Advanced'
            },
            { 
                id: 'nextjs', 
                name: 'Next.js', 
                icon: SiNextdotjs, 
                left: 22.38, 
                top: 31.25, 
                summary: 'App Router, Server Components, SSR, static optimization, and edge caching.',
                level: 'Advanced'
            },
            { 
                id: 'typescript', 
                name: 'TypeScript', 
                icon: SiTypescript, 
                left: 27.19, 
                top: 31.25, 
                summary: 'Strict compile-time type safety, complex generics, and enterprise contracts.',
                level: 'Advanced'
            },
            { 
                id: 'tailwind', 
                name: 'Tailwind CSS', 
                icon: SiTailwindcss, 
                left: 32.00, 
                top: 31.25, 
                summary: 'Utility-first styling, design token systems, fluid typography, and dark mode.',
                level: 'Expert'
            },
            { 
                id: 'react-native', 
                name: 'React Native', 
                icon: TbBrandReactNative, 
                left: 36.88, 
                top: 31.25, 
                summary: 'Cross-platform iOS & Android mobile engineering with offline SQLite cache.',
                level: 'Advanced'
            }
        ]
    },
    backend: {
        id: 'backend',
        tag: 'BACKEND & RUNTIMES',
        title: 'Distributed Services & Systems',
        category: 'Backend Architecture',
        badgeIcon: Server,
        badgeLabel: 'Backend Runtimes',
        description: 'Architecting high-concurrency server microservices, low-level computational algorithms, and secure RESTful/gRPC API architectures.',
        skills: [
            { 
                id: 'nodejs', 
                name: 'Node.js', 
                icon: FaNodeJs, 
                left: 63.13, 
                top: 31.25, 
                summary: 'Asynchronous event-driven I/O, cluster workers, and high-throughput server backends.',
                level: 'Advanced'
            },
            { 
                id: 'express', 
                name: 'Express.js', 
                icon: SiExpress, 
                left: 68.00, 
                top: 31.25, 
                summary: 'Stateless JWT authentication, RBAC middleware pipelines, and REST endpoints.',
                level: 'Advanced'
            },
            { 
                id: 'python', 
                name: 'Python', 
                icon: FaPython, 
                left: 72.81, 
                top: 31.25, 
                summary: 'Data processing pipelines, scientific numerical solvers, and automated scripting.',
                level: 'Advanced'
            },
            { 
                id: 'cpp', 
                name: 'C++', 
                icon: SiCplusplus, 
                left: 77.63, 
                top: 31.25, 
                summary: 'Low-level systems programming, custom memory control, and DAG traversal algorithms.',
                level: 'Proficient'
            },
            { 
                id: 'java', 
                name: 'Java', 
                icon: FaJava, 
                left: 82.50, 
                top: 31.25, 
                summary: 'Object-oriented software engineering, strong static typing, and enterprise patterns.',
                level: 'Proficient'
            }
        ]
    },
    devops: {
        id: 'devops',
        tag: 'CLOUD & DEVOPS',
        title: 'Infrastructure as Code & CI/CD',
        category: 'Cloud & Infrastructure',
        badgeIcon: CloudUpload,
        badgeLabel: 'Cloud & DevOps',
        description: 'Containerized clusters, declarative Terraform IaC provisioning, Linux system administration, and automated GitHub continuous delivery pipelines.',
        skills: [
            { 
                id: 'docker', 
                name: 'Docker', 
                icon: FaDocker, 
                left: 17.50, 
                top: 68.75, 
                summary: 'Multi-stage container builds, Compose multi-container services, and isolation.',
                level: 'Advanced'
            },
            { 
                id: 'kubernetes', 
                name: 'Kubernetes', 
                icon: SiKubernetes, 
                left: 22.38, 
                top: 68.75, 
                summary: 'Container orchestration, cluster manifests, pods, services, and self-healing deployments.',
                level: 'Proficient'
            },
            { 
                id: 'terraform', 
                name: 'Terraform', 
                icon: SiTerraform, 
                left: 27.19, 
                top: 68.75, 
                summary: 'Declarative Infrastructure as Code (IaC) provisioning for reproducible cloud stacks.',
                level: 'Proficient'
            },
            { 
                id: 'github', 
                name: 'GitHub CI/CD', 
                icon: FaGithub, 
                left: 32.00, 
                top: 68.75, 
                summary: 'Automated test workflows, pull request verification, and GitHub Actions deployments.',
                level: 'Advanced'
            },
            { 
                id: 'linux', 
                name: 'Linux / POSIX', 
                icon: FaLinux, 
                left: 36.88, 
                top: 68.75, 
                summary: 'Ubuntu server administration, Bash shell scripting, SSH keys, and POSIX primitives.',
                level: 'Advanced'
            }
        ]
    },
    databases: {
        id: 'databases',
        tag: 'DATA ARCHITECTURE',
        title: 'Relational, NoSQL & BaaS Stores',
        category: 'Data Architecture',
        badgeIcon: Database,
        badgeLabel: 'Storage Engines',
        description: 'ACID-compliant relational schemas in PostgreSQL, document persistence in MongoDB, cloud BaaS in Supabase/Firebase, and type-safe Prisma ORM.',
        skills: [
            { 
                id: 'postgresql', 
                name: 'PostgreSQL', 
                icon: SiPostgresql, 
                left: 63.13, 
                top: 68.75, 
                summary: 'Strict 3NF normalization, foreign key integrity, composite indexes, and ACID guarantees.',
                level: 'Expert'
            },
            { 
                id: 'mongodb', 
                name: 'MongoDB', 
                icon: SiMongodb, 
                left: 68.00, 
                top: 68.75, 
                summary: 'Flexible document schemas, BSON queries, indexing, and aggregation pipelines.',
                level: 'Advanced'
            },
            { 
                id: 'firebase', 
                name: 'Firebase', 
                icon: SiFirebase, 
                left: 72.81, 
                top: 68.75, 
                summary: 'Firestore real-time listeners, serverless functions, authentication, and mobile sync.',
                level: 'Advanced'
            },
            { 
                id: 'supabase', 
                name: 'Supabase', 
                icon: SiSupabase, 
                left: 77.63, 
                top: 68.75, 
                summary: 'Managed PostgreSQL, Row Level Security (RLS) policies, and instant REST APIs.',
                level: 'Advanced'
            },
            { 
                id: 'prisma', 
                name: 'Prisma ORM', 
                icon: SiPrisma, 
                left: 82.50, 
                top: 68.75, 
                summary: 'Automated type-safe database migrations, declarative schema models, and queries.',
                level: 'Expert'
            }
        ]
    }
};

const SkillsArchitecture = () => {
    const [hoveredTech, setHoveredTech] = useState(null);
    const [activeQuadrant, setActiveQuadrant] = useState(null);

    const tl = quadrantsData.frontend;
    const tr = quadrantsData.backend;
    const bl = quadrantsData.devops;
    const br = quadrantsData.databases;

    return (
        <section 
            id="skills" 
            className="w-full py-16 sm:py-20 lg:py-24 relative select-text bg-transparent text-[#111827]"
            aria-label="Skills Architecture & Engineering Lifecycle"
        >
            {/* Same width container matching Hero, About, Portfolio, Contact */}
            <div className="w-full max-w-[1536px] mx-auto px-6 sm:px-12 lg:px-16 xl:px-20">
                
                {/* Section Header: Pure Black & White typography with NO dot bullet */}
                <div className="mb-10 sm:mb-14">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                        <div>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#111827] tracking-tight leading-tight font-display">
                                Engineering Lifecycle & Skills
                            </h2>
                            <p className="mt-2 text-sm sm:text-base text-neutral-600 max-w-2xl font-normal">
                                Cohesive full-stack systems architecture linking client interfaces, scalable server runtimes, cloud pipelines, and ACID data persistence.
                            </p>
                        </div>
                    </div>
                </div>

                {/* ======================================================== */}
                {/* THE SCHEMATIC ARCHITECTURE CANVAS                        */}
                {/* Pure Black and White Only (No colors)                    */}
                {/* ======================================================== */}
                <div className="relative w-full overflow-visible">

                    {/* ======================================================== */}
                    {/* DESKTOP VIEW (lg and above): Vector Schematic            */}
                    {/* 1600x800 viewBox with 5 custom icons per pod             */}
                    {/* ======================================================== */}
                    <div className="hidden lg:block relative w-full aspect-[2/1] select-none">
                        
                        {/* 1. Pure Vector Schematic SVG (Monochrome Only) */}
                        <svg 
                            className="absolute inset-0 w-full h-full pointer-events-none" 
                            viewBox="0 0 1600 800" 
                            fill="none" 
                            preserveAspectRatio="xMidYMid meet"
                        >
                            <defs>
                                {/* Soft monochrome fading halo blur filter */}
                                <filter id="fading-halo" x="-40%" y="-40%" width="180%" height="180%">
                                    <feGaussianBlur stdDeviation="6" result="blur" />
                                    <feMerge>
                                        <feMergeNode in="blur" />
                                        <feMergeNode in="SourceGraphic" />
                                    </feMerge>
                                </filter>

                                <filter id="clean-shadow" x="-10%" y="-10%" width="120%" height="120%">
                                    <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#000000" floodOpacity="0.06" />
                                </filter>
                            </defs>

                            {/* Center Hub Concentric Orbit Rings */}
                            <circle 
                                cx="800" 
                                cy="400" 
                                r="118" 
                                stroke="#111827" 
                                strokeWidth="1.5" 
                                strokeDasharray="6 8" 
                                fill="none" 
                                opacity="0.2" 
                                className="animate-[spin_60s_linear_infinite] origin-[800px_400px]"
                            />
                            <circle 
                                cx="800" 
                                cy="400" 
                                r="92" 
                                stroke="#111827" 
                                strokeWidth="1.5" 
                                strokeDasharray="4 6" 
                                fill="none" 
                                opacity="0.35" 
                                className="animate-[spin_40s_linear_infinite_reverse] origin-[800px_400px]"
                            />

                            {/* Sweeping Connecting Stems: Pure Black */}
                            {/* Top-Left stem */}
                            <path 
                                d="M 650 250 C 720 250, 730 310, 735 335" 
                                stroke="#111827" 
                                strokeWidth={activeQuadrant === 'frontend' ? '3.5' : '2'} 
                                fill="none" 
                                opacity={activeQuadrant === 'frontend' ? '1' : '0.75'} 
                                className="transition-all duration-300"
                            />
                            {/* Bottom-Left stem */}
                            <path 
                                d="M 650 550 C 720 550, 730 490, 735 465" 
                                stroke="#111827" 
                                strokeWidth={activeQuadrant === 'devops' ? '3.5' : '2'} 
                                fill="none" 
                                opacity={activeQuadrant === 'devops' ? '1' : '0.75'} 
                                className="transition-all duration-300"
                            />
                            {/* Top-Right stem */}
                            <path 
                                d="M 950 250 C 880 250, 870 310, 865 335" 
                                stroke="#111827" 
                                strokeWidth={activeQuadrant === 'backend' ? '3.5' : '2'} 
                                fill="none" 
                                opacity={activeQuadrant === 'backend' ? '1' : '0.75'} 
                                className="transition-all duration-300"
                            />
                            {/* Bottom-Right stem */}
                            <path 
                                d="M 950 550 C 880 550, 870 490, 865 465" 
                                stroke="#111827" 
                                strokeWidth={activeQuadrant === 'databases' ? '3.5' : '2'} 
                                fill="none" 
                                opacity={activeQuadrant === 'databases' ? '1' : '0.75'} 
                                className="transition-all duration-300"
                            />

                            {/* Orbit Connector Dots: Pure Black */}
                            <circle cx="735" cy="335" r={activeQuadrant === 'frontend' ? '5.5' : '4.5'} fill="#111827" />
                            <circle cx="865" cy="335" r={activeQuadrant === 'backend' ? '5.5' : '4.5'} fill="#111827" />
                            <circle cx="735" cy="465" r={activeQuadrant === 'devops' ? '5.5' : '4.5'} fill="#111827" />
                            <circle cx="865" cy="465" r={activeQuadrant === 'databases' ? '5.5' : '4.5'} fill="#111827" />

                            {/* Center Hub Circle with bold black `< / >` */}
                            <circle cx="800" cy="400" r="65" stroke="#111827" strokeWidth="2.5" fill="#ffffff" filter="url(#clean-shadow)" />
                            <circle cx="800" cy="400" r="56" stroke="#111827" strokeWidth="1" fill="none" opacity="0.15" />
                            <text 
                                x="800" 
                                y="411" 
                                fontFamily="monospace" 
                                fontSize="30" 
                                fontWeight="bold" 
                                fill="#111827" 
                                textAnchor="middle" 
                                letterSpacing="1"
                            >
                                &lt; / &gt;
                            </text>

                            {/* ======================================================== */}
                            {/* TOP-LEFT POD & ELEVATED MAIN BADGE (Computer)            */}
                            {/* ======================================================== */}
                            <path 
                                d="M 220 210 L 610 210 A 40 40 0 0 1 650 250 A 40 40 0 0 1 610 290 L 220 290" 
                                stroke="#111827" 
                                strokeWidth={activeQuadrant === 'frontend' ? '2.5' : '2'} 
                                fill="#ffffff" 
                                filter="url(#clean-shadow)"
                                className="transition-all duration-300"
                            />
                            {/* Soft Fading Halo (Black and White only) */}
                            <circle 
                                cx="195" 
                                cy="236" 
                                r="54" 
                                fill="none" 
                                stroke={activeQuadrant === 'frontend' ? 'rgba(17, 24, 39, 0.28)' : 'rgba(17, 24, 39, 0.12)'} 
                                strokeWidth="12" 
                                filter="url(#fading-halo)" 
                            />
                            <circle 
                                cx="195" 
                                cy="236" 
                                r="45" 
                                fill="none" 
                                stroke={activeQuadrant === 'frontend' ? 'rgba(17, 24, 39, 0.45)' : 'rgba(17, 24, 39, 0.22)'} 
                                strokeWidth="2.5" 
                            />
                            {/* Main Icon Badge Circle (Pushed to top at cy=236) */}
                            <circle cx="195" cy="236" r="39" stroke="#111827" strokeWidth="2.5" fill="#ffffff" filter="url(#clean-shadow)" />
                            <circle cx="195" cy="236" r="32" stroke="#111827" strokeWidth="1" fill="none" opacity="0.2" />

                            {/* ======================================================== */}
                            {/* BOTTOM-LEFT POD & ELEVATED MAIN BADGE (Cloud)            */}
                            {/* ======================================================== */}
                            <path 
                                d="M 220 510 L 610 510 A 40 40 0 0 1 650 550 A 40 40 0 0 1 610 590 L 220 590" 
                                stroke="#111827" 
                                strokeWidth={activeQuadrant === 'devops' ? '2.5' : '2'} 
                                fill="#ffffff" 
                                filter="url(#clean-shadow)"
                                className="transition-all duration-300"
                            />
                            {/* Soft Fading Halo (Black and White only) */}
                            <circle 
                                cx="195" 
                                cy="536" 
                                r="54" 
                                fill="none" 
                                stroke={activeQuadrant === 'devops' ? 'rgba(17, 24, 39, 0.28)' : 'rgba(17, 24, 39, 0.12)'} 
                                strokeWidth="12" 
                                filter="url(#fading-halo)" 
                            />
                            <circle 
                                cx="195" 
                                cy="536" 
                                r="45" 
                                fill="none" 
                                stroke={activeQuadrant === 'devops' ? 'rgba(17, 24, 39, 0.45)' : 'rgba(17, 24, 39, 0.22)'} 
                                strokeWidth="2.5" 
                            />
                            {/* Main Icon Badge Circle (Pushed to top at cy=536) */}
                            <circle cx="195" cy="536" r="39" stroke="#111827" strokeWidth="2.5" fill="#ffffff" filter="url(#clean-shadow)" />
                            <circle cx="195" cy="536" r="32" stroke="#111827" strokeWidth="1" fill="none" opacity="0.2" />

                            {/* ======================================================== */}
                            {/* TOP-RIGHT POD & ELEVATED MAIN BADGE (Server)             */}
                            {/* ======================================================== */}
                            <path 
                                d="M 1380 210 L 990 210 A 40 40 0 0 0 950 250 A 40 40 0 0 0 990 290 L 1380 290" 
                                stroke="#111827" 
                                strokeWidth={activeQuadrant === 'backend' ? '2.5' : '2'} 
                                fill="#ffffff" 
                                filter="url(#clean-shadow)"
                                className="transition-all duration-300"
                            />
                            {/* Soft Fading Halo (Black and White only) */}
                            <circle 
                                cx="1405" 
                                cy="236" 
                                r="54" 
                                fill="none" 
                                stroke={activeQuadrant === 'backend' ? 'rgba(17, 24, 39, 0.28)' : 'rgba(17, 24, 39, 0.12)'} 
                                strokeWidth="12" 
                                filter="url(#fading-halo)" 
                            />
                            <circle 
                                cx="1405" 
                                cy="236" 
                                r="45" 
                                fill="none" 
                                stroke={activeQuadrant === 'backend' ? 'rgba(17, 24, 39, 0.45)' : 'rgba(17, 24, 39, 0.22)'} 
                                strokeWidth="2.5" 
                            />
                            {/* Main Icon Badge Circle (Pushed to top at cy=236) */}
                            <circle cx="1405" cy="236" r="39" stroke="#111827" strokeWidth="2.5" fill="#ffffff" filter="url(#clean-shadow)" />
                            <circle cx="1405" cy="236" r="32" stroke="#111827" strokeWidth="1" fill="none" opacity="0.2" />

                            {/* ======================================================== */}
                            {/* BOTTOM-RIGHT POD & ELEVATED MAIN BADGE (Database)        */}
                            {/* ======================================================== */}
                            <path 
                                d="M 1380 510 L 990 510 A 40 40 0 0 0 950 550 A 40 40 0 0 0 990 590 L 1380 590" 
                                stroke="#111827" 
                                strokeWidth={activeQuadrant === 'databases' ? '2.5' : '2'} 
                                fill="#ffffff" 
                                filter="url(#clean-shadow)"
                                className="transition-all duration-300"
                            />
                            {/* Soft Fading Halo (Black and White only) */}
                            <circle 
                                cx="1405" 
                                cy="536" 
                                r="54" 
                                fill="none" 
                                stroke={activeQuadrant === 'databases' ? 'rgba(17, 24, 39, 0.28)' : 'rgba(17, 24, 39, 0.12)'} 
                                strokeWidth="12" 
                                filter="url(#fading-halo)" 
                            />
                            <circle 
                                cx="1405" 
                                cy="536" 
                                r="45" 
                                fill="none" 
                                stroke={activeQuadrant === 'databases' ? 'rgba(17, 24, 39, 0.45)' : 'rgba(17, 24, 39, 0.22)'} 
                                strokeWidth="2.5" 
                            />
                            {/* Main Icon Badge Circle (Pushed to top at cy=536) */}
                            <circle cx="1405" cy="536" r="39" stroke="#111827" strokeWidth="2.5" fill="#ffffff" filter="url(#clean-shadow)" />
                            <circle cx="1405" cy="536" r="32" stroke="#111827" strokeWidth="1" fill="none" opacity="0.2" />
                        </svg>

                        {/* ======================================================== */}
                        {/* 2. THE 4 MAIN CATEGORY ICONS (Pure Black & White)        */}
                        {/* ======================================================== */}
                        <div 
                            className="absolute -translate-x-1/2 -translate-y-1/2 flex items-center justify-center cursor-pointer pointer-events-auto transition-transform duration-200 hover:scale-115"
                            style={{ left: '12.19%', top: '29.50%', width: '4.8%', height: '9.6%' }}
                            onMouseEnter={() => setActiveQuadrant('frontend')}
                            onMouseLeave={() => setActiveQuadrant(null)}
                        >
                            <Laptop size={22} className="text-[#111827]" />
                        </div>
                        <div 
                            className="absolute -translate-x-1/2 -translate-y-1/2 flex items-center justify-center cursor-pointer pointer-events-auto transition-transform duration-200 hover:scale-115"
                            style={{ left: '12.19%', top: '67.00%', width: '4.8%', height: '9.6%' }}
                            onMouseEnter={() => setActiveQuadrant('devops')}
                            onMouseLeave={() => setActiveQuadrant(null)}
                        >
                            <CloudUpload size={22} className="text-[#111827]" />
                        </div>
                        <div 
                            className="absolute -translate-x-1/2 -translate-y-1/2 flex items-center justify-center cursor-pointer pointer-events-auto transition-transform duration-200 hover:scale-115"
                            style={{ left: '87.81%', top: '29.50%', width: '4.8%', height: '9.6%' }}
                            onMouseEnter={() => setActiveQuadrant('backend')}
                            onMouseLeave={() => setActiveQuadrant(null)}
                        >
                            <Server size={22} className="text-[#111827]" />
                        </div>
                        <div 
                            className="absolute -translate-x-1/2 -translate-y-1/2 flex items-center justify-center cursor-pointer pointer-events-auto transition-transform duration-200 hover:scale-115"
                            style={{ left: '87.81%', top: '67.00%', width: '4.8%', height: '9.6%' }}
                            onMouseEnter={() => setActiveQuadrant('databases')}
                            onMouseLeave={() => setActiveQuadrant(null)}
                        >
                            <Database size={22} className="text-[#111827]" />
                        </div>

                        {/* Center Hub Interaction */}
                        <div 
                            className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full cursor-pointer pointer-events-auto flex items-center justify-center z-10"
                            style={{ left: '50%', top: '50%', width: '8%', height: '16%' }}
                            onMouseEnter={() => setHoveredTech({
                                name: '</> Full-Stack Core Engine',
                                category: 'Software Engineering Core',
                                summary: 'Architectural coordination linking reactive client interfaces, scalable server services, cloud infrastructure, and ACID data persistence.',
                                level: 'Core Engine'
                            })}
                            onMouseLeave={() => setHoveredTech(null)}
                        />

                        {/* ======================================================== */}
                        {/* 3. ALL 20 EXACT TECH ICONS (5 per pod, black SVG icons)  */}
                        {/* ======================================================== */}
                        {Object.values(quadrantsData).flatMap((quadrant) => quadrant.skills).map((skill) => {
                            const IconComponent = skill.icon;
                            const isHovered = hoveredTech?.id === skill.id;

                            return (
                                <div 
                                    key={skill.id}
                                    className="absolute -translate-x-1/2 -translate-y-1/2 flex items-center justify-center cursor-pointer pointer-events-auto z-20 group"
                                    style={{ 
                                        left: `${skill.left}%`, 
                                        top: `${skill.top}%`, 
                                        width: '4.2%', 
                                        height: '8.4%' 
                                    }}
                                    onMouseEnter={() => setHoveredTech(skill)}
                                    onMouseLeave={() => setHoveredTech(null)}
                                >
                                    <div className={`p-2 rounded-xl transition-all duration-200 ${
                                        isHovered 
                                            ? 'scale-125 bg-neutral-100 shadow-md text-[#111827]' 
                                            : 'group-hover:scale-115 text-[#111827]/90 hover:text-[#111827]'
                                    }`}>
                                        <IconComponent size={25} />
                                    </div>
                                </div>
                            );
                        })}

                        {/* ======================================================== */}
                        {/* 4. FOUR CORNER DESCRIPTIONS (Pure Black & White, No Dots)*/}
                        {/* ======================================================== */}

                        {/* TOP-LEFT CORNER: Frontend Architecture */}
                        <div 
                            onMouseEnter={() => setActiveQuadrant('frontend')}
                            onMouseLeave={() => setActiveQuadrant(null)}
                            className={`absolute top-2 left-2 xl:top-4 xl:left-4 max-w-[310px] xl:max-w-[350px] text-left transition-all duration-300 p-4 rounded-2xl pointer-events-auto ${
                                activeQuadrant === 'frontend' 
                                    ? 'bg-white border-2 border-[#111827] shadow-lg ring-2 ring-black/5' 
                                    : 'bg-white/95 border border-neutral-300 shadow-xs hover:border-[#111827]'
                            }`}
                        >
                            <div className="mb-1.5">
                                <span className="text-[11px] font-mono font-bold tracking-widest text-[#111827] uppercase block">
                                    {tl.tag}
                                </span>
                            </div>
                            <h3 className="text-sm xl:text-base font-bold text-[#111827] tracking-tight leading-snug">
                                {tl.title}
                            </h3>
                            <p className="mt-1 text-[11px] xl:text-xs text-neutral-600 leading-relaxed font-normal">
                                {tl.description}
                            </p>
                        </div>

                        {/* TOP-RIGHT CORNER: Backend & Runtimes */}
                        <div 
                            onMouseEnter={() => setActiveQuadrant('backend')}
                            onMouseLeave={() => setActiveQuadrant(null)}
                            className={`absolute top-2 right-2 xl:top-4 xl:right-4 max-w-[310px] xl:max-w-[350px] text-right flex flex-col items-end transition-all duration-300 p-4 rounded-2xl pointer-events-auto ${
                                activeQuadrant === 'backend' 
                                    ? 'bg-white border-2 border-[#111827] shadow-lg ring-2 ring-black/5' 
                                    : 'bg-white/95 border border-neutral-300 shadow-xs hover:border-[#111827]'
                            }`}
                        >
                            <div className="mb-1.5">
                                <span className="text-[11px] font-mono font-bold tracking-widest text-[#111827] uppercase block">
                                    {tr.tag}
                                </span>
                            </div>
                            <h3 className="text-sm xl:text-base font-bold text-[#111827] tracking-tight leading-snug">
                                {tr.title}
                            </h3>
                            <p className="mt-1 text-[11px] xl:text-xs text-neutral-600 leading-relaxed font-normal">
                                {tr.description}
                            </p>
                        </div>

                        {/* BOTTOM-LEFT CORNER: DevOps & Cloud Infrastructure */}
                        <div 
                            onMouseEnter={() => setActiveQuadrant('devops')}
                            onMouseLeave={() => setActiveQuadrant(null)}
                            className={`absolute bottom-2 left-2 xl:bottom-4 xl:left-4 max-w-[310px] xl:max-w-[350px] text-left transition-all duration-300 p-4 rounded-2xl pointer-events-auto ${
                                activeQuadrant === 'devops' 
                                    ? 'bg-white border-2 border-[#111827] shadow-lg ring-2 ring-black/5' 
                                    : 'bg-white/95 border border-neutral-300 shadow-xs hover:border-[#111827]'
                            }`}
                        >
                            <div className="mb-1.5">
                                <span className="text-[11px] font-mono font-bold tracking-widest text-[#111827] uppercase block">
                                    {bl.tag}
                                </span>
                            </div>
                            <h3 className="text-sm xl:text-base font-bold text-[#111827] tracking-tight leading-snug">
                                {bl.title}
                            </h3>
                            <p className="mt-1 text-[11px] xl:text-xs text-neutral-600 leading-relaxed font-normal">
                                {bl.description}
                            </p>
                        </div>

                        {/* BOTTOM-RIGHT CORNER: Database & Storage Architecture */}
                        <div 
                            onMouseEnter={() => setActiveQuadrant('databases')}
                            onMouseLeave={() => setActiveQuadrant(null)}
                            className={`absolute bottom-2 right-2 xl:bottom-4 xl:right-4 max-w-[310px] xl:max-w-[350px] text-right flex flex-col items-end transition-all duration-300 p-4 rounded-2xl pointer-events-auto ${
                                activeQuadrant === 'databases' 
                                    ? 'bg-white border-2 border-[#111827] shadow-lg ring-2 ring-black/5' 
                                    : 'bg-white/95 border border-neutral-300 shadow-xs hover:border-[#111827]'
                            }`}
                        >
                            <div className="mb-1.5">
                                <span className="text-[11px] font-mono font-bold tracking-widest text-[#111827] uppercase block">
                                    {br.tag}
                                </span>
                            </div>
                            <h3 className="text-sm xl:text-base font-bold text-[#111827] tracking-tight leading-snug">
                                {br.title}
                            </h3>
                            <p className="mt-1 text-[11px] xl:text-xs text-neutral-600 leading-relaxed font-normal">
                                {br.description}
                            </p>
                        </div>

                        {/* Floating Interactive Tooltip: Pure Black & White */}
                        <AnimatePresence>
                            {hoveredTech && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 5, scale: 0.95 }}
                                    transition={{ duration: 0.15 }}
                                    className="absolute pointer-events-none z-30 transform -translate-x-1/2"
                                    style={{
                                        left: hoveredTech.left ? `${hoveredTech.left}%` : '50%',
                                        top: hoveredTech.top ? `${hoveredTech.top > 50 ? hoveredTech.top - 12 : hoveredTech.top + 8}%` : '58%'
                                    }}
                                >
                                    <div className="px-3.5 py-2.5 rounded-xl bg-[#111827] text-white border border-neutral-700 shadow-2xl text-center min-w-[210px] max-w-[270px]">
                                        <div className="flex items-center justify-center gap-1.5 mb-1">
                                            <span className="text-xs font-bold text-white tracking-tight">
                                                {hoveredTech.name}
                                            </span>
                                            {hoveredTech.level && (
                                                <span className="px-1.5 py-0.2 rounded text-[9px] font-mono font-semibold bg-white/10 text-neutral-300 border border-white/10">
                                                    {hoveredTech.level}
                                                </span>
                                            )}
                                        </div>
                                        <p className="text-[11px] text-neutral-300 leading-tight">
                                            {hoveredTech.summary}
                                        </p>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                    </div>

                    {/* ======================================================== */}
                    {/* RESPONSIVE MOBILE & TABLET LAYOUT (< lg)                 */}
                    {/* Pure Black & White, No Dot Bullets                       */}
                    {/* ======================================================== */}
                    <div className="block lg:hidden space-y-6">
                        
                        {/* The 4 Corner Descriptions as Sleek Responsive Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            
                            {/* 01. FRONTEND & MOBILE */}
                            <div className="p-4 sm:p-5 rounded-2xl bg-white/95 border border-neutral-300 shadow-xs hover:border-[#111827] transition-all">
                                <div className="flex items-center justify-between mb-2.5">
                                    <span className="text-xs font-mono font-bold tracking-widest text-[#111827] uppercase">
                                        {tl.tag}
                                    </span>
                                    <div className="w-7 h-7 rounded-xl bg-neutral-100 text-[#111827] flex items-center justify-center">
                                        <Laptop size={14} />
                                    </div>
                                </div>
                                <h3 className="text-sm sm:text-base font-bold text-[#111827] tracking-tight mb-1.5">
                                    {tl.title}
                                </h3>
                                <p className="text-xs text-neutral-600 leading-relaxed mb-3.5">
                                    {tl.description}
                                </p>
                                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-neutral-200/70">
                                    {tl.skills.map((s) => {
                                        const IconComponent = s.icon;
                                        return (
                                            <div 
                                                key={s.id}
                                                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-neutral-100 border border-neutral-300 text-[10.5px] font-mono text-[#111827]"
                                            >
                                                <IconComponent size={12} className="text-[#111827]" />
                                                <span>{s.name}</span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* 02. BACKEND & RUNTIMES */}
                            <div className="p-4 sm:p-5 rounded-2xl bg-white/95 border border-neutral-300 shadow-xs hover:border-[#111827] transition-all">
                                <div className="flex items-center justify-between mb-2.5">
                                    <span className="text-xs font-mono font-bold tracking-widest text-[#111827] uppercase">
                                        {tr.tag}
                                    </span>
                                    <div className="w-7 h-7 rounded-xl bg-neutral-100 text-[#111827] flex items-center justify-center">
                                        <Server size={14} />
                                    </div>
                                </div>
                                <h3 className="text-sm sm:text-base font-bold text-[#111827] tracking-tight mb-1.5">
                                    {tr.title}
                                </h3>
                                <p className="text-xs text-neutral-600 leading-relaxed mb-3.5">
                                    {tr.description}
                                </p>
                                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-neutral-200/70">
                                    {tr.skills.map((s) => {
                                        const IconComponent = s.icon;
                                        return (
                                            <div 
                                                key={s.id}
                                                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-neutral-100 border border-neutral-300 text-[10.5px] font-mono text-[#111827]"
                                            >
                                                <IconComponent size={12} className="text-[#111827]" />
                                                <span>{s.name}</span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* 03. CLOUD & DEVOPS */}
                            <div className="p-4 sm:p-5 rounded-2xl bg-white/95 border border-neutral-300 shadow-xs hover:border-[#111827] transition-all">
                                <div className="flex items-center justify-between mb-2.5">
                                    <span className="text-xs font-mono font-bold tracking-widest text-[#111827] uppercase">
                                        {bl.tag}
                                    </span>
                                    <div className="w-7 h-7 rounded-xl bg-neutral-100 text-[#111827] flex items-center justify-center">
                                        <CloudUpload size={14} />
                                    </div>
                                </div>
                                <h3 className="text-sm sm:text-base font-bold text-[#111827] tracking-tight mb-1.5">
                                    {bl.title}
                                </h3>
                                <p className="text-xs text-neutral-600 leading-relaxed mb-3.5">
                                    {bl.description}
                                </p>
                                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-neutral-200/70">
                                    {bl.skills.map((s) => {
                                        const IconComponent = s.icon;
                                        return (
                                            <div 
                                                key={s.id}
                                                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-neutral-100 border border-neutral-300 text-[10.5px] font-mono text-[#111827]"
                                            >
                                                <IconComponent size={12} className="text-[#111827]" />
                                                <span>{s.name}</span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* 04. DATA ARCHITECTURE */}
                            <div className="p-4 sm:p-5 rounded-2xl bg-white/95 border border-neutral-300 shadow-xs hover:border-[#111827] transition-all">
                                <div className="flex items-center justify-between mb-2.5">
                                    <span className="text-xs font-mono font-bold tracking-widest text-[#111827] uppercase">
                                        {br.tag}
                                    </span>
                                    <div className="w-7 h-7 rounded-xl bg-neutral-100 text-[#111827] flex items-center justify-center">
                                        <Database size={14} />
                                    </div>
                                </div>
                                <h3 className="text-sm sm:text-base font-bold text-[#111827] tracking-tight mb-1.5">
                                    {br.title}
                                </h3>
                                <p className="text-xs text-neutral-600 leading-relaxed mb-3.5">
                                    {br.description}
                                </p>
                                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-neutral-200/70">
                                    {br.skills.map((s) => {
                                        const IconComponent = s.icon;
                                        return (
                                            <div 
                                                key={s.id}
                                                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-neutral-100 border border-neutral-300 text-[10.5px] font-mono text-[#111827]"
                                            >
                                                <IconComponent size={12} className="text-[#111827]" />
                                                <span>{s.name}</span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default SkillsArchitecture;
