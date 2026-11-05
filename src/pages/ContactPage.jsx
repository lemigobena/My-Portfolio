import React from 'react';
import Contact from '../components/Contact';

const ContactPage = () => {
    return (
        <div className="w-full min-h-screen lg:h-screen lg:max-h-screen">
            <Contact isStandalone={true} />
        </div>
    );
};

export default ContactPage;
