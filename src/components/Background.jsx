import React, { useEffect } from 'react';
import gsap from 'gsap';

const Background = () => {
    var dots = 7;
    if (window.innerWidth > 400) {
        dots = 10;
    } else if (window.innerWidth > 1000) {
        dots = 20;
    }

    useEffect(() => {
        const createShapes = () => {
            const container = document.getElementById('background-container');

            for (let i = 1; i < dots; i++) {
                const shape = document.createElement('div');

                const initialX = Math.random() * window.innerWidth;
                const initialY = Math.random() * window.innerHeight;

                shape.className = `bg-purple-500 absolute w-2 h-2 rounded-full z-40`;
                container.appendChild(shape);

                animateShape(shape, initialX, initialY);
            }
        };

        const animateShape = (shape, initialX, initialY) => {
            gsap.to(shape, {
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                duration: 'random(4, 12)',
                yoyo: true,
                onComplete: () => animateShape(shape, initialX, initialY),
            });
        };

        createShapes();
    }, [dots]);

    return (
        <div id="background-container" className="fixed top-0 left-0 w-screen h-screen pointer-events-none">
        </div>
    );
};

export default Background;

