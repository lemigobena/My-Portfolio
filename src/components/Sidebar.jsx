import React, { useState, useEffect } from 'react';
import { Home, User, FolderGit2, Code2, Briefcase, Trophy, FileText, Mail, Menu, X } from 'lucide-react';
import {
    FaGithub,
    FaLinkedinIn,
    FaXTwitter,
    FaEnvelope
} from 'react-icons/fa6';
import { useLocation, useNavigate } from 'react-router-dom';

const sidebarItems = [
    { id: 'hero', name: 'Home', icon: Home, path: '/', hash: '#hero' },
    { id: 'about', name: 'About', icon: User, path: '/about', hash: '#about' },
    { id: 'experience', name: 'Experience', icon: Briefcase, path: '/experience', hash: '#experience' },
    { id: 'portfolio', name: 'Projects', icon: FolderGit2, path: '/projects', hash: '#portfolio' },
    { id: 'skills', name: 'Skills', icon: Code2, path: '/skills', hash: '#skills' },
    { id: 'journey', name: 'Journey', icon: Trophy, path: '/experience', hash: '#journey' },
    { id: 'contact', name: 'Contact', icon: Mail, path: '/contact', hash: '#contact' },
];

const socialLinks = [
    { name: 'GitHub', icon: FaGithub, url: 'https://github.com/lemigobena' },
    { name: 'LinkedIn', icon: FaLinkedinIn, url: 'https://linkedin.com/in/lemigobena' },
    { name: 'X (Twitter)', icon: FaXTwitter, url: 'https://x.com/lemigobena' },
    { name: 'Email', icon: FaEnvelope, url: 'mailto:lemigobena12@gmail.com', isMail: true },
];

