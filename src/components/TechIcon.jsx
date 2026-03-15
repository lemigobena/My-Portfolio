import React from 'react';
import {
    FaReact, FaNodeJs, FaPython, FaDocker, FaAws, FaGitAlt, FaCubes, FaNetworkWired, FaBrain, FaJava
} from 'react-icons/fa';
import { SiNextdotjs, SiVuedotjs, SiTailwindcss, SiFramer, SiTypescript,
    SiExpress, SiDjango, SiGraphql, SiMongodb, SiPostgresql,
    SiGithubactions, SiTensorflow, SiPytorch, SiPandas, SiCplusplus, SiC, SiSpringboot,
    SiPrisma, SiSupabase, SiFirebase, SiVite
} from 'react-icons/si';
import { TbApi, TbBroadcast } from 'react-icons/tb';
import { Code2 } from 'lucide-react';

const iconMap = {
    'React': { icon: FaReact, color: 'text-primary' },
    'Next.js': { icon: SiNextdotjs, color: 'text-foreground' },
    'Vue': { icon: SiVuedotjs, color: 'text-green-500' },
    'TailwindCSS': { icon: SiTailwindcss, color: 'text-cyan-400' },
    'Framer Motion': { icon: SiFramer, color: 'text-purple-500' },
    'TypeScript': { icon: SiTypescript, color: 'text-primary' },
    'Node.js': { icon: FaNodeJs, color: 'text-green-500' },
    'Express': { icon: SiExpress, color: 'text-muted-foreground' },
    'Python': { icon: FaPython, color: 'text-yellow-400' },
    'Django': { icon: SiDjango, color: 'text-green-600' },
    'REST APIs': { icon: TbApi, color: 'text-blue-300' },
    'GraphQL': { icon: SiGraphql, color: 'text-pink-500' },
    'MongoDB': { icon: SiMongodb, color: 'text-green-500' },
    'PostgreSQL': { icon: SiPostgresql, color: 'text-primary' },
    'Docker': { icon: FaDocker, color: 'text-primary' },
    'AWS': { icon: FaAws, color: 'text-orange-400' },
    'CI/CD': { icon: SiGithubactions, color: 'text-primary' },
    'Git': { icon: FaGitAlt, color: 'text-orange-500' },
    'System Architecture': { icon: FaNetworkWired, color: 'text-purple-400' },
    'Machine Learning Basics': { icon: FaBrain, color: 'text-pink-400' },
    'TensorFlow': { icon: SiTensorflow, color: 'text-orange-500' },
    'Microservices': { icon: FaCubes, color: 'text-primary' },
    'WebSockets': { icon: TbBroadcast, color: 'text-green-400' },
    'PyTorch': { icon: SiPytorch, color: 'text-orange-600' },
    'Data Science': { icon: FaBrain, color: 'text-blue-300' },
    'Pandas': { icon: SiPandas, color: 'text-blue-800' },
    'Java': { icon: FaJava, color: 'text-orange-500' },
    'C++': { icon: SiCplusplus, color: 'text-primary' },
    'C': { icon: SiC, color: 'text-primary' },
    'Spring Boot': { icon: SiSpringboot, color: 'text-green-500' },
    'Data Structures': { icon: FaCubes, color: 'text-purple-400' },
    'Algorithms': { icon: FaNetworkWired, color: 'text-green-400' },
    'Systems Programming': { icon: FaCubes, color: 'text-muted-foreground' },
    'OpenCV': { icon: FaBrain, color: 'text-green-500' },
    'Prisma': { icon: SiPrisma, color: 'text-blue-500' },
    'Supabase': { icon: SiSupabase, color: 'text-emerald-500' },
    'Firebase': { icon: SiFirebase, color: 'text-orange-500' },
    'Vite': { icon: SiVite, color: 'text-purple-500' }
};

const TechIcon = ({ name }) => {
    const tech = iconMap[name] || { icon: Code2, color: 'text-muted-foreground' };
    const IconComponent = tech.icon;

    return (
        <div className="flex items-center gap-1.5 px-3 py-1 bg-foreground/5 border border-foreground/10 rounded-full text-xs font-medium group hover:border-foreground/20 hover:bg-foreground/10 transition-colors cursor-default">
            <IconComponent className={`text-sm group-hover:scale-110 transition-transform ${tech.color}`} />
            <span className="text-muted-foreground group-hover:text-foreground transition-colors">{name}</span>
        </div>
    );
};

export default TechIcon;
