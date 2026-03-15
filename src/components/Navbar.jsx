import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Skills', path: '/skills' },
    { name: 'Certificates', path: '/certificates' },
];

const Navbar = () => {
    const location = useLocation();
    const activeLink = navLinks.find(link => link.path === location.pathname)?.name || 'Home';
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLinkClick = () => {
        setIsMobileMenuOpen(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 flex justify-center mt-6 px-4">
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`glass mx-auto rounded-full px-6 py-3 transition-all duration-300 w-full max-w-4xl flex items-center justify-between ${isScrolled ? 'shadow-lg shadow-primary/10' : ''
                    }`}
            >
                <Link to="/" className="flex items-center gap-2 group" onClick={handleLinkClick}>
                    <img 
                        src="/Images/lemi_logo.png" 
                        alt="Lemi Logo" 
                        className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                    <span className="text-xl font-bold tracking-tighter text-gradient hidden sm:block">
                        LEMI.
                    </span>
                </Link>

                {/* Desktop Nav */}
                <ul className="hidden md:flex items-center gap-2">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <Link
                                to={link.path}
                                onClick={handleLinkClick}
                                className={`relative px-4 py-2 text-sm font-medium transition-colors ${activeLink === link.name ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
                                    }`}
                            >
                                {activeLink === link.name && (
                                    <motion.div
                                        layoutId="navbar-indicator"
                                        className="absolute inset-0 bg-foreground/10 rounded-full"
                                        transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                                    />
                                )}
                                <span className="relative z-10">{link.name}</span>
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Connect Button */}
                <div className="hidden md:block">
                    <Link
                        to="/contact"
                        onClick={handleLinkClick}
                        className="px-5 py-2.5 text-sm font-semibold text-foreground bg-primary hover:bg-primary rounded-full transition-colors shadow-lg shadow-primary/30"
                    >
                        Let's Talk
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-muted-foreground hover:text-foreground p-2"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-24 left-4 right-4 glass rounded-2xl p-6 flex flex-col items-center gap-6 md:hidden shadow-xl"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                onClick={handleLinkClick}
                                className={`text-lg font-medium ${activeLink === link.name ? 'text-foreground text-gradient' : 'text-muted-foreground'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;
