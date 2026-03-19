import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { projects } from '../data/projects';
import { Github, ExternalLink, Code2, X, Download } from 'lucide-react';

const categories = ['All', 'Full-Stack', 'Mobile', 'AI & Blockchain', 'Engineering', 'Web Design'];

const Portfolio = ({ featuredOnly = false }) => {
    const [filter, setFilter] = useState('All');
    const [selectedProject, setSelectedProject] = useState(null);

    const displayProjects = featuredOnly 
        ? projects.filter(p => p.featured).slice(0, 3)
        : projects;

    const filteredProjects = displayProjects.filter(project => {
        if (filter === 'All') return true;
        return project.category === filter;
    });

    return (
        <section id="portfolio" className="py-24 relative">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
            >
                <h2 className="text-4xl md:text-5xl font-black mb-4">
                    {featuredOnly ? 'Featured' : 'My'} <span className="text-gradient">Work</span>
                </h2>
                <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
                <p className="text-muted-foreground max-w-2xl mx-auto text-lg mb-10">
                    {featuredOnly 
                        ? "A selection of my best-implemented digital solutions."
                        : "A collection of digital experiences I've crafted, focusing on performance, scalability, and design."}
                </p>
                <p className="text-muted-foreground max-w-2xl mx-auto text-lg mb-10">If you want to have an experience by logging into the exclusive projects please contact me. I'll send you the credentials instantly.</p><br>
                {/* Filters - Only show on full portfolio page */}
                {!featuredOnly && (
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setFilter(category)}
                                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${filter === category
                                    ? 'bg-primary text-foreground shadow-[0_0_15px_rgba(37,99,235,0.5)]'
                                    : 'glass text-muted-foreground hover:text-foreground hover:bg-foreground/10'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                )}
            </motion.div>

            {/* Projects Grid */}
            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <AnimatePresence mode="popLayout">
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            layout
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.4 }}
                            key={project.id}
                            onClick={() => setSelectedProject({ ...project, displayIndex: (index % 9) + 1 })}
                        >
                            <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} glareEnable={true} glareMaxOpacity={0.15} className="h-full glass rounded-3xl overflow-hidden group cursor-pointer flex flex-col">
                                <div className="relative h-56 overflow-hidden">
                                    <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 group-hover:bg-transparent transition-colors duration-500" />
                                    <img
                                        src={project.image || `/Images/portfolio/portfolio-${(index % 9) + 1}.jpg`}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                        alt={project.title}
                                    />

                                    {/* Hover overlay actions */}
                                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center gap-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                                        {project.github && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                onClick={(e) => e.stopPropagation()}
                                                className="p-3 bg-foreground/10 rounded-full hover:bg-primary hover:scale-110 transition-all text-foreground backdrop-blur-sm"
                                            >
                                                <Github size={24} />
                                            </a>
                                        )}
                                        {project.link && (
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                onClick={(e) => e.stopPropagation()}
                                                className="p-3 bg-foreground/10 rounded-full hover:bg-primary hover:scale-110 transition-all text-foreground backdrop-blur-sm"
                                            >
                                                {project.category === 'Mobile' ? <Download size={24} /> : <ExternalLink size={24} />}
                                            </a>
                                        )}
                                    </div>
                                </div>

                                <div className="p-6 flex-1 flex flex-col">
                                    <div className="flex items-center gap-2 mb-3">
                                        <Code2 size={16} className="text-primary" />
                                        <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                                            {project.category}
                                        </span>
                                    </div>

                                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h3>

                                    <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-foreground/10">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="text-xs text-muted-foreground bg-foreground/5 px-2 py-1 rounded-md">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </Tilt>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>

            {/* Project Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedProject(null)}
                            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="relative w-full max-w-4xl bg-card rounded-3xl overflow-hidden shadow-2xl z-10 border border-border flex flex-col md:flex-row max-h-[90vh]"
                        >
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-4 right-4 p-2 bg-background/50 hover:bg-background rounded-full transition-colors z-20 text-foreground"
                            >
                                <X size={24} />
                            </button>

                            <div className="w-full md:w-1/2 h-64 md:h-auto overflow-hidden">
                                <img
                                    src={selectedProject.image || `/Images/portfolio/portfolio-${selectedProject.displayIndex}.jpg`}
                                    className="w-full h-full object-cover"
                                    alt={selectedProject.title}
                                />
                            </div>

                            <div className="w-full md:w-1/2 p-8 overflow-y-auto">
                                <div className="flex items-center gap-2 mb-4">
                                    <Code2 size={20} className="text-primary" />
                                    <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                                        {selectedProject.category}
                                    </span>
                                </div>
                                <h3 className="text-3xl font-bold mb-4 text-foreground">{selectedProject.title}</h3>
                                <p className="text-muted-foreground mb-6">{selectedProject.description}</p>

                                {selectedProject.problem && (
                                    <div className="mb-4">
                                        <h4 className="font-bold mb-2 text-foreground">Problem</h4>
                                        <p className="text-sm text-muted-foreground">{selectedProject.problem}</p>
                                    </div>
                                )}
                                {selectedProject.solution && (
                                    <div className="mb-4">
                                        <h4 className="font-bold mb-2 text-foreground">Solution</h4>
                                        <p className="text-sm text-muted-foreground">{selectedProject.solution}</p>
                                    </div>
                                )}
                                {selectedProject.architecture && (
                                    <div className="mb-6">
                                        <h4 className="font-bold mb-2 text-foreground">Architecture</h4>
                                        <p className="text-sm text-muted-foreground">{selectedProject.architecture}</p>
                                    </div>
                                )}

                                <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                                    {selectedProject.tags.map(tag => (
                                        <span key={tag} className="text-xs text-muted-foreground bg-foreground/5 px-3 py-1.5 rounded-md">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-4">
                                    {selectedProject.link && (
                                        <a
                                            href={selectedProject.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 py-3 bg-primary text-primary-foreground text-center rounded-xl font-semibold hover:bg-primary/90 transition-colors"
                                        >
                                            {selectedProject.category === 'Mobile' ? 'Download App' : 'Live Demo'}
                                        </a>
                                    )}
                                    {selectedProject.github && (
                                        <a
                                            href={selectedProject.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 py-3 bg-foreground/10 text-foreground text-center rounded-xl font-semibold hover:bg-foreground/20 transition-colors flex items-center justify-center gap-2"
                                        >
                                            <Github size={20} /> Code
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
