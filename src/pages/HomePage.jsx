import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import EmploymentHistory from '../components/EmploymentHistory';
import Portfolio from '../components/Portfolio';
import SkillsArchitecture from '../components/SkillsArchitecture';
import Experience from '../components/Experience';
import Contact from '../components/Contact';

/**
 * HomePage Structure:
 * 1. Hero: Monumental masthead, value prop, photo focal point, CTAs.
 * 2. About: Concise bio, AAU Software Engineering ('28), ESSLCE Top 10 National Scorer.
 * 3. Work Experience: Commercial software roles (Mereb Tech, Tech Med) & academic provenance.
 * 4. Portfolio: Comprehensive filterable engineering project index.
 * 5. Skills & Architecture: Node graph connection + core engineering patterns.
 * 6. My Journey: Single-screen interactive connected-nodes timeline with fluid animations.
 * 7. Contact: Verified communication channels, email transmission form, GitHub, LinkedIn.
 */
const HomePage = () => {
    return (
        <div className="w-full">
            <Hero />
            <About />
            <EmploymentHistory />
            <Portfolio featuredOnly={false} />
            <SkillsArchitecture />
            <Experience />
            <Contact />
        </div>
    );
};

export default HomePage;
