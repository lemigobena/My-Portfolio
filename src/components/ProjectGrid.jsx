import React, { useState } from 'react';
import { projects } from '../data/projects';
import { Github, ExternalLink, Code2, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import TechIcon from './TechIcon';

const categories = ['All', 'Web', 'App'];

const ProjectGrid = () => {
    const [filter, setFilter] = useState('All');
    const filteredProjects = projects.filter(project => {
        if (filter === 'All') return true;
        return project.category === filter;
    });

    return (
        <section id="projects" className="section container">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="section-title"
            >
                Featured Projects
            </motion.h2>

            <div className="flex justify-center gap-4 mb-12">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setFilter(category)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${filter === category
                            ? 'bg-primary text-foreground border border-primary-light'
                            : 'bg-foreground/5 text-muted-foreground hover:bg-foreground/10 hover:text-foreground border border-foreground/10'
                            }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <AnimatePresence>
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                            layout
                            className="content-card flex flex-col h-full"
                        >
                            <div className="mb-6 rounded-xl overflow-hidden aspect-video bg-foreground/5 relative flex items-center justify-center">
                                {project.image ? (
                                    <img 
                                        src={project.image} 
                                        alt={project.title} 
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                ) : (
                                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-purple-500/10 flex items-center justify-center">
                                        <Code2 size={48} className="text-foreground/20" />
                                    </div>
                                )}
                            </div>

                            <h3 className="text-2xl font-bold mb-3 text-foreground">{project.title}</h3>
                            <div className="flex-grow space-y-4 mb-6">
                                <div>
                                    <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-1">Problem</h4>
                                    <p className="text-muted-foreground text-sm leading-relaxed">{project.problem}</p>
                                </div>
                                <div>
                                    <h4 className="text-sm font-semibold text-green-400 uppercase tracking-wider mb-1">Solution</h4>
                                    <p className="text-muted-foreground text-sm leading-relaxed">{project.solution}</p>
                                </div>
                                <div>
                                    <h4 className="text-sm font-semibold text-purple-400 uppercase tracking-wider mb-1">Architecture</h4>
                                    <p className="text-muted-foreground text-xs leading-relaxed italic">{project.architecture}</p>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.tags.map(tag => (
                                    <TechIcon key={tag} name={tag} />
                                ))}
                            </div>

                            <div className="flex justify-between items-center pt-4 border-t border-foreground/5">
                                <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                                    <Github size={18} />
                                    <span>Code</span>
                                </a>
                                {project.category === 'App' && (project.link?.includes('drive.google.com') || project.link?.endsWith('.apk')) ? (
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-primary hover:text-primary-light transition-colors font-bold">
                                        <Download size={18} />
                                        <span>Download APK</span>
                                    </a>
                                ) : project.link?.includes('figma.com') ? (
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300 transition-colors font-bold">
                                        <ExternalLink size={18} />
                                        <span>Figma Design</span>
                                    </a>
                                ) : project.link && project.link !== '#' && (
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors">
                                        <span>Live Demo</span>
                                        <ExternalLink size={18} />
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>
        </section>
    );
};

export default ProjectGrid;
