import React from 'react';
import Neovim from '../assets/projects/sonic-nvim.png';
import Portfolio from '../assets/projects/portfolio.png';
import Langbridge from '../assets/projects/langbridge.png';
import Gestia from '../assets/projects/gestia.png';

const CardProjects = ({ isDarkMode }) => {
    const projects = {
        0: {
            "title": "GestIA",
            "content": "Developed with Flutter, GestIA is a mobile application that help people manage their financial with AI's supports such as goal tracking and economy",
            "image": Gestia,
            "link": "https://github.com/tsizehena223/"
        },
        1: {
            "title": "Sonic-Nvim",
            "content": "Developed with Lua language, Sonic-Nvim stands out for its lightweight nature and simplicity, offering advanced customization through its Vim heritage, fast and flexible.",
            "image": Neovim,
            "link": "https://github.com/tsizehena223/sonic-nvim"
        }
    }

    const projects2 = {
        0: {
            "title": "My Portfolio",
            "content": "This portfolio has been designed recently with ReactJS, summarizing my skills and experiences as a computer developer.",
            "image": Portfolio,
            "link": "https://github.com/tsizehena223/portfolio2024"
        },
        1: {
            "title": "Langbridge",
            "content": "Developed with Symfony and ReactJS, Langbridge is a platform for language learning through direct interaction with native speakers of the language. It also serves as a social network. This is a school project (2nd year in computer science).",
            "image": Langbridge,
            "link": "https://github.com/tsizehena223"
        }
    }

    return (
        <>
            <div className='md:mx-12 lg:mx-20 nf:flex'>
                {Object.entries(projects).map(([key, project]) => (
                    <div key={key} className={`min-[900px]:w-1/2 m-8 sh:mx-16 six:mx-6 ${isDarkMode ? 'bg-slate-800' : 'bg-light-t'} shadow-lg rounded-lg overflow-hidden`}>
                        <a href={project.link} className='flex items-center justify-center' target='_blank' rel="noopener noreferrer">
                            <img
                                className="w-auto py-4 h-48 sm:h-64 mt-4"
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
            <div className='md:mx-12 lg:mx-20 nf:flex nf:justify-center'>
                {Object.entries(projects2).map(([key, project]) => (
                    <div key={key} className={`min-[900px]:w-1/2 m-8 sh:mx-16 six:mx-6 ${isDarkMode ? 'bg-slate-800' : 'bg-light-t'} shadow-lg rounded-lg overflow-hidden`}>
                        <a href={project.link} className='flex items-center justify-center' target='_blank' rel="noopener noreferrer">
                            <img
                                className="w-auto py-4 h-48 sm:h-64 mt-4"
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
        </>
    );
};

export default CardProjects;
