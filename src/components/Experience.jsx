import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    Calendar, 
    Briefcase, 
    GraduationCap, 
    Trophy, 
    Layers, 
    Code2, 
    Sparkles, 
    CheckCircle2 
} from 'lucide-react';

const journeyStages = [
    {
        id: 'stage-01',
        number: '01',
        stage: 'Stage 01',
        period: '2021 — 2023',
        year: '2021-23',
        title: 'Developed School Websites and Databases',
        shortTitle: 'School Systems',
        category: 'High School Journey',
        tag: 'Early Digitization',
        description: 'My engineering journey began in high school when I started applying programming to solve real problems within my school environment. I built a production school website and administrative database system to organize student records, digitizing manual paperwork from scratch.',
        takeaway: 'Proved that software solves operational bottlenecks in real time by replacing fragile manual paper archives with structured relational database architecture.',
        highlights: [
            'Architected first school administrative database and student portal',
            'Digitized manual paper archives into relational student databases',
            'Mastered foundational programming in HTML, CSS, JavaScript, and PHP/SQL',
            'Maintained live production uptime serving teachers, administration, and students'
        ],
        skills: ['Websites', 'Databases', 'Digitization', 'HTML/CSS', 'PHP/SQL'],
        icon: Code2
    },
    {
        id: 'stage-02',
        number: '02',
        stage: 'Stage 02',
        period: '2023',
        year: '2023',
        title: 'Scored Top 10 in National Examination (ESSLCE)',
        shortTitle: 'Top 10 Scorer',
        category: 'National Academic Honor',
        tag: 'Academic Provenance',
        description: 'Ranked among the Top 10 students nationwide with exceptional marks in mathematics and science. Mathematics has always formed the foundation of my engineering mindset, shaping a rigorous, analytical approach to algorithms and system architecture.',
        takeaway: 'Instilled an analytical mindset rooted in mathematical proofs, algorithmic efficiency, and first-principles reasoning under high-stakes competitive evaluation.',
        highlights: [
            'Ranked among the Top 10 students nationwide out of hundreds of thousands of candidates',
            'Near-perfect scores in higher mathematics, physics, and analytical problem solving',
            'Admitted into Addis Ababa University to pursue Software Engineering',
            'Built disciplined habits in competitive algorithmic problem solving and discrete math'
        ],
        skills: ['Mathematics', 'Analytical Rigor', 'Logic', 'First Principles'],
        icon: Trophy
    },
    {
        id: 'stage-03',
        number: '03',
        stage: 'Stage 03',
        period: '2023 — 2024',
        year: '2023-24',
        title: 'Engineered Intuitive UI/UX Systems',
        shortTitle: 'UI/UX Design',
        category: 'Design Evolution',
        tag: 'Interface Architecture',
        description: 'Focused deeply on interface clarity, usability, and modern responsive design principles. Designed user-centric workflows for web and mobile platforms, ensuring that complex engineering architectures remain accessible, fast, and delightful to operate.',
        takeaway: 'Approached UI/UX as system architecture — modular tokens, WCAG accessibility, and fluid physics ensure complex systems are effortless to operate.',
        highlights: [
            'Created modular Figma component design tokens and design systems',
            'Integrated responsive animations and micro-interactions with Framer Motion',
            'Established strict accessibility (a11y) and multi-breakpoint responsive layouts',
            'Translated multi-step backend workflows into frictionless, zero-training client interfaces'
        ],
        skills: ['UI/UX Systems', 'Figma Tokens', 'Framer Motion', 'Accessibility'],
        icon: Layers
    },
    {
        id: 'stage-04',
        number: '04',
        stage: 'Stage 04',
        period: '2024 — 2025',
        year: '2024-25',
        title: 'Built Core Full-Stack Systems from First Principles',
        shortTitle: 'First Principles',
        category: 'Structural Foundations',
        tag: 'Systems Programming',
        description: 'Engineered web applications and server backends with and without frameworks. Implemented custom Git version control internals in C++, asynchronous Bull queues in Redis, and relational schema normalization without ORM shortcuts to master low-level mechanics.',
        takeaway: 'Mastered low-level mechanics by implementing version control DAG hashing in C++ and distributed queues in Redis before adopting high-level frameworks.',
        highlights: [
            'Built custom Git VCS internals in C++ (blobs, trees, commit hashing, DAG traversal)',
            'Engineered Redis asynchronous job queues and distributed concurrency workers',
            'Mastered raw SQL query planning, ACID transactions, and relational schema normalization',
            'Eliminated framework dependency by implementing HTTP parsers and routing from scratch'
        ],
        skills: ['C++', 'TypeScript', 'Node.js', 'PostgreSQL', 'System Design'],
        icon: GraduationCap
    },
    {
        id: 'stage-05',
        number: '05',
        stage: 'Stage 05',
        period: '2025 — 2026',
        year: '2025-26',
        title: 'Shipped Over 50 Real-World Systems',
        shortTitle: '50+ Systems',
        category: 'Production Mastery',
        tag: 'Portfolio Scale',
        description: 'Engineered and shipped over 50 projects spanning clinical EHR healthtech, multi-ledger financial reconciliation, and cross-platform mobile apps published to Google Play. Scaled full-stack workflows from conceptual whiteboard to production deployment.',
        takeaway: 'Achieved high production velocity by standardizing full-stack pipelines — shipping dual-platform applications from architecture design to app store release.',
        highlights: [
            'Published Jegnit cross-platform mobile application live to Google Play',
            'Built Lean Finance multi-ledger double-entry reconciliation engine',
            'Shipped full-stack production apps with Next.js, React Native, Prisma & Docker',
            'Architected distributed event messaging and real-time WebSocket client sync'
        ],
        skills: ['Next.js', 'React Native', 'Prisma ORM', 'Docker', 'Architecture'],
        icon: Sparkles
    },
    {
        id: 'stage-06',
        number: '06',
        stage: 'Stage 06',
        period: '2026 — Present',
        year: 'Present',
        title: 'Commercial Software & Mobile Healthtech',
        shortTitle: 'Commercial Scale',
        category: 'Industry Impact',
        tag: 'Commercial Scale',
        description: 'Contributing full-stack and mobile engineering across enterprise systems and maternal healthtech at Mereb Technologies and Tech Med. Developing enterprise talent recruitment engines (ATS) and maternal health mobile platforms with React Native, Node.js, and PostgreSQL.',
        takeaway: 'Delivering production reliability at commercial scale — balancing enterprise performance, automated worker queues, and high-stakes clinical accessibility.',
        highlights: [
            'Junior Full-Stack Developer at Mereb Technologies (Enterprise ATS recruitment platform)',
            'Full-Stack & Mobile Developer at Tech Med (Jegnit maternal health & tracking app)',
            'Deploying production systems with Next.js, React Native, Express, and PostgreSQL',
            'Engineered high-throughput background queues and bilingual localization pipelines'
        ],
        skills: ['Mereb Talent', 'Jegnit App', 'React Native', 'Express.js', 'PostgreSQL'],
        icon: Briefcase
    }
];

