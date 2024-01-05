import React, { useState } from 'react';
import Mode from '../assets/mode.png';

const Navbar = ({ isDarkMode, onSwitchMode }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleMenu = () => {
        setIsOpen(!isOpen);
    }

    const modestyle = {
        "width": "75px",
    }

    return (
        < div className={`fixed flex my-4 items-center justify-between w-screen`} >
            <div className={`border ${isDarkMode && 'border-slate-800'} font-bold left-0 top-0 flex items-center rounded-r-full lg:rounded-full lg:mx-8 shadow-xl px-8 md:px-12 py-5 md:py-6 ${isDarkMode ? 'text-slate-200' : 'text-purple-700'} hover:text-red-500`}>
                <i className={`mr-3 md:mr-4 fa fa-xl fa-user-astronaut`}></i>
                <span className='text-xl md:text-2xl'>Sarobidi</span>
            </div>

            <div className={`border ${isDarkMode && 'border-slate-800'} hidden md:block shadow-xl font-bold top-0 left-80 py-6 px-4 rounded-full items-center justify-center text-xl ${isDarkMode ? 'text-gray-400' : 'text-slate-500'}`}>
                <a href="#experiences" className={`text-base lg:text-xl px-3 py-1 mx-3 hover:text-purple-600`}>Experiences</a>
                <a href="#projects" className={`text-base lg:text-xl px-3 py-1 mx-3 hover:text-purple-600`}>Projects</a>
                <a href="#tools" className={`text-base lg:text-xl px-3 py-1 mx-3 hover:text-purple-600`}>Tools</a>
            </div>

            <div className={`${!isOpen && 'hidden'} md:hidden sm:text-lg fixed flex flex-col items-center top-24 right-0 w-screen text-center pt-2 font-bold`}>
                <a href="#experiences" className={`w-40 py-2 my-2 rounded-full shadow-lg ${isDarkMode ? 'text-slate-400' : 'text-slate-500'} hover:text-purple-600`}>Experiences</a>
                <a href="#projects" className={`w-40 py-2 my-2 rounded-full shadow-lg ${isDarkMode ? 'text-slate-400' : 'text-slate-500'} hover:text-purple-600`}>Projects</a>
                <a href="#tools" className={`w-40 py-2 my-2 rounded-full shadow-lg ${isDarkMode ? 'text-slate-400' : 'text-slate-500'} hover:text-purple-600`}>Tools</a>
                <i className={`w-40 my-2 rounded-full shadow-lg px-8 py-6 fa-solid fa-${isDarkMode ? 'sun' : 'moon'} fa-xl hover:cursor-pointer ${isDarkMode ? 'text-slate-300' : 'text-purple-700'}`} onClick={onSwitchMode}></i>
            </div>

            <div className={`hidden md:block border ${isDarkMode && 'border-slate-800'} rounded-l-full lg:rounded-full lg:mx-8 shadow-xl right-0 top-0 lg:px-12 px-6 hover:cursor-pointer`} onClick={onSwitchMode}>
                <img src={Mode} alt='' className='hidden md:block py-5' style={modestyle} />
            </div>

            <div className={`border block md:hidden ${isDarkMode && 'border-slate-800'} rounded-l-full lg:rounded-full shadow-xl right-0 top-0 py-6 px-6`}>
                <button onClick={handleMenu}>
                    <i className={`fa-solid fa-xl fa-${isOpen ? 'folder-open' : 'folder-closed'} ${isDarkMode ? 'text-slate-300' : 'text-purple-700'}`}></i>
                </button>
            </div>
        </div >
    );
};

export default Navbar;
