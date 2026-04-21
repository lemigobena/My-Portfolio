import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, Plus, Pencil, Trash2 } from 'lucide-react';

const employmentHistory = [
    {
        id: 1,
        role: "Junior Full-Stack Developer",
        company: "Mereb Technologies",
        period: "March 2026 - Present",
        description: "Contributed to multiple company website projects at Mereb Technologies, working on both frontend and backend development. Participated in feature development, bug fixing, and improving performance while collaborating with the team to deliver scalable, high-quality solutions.",
        technologies: ["Fullstack Developer"]
    },
    {
        id: 2,
        role: "Full-stack Developer",
        company: "Tech Med",
        period: "January 2026 - Present",
        description: "Spearheaded the development of healthcare-oriented digital platforms, focusing on building intuitive patient management systems and robust data architectures. Successfully integrated secure API endpoints and optimized frontend performance to enhance the overall digital experience for clinical workflows and client-facing applications.",
        technologies: ["Fullstack Developer", "Mobile App Developer"]
    }
];

const EmploymentHistory = () => {
    return (
        <section id="employment-history" className="py-12 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] -z-10 animate-pulse" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-[120px] -z-10 animate-pulse" style={{ animationDelay: '2s' }} />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass-card rounded-[2.5rem] p-8 md:p-14 border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.3)] relative overflow-hidden"
            >
                <div className="absolute top-0 right-0 w-80 h-80 bg-primary/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
                
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-16">
                    <div className="flex items-center gap-5">
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                            <div className="relative p-4 bg-background/50 backdrop-blur-xl rounded-2xl border border-white/10">
                                <Briefcase className="text-primary" size={32} />
                            </div>
                        </div>
                        <div>
                            <h2 className="text-4xl md:text-5xl font-black tracking-tight">
                                Employment <span className="text-gradient-accent">History</span>
                            </h2>
                            <p className="text-muted-foreground text-lg mt-1 font-light">My professional journey in the industry.</p>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {employmentHistory.map((job, index) => (
                        <motion.div
                            key={job.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                            className="h-full group"
                        >
                            <div className="h-full glass border border-white/5 rounded-[2rem] p-8 hover:border-primary/30 hover:bg-white/[0.03] transition-all duration-500 relative flex flex-col shadow-xl">
                                <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 blur-3xl rounded-full group-hover:bg-primary/10 transition-colors duration-500" />
                                
                                <div className="flex flex-col gap-5 mb-8">
                                    <div className="space-y-1">
                                        <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                                            {job.role}
                                        </h3>
                                        <div className="text-xl text-muted-foreground font-medium flex items-center gap-2">
                                            <span className="w-2 h-2 bg-primary rounded-full" />
                                            {job.company}
                                        </div>
                                    </div>
                                    
                                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-semibold border border-primary/20 self-start">
                                        <Calendar size={14} />
                                        <span>{job.period}</span>
                                    </div>
                                </div>
                                
                                <p className="text-muted-foreground leading-relaxed text-lg font-light flex-1 mb-8">
                                    {job.description}
                                </p>

                                <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
                                    {job.technologies.map(tech => (
                                        <span key={tech} className="px-3 py-1 bg-white/5 text-xs font-medium rounded-lg text-muted-foreground group-hover:text-foreground transition-colors border border-white/5">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default EmploymentHistory;
