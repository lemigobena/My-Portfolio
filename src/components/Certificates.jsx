import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { Award, ExternalLink, X, CheckCircle, Calendar } from 'lucide-react';
import { allCertificates } from '../data/certificates';

const Certificates = () => {
    const [selectedCert, setSelectedCert] = useState(null);

    return (
        <section id="certificates" className="py-24 relative">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center mb-20"
            >
                <h2 className="text-4xl md:text-5xl font-black mb-4">
                    Professional <span className="text-gradient">Validation</span>
                </h2>
                <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
                <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                    A collection of verified skills from world-class engineering platforms.
                </p>
            </motion.div>

            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {allCertificates.map((cert, index) => (
                    <motion.div
                        key={cert.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.05 }}
                        onClick={() => setSelectedCert(cert)}
                        className="cursor-pointer group"
                    >
                        <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} className="h-full glass rounded-2xl overflow-hidden border border-white/5 hover:border-primary/40 transition-all duration-500 shadow-xl group-hover:shadow-primary/10">
                            <div className="relative h-44 overflow-hidden bg-black/40 flex items-center justify-center">
                                <img src={cert.image} alt={cert.title} className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-700 p-2" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                                    <span className={`text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-tighter ${cert.type === 'Udemy' ? 'bg-primary/20 text-primary' : 'bg-purple-500/20 text-purple-400'}`}>
                                        {cert.issuer}
                                    </span>
                                </div>
                            </div>
                            <div className="p-4">
                                <h3 className="text-sm font-bold truncate mb-1 group-hover:text-primary transition-colors">{cert.title}</h3>
                                <p className="text-[10px] text-muted-foreground line-clamp-2 leading-relaxed">{cert.description}</p>
                            </div>
                        </Tilt>
                    </motion.div>
                ))}
            </div>

            {/* Modal */}
            <AnimatePresence>
                {selectedCert && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedCert(null)}
                            className="absolute inset-0 bg-black/90 backdrop-blur-md"
                        />
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            className="relative w-full max-w-4xl glass-card rounded-[40px] overflow-hidden border border-white/10 shadow-2xl"
                        >
                            <button
                                onClick={() => setSelectedCert(null)}
                                className="absolute top-6 right-6 p-2 rounded-full glass hover:bg-white/10 transition-colors z-50"
                            >
                                <X size={24} />
                            </button>

                            <div className="grid md:grid-cols-5 h-full min-h-[500px]">
                                <div className="md:col-span-3 relative bg-black/20 flex items-center justify-center p-8 border-r border-white/5">
                                    <img src={selectedCert.image} alt={selectedCert.title} className="max-w-full max-h-full object-contain shadow-2xl rounded-lg" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                                </div>

                                <div className="md:col-span-2 p-8 md:p-12 flex flex-col justify-center">
                                    <div className="flex items-center gap-2 text-primary font-bold mb-4">
                                        <Award size={20} />
                                        <span className="uppercase tracking-widest text-xs">Official Certification</span>
                                    </div>
                                    <h2 className="text-3xl font-black mb-4 leading-tight">{selectedCert.title}</h2>
                                    <p className="text-muted-foreground mb-8 leading-relaxed italic">
                                        "{selectedCert.description}"
                                    </p>
                                    
                                    <div className="space-y-4 mb-8">
                                        <div className="flex items-center gap-3 text-sm">
                                            <CheckCircle className="text-primary" size={18} />
                                            <span className="text-muted-foreground">Issuer: <span className="text-foreground font-semibold">{selectedCert.issuer}</span></span>
                                        </div>
                                        <div className="flex items-center gap-3 text-sm">
                                            <Calendar className="text-primary" size={18} />
                                            <span className="text-muted-foreground">Certified: <span className="text-foreground font-semibold">{selectedCert.date}</span></span>
                                        </div>
                                    </div>

                                    {selectedCert.link ? (
                                        <a
                                            href={selectedCert.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-full py-4 bg-primary text-foreground rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-primary/80 transition-all shadow-lg shadow-primary/20"
                                        >
                                            Verify Certificate <ExternalLink size={18} />
                                        </a>
                                    ) : (
                                        <div className="space-y-4">
                                            <a 
                                                href={selectedCert.document || selectedCert.image} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="w-full py-4 bg-primary text-foreground rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-primary/80 transition-all shadow-lg shadow-primary/20"
                                            >
                                                View PDF Document <ExternalLink size={18} />
                                            </a>
                                        </div>
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

export default Certificates;
