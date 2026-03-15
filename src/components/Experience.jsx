import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar, Trophy } from 'lucide-react';
import TechIcon from './TechIcon';

const Experience = () => {
    const experiences = [
        {
            id: 1,
            type: 'work',
            role: "Developed School Websites and Databases",
            company: "Beginnings in Problem Solving",
            period: "High School Journey",
            description: "My journey in technology began in high school when I started applying programming to solve real problems within my school environment. I developed a school website that provided students and staff with access to important information and resources. In addition, I built a school database system to organize and manage student records and administrative data more efficiently.",
            technologies: ["Websites", "Databases", "Digitization"]
        },
        {
            id: 2,
            type: 'milestone',
            role: "Scored Top Ten in National Exam",
            company: "Academic Excellence",
            period: "2023 Achievement",
            description: "Alongside my passion for technology, I remained committed to academic excellence. My strong interest in mathematics and analytical thinking helped me achieve high academic performance, culminating in scoring among the Top Ten in the national examination. Mathematics has always been a foundation for my problem solving, shaping the logical and structured way I approach both programming and system design.",
            technologies: ["Mathematics", "Logic", "Analytical Thinking"]
        },
        {
            id: 3,
            type: 'work',
            role: "Developed UI Designs for Apps and Websites",
            company: "User Experience Focus",
            period: "Design Evolution",
            description: "As I continued learning software development, I became deeply interested in user interface and user experience design. I began designing interfaces for web and application projects, focusing on usability, clarity, and modern design principles. These experiences helped me understand that technology should not only function well but should also be intuitive and accessible to the people who use it.",
            technologies: ["UI/UX", "Modern Design", "Accessibility"]
        },
        {
            id: 4,
            type: 'work',
            role: "Developed Frontends and Backends With and Without Frameworks",
            company: "Technical Growth",
            period: "Structural Foundations",
            description: "After learning the fundamentals of programming, I expanded my skills into both frontend and backend development. I worked with core web technologies such as HTML, CSS, and JavaScript to build responsive interfaces, while also developing backend systems and database integrations to manage application logic and data. Building systems from scratch allowed me to understand how applications truly function at a deeper level.",
            technologies: ["Frontend", "Backend", "Architecture"]
        },
        {
            id: 5,
            type: 'work',
            role: "Became a Full-Stack Developer",
            company: "End-to-End Solutions",
            period: "Project Mastery",
            description: "Through continuous experimentation and project development, I grew into a full-stack developer capable of building complete systems from concept to deployment. I developed the ability to design interfaces, build backend services, structure databases, and integrate all parts of an application into a working system. Over time, I completed more than fifty real projects for practical needs.",
            technologies: ["Full-Stack", "System Integration", "Deployment"]
        },
        {
            id: 6,
            type: 'milestone',
            role: "Solved Real Life Problems With My Projects",
            company: "Practical Innovation",
            period: "Meaningful Impact",
            description: "Many of my projects were created to address real challenges around me. I built tools that helped simplify administrative processes and improve accessibility to digital resources. I also explored engineering beyond software by designing and building a functional excavator prototype, which was showcased in school exhibitions and inspired technological creativity.",
            technologies: ["Engineering", "Problem Solving", "Innovation"]
        },
        {
            id: 7,
            type: 'work',
            role: "Now Starting My Professional Journey",
            company: "Future Horizons",
            period: "Present & Beyond",
            description: "Today, I continue expanding my knowledge in software engineering, ML, and AI. After years of self-learning and practical project development, I am now ready to begin my professional career as a developer, applying my skills to larger challenges and contributing to impactful solutions. My goal is to keep learning and use technology to create systems that make a difference.",
            technologies: ["AI/ML", "Impactful Tech", "Continuous Learning"]
        }
    ];

    const { scrollYProgress } = useScroll();
    const scaleY = useTransform(scrollYProgress, [0, 1], [0.8, 1.2]);

    return (
        <section id="experience" className="py-24 relative">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center mb-20"
            >
                <h2 className="text-4xl md:text-5xl font-black mb-4">
                    My <span className="text-gradient">Journey</span>
                </h2>
                <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
                <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                    A brief look at my professional and academic background.
                </p>
            </motion.div>

            <div className="relative max-w-6xl mx-auto px-4 md:px-0">
                {/* Vertical Animated Line */}
                <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-1 bg-gray-800 -translate-x-1/2 rounded-full overflow-hidden">
                    <motion.div
                        className="w-full bg-gradient-to-b from-primary via-purple-500 to-transparent origin-top"
                        style={{ scaleY }}
                    />
                </div>

                {experiences.map((exp, index) => {
                    const isEven = index % 2 === 0;

                    return (
                        <motion.div
                            key={exp.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 mb-12 ${isEven ? 'md:flex-row-reverse' : ''
                                }`}
                        >
                            {/* Timeline Dot */}
                            <div className="absolute left-0 md:left-1/2 w-14 h-14 -translate-x-1/2 glass rounded-full flex items-center justify-center z-10 border-2 border-primary/50 shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                                {exp.type === 'work' ? (
                                    <Briefcase className="text-primary" />
                                ) : exp.type === 'education' ? (
                                    <GraduationCap className="text-purple-400" />
                                ) : (
                                    <Trophy className="text-yellow-400" />
                                )}
                            </div>

                            {/* Content Card */}
                            <div className={`w-full md:w-[48%] ${isEven ? 'md:pl-12' : 'md:pr-12'} pl-20 md:pl-0`}>
                                <div className="glass rounded-3xl py-6 px-8 hover:bg-foreground/[0.04] transition-colors relative group overflow-hidden">
                                    <div className={`absolute top-0 ${isEven ? 'left-0' : 'right-0'} w-32 h-32 bg-primary/10 blur-3xl rounded-full group-hover:bg-primary/20 transition-colors`} />

                                    <div className="flex items-center gap-2 text-sm text-primary font-medium mb-3">
                                        <Calendar size={16} />
                                        <span>{exp.period}</span>
                                    </div>

                                    <h3 className="text-2xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                                        {exp.role}
                                    </h3>
                                    <div className="text-lg text-muted-foreground font-medium mb-4">
                                        {exp.company}
                                    </div>

                                    <p className="text-muted-foreground leading-relaxed mb-6">
                                        {exp.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2">
                                        {exp.technologies.map(tech => (
                                            <TechIcon key={tech} name={tech} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
};

export default Experience;
