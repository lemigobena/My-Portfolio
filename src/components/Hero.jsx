import React from 'react';
import { Download, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import {
    SiTypescript,
    SiReact,
    SiNextdotjs,
    SiNodedotjs,
    SiTailwindcss,
    SiPython,
    SiPostgresql,
    SiDocker,
    SiGithub,
    SiLinux,
} from 'react-icons/si';

const topTechStacks = [
    {
        name: 'TypeScript',
        category: 'Programming language',
        icon: SiTypescript,
        dark: true,
    },
    {
        name: 'React.js',
        category: 'Frontend development',
        icon: SiReact,
        dark: false,
    },
    {
        name: 'Next.js',
        category: 'Full-stack framework',
        icon: SiNextdotjs,
        dark: true,
    },
    {
        name: 'Node.js',
        category: 'Backend development',
        icon: SiNodedotjs,
        dark: false,
    },
    {
        name: 'Tailwind CSS',
        category: 'UI styling',
        icon: SiTailwindcss,
        dark: true,
    },
    {
        name: 'Python',
        category: 'Programming & automation',
        icon: SiPython,
        dark: false,
    },
    {
        name: 'PostgreSQL',
        category: 'Database management',
        icon: SiPostgresql,
        dark: true,
    },
    {
        name: 'Docker',
        category: 'Containerization',
        icon: SiDocker,
        dark: false,
    },
    {
        name: 'Git & GitHub',
        category: 'Version control',
        icon: SiGithub,
        dark: true,
    },
    {
        name: 'Linux & Ubuntu',
        category: 'Dev environment & servers',
        icon: SiLinux,
        dark: false,
    },
];

const Hero = () => {
    const [hoveredTech, setHoveredTech] = React.useState(null);
    return (
        <section
            id="hero"
            className="w-full min-h-screen lg:h-screen text-[#111827] overflow-hidden flex flex-col justify-center py-12 sm:py-16 lg:py-8 bg-[#F1F1F1] relative"
            aria-label="Hero Section"
        >
            {/* FULL-VIEWPORT SKETCHPAD ARTWORK BACKDROP (Clean charcoal sketch of Lemi at desk with laptop, books, mug, plants - NO baked-in cards) */}
            <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
                <img
                    src={`${import.meta.env.BASE_URL}Images/hero_sketch_canvas_2x.png`}
                    alt="Lemi Gobena Sketch Artwork"
                    className="w-full h-full object-cover object-[75%_center] sm:object-right pointer-events-none select-none transition-transform duration-700"
                    loading="eager"
                />

                {/* Left Side Ambient Wash for 100% Vector Text Sharpness & Natural Paper Contrast */}
                <div className="absolute inset-y-0 left-0 w-full sm:w-[65%] lg:w-[50%] xl:w-[44%] bg-gradient-to-r from-[#F1F1F1] via-[#F1F1F1]/95 sm:via-[#F1F1F1]/85 to-transparent pointer-events-none" />

                {/* Subtle Edge Blends */}
                <div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-[#F1F1F1]/60 to-transparent pointer-events-none" />
                <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#F1F1F1]/40 to-transparent pointer-events-none" />
            </div>

            {/* REAL INTERACTIVE FLOATING UI COMPONENTS OVER THE SKETCH SCENE */}
            <div className="absolute inset-0 max-w-[1536px] mx-auto pointer-events-none z-10">

                {/* 1. REAL FLOATING CODE SNIPPET HOLDER - Safely displayed on 2xl screens where clearance is guaranteed so it NEVER touches the face */}
                <motion.div
                    initial={{ opacity: 1, y: 0 }}
                    animate={{ opacity: 1, y: 0 }}
                    whileHover={{ y: -4, scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                    className="pointer-events-auto absolute top-[16%] left-[44%] z-10 bg-[#141518]/95 backdrop-blur-md border border-white/10 rounded-2xl p-5 shadow-2xl shadow-black/50 text-left w-[260px] hidden 2xl:block select-text"
                >
                    {/* Monochrome Window Controls */}
                    <div className="flex items-center gap-1.5 mb-3 select-none">
                        <span className="w-2.5 h-2.5 rounded-full bg-neutral-600" />
                        <span className="w-2.5 h-2.5 rounded-full bg-neutral-500" />
                        <span className="w-2.5 h-2.5 rounded-full bg-neutral-400" />
                    </div>

                    {/* Black & White Real Text Code Snippet with Fixed Line Number Gutter */}
                    <div className="font-mono text-[11px] sm:text-[11.5px] leading-relaxed text-neutral-300">
                        <div className="flex items-center">
                            <span className="text-neutral-500 w-4 select-none text-[9.5px] text-left shrink-0">1</span>
                            <span className="text-neutral-200">
                                <span className="text-white font-semibold">const</span> dev = &#123;
                            </span>
                        </div>
                        <div className="flex items-center">
                            <span className="text-neutral-500 w-4 select-none text-[9.5px] text-left shrink-0">2</span>
                            <span className="pl-3.5 text-neutral-200">
                                name: <span className="text-white">"Lemi"</span>,
                            </span>
                        </div>
                        <div className="flex items-center">
                            <span className="text-neutral-500 w-4 select-none text-[9.5px] text-left shrink-0">3</span>
                            <span className="pl-3.5 text-neutral-200">
                                role: <span className="text-white">"Developer"</span>,
                            </span>
                        </div>
                        <div className="flex items-center">
                            <span className="text-neutral-500 w-4 select-none text-[9.5px] text-left shrink-0">4</span>
                            <span className="pl-3.5 text-neutral-200">
                                focus: [<span className="text-white">"Clean"</span>, <span className="text-white">"Scalable"</span>,
                            </span>
                        </div>
                        <div className="flex items-center">
                            <span className="text-neutral-500 w-4 select-none text-[9.5px] text-left shrink-0">5</span>
                            <span className="pl-[58px] text-neutral-200">
                                <span className="text-white">"Simple"</span>]
                            </span>
                        </div>
                        <div className="flex items-center">
                            <span className="text-neutral-500 w-4 select-none text-[9.5px] text-left shrink-0">6</span>
                            <span className="text-neutral-200">&#125;;</span>
                        </div>
                    </div>
                </motion.div>

                {/* 2. REAL FLOATING TECH STACKS COMPONENT (Transparent Holder & Endless Orbit Rotation) */}
                <div
                    className="pointer-events-auto absolute top-[4%] lg:top-[5%] right-[2%] lg:right-[4%] xl:right-[5%] z-20 w-[220px] h-[220px] hidden md:flex items-center justify-center select-none group-orbit"
                >
                    {/* Subtle SVG Circular Orbital Track */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 220 220">
                        <circle
                            cx="110"
                            cy="110"
                            r="82"
                            fill="none"
                            stroke="#9CA3AF"
                            strokeWidth="1"
                            strokeDasharray="3 4"
                            className="opacity-45"
                        />
                    </svg>

                    {/* Center Hub (Frosted Core Coin for Perfect Contrast over Foliage) */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                        <div className="w-[58px] h-[58px] rounded-full bg-white/90 backdrop-blur-sm border border-neutral-200/90 shadow-xs flex flex-col items-center justify-center text-center p-1 transition-all duration-200">
                            {hoveredTech ? (
                                <div className="flex flex-col items-center justify-center">
                                    <hoveredTech.icon className="w-4 h-4 mb-0.5 text-[#111827]" />
                                    <span className="text-[8px] font-bold text-[#111827] leading-tight max-w-[50px] truncate">
                                        {hoveredTech.name}
                                    </span>
                                </div>
                            ) : (
                                <div className="flex flex-col items-center justify-center">
                                    <span className="text-[7px] font-mono font-bold tracking-widest text-neutral-400 uppercase">
                                        TOP 10
                                    </span>
                                    <span className="text-[9px] font-mono font-black text-[#111827] tracking-wider uppercase">
                                        STACKS
                                    </span>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Endless Rotating Orbital Ring */}
                    <div className="absolute inset-0 w-full h-full animate-orbit">
                        {topTechStacks.map((tech, index) => {
                            const Icon = tech.icon;
                            const angle = (index * 36 - 90) * (Math.PI / 180);
                            const radius = 82; // px
                            const center = 110; // px
                            const badgeSize = 32; // px
                            const x = center + radius * Math.cos(angle) - badgeSize / 2;
                            const y = center + radius * Math.sin(angle) - badgeSize / 2;

                            const isHovered = hoveredTech?.name === tech.name;

                            return (
                                <div
                                    key={tech.name}
                                    style={{ left: `${x}px`, top: `${y}px` }}
                                    className="absolute z-20 group"
                                    onMouseEnter={() => setHoveredTech(tech)}
                                    onMouseLeave={() => setHoveredTech(null)}
                                >
                                    {/* Counter-rotation to keep logo upright as orbit spins */}
                                    <div className="animate-counter-orbit">
                                        <div
                                            className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 shadow-sm cursor-pointer ${
                                                isHovered
                                                    ? 'scale-125 z-30 shadow-md shadow-black/25 ' +
                                                      (tech.dark
                                                          ? 'bg-black text-white border border-black ring-2 ring-black/20'
                                                          : 'bg-[#111827] text-white border border-[#111827] ring-2 ring-black/20')
                                                    : tech.dark
                                                    ? 'bg-[#111827] text-white border border-[#111827] hover:scale-110'
                                                    : 'bg-white/95 border border-neutral-300 text-neutral-900 hover:bg-[#111827] hover:text-white hover:scale-110'
                                            }`}
                                            title={`${tech.name} — ${tech.category}`}
                                        >
                                            <Icon className="w-4 h-4" />
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* MAIN CONTENT AREA: Left Narrative Layer (100% Selectable Normal Text) */}
            <div className="w-full max-w-[1536px] mx-auto px-6 sm:px-12 lg:px-16 xl:px-20 relative z-30 flex-1 flex flex-col justify-center my-auto pointer-events-auto select-text">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center py-2 select-text">

                    {/* Left Column Narrative (Uncluttered, Breathable, Pure Typography) */}
                    <div className="lg:col-span-5 xl:col-span-5 max-w-[440px] xl:max-w-[480px] flex flex-col items-start select-text">

                        {/* Minimalist Eyebrow Tag */}
                        <div className="flex items-center gap-2.5 mb-5 select-text">
                            <span className="w-2 h-2 rounded-full bg-[#111827]" />
                            <span className="text-[11px] sm:text-xs font-mono font-bold tracking-[0.2em] text-[#4B5563] uppercase select-text cursor-text">
                                FULL-STACK DEVELOPER
                            </span>
                        </div>

                        {/* Monumental Headline in Plus Jakarta Sans */}
                        <h1 className="font-display text-4xl sm:text-5xl lg:text-[54px] xl:text-[62px] font-black text-[#111827] tracking-[-0.035em] leading-[1.06] mb-5 select-text cursor-text">
                            Hi, I'm <br />
                            <span className="text-[#111827]">Lemi Gobena.</span>
                        </h1>

                        {/* Description Paragraph */}
                        <p className="text-base sm:text-lg text-[#4B5563] leading-relaxed mb-8 font-normal select-text cursor-text">
                            I bridge the gap between design and development, building scalable digital solutions with modern architecture and robust backends.
                        </p>

                        {/* Clean Action Buttons */}
                        <div className="flex flex-wrap items-center gap-5 sm:gap-6 w-full select-text">
                            <a
                                href={`${import.meta.env.BASE_URL}Documents/Lemi_Gobena_CV.pdf`}
                                target="_blank"
                                rel="noopener noreferrer"
                                download="Lemi_Gobena_CV.pdf"
                                className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#111827] hover:bg-black text-white rounded-full font-semibold text-xs sm:text-sm transition-all hover:scale-105 active:scale-95 shadow-md shadow-black/15 group cursor-pointer"
                            >
                                <Download size={16} />
                                <span>Download Resume</span>
                                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                            </a>

                            {/* <a
                                href="#portfolio"
                                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#111827] hover:text-[#4B5563] transition-colors group cursor-pointer"
                            >
                                <span className="border-b border-[#111827] pb-0.5">View My Work</span>
                                <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                            </a> */}
                        </div>
                    </div>

                    {/* Right spacer for desktop artwork positioning */}
                    <div className="hidden lg:block lg:col-span-7 xl:col-span-7 lg:h-[500px] pointer-events-none" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
