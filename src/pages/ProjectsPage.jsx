import React from 'react';
import Portfolio from '../components/Portfolio';

const ProjectsPage = () => {
    return (
        <div className="pt-24 min-h-[80vh]">
            <Portfolio featuredOnly={false} />
        </div>
    );
};

export default ProjectsPage;