const cardVariants = {
    enter: (direction) => ({
        x: direction > 0 ? 30 : -30,
        opacity: 0
    }),
    center: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.35,
            ease: [0.16, 1, 0.3, 1]
        }
    },
    exit: (direction) => ({
        x: direction < 0 ? 30 : -30,
        opacity: 0,
        transition: {
            duration: 0.2,
            ease: [0.16, 1, 0.3, 1]
        }
    })
};

const Experience = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [direction, setDirection] = useState(0);
    const [mobileJourneyIndex, setMobileJourneyIndex] = useState(0);
    const mobileJourneyRef = useRef(null);

    const handleMobileJourneyScroll = (e) => {
        const el = e.currentTarget;
        const cardWidth = el.firstElementChild ? el.firstElementChild.getBoundingClientRect().width : 0;
        const gap = 16;
        if (cardWidth > 0) {
            const index = Math.round(el.scrollLeft / (cardWidth + gap));
            setMobileJourneyIndex(Math.min(Math.max(0, index), journeyStages.length - 1));
        }
    };

    const scrollToMobileJourney = (idx) => {
        if (mobileJourneyRef.current && mobileJourneyRef.current.children[idx]) {
            mobileJourneyRef.current.children[idx].scrollIntoView({
                behavior: 'smooth',
                inline: 'center',
                block: 'nearest'
            });
            setMobileJourneyIndex(idx);
        }
    };

    const handleSelectStage = (index) => {
        if (index === activeIndex) return;
        setDirection(index > activeIndex ? 1 : -1);
        setActiveIndex(index);
    };

    const handlePrev = () => {
        if (activeIndex > 0) {
            setDirection(-1);
            setActiveIndex(activeIndex - 1);
        }
    };

    const handleNext = () => {
        if (activeIndex < journeyStages.length - 1) {
            setDirection(1);
            setActiveIndex(activeIndex + 1);
        }
    };

    // Keyboard navigation (Left / Right Arrow)
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowLeft') {
                handlePrev();
            } else if (e.key === 'ArrowRight') {
                handleNext();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [activeIndex]);

    const activeStage = journeyStages[activeIndex];
    const progressPercent = (activeIndex / (journeyStages.length - 1)) * 100;

    return (
        <section 
            id="journey" 
            className="w-full min-h-screen lg:h-screen text-[#111827] flex flex-col justify-center pt-16 pb-8 sm:pt-20 sm:pb-10 lg:py-10 bg-transparent relative select-text border-t border-neutral-200/80 scroll-mt-16 lg:scroll-mt-0"
            aria-label="My Engineering Journey Timeline"
        >
            <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12 flex flex-col justify-center">
                
                {/* ======================================================== */}
                {/* 1. Clean Section Header                                   */}
                {/* ======================================================== */}
                <div className="mb-11 sm:mb-[52px] shrink-0">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#111827] font-display">
                        My Journey
                    </h2>
                </div>

                {/* ======================================================== */}
                {/* DESKTOP VIEW (LG+): INTERACTIVE TIMELINE WITH CONNECTED NODES */}
                {/* ======================================================== */}
                <div className="hidden lg:block">
                    {/* 2. Unboxed Milestone Showcase (Open & Expansive) */}
                <div className="relative w-full overflow-hidden">
                    <AnimatePresence mode="wait" custom={direction}>
                        <motion.div
                            key={activeStage.id}
                            custom={direction}
                            variants={cardVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center w-full"
                        >
                            {/* Left Column: Period Badge, Title, Story, Takeaway & Focus Stack */}
                            <div className="lg:col-span-7 flex flex-col justify-center">
                                
                                {/* Period Badge & Category Tag */}
                                <div className="flex items-center gap-3 mb-2">
                                    <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-white text-[#111827] text-xs font-mono font-semibold border border-neutral-300 shadow-2xs">
                                        <Calendar size={12} />
                                        <span>{activeStage.period}</span>
                                    </span>
                                    <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-neutral-400">
                                        • {activeStage.tag}
                                    </span>
                                </div>

                                <h3 className="text-2xl sm:text-3xl lg:text-[38px] font-black text-[#111827] tracking-tight leading-tight mb-2.5 font-display">
                                    {activeStage.title}
                                </h3>
                                <p className="text-sm sm:text-base text-neutral-600 font-normal leading-relaxed mb-4 max-w-2xl">
                                    {activeStage.description}
                                </p>

                                {/* Core Engineering Breakthrough Callout */}
                                <div className="p-3.5 sm:p-4 rounded-2xl bg-neutral-100/90 border border-neutral-200/90 text-xs sm:text-sm text-neutral-700 leading-relaxed font-normal flex items-start gap-3 my-3">
                                    <div className="w-1.5 h-8 bg-[#111827] rounded-full shrink-0 mt-0.5" />
                                    <div>
                                        <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-500 mb-0.5">
                                            Core Engineering Breakthrough
                                        </div>
                                        <p className="text-neutral-800 font-medium text-xs sm:text-[13px] leading-relaxed">
                                            {activeStage.takeaway}
                                        </p>
                                    </div>
                                </div>

                                {/* Focus Stack */}
                                <div className="flex flex-wrap items-center gap-2 pt-1">
                                    <span className="text-xs font-mono font-bold text-neutral-400 mr-1">
                                        CORE FOCUS:
                                    </span>
                                    {activeStage.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="px-3 py-1 rounded-lg bg-white text-xs font-mono font-medium text-[#111827] border border-neutral-300 shadow-2xs"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Right Column: 4 Structured Accomplishment Cards */}
                            <div className="lg:col-span-5 flex flex-col gap-2.5">
                                <div className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-400 mb-1">
                                    Key Milestones & Impact
                                </div>
                                {activeStage.highlights.map((h, i) => (
                                    <div 
                                        key={i}
                                        className="p-3 sm:p-3.5 rounded-xl bg-white border border-neutral-200/90 hover:border-[#111827] transition-all flex items-start gap-3 shadow-2xs group"
                                    >
                                        <div className="w-5 h-5 rounded-full bg-neutral-100 border border-neutral-300 flex items-center justify-center shrink-0 mt-0.5 group-hover:border-[#111827] group-hover:bg-[#111827] transition-all">
                                            <CheckCircle2 size={13} className="text-[#111827] group-hover:text-white transition-colors" />
                                        </div>
                                        <span className="text-xs sm:text-[13px] text-neutral-800 font-medium leading-relaxed">
                                            {h}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* ======================================================== */}
                {/* 3. Bottom Timeline Navigation (Full Width, Unboxed, Pleasing) */}
                {/* ======================================================== */}
                <div className="relative z-10 w-full pt-16 sm:pt-[76px] pb-4 select-none">
                    <div className="relative flex items-center justify-between w-full px-3 sm:px-6">
                        
                        {/* Connecting Track Rail (Spans Node 0 center to Node 5 center) */}
                        <div className="absolute top-1/2 left-6 right-6 sm:left-7 sm:right-7 -translate-y-1/2 h-[2px] z-0 pointer-events-none">
                            <div className="w-full h-full bg-neutral-300" />
                            <motion.div 
                                className="absolute top-0 left-0 h-full bg-[#111827] origin-left"
                                initial={false}
                                animate={{ width: `${progressPercent}%` }}
                                transition={{ type: "spring", stiffness: 280, damping: 28 }}
                            />
                        </div>

                        {/* 6 Connected Minimal Node Buttons (No Containers, No Text Clutter) */}
                        {journeyStages.map((stage, index) => {
                            const IconComponent = stage.icon;
                            const isActive = index === activeIndex;
                            const isCompleted = index < activeIndex;
                            const isHovered = hoveredIndex === index;
                            const showTooltip = isHovered || (isActive && hoveredIndex === null);

                            return (
                                <div key={stage.id} className="relative flex flex-col items-center">
                                    
                                    {/* Delightful Floating Micro-Tooltip Pill */}
                                    <AnimatePresence>
                                        {showTooltip && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 5, scale: 0.9 }}
                                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                                exit={{ opacity: 0, y: 3, scale: 0.9 }}
                                                transition={{ duration: 0.15 }}
                                                className="absolute -top-11 pointer-events-none z-30 whitespace-nowrap"
                                            >
                                                <div className="px-3 py-1 rounded-full bg-[#111827] text-white text-[11px] font-mono font-medium shadow-md flex items-center gap-1.5">
                                                    <span className="opacity-70">{stage.year}</span>
                                                    <span>•</span>
                                                    <span>{stage.shortTitle}</span>
                                                </div>
                                                <div className="w-1.5 h-1.5 bg-[#111827] rotate-45 mx-auto -mt-1" />
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                    {/* Tactile Node Button */}
                                    <motion.button
                                        type="button"
                                        onClick={() => handleSelectStage(index)}
                                        onMouseEnter={() => setHoveredIndex(index)}
                                        onMouseLeave={() => setHoveredIndex(null)}
                                        whileHover={{ scale: 1.15 }}
                                        whileTap={{ scale: 0.92 }}
                                        className={`relative z-10 w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center cursor-pointer focus:outline-none transition-all duration-200 ${
                                            isActive
                                                ? 'bg-[#111827] text-white shadow-md ring-4 ring-[#111827]/15 scale-105'
                                                : isCompleted
                                                    ? 'bg-white text-[#111827] border-2 border-[#111827] hover:bg-neutral-50 shadow-2xs'
                                                    : 'bg-white text-neutral-400 border-2 border-neutral-300 hover:border-[#111827] hover:text-[#111827] shadow-2xs'
                                        }`}
                                        aria-label={`View ${stage.stage}: ${stage.title}`}
                                    >
                                        <IconComponent size={18} />
                                    </motion.button>

                                </div>
                            );
                        })}

                    </div>
                </div>
            </div>

                {/* ======================================================== */}
                {/* MOBILE / SMALLER SCREENS: HORIZONTALLY SCROLLABLE CAROUSEL (<LG) */}
                {/* ======================================================== */}
                <div className="block lg:hidden my-2 select-text">
                    <div className="flex items-center justify-between gap-3 text-xs font-mono text-neutral-500 mb-4 px-1">
                        {/* Disconnected rods indicator */}
                        <div className="flex items-center gap-1.5" role="tablist" aria-label="Journey milestones">
                            {journeyStages.map((_, i) => (
                                <button
                                    key={i}
                                    type="button"
                                    onClick={() => scrollToMobileJourney(i)}
                                    className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                                        i === mobileJourneyIndex
                                            ? 'w-7 bg-[#111827]'
                                            : 'w-2.5 bg-neutral-300 hover:bg-neutral-400'
                                    }`}
                                    aria-label={`Go to stage ${i + 1}`}
                                />
                            ))}
                        </div>

                        {/* Dynamic Counter */}
                        <div className="flex items-center gap-1 text-neutral-600 font-mono text-xs">
                            <span className="font-bold text-[#111827]">{mobileJourneyIndex + 1}</span>
                            <span className="text-neutral-400">/</span>
                            <span>{journeyStages.length}</span>
                        </div>
                    </div>

                    <div 
                        ref={mobileJourneyRef}
                        onScroll={handleMobileJourneyScroll}
                        className="flex overflow-x-auto snap-x snap-mandatory gap-4 sm:gap-5 pb-5 no-scrollbar -mx-6 px-6 sm:-mx-10 sm:px-10"
                    >
                        {journeyStages.map((stage) => {
                            const IconComponent = stage.icon;
                            return (
                                <div 
                                    key={stage.id}
                                    className="snap-center shrink-0 w-[86vw] sm:w-[480px] rounded-3xl bg-white border border-neutral-200/90 shadow-sm p-5 sm:p-6 flex flex-col justify-between"
                                >
                                    <div>
                                        {/* Header: Period Badge & Category */}
                                        <div className="flex items-center justify-between gap-2 mb-3">
                                            <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-neutral-100 text-[#111827] text-xs font-mono font-semibold border border-neutral-200">
                                                <Calendar size={12} />
                                                <span>{stage.period}</span>
                                            </span>
                                            <span className="text-[11px] font-mono font-bold tracking-wider text-neutral-400 uppercase">
                                                STAGE {stage.number}
                                            </span>
                                        </div>

                                        {/* Milestone Title */}
                                        <h3 className="text-xl sm:text-2xl font-black text-[#111827] tracking-tight leading-tight mb-2 font-display">
                                            {stage.title}
                                        </h3>

                                        {/* Narrative Description */}
                                        <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-4">
                                            {stage.description}
                                        </p>

                                        {/* Core Breakthrough Callout */}
                                        <div className="p-3.5 rounded-2xl bg-neutral-100/90 border border-neutral-200/90 text-xs text-neutral-700 leading-relaxed mb-4 flex items-start gap-2.5">
                                            <div className="w-1.5 h-6 bg-[#111827] rounded-full shrink-0 mt-0.5" />
                                            <div>
                                                <div className="text-[9.5px] font-mono font-bold uppercase tracking-wider text-neutral-500 mb-0.5">
                                                    Core Breakthrough
                                                </div>
                                                <p className="text-neutral-800 font-medium leading-relaxed">
                                                    {stage.takeaway}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Key Accomplishments Checklist */}
                                        <div className="space-y-2 mb-4">
                                            <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-400 mb-1">
                                                Key Highlights
                                            </div>
                                            {stage.highlights.slice(0, 3).map((h, i) => (
                                                <div key={i} className="flex items-start gap-2 text-xs text-neutral-700 leading-relaxed">
                                                    <CheckCircle2 size={13} className="text-[#111827] shrink-0 mt-0.5 stroke-[2.5]" />
                                                    <span>{h}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Focus Skills */}
                                    <div className="flex flex-wrap items-center gap-1.5 pt-3 border-t border-neutral-200/80">
                                        {stage.skills.map((skill) => (
                                            <span
                                                key={skill}
                                                className="px-2.5 py-1 rounded-lg bg-neutral-100 text-[11px] font-mono font-medium text-[#111827] border border-neutral-200"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Experience;
