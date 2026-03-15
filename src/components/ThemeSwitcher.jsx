import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

const ThemeSwitcher = () => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        if (typeof window !== 'undefined') {
            const savedMode = localStorage.getItem('portfolio-mode');
            return savedMode === 'light' ? false : true;
        }
        return true;
    });

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        // Cleanup old document-level theme attribute since we removed color modes
        document.documentElement.removeAttribute('data-theme');
    }, [isDarkMode]);

    const toggleMode = () => {
        const newMode = !isDarkMode;
        setIsDarkMode(newMode);

        if (newMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('portfolio-mode', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('portfolio-mode', 'light');
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-[100]">
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleMode}
                className="w-12 h-12 rounded-full glass flex items-center justify-center text-foreground shadow-lg shadow-primary/20 border border-border hover:border-foreground/20 transition-all cursor-pointer relative group bg-card"
                aria-label={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
                <AnimatePresence mode="wait">
                    {isDarkMode ? (
                        <motion.div
                            key="moon"
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 20, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="absolute"
                        >
                            <Moon size={20} className="group-hover:text-primary transition-colors text-primary" />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="sun"
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 20, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="absolute"
                        >
                            <Sun size={20} className="group-hover:text-amber-500 transition-colors text-amber-500" />
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Ping effect behind the button */}
                <span className="absolute inset-0 rounded-full bg-primary/10 blur-md pointer-events-none group-hover:bg-primary/30 transition-colors" />
            </motion.button>
        </div>
    );
};

export default ThemeSwitcher;
