import React from 'react';
import { motion } from 'framer-motion';
import {
    Calendar,
    CheckCircle2,
    Building2,
    MapPin
} from 'lucide-react';

const employmentHistory = [
    {
        id: 1,
        role: "Junior Full-Stack Developer",
        company: "Mereb Technologies",
        period: "March 2026 — Present",
        location: "Addis Ababa, Ethiopia",
        badge: "Current Role",
        summary: "Leading end-to-end full-stack engineering for core enterprise digital products and automated recruitment infrastructure, developing resilient backend services and high-performance client web applications.",
        responsibilities: [
            "Architected and deployed the Mereb Talent ATS platform, automating end-to-end candidate pipeline ingestion, resume evaluation, and interview scheduling workflows.",
            "Engineered high-throughput, modular REST API services using Node.js, Express, and TypeScript, backed by PostgreSQL with TypeORM relational schema normalization.",
            "Implemented asynchronous Redis and Bull background worker queues to process high-volume candidate resume parsing without blocking the main event loop.",
            "Built and scaled the official Mereb corporate digital platform utilizing Next.js 16, React 19, and Tailwind CSS with sub-second page performance and fluid UI transitions.",
            "Collaborated with senior engineering staff to diagnose system bottlenecks, conduct rigorous code reviews, and establish enterprise code quality standards."
        ]
    },
    {
        id: 2,
        role: "Full-Stack & Mobile App Developer",
        company: "Tech Med",
        period: "January 2026 — August 2026",
        location: "Addis Ababa, Ethiopia",
        badge: "Mobile Healthtech",
        summary: "Spearheaded the technical architecture, mobile engineering, and production deployment of Jegnit, a bilingual maternal health and fetal development tracking platform launched on the Google Play Store.",
        responsibilities: [
            "Architected and engineered the cross-platform Jegnit mobile application with React Native and Expo, delivering weekly gestational guidance and kick counter tools.",
            "Implemented robust offline-first synchronization using local SQLite storage, ensuring uninterrupted health tracking across low-connectivity regional environments.",
            "Developed scalable REST API microservices with Node.js, Express, and PostgreSQL, powering authenticated user profiles and scheduled clinical notification feeds.",
            "Engineered complete bilingual localization across English and Amharic, implementing localized clinical typography, fetal growth metrics, and trimester insights.",
            "Managed end-to-end mobile release pipelines, automated build signing, and successfully deployed and maintained the production release on the Google Play Store."
        ]
    }
];

const EmploymentHistory = () => {
    return (
        <section
            id="experience"
            className="w-full min-h-screen lg:h-screen text-[#111827] flex flex-col justify-center py-6 sm:py-8 lg:py-10 bg-transparent relative select-text border-t border-neutral-200/80"
            aria-label="Work Experience and Industry Roles"
        >
            <div className="w-full max-w-[1536px] mx-auto px-6 sm:px-12 lg:px-16 xl:px-20">

                {/* Section Header */}
                <div className="mb-6 lg:mb-8 shrink-0">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-[#111827] font-display">
                        Industry Experience & Roles
                    </h2>
                </div>

                {/* Industry Experience Cards: Side-by-Side (Left & Right) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
                    {employmentHistory.map((job, index) => (
                        <motion.div
                            key={job.id}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="p-5 sm:p-6 lg:p-7 rounded-2xl sm:rounded-3xl border border-neutral-300 bg-white/95 shadow-xs hover:border-[#111827] transition-all duration-300 flex flex-col justify-between h-full"
                        >
                            <div className="flex flex-col h-full justify-between">
                                {/* Role Header & Badges */}
                                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2.5 mb-3">
                                    <div>
                                        <div className="flex flex-wrap items-center gap-2">
                                            <h3 className="text-lg sm:text-xl font-bold text-[#111827] tracking-tight">
                                                {job.role}
                                            </h3>
                                            <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-[#111827] text-white">
                                                {job.badge}
                                            </span>
                                        </div>
                                        <div className="text-xs sm:text-sm text-neutral-800 font-semibold mt-1 flex flex-wrap items-center gap-2">
                                            <span className="flex items-center gap-1">
                                                <Building2 size={13} className="text-neutral-500" />
                                                <span>{job.company}</span>
                                            </span>
                                            <span className="text-neutral-400">•</span>
                                            <span className="text-neutral-500 font-normal text-xs flex items-center gap-1">
                                                <MapPin size={12} /> {job.location}
                                            </span>
                                        </div>
                                    </div>

                                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-neutral-100 text-[11px] font-mono font-medium text-neutral-700 border border-neutral-300 self-start sm:self-auto shrink-0">
                                        <Calendar size={12} /> {job.period}
                                    </span>
                                </div>

                                {/* Executive Summary */}
                                <p className="text-neutral-700 text-xs sm:text-sm font-normal leading-relaxed mb-4">
                                    {job.summary}
                                </p>

                                {/* Elaborate Responsibilities & Engineering Accomplishments */}
                                <div className="bg-neutral-50/80 p-4 sm:p-5 rounded-2xl border border-neutral-200 flex-1 flex flex-col justify-start space-y-2.5">
                                    <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-500 mb-0.5">
                                        Key Responsibilities & Contributions:
                                    </div>
                                    <ul className="space-y-2 sm:space-y-2.5">
                                        {job.responsibilities.map((resp, i) => (
                                            <li key={i} className="flex items-start gap-2 text-xs sm:text-[13px] text-neutral-700 font-normal leading-relaxed">
                                                <CheckCircle2 size={14} className="text-[#111827] shrink-0 mt-0.5" />
                                                <span>{resp}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default EmploymentHistory;
