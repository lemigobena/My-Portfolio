import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ThemeSwitcher from '../components/ThemeSwitcher';

const MainLayout = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div
            className="min-h-screen flex flex-col relative overflow-hidden selection:bg-primary/30 font-sans"
            style={{ backgroundColor: "hsl(var(--background))", color: "hsl(var(--foreground))" }}
        >
            <div className="fixed inset-0 z-[-2] h-full w-full bg-grid-pattern opacity-30"></div>

            {/* Scroll Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-purple-500 to-pink-500 origin-left z-[100]"
                style={{ scaleX }}
            />

            {/* Mouse Follower Glow */}
            <motion.div
                className="fixed top-0 left-0 w-[500px] h-[500px] rounded-full mix-blend-screen pointer-events-none z-0 hidden lg:block"
                animate={{
                    x: mousePosition.x - 250,
                    y: mousePosition.y - 250,
                }}
                transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
                style={{
                    background: "radial-gradient(circle, rgba(59,130,246,0.12) 0%, rgba(147,51,234,0.04) 40%, transparent 70%)"
                }}
            />

            {/* Dynamic Background Gradients */}
            <div className="fixed inset-0 z-[-1] pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-900/10 blur-[150px] rounded-full mix-blend-screen opacity-50 animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-900/10 blur-[150px] rounded-full mix-blend-screen opacity-50 animate-pulse" style={{ animationDelay: "2s" }} />
            </div>

            <Navbar />

            <main className="flex-1 w-full max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 relative z-10">
                <Outlet />
            </main>

            <ThemeSwitcher />
            <Footer />
        </div>
    );
};

export default MainLayout;
