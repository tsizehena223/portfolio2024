import React from 'react';
import Neovim from '../assets/projects/sonic-nvim.png';
import Portfolio from '../assets/projects/portfolio.png';

const Card = ({ isDarkMode }) => {
    const projects = {
        1: {
            "title": "Code",
            "content": "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
            "image": Neovim,
            "link": "https://github.com/tsizehena223/sonic-nvim"
        },
        2: {
            "title": "Portfolio",
            "content": "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
            "image": Portfolio,
            "link": "https://tsizehena.onrender.com"
        }
    }

    return (
        <div className='md:mx-12 lg:mx-20 six:flex'>
            {Object.entries(projects).map(([key, project]) => (
                <div key={key} className={`m-8 sh:mx-16 six:mx-6 ${isDarkMode ? 'bg-slate-800' : 'bg-light-t'} shadow-lg rounded-lg overflow-hidden`}>
                    <a href={project.link} className='flex items-center justify-center' target='_blank'>
                        <img
                            className="w-auto h-48 md:h-64 mt-4"
                            src={project.image}
                            alt=""
                        />
                    </a>
                    <span className={`mt-2 block w-full h-0.5 ${isDarkMode ? 'bg-slate-600' : 'bg-slate-400'}`}></span>
                    <div className="p-4">
                        <h2 className={`text-xl font-semibold ${isDarkMode ? 'text-slate-300' : 'text-gray-600'}`}>{project.title}</h2>
                        <p className={`mt-2 text-gray-600 ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>{project.content}</p>
                    </div>
                </div >
            ))}
        </div>
    );
};

export default Card;
