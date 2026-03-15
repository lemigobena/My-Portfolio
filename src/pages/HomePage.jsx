import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';

const HomePage = () => {
    return (
        <div className="space-y-32">
            <Hero />
            <About />
            <Experience />
            <Portfolio featuredOnly={true} />
            <Contact />
        </div>
    );
};

export default HomePage;
