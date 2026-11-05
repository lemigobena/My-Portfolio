import React, { useState, useMemo, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/projects';
import {
    ArrowRight,
    ArrowUpRight,
    X,
    ChevronLeft,
    ChevronRight,
    Search,
    Lock,
    Code2
} from 'lucide-react';
import {
    FaReact,
    FaNodeJs,
    FaPython,
    FaDocker,
    FaJava
} from 'react-icons/fa';
import {
    SiNextdotjs,
    SiTypescript,
    SiPostgresql,
    SiTailwindcss,
    SiPrisma,
    SiExpress,
    SiSupabase,
    SiFirebase,
    SiCplusplus,
    SiSolidity,
    SiVite,
    SiExpo,
    SiGithub
} from 'react-icons/si';


// Helper to render authentic tech badges with brand icons
const renderTechBadge = (tag) => {
    let icon = <Code2 size={13} className="text-neutral-500 shrink-0" />;

    switch (tag) {
        case 'React':
        case 'React Native':
            icon = <FaReact className="text-[#0284C7] text-sm shrink-0" />;
            break;
        case 'Node.js':
        case 'Node':
            icon = <FaNodeJs className="text-[#16A34A] text-sm shrink-0" />;
            break;
        case 'TypeScript':
            icon = <SiTypescript className="text-[#2563EB] text-sm shrink-0" />;
            break;
        case 'PostgreSQL':
        case 'PostgresSQL':
            icon = <SiPostgresql className="text-[#1D4ED8] text-sm shrink-0" />;
            break;
        case 'Next.js':
            icon = <SiNextdotjs className="text-black text-sm shrink-0" />;
            break;
        case 'Prisma':
            icon = <SiPrisma className="text-black text-sm shrink-0" />;
            break;
        case 'Tailwind CSS':
        case 'Tailwind':
        case 'TailwindCSS':
            icon = <SiTailwindcss className="text-[#0EA5E9] text-sm shrink-0" />;
            break;
        case 'Python':
            icon = <FaPython className="text-[#CA8A04] text-sm shrink-0" />;
            break;
        case 'Docker':
            icon = <FaDocker className="text-[#0284C7] text-sm shrink-0" />;
            break;
        case 'Supabase':
            icon = <SiSupabase className="text-[#059669] text-sm shrink-0" />;
            break;
        case 'Firebase':
            icon = <SiFirebase className="text-[#D97706] text-sm shrink-0" />;
            break;
        case 'Expo':
            icon = <SiExpo className="text-black text-sm shrink-0" />;
            break;
        case 'Solidity':
        case 'Blockchain':
            icon = <SiSolidity className="text-neutral-700 text-sm shrink-0" />;
            break;
        case 'C++':
            icon = <SiCplusplus className="text-[#0369A1] text-sm shrink-0" />;
            break;
        case 'ExpressJS':
        case 'Express.js':
        case 'Express':
            icon = <SiExpress className="text-neutral-700 text-sm shrink-0" />;
            break;
        case 'Vite':
            icon = <SiVite className="text-[#7C3AED] text-sm shrink-0" />;
            break;
        default:
            icon = <Code2 size={13} className="text-neutral-500 shrink-0" />;
    }

    return (
        <span
            key={tag}
            className="px-2.5 py-1 rounded-lg bg-neutral-100 border border-neutral-300 text-neutral-800 font-mono text-xs flex items-center gap-1.5 hover:border-black transition-all shadow-2xs"
        >
            {icon}
            <span>{tag}</span>
        </span>
    );
};

const Portfolio = ({ featuredOnly = false }) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [currentIndex, setCurrentIndex] = useState(() => {
        if (typeof window !== 'undefined') {
            const params = new URLSearchParams(window.location.search);
            const slug = params.get('project');
            if (slug) {
                const idx = projects.findIndex(p => p.id === slug);
                if (idx !== -1) return idx;
            }
        }
        return 0;
    });
    const [platformIndex, setPlatformIndex] = useState(0);
    const [activeCaseStudyModal, setActiveCaseStudyModal] = useState(null);
    const [isGridModalOpen, setIsGridModalOpen] = useState(false);
    const [gridSearchQuery, setGridSearchQuery] = useState('');
    const [mobileProjectIndex, setMobileProjectIndex] = useState(0);
    const listRef = useRef(null);
    const mobileScrollRef = useRef(null);

    const handleMobileProjectScroll = (e) => {
        const el = e.currentTarget;
        const cardWidth = el.firstElementChild ? el.firstElementChild.getBoundingClientRect().width : 0;
        const gap = 16;
        if (cardWidth > 0) {
            const index = Math.round(el.scrollLeft / (cardWidth + gap));
            setMobileProjectIndex(Math.min(Math.max(0, index), displayProjects.length - 1));
        }
    };

    const scrollToMobileProject = (idx) => {
        if (mobileScrollRef.current && mobileScrollRef.current.children[idx]) {
            mobileScrollRef.current.children[idx].scrollIntoView({
                behavior: 'smooth',
                inline: 'center',
                block: 'nearest'
            });
            setMobileProjectIndex(idx);
        }
    };

    // Curated projects list (reordered by technical capacity and project idea)
    const displayProjects = useMemo(() => {
        return featuredOnly ? projects.filter(p => p.featured) : projects;
    }, [featuredOnly]);

    // Sync with URL query parameter ?project=...
    useEffect(() => {
        const projectSlug = searchParams.get('project');
        if (projectSlug) {
            const foundIdx = displayProjects.findIndex(p => p.id === projectSlug);
            if (foundIdx !== -1 && foundIdx !== currentIndex) {
                setCurrentIndex(foundIdx);
            }
        }
    }, [searchParams, displayProjects]);

    const selectProject = (idx) => {
        setCurrentIndex(idx);
        if (displayProjects[idx]) {
            setSearchParams({ project: displayProjects[idx].id }, { replace: true });
        }
    };

    // Active project safety guard
    const activeProject = displayProjects[currentIndex] || displayProjects[0] || projects[0];

    // Reset platform index when current project changes
    useEffect(() => {
        setPlatformIndex(0);
    }, [currentIndex]);

    const currentPlatform = activeProject.hasDualPlatforms && activeProject.platforms
        ? activeProject.platforms[platformIndex] || activeProject.platforms[0]
        : null;

    const handlePrev = () => {
        if (displayProjects.length === 0) return;
        const newIdx = currentIndex === 0 ? displayProjects.length - 1 : currentIndex - 1;
        selectProject(newIdx);
    };

    const handleNext = () => {
        if (displayProjects.length === 0) return;
        const newIdx = currentIndex === displayProjects.length - 1 ? 0 : currentIndex + 1;
        selectProject(newIdx);
    };

    // Auto-scroll project list item into view when selected
    useEffect(() => {
        if (listRef.current && listRef.current.children[currentIndex]) {
            listRef.current.children[currentIndex].scrollIntoView({
                behavior: 'smooth',
                block: 'nearest'
            });
        }
    }, [currentIndex]);

    // Keyboard navigation (Arrow keys + Escape)
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (activeCaseStudyModal || isGridModalOpen) {
                if (e.key === 'Escape') {
                    setActiveCaseStudyModal(null);
                    setIsGridModalOpen(false);
                }
                return;
            }

            if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
                e.preventDefault();
                handlePrev();
            } else if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
                e.preventDefault();
                handleNext();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [activeCaseStudyModal, isGridModalOpen, displayProjects.length]);

    // Format clean domain for browser address bar
    const displayUrl = useMemo(() => {
        if (currentPlatform?.urlText) return currentPlatform.urlText;
        if (!activeProject) return 'health-net-ethiopia.vercel.app';
        if (activeProject.link) {
            try {
                const u = new URL(activeProject.link);
                return u.hostname + (u.pathname !== '/' ? u.pathname : '');
            } catch {
                return activeProject.link.replace(/^https?:\/\//, '');
            }
        }
        if (activeProject.github) {
            return activeProject.github.replace('https://github.com/', 'github.com/');
        }
        return `systems.lemi.dev/${activeProject.id}`;
    }, [activeProject, currentPlatform]);

    // Search filter for full archive modal
    const searchedGridProjects = useMemo(() => {
        if (!gridSearchQuery.trim()) return displayProjects;
        const q = gridSearchQuery.toLowerCase();
        return displayProjects.filter(p =>
            p.title.toLowerCase().includes(q) ||
            p.category.toLowerCase().includes(q) ||
            (p.tags && p.tags.some(t => t.toLowerCase().includes(q))) ||
            (p.problem && p.problem.toLowerCase().includes(q)) ||
            (p.solution && p.solution.toLowerCase().includes(q))
        );
    }, [displayProjects, gridSearchQuery]);

    return (
        <section
            id="portfolio"
            className="w-full min-h-screen text-black py-8 sm:py-12 lg:py-16 bg-[#F1F1F1] relative select-text scroll-mt-16 lg:scroll-mt-0"
            aria-label="Selected Projects Showcase"
        >
            <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 flex flex-col justify-between h-full pointer-events-auto">



                {/* SECTION HEADER */}
                <div className="mb-6 sm:mb-8">
                    <span className="text-xs font-mono font-bold tracking-[0.25em] text-neutral-500 uppercase block mb-2">
                        Selected Work
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black tracking-tight leading-tight">
                        My Projects
                    </h2>
                </div>

                {/* DESKTOP SHOWCASE (LG+): TABS + 3D WORKSTATION VIEW */}
                <div className="hidden lg:block">
                    {/* 2. ARCHITECTURAL PROJECT SELECTION BAR (6 CURATED SYSTEMS) */}
                    <div className="my-5 sm:my-6 select-none">
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-2.5">
                        {displayProjects.map((p, idx) => {
                            const isSelected = idx === currentIndex;
                            return (
                                <button
                                    key={p.id}
                                    onClick={() => selectProject(idx)}
                                    className={`group relative text-left p-3 sm:p-3.5 rounded-2xl transition-all duration-200 cursor-pointer border flex flex-col justify-between ${
                                        isSelected
                                            ? 'bg-black text-white border-black shadow-md ring-1 ring-black scale-[1.01]'
                                            : 'bg-white hover:bg-neutral-50/90 text-neutral-800 border-neutral-300 hover:border-black/60 shadow-2xs'
                                    }`}
                                >
                                    <div className="flex items-center justify-between gap-1 mb-1.5">
                                        <span className={`text-[11px] font-mono font-bold tracking-wider ${
                                            isSelected ? 'text-white/70' : 'text-neutral-500'
                                        }`}>
                                            {String(idx + 1).padStart(2, '0')}
                                        </span>
                                        {isSelected ? (
                                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                        ) : p.hasDualPlatforms ? (
                                            <span className="text-[9.5px] font-mono font-bold px-1.5 py-0.2 rounded bg-neutral-100 text-neutral-600">
                                                DUAL
                                            </span>
                                        ) : null}
                                    </div>

                                    <div className="min-w-0">
                                        <h4 className={`text-xs sm:text-sm font-bold truncate leading-tight ${
                                            isSelected ? 'text-white font-extrabold' : 'text-neutral-900 group-hover:text-black'
                                        }`}>
                                            {p.shortTitle || p.title}
                                        </h4>
                                        <span className={`text-[10px] sm:text-[10.5px] font-mono truncate block mt-0.5 ${
                                            isSelected ? 'text-neutral-400' : 'text-neutral-500'
                                        }`}>
                                            {p.selectorLabel || (p.hasDualPlatforms ? 'Web & Mobile' : (p.tags?.[0] || p.category))}
                                        </span>
                                    </div>
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>

                {/* MOBILE & TABLET: HORIZONTALLY SCROLLABLE PROJECTS CAROUSEL (<LG) */}
                <div className="block lg:hidden my-6 select-text">
                    <div className="flex items-center justify-between gap-3 text-xs font-mono text-neutral-500 mb-4 px-1">
                        {/* Disconnected rods indicator */}
                        <div className="flex items-center gap-1.5" role="tablist" aria-label="Project slides">
                            {displayProjects.map((_, i) => (
                                <button
                                    key={i}
                                    type="button"
                                    onClick={() => scrollToMobileProject(i)}
                                    className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                                        i === mobileProjectIndex
                                            ? 'w-7 bg-[#111827]'
                                            : 'w-2.5 bg-neutral-300 hover:bg-neutral-400'
                                    }`}
                                    aria-label={`Go to system ${i + 1}`}
                                />
                            ))}
                        </div>

                        {/* Dynamic Counter */}
                        <div className="flex items-center gap-1 text-neutral-600 font-mono text-xs">
                            <span className="font-bold text-[#111827]">{mobileProjectIndex + 1}</span>
                            <span className="text-neutral-400">/</span>
                            <span>{displayProjects.length}</span>
                        </div>
                    </div>

                    <div 
                        ref={mobileScrollRef}
                        onScroll={handleMobileProjectScroll}
                        className="flex overflow-x-auto snap-x snap-mandatory gap-4 sm:gap-5 pb-5 no-scrollbar -mx-4 px-4 sm:-mx-8 sm:px-8"
                    >
                        {displayProjects.map((project, idx) => (
                            <div 
                                key={project.id}
                                className="snap-center shrink-0 w-[86vw] sm:w-[480px] rounded-3xl bg-white border border-neutral-200/90 shadow-sm p-5 sm:p-6 flex flex-col justify-between"
                            >
                                <div>
                                    {/* Header: Number & Category */}
                                    <div className="flex items-center justify-between gap-2 mb-3">
                                        <span className="text-xs font-mono font-bold text-neutral-400">
                                            PROJECT {String(idx + 1).padStart(2, '0')}
                                        </span>
                                        <span className="text-[10px] font-mono font-semibold px-2.5 py-1 rounded-full bg-neutral-100 text-neutral-700 border border-neutral-200">
                                            {project.hasDualPlatforms ? 'Web & Mobile' : project.category}
                                        </span>
                                    </div>

                                    {/* Preview Image */}
                                    <div className="aspect-video w-full rounded-2xl overflow-hidden bg-neutral-100 border border-neutral-200/80 mb-4 relative">
                                        {project.image ? (
                                            <img 
                                                src={project.image} 
                                                alt={project.title} 
                                                className="w-full h-full object-cover"
                                                loading="lazy"
                                            />
                                        ) : (
                                            <div className="w-full h-full flex flex-col items-center justify-center bg-neutral-900 text-white p-4 text-center">
                                                <Code2 size={28} className="text-white/40 mb-1.5" />
                                                <span className="font-mono text-xs font-bold">{project.title}</span>
                                            </div>
                                        )}
                                    </div>

                                    {/* Title & Architecture Subtitle */}
                                    <h3 className="text-xl sm:text-2xl font-black text-[#111827] tracking-tight leading-tight mb-1.5 font-display">
                                        {project.shortTitle || project.title}
                                    </h3>
                                    <p className="text-xs sm:text-sm font-semibold text-neutral-600 mb-3">
                                        {project.subtitle || project.architecture}
                                    </p>

                                    {/* Challenge & Solution */}
                                    <div className="space-y-2 mb-4 text-xs">
                                        {project.problem && (
                                            <div className="p-3 rounded-xl bg-neutral-50 border border-neutral-200/70">
                                                <span className="text-[9.5px] font-mono font-bold uppercase tracking-wider text-neutral-500 block mb-0.5">
                                                    The Challenge
                                                </span>
                                                <p className="text-neutral-700 leading-relaxed line-clamp-2">
                                                    {project.problem}
                                                </p>
                                            </div>
                                        )}
                                        {project.solution && (
                                            <div className="p-3 rounded-xl bg-neutral-50 border border-neutral-200/70">
                                                <span className="text-[9.5px] font-mono font-bold uppercase tracking-wider text-neutral-500 block mb-0.5">
                                                    My Solution
                                                </span>
                                                <p className="text-neutral-700 leading-relaxed line-clamp-2">
                                                    {project.solution}
                                                </p>
                                            </div>
                                        )}
                                    </div>

                                    {/* Tech Badges */}
                                    {project.tags && (
                                        <div className="flex flex-wrap items-center gap-1.5 mb-5">
                                            {project.tags.slice(0, 4).map(renderTechBadge)}
                                            {project.tags.length > 4 && (
                                                <span className="text-[10px] font-mono text-neutral-500 font-semibold px-1.5 py-0.5">
                                                    +{project.tags.length - 4}
                                                </span>
                                            )}
                                        </div>
                                    )}
                                </div>

                                {/* Bottom Actions */}
                                <div className="flex items-center gap-2 pt-3 border-t border-neutral-200/80">
                                    {project.link ? (
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 py-2.5 px-4 rounded-xl bg-[#111827] hover:bg-black text-white text-xs font-bold font-mono flex items-center justify-center gap-1.5 transition-all shadow-2xs"
                                        >
                                            <span>{project.link.includes('play.google.com') ? 'Play Store' : project.link.endsWith('.apk') ? 'Download' : 'Launch'}</span>
                                            <ArrowUpRight size={14} />
                                        </a>
                                    ) : null}

                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="py-2.5 px-3.5 rounded-xl border border-neutral-300 text-[#111827] hover:bg-neutral-100 text-xs font-mono font-semibold flex items-center gap-1.5 transition-all"
                                            title="View Code on GitHub"
                                        >
                                            <SiGithub size={14} />
                                            <span>Code</span>
                                        </a>
                                    )}

                                    <button
                                        type="button"
                                        onClick={() => setActiveCaseStudyModal(project)}
                                        className="py-2.5 px-3 rounded-xl border border-neutral-300 text-neutral-700 hover:text-black hover:border-black text-xs font-mono font-semibold transition-all cursor-pointer"
                                    >
                                        Specs
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 3. WIDESCREEN EDITORIAL SHOWCASE (TEXT LEFT + 3D BROWSER RIGHT) - DESKTOP ONLY */}
                <div className="hidden lg:block my-4 sm:my-6 lg:my-8 pb-4">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeProject.id}
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -16 }}
                            transition={{ duration: 0.25 }}
                            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 items-center"
                        >
                            {/* LEFT COLUMN: EDITORIAL SPECIFICATIONS & ACTIONS (6 COLS) */}
                            <div className="lg:col-span-6 xl:col-span-6 space-y-5 select-text">
                                <div>


                                    <h3 className="text-4xl sm:text-5xl lg:text-6xl font-black text-black font-sans tracking-tight leading-[1.05]">
                                        {activeProject.shortTitle || activeProject.title}
                                    </h3>

                                    <p className="text-lg sm:text-xl font-medium text-neutral-700 mt-2.5 leading-snug">
                                        {activeProject.subtitle || activeProject.architecture}
                                    </p>

                                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mt-3.5 max-w-xl">
                                        {activeProject.description}
                                    </p>
                                </div>

                                {/* Side-by-side Challenge vs Solution Callouts */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-5 border-t border-neutral-300 text-xs sm:text-sm">
                                    {activeProject.problem && (
                                        <div className="p-4 rounded-2xl bg-white border border-neutral-200/80 shadow-2xs space-y-1">
                                            <span className="text-[10.5px] font-mono uppercase tracking-[0.2em] text-neutral-500 font-bold block">
                                                THE CHALLENGE
                                            </span>
                                            <p className="text-neutral-800 leading-relaxed text-xs sm:text-sm">
                                                {activeProject.problem}
                                            </p>
                                        </div>
                                    )}

                                    {activeProject.solution && (
                                        <div className="p-4 rounded-2xl bg-white border border-neutral-200/80 shadow-2xs space-y-1">
                                            <span className="text-[10.5px] font-mono uppercase tracking-[0.2em] text-neutral-500 font-bold block">
                                                MY SOLUTION
                                            </span>
                                            <p className="text-neutral-800 leading-relaxed font-normal text-xs sm:text-sm">
                                                {activeProject.solution}
                                            </p>
                                        </div>
                                    )}
                                </div>

                                {/* Tech Stack Badges */}
                                {activeProject.tags && activeProject.tags.length > 0 && (
                                    <div className="flex flex-wrap items-center gap-2 pt-1">
                                        {activeProject.tags.slice(0, 7).map(renderTechBadge)}
                                        {activeProject.tags.length > 7 && (
                                            <span className="text-[11px] font-mono text-neutral-500 font-semibold px-2 py-1">
                                                +{activeProject.tags.length - 7} more
                                            </span>
                                        )}
                                    </div>
                                )}

                                {/* Action Buttons Row */}
                                <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-3">

                                    {/* Dual-platform: both platform CTAs with smart labels */}
                                    {activeProject.hasDualPlatforms && activeProject.platforms && activeProject.platforms.map((plat, pIdx) => {
                                        if (!plat.link) return null;
                                        const isApk = plat.link.includes('releases/download') || plat.link.endsWith('.apk');
                                        const isPlay = plat.link.includes('play.google.com');
                                        const btnLabel = isApk
                                            ? `Download ${plat.label}`
                                            : isPlay
                                                ? 'View on Play Store'
                                                : `Launch ${plat.label}`;
                                        return (
                                            <a
                                                key={plat.id}
                                                href={plat.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={pIdx === 0
                                                    ? "px-6 py-3 rounded-full bg-black text-white font-semibold text-xs sm:text-sm hover:bg-neutral-800 transition-all flex items-center gap-2 shadow-sm font-sans"
                                                    : "px-5 py-3 rounded-full border border-neutral-300 hover:border-black bg-white text-neutral-800 font-semibold text-xs sm:text-sm transition-all shadow-2xs flex items-center gap-1.5"
                                                }
                                            >
                                                <span>{btnLabel}</span>
                                                {pIdx === 0
                                                    ? <ArrowRight size={15} className="stroke-[2.5]" />
                                                    : <ArrowUpRight size={14} />
                                                }
                                            </a>
                                        );
                                    })}

                                    {/* Single-platform with a link: smart label based on URL type */}
                                    {!activeProject.hasDualPlatforms && activeProject.link && (
                                        <a
                                            href={activeProject.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-6 py-3 rounded-full bg-black text-white font-semibold text-xs sm:text-sm hover:bg-neutral-800 transition-all flex items-center gap-2 shadow-sm font-sans"
                                        >
                                            <span>
                                                {activeProject.link.includes('play.google.com')
                                                    ? 'View on Play Store'
                                                    : activeProject.link.includes('releases/download') || activeProject.link.endsWith('.apk')
                                                        ? 'Download APK'
                                                        : 'Launch Web App'
                                                }
                                            </span>
                                            <ArrowRight size={15} className="stroke-[2.5]" />
                                        </a>
                                    )}

                                    {/* GitHub-only projects (no web/app link) */}
                                    {!activeProject.hasDualPlatforms && !activeProject.link && activeProject.github && (
                                        <a
                                            href={activeProject.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-6 py-3 rounded-full bg-black text-white font-semibold text-xs sm:text-sm hover:bg-neutral-800 transition-all flex items-center gap-2 shadow-sm font-sans"
                                        >
                                            <SiGithub className="text-base shrink-0" />
                                            <span>View on GitHub</span>
                                        </a>
                                    )}

                                </div>
                            </div>

                            {/* RIGHT COLUMN: 3D FLOATING PERSPECTIVE BROWSER & PLATFORM SWITCHER (6 COLS) */}
                            <div className="lg:col-span-6 xl:col-span-6 flex flex-col items-center justify-center relative select-none">

                                {/* Ethereal Orbital Geometric SVG Wireframe in Background */}
                                <div className="relative w-full flex items-center justify-center py-2 sm:py-4">
                                    <svg
                                        className="absolute inset-0 w-full h-full pointer-events-none overflow-visible select-none"
                                        viewBox="0 0 600 400"
                                        fill="none"
                                    >
                                        <ellipse
                                            cx="320"
                                            cy="200"
                                            rx="280"
                                            ry="160"
                                            stroke="#CBD5E1"
                                            strokeWidth="1"
                                            strokeOpacity="0.6"
                                            strokeDasharray="3 4"
                                            transform="rotate(-12 320 200)"
                                        />
                                        <ellipse
                                            cx="320"
                                            cy="200"
                                            rx="210"
                                            ry="120"
                                            stroke="#E2E8F0"
                                            strokeWidth="1"
                                            strokeOpacity="0.8"
                                            transform="rotate(-12 320 200)"
                                        />
                                    </svg>

                                    {/* Ambient Soft Radial Shadow */}
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[320px] bg-neutral-200/60 blur-3xl rounded-full pointer-events-none" />

                                    {/* 3D Perspective Container */}
                                    <div
                                        className="relative w-full max-w-[560px] mx-auto z-10"
                                        style={{ perspective: '1200px' }}
                                    >
                                        {/* Underneath Layer Card (Depth) */}
                                        <div
                                            className="absolute inset-0 rounded-2xl border border-neutral-300/60 bg-neutral-100/70 backdrop-blur-sm pointer-events-none transition-transform duration-500 hidden sm:block shadow-md"
                                            style={{
                                                transform: 'translate3d(20px, 24px, -35px) rotateY(-12deg) rotateX(5deg) rotateZ(1deg)',
                                            }}
                                        />

                                        {/* Primary 3D Tilted Browser Window */}
                                        <div
                                            className="relative rounded-2xl border border-neutral-800/90 bg-[#0B0D14] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] overflow-hidden transition-all duration-500 group"
                                            style={{
                                                transform: 'rotateY(-12deg) rotateX(5deg) rotateZ(1deg)',
                                                transformStyle: 'preserve-3d',
                                            }}
                                        >
                                            {/* Browser Chrome Header */}
                                            <div className="px-3.5 py-2.5 bg-[#0D1018] border-b border-white/10 flex items-center justify-between gap-3 text-xs font-mono select-none">
                                                <div className="flex items-center gap-1.5 shrink-0">
                                                    <span className="w-2.5 h-2.5 rounded-full bg-neutral-600/90" />
                                                    <span className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
                                                    <span className="w-2.5 h-2.5 rounded-full bg-neutral-800" />
                                                </div>

                                                <div className="flex-1 max-w-[280px] mx-auto px-2 py-0.5 rounded-md bg-white/5 border border-white/10 flex items-center justify-center gap-1.5 text-neutral-300 text-[10.5px] truncate">
                                                    <Lock size={10} className="text-neutral-400 shrink-0" />
                                                    <span className="truncate">{displayUrl}</span>
                                                </div>

                                                <div className="hidden sm:flex items-center gap-2 text-neutral-400 text-[10px] shrink-0">
                                                    <Search size={11} className="text-neutral-500" />
                                                    <span>Sign In</span>
                                                    <span className="px-2 py-0.5 rounded bg-white text-black font-bold font-sans">
                                                        Sign Up
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Browser Viewport Showcase */}
                                            <div className="relative aspect-[16/10] bg-[#07080D] overflow-hidden flex flex-col justify-center">

                                                {/* HealthNet Authentic Landing Page Mockup (when Web is active) */}
                                                {activeProject.id === 'healthnet' && platformIndex === 0 ? (
                                                    <div className="w-full h-full p-4 sm:p-5 flex flex-col justify-between bg-gradient-to-b from-[#090C12] via-[#07080D] to-[#040508] relative text-white">

                                                        {/* Mini Nav */}
                                                        <div className="flex items-center justify-between text-[10px] text-neutral-400 font-sans border-b border-white/5 pb-2">
                                                            <div className="flex items-center gap-1 text-white font-bold tracking-tight">
                                                                <span className="text-emerald-400 font-mono">✚</span>
                                                                <span>HealthNet</span>
                                                            </div>
                                                            <div className="hidden sm:flex items-center gap-2.5 text-[9.5px]">
                                                                <span className="text-white">Home</span>
                                                                <span>Features</span>
                                                                <span>About</span>
                                                                <span>Contact</span>
                                                            </div>
                                                            <div className="flex items-center gap-2 text-[9px]">
                                                                <Search size={10} />
                                                                <span className="hidden sm:inline">Sign In</span>
                                                                <span className="px-1.5 py-0.2 rounded bg-white text-black font-semibold text-[8.5px]">Sign Up</span>
                                                            </div>
                                                        </div>

                                                        {/* Hero Title & Description */}
                                                        <div className="my-auto text-center py-1 sm:py-2 space-y-1.5">
                                                            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-[9.5px] text-neutral-300 font-mono">
                                                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                                                                <span>A Unified Healthcare Platform</span>
                                                            </div>

                                                            <h4 className="text-sm sm:text-lg lg:text-xl font-bold text-white tracking-tight leading-snug max-w-xs sm:max-w-sm mx-auto">
                                                                Unified Healthcare Records for a{' '}
                                                                <span className="font-serif italic font-normal text-white">
                                                                    Healthier Ethiopia
                                                                </span>
                                                            </h4>

                                                            <p className="text-[9.5px] sm:text-[10.5px] text-neutral-400 max-w-xs mx-auto leading-relaxed line-clamp-2">
                                                                HealthNet connects healthcare facilities, centralizes records, and simplifies patient care.
                                                            </p>

                                                            <div className="pt-0.5">
                                                                <span className="inline-flex items-center gap-1 px-3.5 py-1 rounded-full bg-white text-black font-bold text-[9.5px] shadow-sm">
                                                                    Explore Portal →
                                                                </span>
                                                            </div>
                                                        </div>

                                                        {/* Footer Bar */}
                                                        <div className="flex items-center justify-between text-[8.5px] font-mono text-neutral-500 pt-1 border-t border-white/5">
                                                            <span>HIPAA & AAU Verified</span>
                                                            <span>v2.4.0 • Enterprise Ready</span>
                                                        </div>

                                                    </div>
                                                ) : activeProject.id === 'mini-git' ? (
                                                    <div className="w-full h-full p-4 sm:p-5 bg-[#07080D] font-mono text-left flex flex-col justify-between text-xs overflow-hidden select-none">
                                                        <div className="flex items-center justify-between text-neutral-500 border-b border-white/10 pb-2 text-[10px]">
                                                            <span className="flex items-center gap-1.5 text-emerald-400">
                                                                <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-pulse" />
                                                                <span>minigit daemon active</span>
                                                            </span>
                                                            <span>C++20 / SHA-1 Engine</span>
                                                        </div>
                                                        <div className="my-auto space-y-1.5 text-[10.5px] sm:text-xs text-neutral-300">
                                                            <p className="text-neutral-500 font-bold">$ minigit init --bare</p>
                                                            <p className="text-emerald-400">Initialized empty MiniGit repository in .minigit/</p>
                                                            <p className="text-neutral-500 font-bold pt-0.5">$ minigit commit -m "feat: DAG commit tree"</p>
                                                            <p className="text-white font-mono pl-2.5 border-l-2 border-emerald-500/60 text-[10px] sm:text-[10.5px]">
                                                                [master 4f9e1a8] SHA-1 Blob & Tree Compression Engine<br />
                                                                <span className="text-neutral-400 text-[9px] sm:text-[9.5px]">3 files changed, 248 insertions(+)</span>
                                                            </p>
                                                            <p className="text-neutral-500 font-bold pt-0.5">$ minigit log --oneline --graph</p>
                                                            <p className="text-yellow-400 font-mono text-[9.5px] sm:text-[10px]">
                                                                * 4f9e1a8 (HEAD -&gt; master) feat: DAG commit tree traversal<br />
                                                                * 7b2c019 feat: zlib compression &amp; content-addressable storage<br />
                                                                * 1083ae2 init: custom C++ SHA-1 cryptographic engine
                                                            </p>
                                                        </div>
                                                        <div className="flex items-center justify-between text-neutral-500 border-t border-white/10 pt-1.5 text-[9.5px]">
                                                            <span>zero dependencies • std::filesystem</span>
                                                            <span className="text-white font-bold">100% C++</span>
                                                        </div>
                                                    </div>
                                                ) : (currentPlatform?.image || activeProject.image) ? (
                                                    <div className="w-full h-full relative group/img overflow-hidden flex items-center justify-center bg-[#07080D]">
                                                        {currentPlatform?.id === 'mobile' || activeProject.id === 'jegnit-app' ? (
                                                            <div className="relative h-full max-h-[94%] aspect-[9/18.5] rounded-xl border border-white/20 shadow-2xl overflow-hidden bg-black my-auto">
                                                                <img
                                                                    src={currentPlatform?.image || activeProject.image}
                                                                    alt={activeProject.title}
                                                                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover/img:scale-105"
                                                                    loading="eager"
                                                                />
                                                            </div>
                                                        ) : (
                                                            <>
                                                                <img
                                                                    src={currentPlatform?.image || activeProject.image}
                                                                    alt={activeProject.title}
                                                                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover/img:scale-105"
                                                                    loading="eager"
                                                                />
                                                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                                                            </>
                                                        )}
                                                    </div>
                                                ) : (
                                                    <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center text-white">
                                                        <Code2 size={36} className="text-white/40 mb-2" />
                                                        <span className="text-white font-mono font-bold text-xs uppercase tracking-wider">
                                                            {activeProject.title}
                                                        </span>
                                                        <span className="text-neutral-400 font-mono text-[11px] mt-1 max-w-xs">
                                                            {activeProject.architecture || 'Core computational engine'}
                                                        </span>
                                                    </div>
                                                )}

                                                {/* Hover Overlay Action */}
                                                {(currentPlatform?.link || activeProject.link) && (
                                                    <a
                                                        href={currentPlatform?.link || activeProject.link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px] z-20 cursor-pointer"
                                                    >
                                                        <span className="px-4 py-2 rounded-full bg-white text-black font-mono font-bold text-xs shadow-xl flex items-center gap-1.5 hover:bg-neutral-200 transition-all">
                                                            LAUNCH {currentPlatform ? currentPlatform.label.toUpperCase() : 'PLATFORM'} <ArrowUpRight size={13} />
                                                        </span>
                                                    </a>
                                                )}

                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

            </div>

            {/* FULL ARCHIVE GRID MODAL (When User Clicks ALL ARCHIVE Trigger) */}
            <AnimatePresence>
                {isGridModalOpen && (
                    <div
                        className="fixed inset-0 z-[130] flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm"
                        onClick={() => setIsGridModalOpen(false)}
                        role="dialog"
                        aria-modal="true"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.96, y: 14 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.96, y: 14 }}
                            transition={{ duration: 0.2 }}
                            onClick={(e) => e.stopPropagation()}
                            className="w-full max-w-5xl max-h-[88vh] overflow-y-auto bg-white rounded-3xl border border-neutral-300 shadow-2xl p-6 sm:p-8 relative text-black"
                        >
                            <button
                                onClick={() => setIsGridModalOpen(false)}
                                className="absolute top-5 right-5 p-2 rounded-full border border-neutral-300 hover:bg-black hover:text-white text-neutral-600 transition-colors cursor-pointer"
                                aria-label="Close Archive"
                            >
                                <X size={18} />
                            </button>

                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-neutral-200">
                                <div>
                                    <span className="text-xs font-mono font-bold tracking-[0.2em] text-neutral-500 uppercase block mb-1">
                                        SYSTEMS REPOSITORY
                                    </span>
                                    <h3 className="text-2xl sm:text-3xl font-black text-black font-sans tracking-tight">
                                        All Engineered Projects
                                    </h3>
                                </div>

                                <div className="relative w-full sm:w-72">
                                    <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
                                    <input
                                        type="text"
                                        placeholder="Search by title, tech, or problem..."
                                        value={gridSearchQuery}
                                        onChange={(e) => setGridSearchQuery(e.target.value)}
                                        className="w-full pl-9 pr-3 py-2 rounded-xl bg-neutral-100 border border-neutral-300 text-xs font-mono text-black placeholder-neutral-500 focus:outline-none focus:border-black"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                {searchedGridProjects.map((p) => {
                                    const isCurrent = p.id === activeProject.id;
                                    return (
                                        <div
                                            key={p.id}
                                            onClick={() => {
                                                const targetIdx = displayProjects.findIndex(item => item.id === p.id);
                                                if (targetIdx !== -1) setCurrentIndex(targetIdx);
                                                setIsGridModalOpen(false);
                                            }}
                                            className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                                                isCurrent
                                                    ? 'bg-neutral-100 border-black ring-1 ring-black'
                                                    : 'bg-white border-neutral-200 hover:border-black hover:shadow-xs'
                                            }`}
                                        >
                                            <div className="space-y-2 mb-3">
                                                <div className="flex items-center justify-between text-[11px] font-mono text-neutral-500">
                                                    <span>{p.category}</span>
                                                    {isCurrent && <span className="text-black font-bold">● ACTIVE</span>}
                                                </div>
                                                <h4 className="text-base font-bold text-black tracking-tight">
                                                    {p.title}
                                                </h4>
                                                <p className="text-xs text-neutral-600 line-clamp-2">
                                                    {p.problem || p.description}
                                                </p>
                                            </div>

                                            <div className="flex flex-wrap gap-1.5 pt-2 border-t border-neutral-100">
                                                {p.tags && p.tags.slice(0, 3).map((tag) => (
                                                    <span key={tag} className="px-2 py-0.5 rounded bg-neutral-100 text-[10px] font-mono text-neutral-700">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            {/* FULL ARCHITECTURE SPECIFICATIONS / CASE STUDY MODAL */}
            <AnimatePresence>
                {activeCaseStudyModal && (
                    <div
                        className="fixed inset-0 z-[140] flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm"
                        onClick={() => setActiveCaseStudyModal(null)}
                        role="dialog"
                        aria-modal="true"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.96, y: 14 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.96, y: 14 }}
                            transition={{ duration: 0.2 }}
                            onClick={(e) => e.stopPropagation()}
                            className="w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl border border-neutral-300 shadow-2xl p-6 sm:p-8 relative text-black"
                        >
                            <button
                                onClick={() => setActiveCaseStudyModal(null)}
                                className="absolute top-5 right-5 p-2 rounded-full border border-neutral-300 hover:bg-black hover:text-white text-neutral-700 transition-colors cursor-pointer"
                                aria-label="Close Case Study"
                            >
                                <X size={18} />
                            </button>

                            <div className="mb-5">
                                <span className="px-3 py-1 rounded-full bg-black text-white text-xs font-mono font-bold uppercase tracking-wider mb-2.5 inline-block">
                                    {activeCaseStudyModal.category} Case Study
                                </span>
                                <h3 className="text-2xl sm:text-3xl font-black text-black font-sans tracking-tight">
                                    {activeCaseStudyModal.title}
                                </h3>
                                {activeCaseStudyModal.subtitle && (
                                    <p className="text-sm font-medium text-neutral-600 mt-1">
                                        {activeCaseStudyModal.subtitle}
                                    </p>
                                )}
                            </div>

                            {activeCaseStudyModal.image && (
                                <div className="rounded-2xl overflow-hidden aspect-[16/9] mb-6 border border-neutral-300 bg-neutral-100">
                                    <img
                                        src={activeCaseStudyModal.image}
                                        alt={activeCaseStudyModal.title}
                                        className="w-full h-full object-cover object-top"
                                    />
                                </div>
                            )}

                            <div className="space-y-4 text-sm">
                                {activeCaseStudyModal.problem && (
                                    <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-200">
                                        <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-500 font-bold mb-1">
                                            THE CHALLENGE
                                        </h4>
                                        <p className="text-neutral-800 leading-relaxed text-xs sm:text-sm">
                                            {activeCaseStudyModal.problem}
                                        </p>
                                    </div>
                                )}

                                {activeCaseStudyModal.solution && (
                                    <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-200">
                                        <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-500 font-bold mb-1">
                                            ENGINEERED SOLUTION
                                        </h4>
                                        <p className="text-neutral-800 leading-relaxed text-xs sm:text-sm">
                                            {activeCaseStudyModal.solution}
                                        </p>
                                    </div>
                                )}

                                {activeCaseStudyModal.architecture && (
                                    <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-200">
                                        <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-500 font-bold mb-1">
                                            SYSTEM ARCHITECTURE & INFRASTRUCTURE
                                        </h4>
                                        <p className="text-neutral-800 font-mono text-xs leading-relaxed font-semibold">
                                            {activeCaseStudyModal.architecture}
                                        </p>
                                    </div>
                                )}

                                <div>
                                    <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-500 font-bold mb-2">
                                        TECHNOLOGIES & FRAMEWORKS
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {activeCaseStudyModal.tags && activeCaseStudyModal.tags.map(renderTechBadge)}
                                    </div>
                                </div>

                                <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-neutral-200">
                                    {activeCaseStudyModal.link && (
                                        <a
                                            href={activeCaseStudyModal.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-black text-white font-semibold text-xs hover:bg-neutral-800 transition-all shadow-sm"
                                        >
                                            <span>{activeCaseStudyModal.hasDualPlatforms ? (activeCaseStudyModal.platforms?.[0]?.label || 'Web Platform') : 'View Live Platform'}</span>
                                            <ArrowUpRight size={14} />
                                        </a>
                                    )}

                                    {activeCaseStudyModal.mobileLink && (
                                        <a
                                            href={activeCaseStudyModal.mobileLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-neutral-900 text-white font-semibold text-xs hover:bg-neutral-800 transition-all shadow-sm"
                                        >
                                            <span>{activeCaseStudyModal.hasDualPlatforms ? (activeCaseStudyModal.platforms?.[1]?.label || 'Mobile App') : 'Download Mobile APK'}</span>
                                            <ArrowUpRight size={14} />
                                        </a>
                                    )}

                                    {activeCaseStudyModal.github && (
                                        <a
                                            href={activeCaseStudyModal.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-neutral-300 hover:border-black bg-white text-black font-semibold text-xs transition-all shadow-2xs"
                                        >
                                            <SiGithub className="text-sm shrink-0" />
                                            <span>View Source Code</span>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Portfolio;
