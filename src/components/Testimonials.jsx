import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { Quote } from 'lucide-react';

const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            name: "Sarah Jenkins",
            role: "Lead Product Manager",
            company: "HealthNet",
            image: "https://i.pravatar.cc/150?img=47",
            text: "Lemi is an exceptional talent. His ability to translate complex healthcare requirements into a sleek, performant, and secure application was exactly what we needed. He doesn't just code; he engineers solutions."
        },
        {
            id: 2,
            name: "David Chen",
            role: "CTO",
            company: "EduTech Innovators",
            image: "https://i.pravatar.cc/150?img=11",
            text: "Working with Lemi was a game-changer for our AI Study Assistant project. His grasp of both frontend architecture and deep learning integration allowed us to launch months ahead of schedule. Highly recommended."
        },
        {
            id: 3,
            name: "Dr. Aster Tadesse",
            role: "Computer Science Professor",
            company: "Addis Ababa University",
            image: "https://i.pravatar.cc/150?img=5",
            text: "One of the most dedicated and brilliant students I've had the pleasure of mentoring. Lemi constantly pushes the boundaries of theoretical concepts by applying them to real-world, scalable systems."
        }
    ];

    return (
        <section id="testimonials" className="py-24 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-blue-900/10 blur-[120px] rounded-full pointer-events-none -z-10" />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
            >
                <h2 className="text-4xl md:text-5xl font-black mb-4">
                    Client <span className="text-gradient">Testimonials</span>
                </h2>
                <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
                <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                    What people I've worked with have to say.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4 md:px-0">
                {testimonials.map((test, index) => (
                    <motion.div
                        key={test.id}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                    >
                        <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} glareEnable={true} glareMaxOpacity={0.05} className="h-full glass rounded-3xl p-8 relative overflow-hidden flex flex-col justify-between group">

                            {/* Decorative Quote Icon */}
                            <div className="absolute top-6 right-6 text-foreground/5 transition-colors duration-500 group-hover:text-primary/10">
                                <Quote size={80} className="rotate-180" />
                            </div>

                            <p className="text-muted-foreground leading-relaxed mb-8 relative z-10 italic">
                                "{test.text}"
                            </p>

                            <div className="flex items-center gap-4 relative z-10 border-t border-foreground/10 pt-6">
                                <img
                                    src={test.image}
                                    alt={test.name}
                                    className="w-14 h-14 rounded-full object-cover border-2 border-primary/30"
                                />
                                <div>
                                    <h4 className="text-foreground font-bold text-lg">{test.name}</h4>
                                    <p className="text-primary text-sm font-medium">{test.role}</p>
                                    <p className="text-muted-foreground text-xs">{test.company}</p>
                                </div>
                            </div>
                        </Tilt>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
