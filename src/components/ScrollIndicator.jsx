import React, { useState, useEffect } from 'react';

const ScrollIndicator = () => {
    const [showIndicator, setShowIndicator] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const isAtTop = window.scrollY === 0;
            setShowIndicator(isAtTop);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    },);

    return (
        <div
            className={`fixed bottom-12 right-1/2 w-auto ${showIndicator ? '' : 'hidden'}`}
        >
            <i className="hidden xl:block fa-solid fa-circle-arrow-down fa-bounce text-2xl md:text-5xl text-purple-600"></i>
        </div>
    );
};

export default ScrollIndicator;
