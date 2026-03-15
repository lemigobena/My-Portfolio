import React from 'react';
import { motion } from 'framer-motion';
import {
    FaReact, FaNodeJs, FaPython, FaDocker, FaGitAlt, FaCubes, FaNetworkWired, FaBrain,
    FaJs, FaDatabase, FaJava, FaLinux, FaCogs,
    FaUsers, FaGlobe, FaRobot, FaLightbulb, FaRocket, FaHandsHelping, FaComments,
    FaSyncAlt, FaChartLine, FaChess, FaHistory, FaSearch, FaBookReader, FaBolt, FaVials
} from 'react-icons/fa';
import { VscAzure } from 'react-icons/vsc';
import {
    SiNextdotjs, SiTailwindcss, SiTypescript, SiExpress, SiGithubactions, SiPrisma,
    SiSupabase, SiFirebase, SiCplusplus, SiNumpy, SiFlutter, SiDart, SiFigma,
    SiPytorch, SiGnubash, SiVuedotjs, SiBootstrap, SiMongodb, SiTensorflow,
    SiKubernetes, SiGooglecloud, SiUbuntu, SiAmazonwebservices, SiAngular
} from 'react-icons/si';
import { TbBroadcast } from 'react-icons/tb';

const skillCategories = [
    {
        title: 'Programming Languages',
        skills: [
            { name: 'JavaScript', icon: FaJs, color: 'text-yellow-400' },
            { name: 'TypeScript', icon: SiTypescript, color: 'text-primary' },
            { name: 'Python', icon: FaPython, color: 'text-yellow-400' },
            { name: 'Java', icon: FaJava, color: 'text-red-500' },
            { name: 'C++', icon: SiCplusplus, color: 'text-primary' },
            { name: 'C', icon: SiCplusplus, color: 'text-blue-400' },
            { name: 'SQL', icon: FaDatabase, color: 'text-blue-500' },
            { name: 'Dart', icon: SiDart, color: 'text-cyan-400' },
        ],
        special: true
    },
    {
        title: 'Core Engineering',
        skills: [
            { name: 'Linux', icon: FaLinux, color: 'text-orange-400' },
            { name: 'Ubuntu', icon: SiUbuntu, color: 'text-orange-500' },
            { name: 'Shell Scripting', icon: SiGnubash, color: 'text-foreground' },
            { name: 'Networking', icon: FaNetworkWired, color: 'text-blue-400' },
            { name: 'OS Concurrency', icon: FaCogs, color: 'text-purple-400' },
            { name: 'Algorithmic Thinking', icon: FaBrain, color: 'text-pink-400' },
            { name: 'System Design', icon: FaCubes, color: 'text-primary' },
            { name: 'Data Structures', icon: FaCubes, color: 'text-purple-400' },
        ]
    },
    {
        title: 'AI & Data Science',
        skills: [
            { name: 'Machine Learning', icon: SiPytorch, color: 'text-orange-600' },
            { name: 'NLP', icon: FaBrain, color: 'text-green-400' },
            { name: 'AI Integration', icon: FaRobot, color: 'text-primary' },
            { name: 'TensorFlow', icon: SiTensorflow, color: 'text-orange-500' },
            { name: 'NumPy', icon: SiNumpy, color: 'text-blue-400' },
            { name: 'WebSockets', icon: TbBroadcast, color: 'text-green-400' },
        ]
    },
    {
        title: 'Full-Stack & Mobile',
        skills: [
            { name: 'React', icon: FaReact, color: 'text-primary' },
            { name: 'Next.js', icon: SiNextdotjs, color: 'text-foreground' },
            { name: 'Vue', icon: SiVuedotjs, color: 'text-green-500' },
            { name: 'Angular', icon: SiAngular, color: 'text-red-500' },
            { name: 'React Native', icon: FaReact, color: 'text-cyan-400' },
            { name: 'Expo', icon: FaReact, color: 'text-primary' },
            { name: 'Flutter', icon: SiFlutter, color: 'text-cyan-500' },
            { name: 'TailwindCSS', icon: SiTailwindcss, color: 'text-cyan-400' },
            { name: 'Bootstrap', icon: SiBootstrap, color: 'text-purple-600' },
            { name: 'Node.js', icon: FaNodeJs, color: 'text-green-500' },
            { name: 'Express', icon: SiExpress, color: 'text-muted-foreground' },
            { name: 'Prisma', icon: SiPrisma, color: 'text-foreground' },
            { name: 'Supabase', icon: SiSupabase, color: 'text-green-400' },
            { name: 'Firebase', icon: SiFirebase, color: 'text-orange-400' },
            { name: 'MongoDB', icon: SiMongodb, color: 'text-green-500' },
            { name: 'Figma', icon: SiFigma, color: 'text-pink-400' },
            { name: 'UI/UX Design', icon: SiFigma, color: 'text-primary' },
        ]
    },
    {
        title: 'Professional',
        skills: [
            { name: 'Docker', icon: FaDocker, color: 'text-primary' },
            { name: 'AWS', icon: SiAmazonwebservices, color: 'text-orange-400' },
            { name: 'Google Cloud', icon: SiGooglecloud, color: 'text-blue-500' },
            { name: 'Azure', icon: VscAzure, color: 'text-blue-600' },
            { name: 'Kubernetes', icon: SiKubernetes, color: 'text-primary' },
            { name: 'Technical Leadership', icon: FaUsers, color: 'text-primary' },
            { name: 'Project Building', icon: FaGlobe, color: 'text-green-400' },
            { name: 'Unit Testing', icon: FaVials, color: 'text-green-500' },
            { name: 'Version Control', icon: FaGitAlt, color: 'text-orange-500' },
            { name: 'CI/CD Pipelines', icon: SiGithubactions, color: 'text-primary' },
        ],
        special: true
    },
    {
        title: 'Soft Skills',
        skills: [
            { name: 'Problem Solving', icon: FaLightbulb, color: 'text-yellow-400' },
            { name: 'System Thinking', icon: FaNetworkWired, color: 'text-blue-400' },
            { name: 'Leadership', icon: FaUsers, color: 'text-primary' },
            { name: 'Creativity', icon: FaCogs, color: 'text-pink-400' },
            { name: 'Innovation', icon: FaRocket, color: 'text-orange-500' },
            { name: 'Communication', icon: FaComments, color: 'text-cyan-400' },
            { name: 'Critical Thinking', icon: FaSearch, color: 'text-purple-400' },
            { name: 'Curiosity', icon: FaBrain, color: 'text-pink-300' },
            { name: 'Self-Learning', icon: FaBookReader, color: 'text-green-400' },
            { name: 'Persistence', icon: FaHistory, color: 'text-red-400' },
            { name: 'Resilience', icon: FaBolt, color: 'text-yellow-500' },
            { name: 'Team Collaboration', icon: FaHandsHelping, color: 'text-primary' },
            { name: 'Adaptability', icon: FaSyncAlt, color: 'text-green-500' },
            { name: 'Initiative', icon: FaRocket, color: 'text-orange-400' },
            { name: 'Analytical Thinking', icon: FaChartLine, color: 'text-blue-500' },
            { name: 'Project Organization', icon: FaCogs, color: 'text-gray-400' },
            { name: 'Strategic Thinking', icon: FaChess, color: 'text-primary' },
        ],
        special: true
    }
];

const SkillsPage = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="py-24"
        >
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">My <span className="text-gradient">Skills</span></h1>
                <p className="text-muted-foreground text-lg mb-12">
                    I have production-level experience in crafting aesthetic user experiences with modern frontend architecture, knowing when to use the right tools.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {skillCategories.map((category, idx) => (
                        <div
                            key={idx}
                            className={`glass-card p-6 rounded-2xl ${category.special ? 'border-l-4 border-l-primary bg-primary/5' : ''}`}
                        >
                            <h3 className={`text-xl font-bold mb-6 ${category.special ? 'text-primary' : 'text-foreground'}`}>
                                {category.title}
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {category.skills.map(skill => {
                                    const Icon = skill.icon;
                                    return (
                                        <div
                                            key={skill.name}
                                            className={`flex items-center gap-2 px-4 py-2 bg-foreground/5 border border-foreground/10 rounded-full text-sm group hover:border-foreground/20 hover:bg-foreground/10 transition-colors ${category.special ? 'bg-primary/10 border-primary/20 text-blue-100' : 'text-gray-200'}`}
                                        >
                                            <Icon className={`text-lg group-hover:scale-110 transition-transform ${skill.color}`} />
                                            <span>{skill.name}</span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default SkillsPage;
