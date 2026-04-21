import React from 'react';
import EmploymentHistory from '../components/EmploymentHistory';
import Experience from '../components/Experience';

const ExperiencePage = () => {
    return (
        <div className="pt-24 space-y-16">
            <EmploymentHistory />
            
            {/* Keeping My Journey as a separate section below professional history */}
            <div className="border-t border-foreground/5 pt-16">
                <Experience />
            </div>
        </div>
    );
};

export default ExperiencePage;
