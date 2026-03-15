import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import {
    Code2,
    Database,
    Layout,
    Terminal,
    GraduationCap,
    MapPin,
    Mail,
    Globe
} from 'lucide-react';

const About = () => {
    const skills = [
        { name: 'Full-Stack Architecture', level: 95 },
        { name: 'System Design & Databases', level: 92 },
        { name: 'Mobile App Engineering', level: 88 },
        { name: 'Systems & Data Structures', level: 85 },
    ];

    return (
        <section id="about" className="py-24 relative">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
            >
                <h2 className="text-4xl md:text-5xl font-black mb-4">
                    About <span className="text-gradient">Me</span>
                </h2>
                <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
                <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                    Transforming complex problems into elegant, scalable solutions.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

                {/* Main Bio / Bento Box 1 */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="md:col-span-3"
                >
                    <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} glareEnable={true} glareMaxOpacity={0.1} className="h-full glass border border-foreground/5 rounded-3xl p-8 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/20 transition-colors duration-500" />
                        <h3 className="text-2xl font-bold mb-4">Bridging Design & Engineering</h3>
                        <p className="text-muted-foreground leading-relaxed mb-6 relative z-10 font-light">
                            I am a 3rd-year Software Engineering student at Addis Ababa University. As a Full-Stack Developer with a deep passion for system architecture, machine learning, and writing clean, scalable code, I thrive on solving complex problems. My achievement as a Top 10 National Scorer in the ESSLCE (2023) reflects my commitment to excellence, which I apply to every line of code I write.
                        </p>
                        <div className="grid sm:grid-cols-2 gap-4 relative z-10 text-sm">
                            <div className="flex items-center gap-3 text-muted-foreground">
                                <MapPin className="text-primary" size={18} />
                                <span>Addis Ababa, Ethiopia</span>
                            </div>
                            <div className="flex items-center gap-3 text-muted-foreground">
                                <GraduationCap className="text-primary" size={20} />
                                <span>Addis Ababa University SE ('28)</span>
                            </div>
                            <div className="flex items-center gap-3 text-muted-foreground">
                                <Mail className="text-primary" size={20} />
                                <span>lemigobena12@gmail.com</span>
                            </div>
                            <div className="flex items-center gap-3 text-muted-foreground">
                                <Globe className="text-primary" size={20} />
                                <span>Freelance Available</span>
                            </div>
                        </div>
                    </Tilt>
                </motion.div>

                {/* Image / Bento Box 2 */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} glareEnable={true} glareMaxOpacity={0.2} className="h-full glass rounded-3xl p-2 relative overflow-hidden group min-h-[300px]">
                        <img
                            src="/Images/lemi.png"
                            alt="Profile"
                            className="absolute inset-0 w-full h-full object-cover rounded-3xl group-hover:scale-105 transition-transform duration-700 object-[center_20%]"
                        />
                        <div className="absolute inset-2 bg-gradient-to-t from-black/80 via-transparent to-transparent rounded-3xl z-10 pointer-events-none" />
                    </Tilt>
                </motion.div>

                {/* Stats / Bento Boxes */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} className="h-full glass rounded-3xl p-6 flex flex-col justify-center items-center text-center">
                        <div className="text-5xl font-black mb-2 text-gradient">100%</div>
                        <div className="text-sm text-muted-foreground">Project Completion</div>
                    </Tilt>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} className="h-full glass rounded-3xl p-6 flex flex-col justify-center items-center text-center">
                        <div className="text-5xl font-black mb-2 text-gradient">25+</div>
                        <div className="text-sm text-muted-foreground">Projects Built</div>
                    </Tilt>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                >
                    <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} className="h-full glass rounded-3xl p-6 flex flex-col justify-center items-center text-center">
                        <div className="text-5xl font-black mb-2 text-gradient">2+</div>
                        <div className="text-sm text-muted-foreground">Years Experience</div>
                    </Tilt>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} className="h-full glass rounded-3xl p-6 flex flex-col justify-center items-center text-center">
                        <div className="text-5xl font-black mb-2 text-gradient">6+</div>
                        <div className="text-sm text-muted-foreground">Years Learning</div>
                    </Tilt>
                </motion.div>

                {/* Skills / Bento Box 6 */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="md:col-span-4 glass rounded-3xl p-8"
                >
                    <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                        <Terminal className="text-primary" /> Technical Arsenal
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {skills.map((skill, index) => (
                            <div key={index} className="space-y-2">
                                <div className="flex justify-between text-sm font-medium">
                                    <span className="text-muted-foreground">{skill.name}</span>
                                    <span className="text-primary">{skill.level}%</span>
                                </div>
                                <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${skill.level}%` }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1.5, delay: 0.2 + (index * 0.1), ease: "easeOut" }}
                                        className="h-full bg-gradient-to-r from-primary to-purple-600 rounded-full relative"
                                    >
                                        <div className="absolute inset-0 bg-foreground/20 w-full animate-[shimmer_2s_infinite]" />
                                    </motion.div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Quick Icons */}
                    <div className="mt-10 flex flex-wrap justify-center gap-6 pt-6 border-t border-foreground/5">
                        <Tilt tiltMaxAngleX={30} tiltMaxAngleY={30} className="flex flex-col items-center gap-2 group cursor-pointer">
                            <div className="w-14 h-14 rounded-full bg-foreground/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors shadow-lg">
                                <Layout className="text-primary" />
                            </div>
                            <span className="text-xs text-muted-foreground group-hover:text-primary transition-colors">Frontend</span>
                        </Tilt>
                        <Tilt tiltMaxAngleX={30} tiltMaxAngleY={30} className="flex flex-col items-center gap-2 group cursor-pointer">
                            <div className="w-14 h-14 rounded-full bg-foreground/5 flex items-center justify-center group-hover:bg-green-500/20 transition-colors shadow-lg">
                                <Database className="text-green-400" />
                            </div>
                            <span className="text-xs text-muted-foreground group-hover:text-green-400 transition-colors">Backend</span>
                        </Tilt>
                        <Tilt tiltMaxAngleX={30} tiltMaxAngleY={30} className="flex flex-col items-center gap-2 group cursor-pointer">
                            <div className="w-14 h-14 rounded-full bg-foreground/5 flex items-center justify-center group-hover:bg-purple-500/20 transition-colors shadow-lg">
                                <Code2 className="text-purple-400" />
                            </div>
                            <span className="text-xs text-muted-foreground group-hover:text-purple-400 transition-colors">Systems</span>
                        </Tilt>
                        <Tilt tiltMaxAngleX={30} tiltMaxAngleY={30} className="flex flex-col items-center gap-2 group cursor-pointer">
                            <div className="w-14 h-14 rounded-full bg-foreground/5 flex items-center justify-center group-hover:bg-orange-500/20 transition-colors shadow-lg">
                                <Terminal className="text-orange-400" />
                            </div>
                            <span className="text-xs text-muted-foreground group-hover:text-orange-400 transition-colors">Full-Stack</span>
                        </Tilt>
                    </div>
                </motion.div>

                {/* Beyond Code / Bento Box 7 */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    className="md:col-span-4 grid grid-cols-1 md:grid-cols-3 gap-6 mt-6"
                >
                    <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} className="h-full glass rounded-3xl p-8 relative overflow-hidden group">
                        <div className="absolute top-[-50px] right-[-50px] w-32 h-32 bg-purple-500/20 rounded-full blur-2xl group-hover:bg-purple-500/30 transition-colors duration-500" />
                        <h3 className="text-xl font-bold mb-3 text-foreground">Continuous Learning</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed relative z-10">
                            When I'm not coding, I'm deep-diving into research papers on generative AI, participating in hackathons, and constantly pushing the boundaries of what I can build next.
                        </p>
                    </Tilt>

                    <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} className="h-full glass rounded-3xl p-8 relative overflow-hidden group">
                        <div className="absolute top-[-50px] right-[-50px] w-32 h-32 bg-pink-500/20 rounded-full blur-2xl group-hover:bg-pink-500/30 transition-colors duration-500" />
                        <h3 className="text-xl font-bold mb-3 text-foreground">Design Thinking</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed relative z-10">
                            I don't just write code; I design systems. I believe in pixel-perfect UI, seamless UX, and architecture that scales gracefully under pressure.
                        </p>
                    </Tilt>

                    <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} className="h-full glass rounded-3xl p-8 relative overflow-hidden group flex flex-col justify-center items-center text-center">
                        <h3 className="text-2xl font-bold text-foreground mb-2">Let's Build</h3>
                        <a href="/contact" className="text-primary hover:text-blue-300 font-medium transition-colors border-b border-primary/30 hover:border-blue-300 pb-1">
                            Start a Conversation →
                        </a>
                    </Tilt>
                </motion.div>

            </div>
        </section>
    );
};

export default About;
