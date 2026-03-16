import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

const Hero = () => {
    return (
        <section id="hero" className="w-full min-h-screen flex items-center pt-20 relative">
            <div className="w-full grid md:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center md:items-start text-center md:text-left z-10"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-6 flex items-center gap-2 cursor-default hover:bg-primary/20 transition-colors"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        Top National Scorer (ESSLCE '23)
                    </motion.div>

                    {/* Staggered Text Reveal */}
                    <div className="overflow-hidden">
                        <motion.h1
                            initial={{ y: 100 }}
                            animate={{ y: 0 }}
                            transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1] }}
                            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-4 text-foreground"
                        >
                            Hi, I'm <br />
                            <span className="text-gradient drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">Lemi Gobena Jaleta</span>
                        </motion.h1>
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="text-2xl md:text-3xl text-muted-foreground font-light mb-6 h-10"
                    >
                        <span className="text-foreground font-semibold italic">
                            <Typewriter
                                words={['Full-Stack Developer', 'Software Engineer', 'Systems Architect', 'AI/ML Enthusiast', 'UI/UX Designer']}
                                loop={0}
                                cursor
                                cursorStyle="_"
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1500}
                            />
                        </span>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="text-muted-foreground max-w-lg mb-10 text-lg md:text-xl leading-relaxed"
                    >
                        I bridge the gap between design and development, building scalable digital solutions with modern architecture and robust backends.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.5 }}
                        className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center md:justify-start"
                    >
                        <a
                            href="/projects"
                            className="flex items-center gap-2 px-6 py-2.5 bg-white text-background rounded-full font-bold hover:bg-gray-200 transition-transform hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.3)] whitespace-nowrap"
                        >
                            View Work <ArrowRight size={20} />
                        </a>
                        <a
                            href="/Documents/Lemi_Gobena_CV.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-6 py-2.5 bg-primary/20 text-primary border border-primary/30 rounded-full font-bold hover:bg-primary/30 transition-transform hover:scale-105 active:scale-95 sm:ml-2 whitespace-nowrap"
                        >
                            Download Resume
                        </a>
                        <div className="flex items-center gap-2 sm:ml-4 mt-4 sm:mt-0">
                            <a href="https://github.com/lemigobena" target="_blank" rel="noopener noreferrer" className="block p-3 glass rounded-full text-muted-foreground hover:text-foreground transition-all hover:scale-110">
                                <Github size={20} />
                            </a>
                            <a href="https://linkedin.com/in/lemi-gobena" target="_blank" rel="noopener noreferrer" className="block p-3 glass rounded-full text-muted-foreground hover:text-foreground transition-all hover:scale-110">
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Right Content / Visuals */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.3, type: "spring", stiffness: 100 }}
                    className="hidden md:flex justify-center items-center relative"
                >
                    {/* Abstract Shape/Image Wrapper with 3D Tilt */}
                    <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} perspective={1000} scale={1.05} transitionSpeed={1000} className="relative w-72 h-72 md:w-96 md:h-96">
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary to-purple-600 rounded-full blur-[80px] opacity-40 animate-pulse" />
                        <div className="glass w-full h-full rounded-[40px] rotate-12 flex items-center justify-center relative overflow-hidden group shadow-[0_0_50px_rgba(59,130,246,0.2)] border border-foreground/20">
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 z-10" />
                            <img
                                src="/Images/hero-bg.jpg"
                                alt="Abstract"
                                className="absolute inset-0 w-full h-full object-cover group-hover:scale-125 transition-transform duration-1000 ease-out"
                            />
                            <motion.img
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 1, duration: 0.8, type: "spring" }}
                                src="/Images/lemi_logo.png"
                                alt="Lemi Logo"
                                className="z-20 w-full h-full object-cover opacity-90"
                            />
                        </div>

                    </Tilt>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                animate={{ y: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
            >
                <div className="w-[30px] h-[50px] rounded-full border-2 border-foreground/30 flex justify-center p-2 backdrop-blur-sm bg-foreground/5">
                    <div className="w-1 h-3 bg-foreground/80 rounded-full shadow-[0_0_10px_white]" />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
