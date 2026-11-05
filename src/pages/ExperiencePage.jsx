import React from 'react';
import EmploymentHistory from '../components/EmploymentHistory';
import Experience from '../components/Experience';

const ExperiencePage = () => {
    return (
        <div className="pt-20 md:pt-24 min-h-screen space-y-12">
            <EmploymentHistory />
            <Experience />
        </div>
    );
};

export default ExperiencePage;
