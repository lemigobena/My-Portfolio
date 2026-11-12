import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import { getSeoForPath } from '../data/seoRoutes';

/**
 * MainLayout
 * - Fixed left sidebar navigation with LG monogram, LEMI. and vertical icon stack
 * - Smooth scroll progress indicator
 * - Offset main content area for desktop sidebar
 */
const MainLayout = () => {
    const location = useLocation();
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    useEffect(() => {
        const seo = getSeoForPath(location.pathname);
        document.title = seo.title;

        const updateTag = (selector, attr, value) => {
            const el = document.head.querySelector(selector);
            if (el) el.setAttribute(attr, value);
        };

        updateTag('link[rel="canonical"]', 'href', seo.canonical);
        updateTag('meta[name="title"]', 'content', seo.title);
        updateTag('meta[name="description"]', 'content', seo.description);
        updateTag('meta[property="og:url"]', 'content', seo.canonical);
        updateTag('meta[property="og:title"]', 'content', seo.title);
        updateTag('meta[property="og:description"]', 'content', seo.description);
        updateTag('meta[name="twitter:url"]', 'content', seo.canonical);
        updateTag('meta[name="twitter:title"]', 'content', seo.title);
        updateTag('meta[name="twitter:description"]', 'content', seo.description);
    }, [location.pathname]);

    useEffect(() => {
        if (location.hash) {
            const el = document.querySelector(location.hash);
            if (el) {
                setTimeout(() => {
                    el.scrollIntoView({ behavior: 'auto' });
                }, 100);
            }
        }
    }, [location.hash, location.pathname]);

    return (
        <div className="min-h-screen flex flex-col relative selection:bg-[#111827] selection:text-white font-sans text-[#111827] bg-[#F1F1F1]">
            {/* Skip to Content for Accessibility */}
            <a 
                href="#main-content" 
                className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:px-5 focus:py-2.5 focus:bg-[#111827] focus:text-white focus:rounded-full focus:font-mono focus:text-xs focus:font-bold focus:shadow-xl"
            >
                Skip to content
            </a>

            {/* Top Minimal Scroll Progress Indicator */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-[2px] bg-[#111827] origin-left z-[100]"
                style={{ scaleX }}
            />

            {/* Vertical Left Sidebar (Desktop + Mobile Drawer) */}
            <Sidebar />

            {/* Main Content Area: Offset by sidebar width on desktop */}
            <main 
                id="main-content" 
                className="flex-1 w-full relative z-10 overflow-x-hidden md:pl-[76px] lg:pl-[84px]"
            >
                <Outlet />
            </main>

            {/* Clean Footer (rendered for pages that do not have the integrated single-screen Contact+Footer) */}
            {location.pathname !== '/' && location.pathname !== '/contact' && (
                <div className="md:pl-[76px] lg:pl-[84px]">
                    <Footer />
                </div>
            )}
        </div>
    );
};

export default MainLayout;