const Sidebar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [activeItem, setActiveItem] = useState('hero');
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (location.pathname === '/') {
                const sectionIds = ['hero', 'about', 'experience', 'portfolio', 'skills', 'journey', 'contact'];
                for (const id of sectionIds) {
                    const el = document.getElementById(id);
                    if (el) {
                        const rect = el.getBoundingClientRect();
                        if (rect.top <= 250 && rect.bottom >= 200) {
                            setActiveItem(id);
                            break;
                        }
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, [location.pathname]);

    const handleClick = (item) => {
        setIsMobileOpen(false);
        if (item.isDownload) {
            window.open(item.path, '_blank', 'noopener,noreferrer');
            return;
        }

        setActiveItem(item.id);

        if (location.pathname === '/' && item.hash) {
            const el = document.querySelector(item.hash);
            if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
                return;
            }
        }

        navigate(item.path);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            {/* Desktop Fixed Left Sidebar */}
            <aside
                className="hidden md:flex fixed top-0 left-0 bottom-0 w-[76px] lg:w-[84px] z-50 bg-[#F7F7F8] border-r border-[#E5E7EB] flex-col items-center justify-between py-3.5 select-none overflow-y-auto scrollbar-hide"
                aria-label="Main Navigation"
            >
                {/* Top Logo Monogram & Name */}
                <div
                    onClick={() => handleClick(sidebarItems[0])}
                    className="flex flex-col items-center cursor-pointer group shrink-0 pt-0.5"
                    title="Lemi Gobena Portfolio"
                >
                    <div className="w-8 h-8 flex items-center justify-center transition-transform group-hover:scale-105">
                        <img
                            src={`${import.meta.env.BASE_URL}Images/lg_logo_vector.png`}
                            alt="LG Logo"
                            className="w-7 h-auto object-contain"
                        />
                    </div>
                    <span className="text-[10px] lg:text-[11px] font-black tracking-widest text-[#111827] mt-1 font-sans">
                        LEMI.
                    </span>
                </div>

                {/* Middle Vertical Navigation Tabs: Centered between the lowest edge of logo and top edge of socials */}
                <nav className="flex flex-col items-center gap-1.5 my-auto w-full px-1.5 shrink-0" aria-label="Sections">
                    {sidebarItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = activeItem === item.id;

                        return (
                            <button
                                key={item.id}
                                onClick={() => handleClick(item)}
                                className={`w-full py-1.5 px-1 rounded-xl flex flex-col items-center justify-center transition-all duration-200 cursor-pointer group ${isActive
                                        ? 'bg-[#E5E7EB] text-[#111827] shadow-xs'
                                        : 'text-[#6B7280] hover:text-[#111827] hover:bg-[#EAEAEA]/80'
                                    }`}
                                aria-label={item.name}
                                title={item.name}
                            >
                                <Icon
                                    size={18}
                                    strokeWidth={isActive ? 2.5 : 2}
                                    className={`transition-transform duration-200 group-hover:scale-110 ${isActive ? "fill-current" : ""}`}
                                />

                                {/* Label Underneath Icon */}
                                <span className={`text-[9.5px] lg:text-[10.5px] leading-none mt-1 text-center tracking-tight truncate max-w-full ${isActive ? 'font-bold text-[#111827]' : 'font-medium text-[#6B7280] group-hover:text-[#111827]'
                                    }`}>
                                    {item.name}
                                </span>
                            </button>
                        );
                    })}
                </nav>

                {/* Bottom Social Links: Ordered Downwards (Vertically Stacked) */}
                <div className="flex flex-col items-center gap-1.5 w-full pt-2.5 pb-1 border-t border-[#E5E7EB] shrink-0">
                    {socialLinks.map((social) => {
                        const Icon = social.icon;
                        return (
                            <a
                                key={social.name}
                                href={social.url}
                                target={social.isMail ? undefined : "_blank"}
                                rel={social.isMail ? undefined : "noopener noreferrer"}
                                className="w-7 h-7 rounded-lg flex items-center justify-center text-[#6B7280] hover:text-[#111827] hover:bg-[#EAEAEA] transition-all duration-200 cursor-pointer group"
                                aria-label={social.name}
                            >
                                <Icon size={14} className="transition-transform group-hover:scale-110" />
                            </a>
                        );
                    })}
                </div>
            </aside>

            {/* Mobile Header Bar (< md screens) */}
            <header className="md:hidden fixed top-0 left-0 right-0 h-14 bg-[#F7F7F8]/95 backdrop-blur-md border-b border-[#E5E7EB] z-50 px-4 flex items-center justify-between">
                <div
                    onClick={() => handleClick(sidebarItems[0])}
                    className="flex items-center gap-2 cursor-pointer"
                >
                    <img
                        src={`${import.meta.env.BASE_URL}Images/lg_logo_vector.png`}
                        alt="LG Logo"
                        className="w-6 h-auto object-contain"
                    />
                    <span className="text-xs font-black tracking-wider text-[#111827]">
                        LEMI.
                    </span>
                </div>

                <button
                    onClick={() => setIsMobileOpen(!isMobileOpen)}
                    className="p-2 rounded-lg text-[#111827] hover:bg-gray-200 transition-colors"
                    aria-label="Toggle Navigation Menu"
                >
                    {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
            </header>

            {/* Mobile Drawer */}
            {isMobileOpen && (
                <div className="md:hidden fixed inset-0 z-40 bg-black/40 backdrop-blur-xs flex justify-end" onClick={() => setIsMobileOpen(false)}>
                    <div
                        className="w-72 bg-[#F7F7F8] h-full shadow-2xl p-6 flex flex-col justify-between overflow-y-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="space-y-3 pt-12">
                            {sidebarItems.map((item) => {
                                const Icon = item.icon;
                                const isActive = activeItem === item.id;
                                return (
                                    <button
                                        key={item.id}
                                        onClick={() => handleClick(item)}
                                        className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors ${isActive
                                                ? 'bg-[#111827] text-white'
                                                : 'text-[#374151] hover:bg-gray-200'
                                            }`}
                                    >
                                        <Icon size={18} />
                                        <span>{item.name}</span>
                                    </button>
                                );
                            })}
                        </div>
                        <div className="space-y-3 pt-6 border-t border-[#E5E7EB]">
                            <div className="flex items-center justify-center gap-3">
                                {socialLinks.map((social) => {
                                    const Icon = social.icon;
                                    return (
                                        <a
                                            key={social.name}
                                            href={social.url}
                                            target={social.isMail ? undefined : "_blank"}
                                            rel={social.isMail ? undefined : "noopener noreferrer"}
                                            className="p-2.5 rounded-xl text-[#4B5563] hover:text-[#111827] hover:bg-gray-200 transition-colors flex items-center justify-center bg-white/70 border border-gray-200/60 shadow-2xs"
                                            aria-label={social.name}
                                        >
                                            <Icon size={17} />
                                        </a>
                                    );
                                })}
                            </div>
                            <div className="text-[11px] text-gray-500 font-mono text-center pb-2">
                                Lemi Gobena • Portfolio
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Sidebar;
