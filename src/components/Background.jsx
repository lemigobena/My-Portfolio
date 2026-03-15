import React, { useEffect, useRef } from 'react';

const Background = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let particles = [];
        let mouse = { x: null, y: null };

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initParticles();
        };

        const initParticles = () => {
            particles = [];
            const particleCount = Math.min(window.innerWidth / 15, 150); // Increased density

            for (let i = 0; i < particleCount; i++) {
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    radius: Math.random() * 1.5 + 0.5,
                    vx: (Math.random() - 0.5) * 0.5, // Slower, more elegant movement
                    vy: (Math.random() - 0.5) * 0.5,
                    color: Math.random() > 0.5 ? 'rgba(124, 58, 237, ' : 'rgba(0, 240, 255, ', // Purple or Cyan base
                    alpha: Math.random() * 0.5 + 0.1,
                    originalAlpha: Math.random() * 0.5 + 0.1
                });
            }
        };

        const draw = () => {
            ctx.fillStyle = '#030014'; // Match bg color
            ctx.fillRect(0, 0, canvas.width, canvas.height); // Clear with bg color for trail effect if needed, but here simple clear is fine if opaque
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw particles
            particles.forEach(p => {
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fillStyle = `${p.color}${p.alpha})`;
                ctx.fill();

                // Update position
                p.x += p.vx;
                p.y += p.vy;

                // Bounce off edges smoothly
                if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
                if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

                // Mouse interaction
                if (mouse.x != null) {
                    const dx = p.x - mouse.x;
                    const dy = p.y - mouse.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    const forceDirectionX = dx / distance;
                    const forceDirectionY = dy / distance;
                    const maxDistance = 150;
                    const force = (maxDistance - distance) / maxDistance;

                    if (distance < maxDistance) {
                        p.x += forceDirectionX * force * 2; // Repel slightly
                        p.y += forceDirectionY * force * 2;
                        p.alpha = 1; // Highlight near mouse
                    } else {
                        if (p.alpha > p.originalAlpha) {
                            p.alpha -= 0.02; // Fade back
                        }
                    }
                }
            });

            // Draw connections
            particles.forEach((p1, i) => {
                for (let j = i + 1; j < particles.length; j++) {
                    const p2 = particles[j];
                    const dx = p1.x - p2.x;
                    const dy = p1.y - p2.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    const connectionDistance = 120;

                    if (distance < connectionDistance) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(124, 58, 237, ${0.15 * (1 - distance / connectionDistance)})`; // Purple connections
                        ctx.lineWidth = 0.5;
                        ctx.moveTo(p1.x, p1.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                    }
                }
            });

            animationFrameId = requestAnimationFrame(draw);
        };

        const handleMouseMove = (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };

        const handleMouseLeave = () => {
            mouse.x = null;
            mouse.y = null;
        };

        window.addEventListener('resize', resize);
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseout', handleMouseLeave);

        resize();
        draw();

        return () => {
            window.removeEventListener('resize', resize);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseout', handleMouseLeave);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: -1,
                background: '#030014',
                pointerEvents: 'none'
            }}
        />
    );
};

export default Background;
