import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaLinkedinIn, FaTelegram, FaXTwitter, FaGithub, FaUpwork } from 'react-icons/fa6';
import { Mail } from 'lucide-react';

const Footer = ({ variant = 'default' }) => {
    const location = useLocation();
    const navigate = useNavigate();

    // Compact footer for the single-screen ending (homepage and contact page)
    if (variant === 'compact') {
        return (
            <footer 
                className="w-full border-t border-neutral-200/90 pt-3 pb-2 text-neutral-500 text-xs font-mono select-text shrink-0 mt-auto"
                aria-label="Site Footer"
            >
                <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-3">
                    {/* Left: Brand & Provenance */}
                    <div className="flex items-center gap-2.5 text-[#111827]">
                        <span className="font-bold font-display text-sm tracking-tight">LEMI GOBENA JALETA</span>
                        <span className="text-neutral-300">•</span>
                        <span className="text-neutral-500 text-xs font-normal">
                            &copy; {new Date().getFullYear()}
                        </span>
                    </div>

                    {/* Right: Social Icons (Icons used instead of names for all; on smaller screens < md when left navbar is hidden, shows ALL socials) */}
                    <div className="flex items-center gap-2">
                        {/* Extra socials shown on smaller screens (< md) where left navbar is not visible */}
                        <a 
                            href="https://github.com/lemigobena" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="md:hidden w-8 h-8 rounded-lg bg-neutral-100 hover:bg-[#111827] text-neutral-600 hover:text-white border border-neutral-200 transition-all flex items-center justify-center shadow-2xs"
                            aria-label="GitHub"
                            title="GitHub"
                        >
                            <FaGithub size={13} />
                        </a>
                        <a 
                            href="https://www.upwork.com/freelancers/~01b4b47e3004d3a932?mp_source=share" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="md:hidden w-8 h-8 rounded-lg bg-emerald-50 hover:bg-[#14a800] text-[#14a800] hover:text-white border border-emerald-200 transition-all flex items-center justify-center shadow-2xs"
                            aria-label="Hire on Upwork"
                            title="Upwork"
                        >
                            <FaUpwork size={13} />
                        </a>
                        <a 
                            href="mailto:lemigobena12@gmail.com" 
                            className="md:hidden w-8 h-8 rounded-lg bg-neutral-100 hover:bg-[#111827] text-neutral-600 hover:text-white border border-neutral-200 transition-all flex items-center justify-center shadow-2xs"
                            aria-label="Email"
                            title="Email"
                        >
                            <Mail size={13} />
                        </a>

                        {/* Always visible social icons */}
                        <a 
                            href="https://linkedin.com/in/lemigobena" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="w-8 h-8 rounded-lg bg-neutral-100 hover:bg-[#0077B5] text-neutral-600 hover:text-white border border-neutral-200 transition-all flex items-center justify-center shadow-2xs"
                            aria-label="LinkedIn"
                            title="LinkedIn"
                        >
                            <FaLinkedinIn size={13} />
                        </a>
                        <a 
                            href="https://t.me/lemigobena" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="w-8 h-8 rounded-lg bg-neutral-100 hover:bg-sky-500 text-neutral-600 hover:text-white border border-neutral-200 transition-all flex items-center justify-center shadow-2xs"
                            aria-label="Telegram"
                            title="Telegram"
                        >
                            <FaTelegram size={13} />
                        </a>
                        <a 
                            href="https://x.com/lemigobena" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="w-8 h-8 rounded-lg bg-neutral-100 hover:bg-[#111827] text-neutral-600 hover:text-white border border-neutral-200 transition-all flex items-center justify-center shadow-2xs"
                            aria-label="X (Twitter)"
                            title="X (Twitter)"
                        >
                            <FaXTwitter size={13} />
                        </a>
                    </div>
                </div>
            </footer>
        );
    }

    // Default Footer (for subpages)
    return (
        <footer 
            className="w-full border-t border-neutral-200/90 bg-white/95 text-[#111827] mt-16 sm:mt-24 select-text"
            aria-label="Site Footer"
        >
            <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12 py-10 sm:py-12">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-8 border-b border-neutral-200/90">
                    <div>
                        <span className="text-lg font-black tracking-tight font-display text-[#111827] block">
                            LEMI GOBENA JALETA
                        </span>
                        <p className="text-xs font-mono text-neutral-500 mt-1">
                            Full-Stack Engineer @ Mereb Technologies
                        </p>
                    </div>

                    <div className="flex items-center gap-2.5">
                        {/* Extra socials shown on smaller screens (< md) where left navbar is not visible */}
                        <a 
                            href="https://github.com/lemigobena" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="md:hidden w-9 h-9 rounded-xl bg-neutral-100 hover:bg-[#111827] hover:text-white text-[#111827] border border-neutral-200 transition-all flex items-center justify-center shadow-2xs"
                            aria-label="GitHub"
                            title="GitHub"
                        >
                            <FaGithub size={15} />
                        </a>
                        <a 
                            href="https://www.upwork.com/freelancers/~01b4b47e3004d3a932?mp_source=share" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="md:hidden w-9 h-9 rounded-xl bg-emerald-50 hover:bg-[#14a800] text-[#14a800] hover:text-white border border-emerald-200 transition-all flex items-center justify-center shadow-2xs"
                            aria-label="Hire on Upwork"
                            title="Upwork"
                        >
                            <FaUpwork size={15} />
                        </a>
                        <a 
                            href="mailto:lemigobena12@gmail.com" 
                            className="md:hidden w-9 h-9 rounded-xl bg-neutral-100 hover:bg-[#111827] hover:text-white text-[#111827] border border-neutral-200 transition-all flex items-center justify-center shadow-2xs"
                            aria-label="Email"
                            title="Email"
                        >
                            <Mail size={15} />
                        </a>

                        {/* Always visible social icons */}
                        <a 
                            href="https://linkedin.com/in/lemigobena" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="w-9 h-9 rounded-xl bg-neutral-100 hover:bg-[#0077B5] hover:text-white text-[#111827] border border-neutral-200 transition-all flex items-center justify-center shadow-2xs"
                            aria-label="LinkedIn"
                            title="LinkedIn"
                        >
                            <FaLinkedinIn size={15} />
                        </a>
                        <a 
                            href="https://t.me/lemigobena" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="w-9 h-9 rounded-xl bg-sky-50 text-sky-600 hover:bg-sky-600 hover:text-white border border-neutral-200 transition-all flex items-center justify-center shadow-2xs"
                            aria-label="Telegram"
                            title="Telegram"
                        >
                            <FaTelegram size={15} />
                        </a>
                        <a 
                            href="https://x.com/lemigobena" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="w-9 h-9 rounded-xl bg-neutral-100 hover:bg-[#111827] hover:text-white text-[#111827] border border-neutral-200 transition-all flex items-center justify-center shadow-2xs"
                            aria-label="X (Twitter)"
                            title="X (Twitter)"
                        >
                            <FaXTwitter size={15} />
                        </a>
                    </div>
                </div>

                <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-500">
                    <div>
                        &copy; {new Date().getFullYear()} Lemi Gobena Jaleta. Built with React & Tailwind CSS.
                    </div>
                    <div className="text-[11px] text-neutral-400">
                        Addis Ababa, Ethiopia • ESSLCE Top 10 National Scorer
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
