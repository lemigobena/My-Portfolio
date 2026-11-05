import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Layers, Compass, MapPin, Languages, University } from 'lucide-react';

const About = () => {
    return (
        <section
            id="about"
            className="w-full min-h-screen lg:h-screen text-[#111827] overflow-hidden flex flex-col justify-center py-8 lg:py-10 bg-[#F1F1F1] relative select-text"
            aria-label="About Section"
        >
            <div className="w-full max-w-[1536px] mx-auto px-6 sm:px-12 lg:px-16 xl:px-20 relative z-10 flex-1 flex flex-col justify-center my-auto pointer-events-auto select-text">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center">

                    {/* LEFT COLUMN: Top edge pencil circular portrait + texts to the bottom of it (Centered on small screens) */}
                    <div className="lg:col-span-5 xl:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left select-text">

                        {/* 1. LEFT TOP EDGE: Circular Shaped Pencil Drawing Fading Out on Left & Right */}
                        <div className="relative mb-5 select-none group mx-auto lg:mx-0">
                            {/* Ambient soft glow */}
                            <div className="absolute inset-0 w-[220px] h-[220px] sm:w-[250px] sm:h-[250px] lg:w-[270px] lg:h-[270px] rounded-full bg-black/[0.03] blur-2xl pointer-events-none" />

                            <div className="relative w-[200px] h-[200px] sm:w-[230px] sm:h-[230px] lg:w-[250px] lg:h-[250px] rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-[1.02]">
                                <img
                                    src={`${import.meta.env.BASE_URL}Images/lemi_about_pencil_circle.png`}
                                    alt="Lemi Gobena Pencil Sketch"
                                    className="w-full h-full object-contain pointer-events-none select-none drop-shadow-sm"
                                    loading="eager"
                                />
                            </div>
                        </div>

                        {/* 2. DIRECTLY TO THE BOTTOM OF IT: Metadata & Provenance Details */}
                        <div className="w-full max-w-[340px] sm:max-w-[380px] lg:max-w-none space-y-2.5 text-xs font-mono select-text mx-auto lg:mx-0 text-left">
                            <div className="p-3 sm:p-3.5 rounded-2xl bg-white/95 border border-neutral-200/90 shadow-xs flex items-center gap-3">
                                <div className="p-2 rounded-xl bg-neutral-100 text-[#111827] shrink-0">
                                    <MapPin size={16} />
                                </div>
                                <div>
                                    <span className="text-neutral-400 text-[10px] uppercase block tracking-wider font-semibold">Location</span>
                                    <span className="text-[#111827] font-bold text-xs">Addis Ababa, Ethiopia</span>
                                </div>
                            </div>

                            <div className="p-3 sm:p-3.5 rounded-2xl bg-white/95 border border-neutral-200/90 shadow-xs flex items-center gap-3">
                                <div className="p-2 rounded-xl bg-neutral-100 text-[#111827] shrink-0">
                                    <University size={16} />
                                </div>
                                <div>
                                    <span className="text-neutral-400 text-[10px] uppercase block tracking-wider font-semibold">Education</span>
                                    <span className="text-[#111827] font-bold text-xs">AAU Software Engineering ('28)</span>
                                </div>
                            </div>

                            <div className="p-3 sm:p-3.5 rounded-2xl bg-white/95 border border-neutral-200/90 shadow-xs flex items-center gap-3">
                                <div className="p-2 rounded-xl bg-neutral-100 text-[#111827] shrink-0">
                                    <Languages size={16} />
                                </div>
                                <div>
                                    <span className="text-neutral-400 text-[10px] uppercase block tracking-wider font-semibold">Languages</span>
                                    <span className="text-[#111827] font-bold text-xs">English, Amharic, Oromo</span>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* RIGHT COLUMN: Eyebrow, Headline, Narrative Bio & 3 Engineering Pillars */}
                    <div className="lg:col-span-7 xl:col-span-8 flex flex-col justify-center space-y-5 lg:space-y-6 select-text">

                        {/* Eyebrow Label */}
                        <div className="flex items-center gap-2 select-text">
                            <span className="w-2 h-2 rounded-full bg-[#111827]" />
                            <span className="text-[11px] sm:text-xs font-mono font-bold tracking-[0.2em] text-[#4B5563] uppercase cursor-text">
                                ABOUT ME
                            </span>
                        </div>

                        {/* Monumental Headline */}
                        <h2 className="text-3xl sm:text-4xl lg:text-[46px] xl:text-5xl font-black text-[#111827] font-display tracking-[-0.035em] leading-[1.08] select-text">
                            Engineering with <br />
                            <span className="text-[#111827]">Mathematical Rigor</span>
                        </h2>

                        {/* Narrative Bio: Focus on Engineering Identity and Mindset */}
                        <div className="space-y-3.5 text-[#374151] text-sm sm:text-[15px] lg:text-base font-normal leading-relaxed select-text">
                            <p>
                                I am a software engineer based in Addis Ababa, Ethiopia, driven by building robust, high-performance systems from first principles. I specialize in designing scalable web architectures, resilient distributed backends, and intuitive client interfaces that remain fast and dependable under load.
                            </p>
                            <p>
                                My approach is anchored in mathematical structure and analytical problem solving. Whether implementing custom object storage internals in C++, designing 3NF relational schemas in PostgreSQL, or optimizing React Native client runtime latency, I approach every codebase with uncompromising technical rigor and production craftsmanship.
                            </p>
                        </div>

                        {/* 3 Core Engineering Pillars (Distinct from commercial roles below) */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4 pt-2 select-text">
                            {/* Pillar 1: First-Principles Architecture */}
                            <div className="p-4 sm:p-5 rounded-2xl bg-white/95 border border-neutral-200/90 shadow-xs flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
                                <div>
                                    <div className="w-8 h-8 rounded-xl bg-[#111827] text-white flex items-center justify-center mb-3">
                                        <Cpu size={16} />
                                    </div>
                                    <div className="text-xs sm:text-sm font-bold text-[#111827]">First-Principles</div>
                                    <div className="text-[11px] text-neutral-500 font-mono mt-0.5 font-semibold">Systems Architecture</div>
                                    <p className="text-[11px] text-[#4B5563] mt-2 leading-relaxed">
                                        Deep mastery of low-level mechanics, memory layout, network protocols, and ACID integrity.
                                    </p>
                                </div>
                            </div>

                            {/* Pillar 2: Production Scale & Velocity */}
                            <div className="p-4 sm:p-5 rounded-2xl bg-white/95 border border-neutral-200/90 shadow-xs flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
                                <div>
                                    <div className="w-8 h-8 rounded-xl bg-[#111827] text-white flex items-center justify-center mb-3">
                                        <Layers size={16} />
                                    </div>
                                    <div className="text-xs sm:text-sm font-bold text-[#111827]">Production Velocity</div>
                                    <div className="text-[11px] text-neutral-500 font-mono mt-0.5 font-semibold">50+ Shipped Systems</div>
                                    <p className="text-[11px] text-[#4B5563] mt-2 leading-relaxed">
                                        Translating complex real-world domain requirements into clean, deployable software with speed.
                                    </p>
                                </div>
                            </div>

                            {/* Pillar 3: Mathematical Precision */}
                            <div className="p-4 sm:p-5 rounded-2xl bg-white/95 border border-neutral-200/90 shadow-xs flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
                                <div>
                                    <div className="w-8 h-8 rounded-xl bg-[#111827] text-white flex items-center justify-center mb-3">
                                        <Compass size={16} />
                                    </div>
                                    <div className="text-xs sm:text-sm font-bold text-[#111827]">Analytical Precision</div>
                                    <div className="text-[11px] text-neutral-500 font-mono mt-0.5 font-semibold">Algorithmic Rigor</div>
                                    <p className="text-[11px] text-[#4B5563] mt-2 leading-relaxed">
                                        Applying discrete mathematics, graph traversal, and formal logic to software architecture.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
