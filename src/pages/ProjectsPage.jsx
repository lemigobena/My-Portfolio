import React from 'react';
import Portfolio from '../components/Portfolio';

const ProjectsPage = () => {
    return (
        <div className="w-full min-h-screen">
            <Portfolio featuredOnly={false} />
        </div>
    );
};

export default ProjectsPage;
