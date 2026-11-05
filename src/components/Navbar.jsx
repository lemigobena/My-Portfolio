import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const navLinks = [
    { name: 'Home', path: '/', hash: '#hero' },
    { name: 'About', path: '/about', hash: '#about' },
    { name: 'Experience', path: '/experience' },
    { name: 'Projects', path: '/projects', hash: '#portfolio' },
    { name: 'Skills', path: '/skills', hash: '#skills' },
    { name: 'Certificates', path: '/certificates' },
];

const Navbar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('Home');

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 40) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }

            if (location.pathname === '/') {
                const sections = [
                    { id: 'hero', name: 'Home' },
                    { id: 'about', name: 'About' },
                    { id: 'skills', name: 'Skills' },
                    { id: 'portfolio', name: 'Projects' },
                    { id: 'contact', name: 'Contact' },
                ];
                for (const sec of sections) {
                    const el = document.getElementById(sec.id);
                    if (el) {
                        const rect = el.getBoundingClientRect();
                        if (rect.top <= 200 && rect.bottom >= 200) {
                            setActiveSection(sec.name);
                            break;
                        }
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [location.pathname]);

    useEffect(() => {
        const match = navLinks.find(link => link.path === location.pathname);
        if (match) {
            setActiveSection(match.name);
        }
    }, [location.pathname]);

    const handleLinkClick = (link) => {
        setIsMobileMenuOpen(false);
        setActiveSection(link.name);

        if (location.pathname === '/' && link.hash) {
            const el = document.querySelector(link.hash);
            if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
                return;
            }
        }
        navigate(link.path);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleTalkClick = () => {
        setIsMobileMenuOpen(false);
        if (location.pathname === '/') {
            const el = document.querySelector('#contact');
            if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
                return;
            }
        }
        navigate('/contact');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 sm:pt-5 px-4 pointer-events-none">
            <motion.nav
                initial={{ y: -80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className={`pointer-events-auto mx-auto rounded-full px-5 py-2.5 sm:px-6 sm:py-3 transition-all duration-300 w-full max-w-4xl flex items-center justify-between bg-[#111827]/90 backdrop-blur-xl border border-white/10 text-white shadow-2xl shadow-black/25 ${
                    isScrolled ? 'shadow-black/40 border-white/15 bg-[#111827]/95' : ''
                }`}
                aria-label="Main Navigation"
            >
                {/* Brand / Logo */}
                <Link
                    to="/"
                    onClick={() => handleLinkClick(navLinks[0])}
                    className="flex items-center gap-2.5 group cursor-pointer"
                >
                    <img
                        src={`${import.meta.env.BASE_URL}Images/lemi_logo.png`}
                        alt="Lemi Logo"
                        className="w-8 h-8 sm:w-9 sm:h-9 object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                    <span className="text-base sm:text-lg font-bold tracking-tight text-white font-sans hidden sm:block">
                        LEMI<span className="text-[#FF4D2E]">.</span>
                    </span>
                </Link>

                {/* Desktop Nav Links */}
                <ul className="hidden md:flex items-center gap-1">
                    {navLinks.map((link) => {
                        const isActive = activeSection === link.name;
                        return (
                            <li key={link.name}>
                                <button
                                    onClick={() => handleLinkClick(link)}
                                    className={`relative px-3.5 py-1.5 text-xs sm:text-sm font-medium transition-colors rounded-full cursor-pointer ${
                                        isActive
                                            ? 'text-white'
                                            : 'text-gray-300 hover:text-white'
                                    }`}
                                >
                                    {isActive && (
                                        <motion.div
                                            layoutId="navbar-indicator"
                                            className="absolute inset-0 bg-white/15 rounded-full"
                                            transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                                        />
                                    )}
                                    <span className="relative z-10">{link.name}</span>
                                </button>
                            </li>
                        );
                    })}
                </ul>

                {/* CTA Connect Button */}
                <div className="hidden md:flex items-center gap-3">
                    <button
                        onClick={handleTalkClick}
                        className="px-5 py-2 text-xs sm:text-sm font-semibold text-white bg-[#FF4D2E] hover:bg-[#e03f22] rounded-full transition-all shadow-md shadow-[#FF4D2E]/25 hover:scale-105 active:scale-95 cursor-pointer"
                    >
                        Let's Talk
                    </button>
                </div>

                {/* Mobile Menu Toggle Button */}
                <button
                    className="md:hidden text-gray-300 hover:text-white p-1.5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle navigation menu"
                >
                    {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
            </motion.nav>

            {/* Mobile Menu Dropdown */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -15, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -15, scale: 0.98 }}
                        transition={{ duration: 0.2 }}
                        className="pointer-events-auto absolute top-20 left-4 right-4 bg-[#111827]/98 backdrop-blur-2xl border border-white/10 rounded-2xl p-5 flex flex-col gap-2 md:hidden shadow-2xl z-50 text-white"
                    >
                        {navLinks.map((link) => {
                            const isActive = activeSection === link.name;
                            return (
                                <button
                                    key={link.name}
                                    onClick={() => handleLinkClick(link)}
                                    className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-colors flex items-center justify-between ${
                                        isActive
                                            ? 'bg-white/15 text-white font-bold'
                                            : 'text-gray-300 hover:bg-white/10 hover:text-white'
                                    }`}
                                >
                                    <span>{link.name}</span>
                                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#FF4D2E]" />}
                                </button>
                            );
                        })}

                        <div className="pt-3 mt-1 border-t border-white/10">
                            <button
                                onClick={handleTalkClick}
                                className="w-full py-2.5 text-center text-sm font-semibold text-white bg-[#FF4D2E] hover:bg-[#e03f22] rounded-xl transition-all shadow-md shadow-[#FF4D2E]/25"
                            >
                                Let's Talk
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;
