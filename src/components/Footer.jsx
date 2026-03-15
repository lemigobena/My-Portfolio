import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <footer className="w-full border-t border-foreground/10 mt-20">
            <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center md:items-start"
                >
                    <span className="text-2xl font-bold tracking-tighter text-gradient mb-2">ALIVE.</span>
                    <p className="text-muted-foreground text-sm text-center md:text-left">
                        Building digital experiences with passion & precision.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap justify-center gap-6 text-muted-foreground"
                >
                    <a href="https://github.com/lemigobena" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">GitHub</a>
                    <a href="https://linkedin.com/in/lemi-gobena" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">LinkedIn</a>
                    <a href="https://twitter.com/lemigobena" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Twitter</a>
                    <a href="https://t.me/lemigobena" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Telegram</a>
                    <a href="https://instagram.com/lemigo12" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Instagram</a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-muted-foreground text-sm"
                >
                    &copy; {new Date().getFullYear()} ALIVE. All rights reserved.
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;
