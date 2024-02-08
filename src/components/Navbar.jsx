import { useState, useEffect } from 'react';
import Mode from '../assets/mode.png';

const Navbar = ({ isDarkMode, onSwitchMode }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleMenu = () => {
        setIsOpen(!isOpen);
    }

    const closeMenu = () => {
        setIsOpen(false);
    }

    const modestyle = {
        "width": "75px",
    }

    const swichModeAndClose = () => {
        closeMenu();
        onSwitchMode();
    }

    const onSwitchLanguage = () => {
        alert("Switch language not implemented yet!");
    }

    useEffect(() => {
        const sections = document.getElementById("sections");
        const navbar = document.getElementById("navbar");

        if (isOpen) {
            sections.classList.add("blur-md");
            navbar.classList.add("backdrop-fiter-none");
        } else {
            sections.classList.remove("blur-md");
        }
    }, [isOpen])

    return (
        <div id='navbar' className={`fixed pb-5 md:pb-5 lg:pb-6 lg:pt-4 flex my-0 items-center justify-between w-screen z-50 ${isDarkMode ? 'my-bg-dark shadow-gray-700 shadow' : 'my-bg shadow shadow-gray-300'}`} >
            <a href="#about" className={`border ${isDarkMode ? 'border-slate-800 my-bg-dark text-purple-500' : 'my-bg text-purple-700'} font-bold left-0 top-0 flex items-center rounded-r-full lg:rounded-full lg:mx-8 shadow-xl px-8 md:px-12 py-5 md:py-6 hover:cursor-pointer`}>
                <i className={`mr-3 md:mr-4 fa fa-xl fa-user-astronaut`}></i>
                <span className='text-xl md:text-2xl'>Sarobidi</span>
            </a>

            <div className={`border ${isDarkMode ? 'border-slate-800 my-bg-dark text-gray-400' : 'my-bg text-slate-500'} hidden hui:block shadow-xl font-bold top-0 left-80 py-6 px-4 rounded-full items-center justify-center text-xl`}>
                <a href="#experiences" className={`text-base lg:text-xl px-3 py-1 mx-3 hover:text-purple-600`}>Experiences</a>
                <a href="#tools" className={`text-base lg:text-xl px-3 py-1 mx-3 hover:text-purple-600`}>Tools</a>
                <a href="#projects" className={`text-base lg:text-xl px-3 py-1 mx-3 hover:text-purple-600`}>Projects</a>
            </div>

            <div className={`${!isOpen && 'hidden'} hui:hidden sm:text-lg fixed flex flex-col items-center top-24 right-0 w-screen text-center pt-2 font-bold`}>
                <a href="#experiences" className={`my-bg w-40 py-2 my-2 rounded-full shadow-lg ${isDarkMode ? 'text-slate-400 my-bg-dark' : 'text-slate-500'} hover:text-purple-600`} onClick={closeMenu} >Experiences</a>
                <a href="#tools" className={`my-bg w-40 py-2 my-2 rounded-full shadow-lg ${isDarkMode ? 'text-slate-400 my-bg-dark' : 'text-slate-500'} hover:text-purple-600`} onClick={closeMenu} >Tools</a>
                <a href="#projects" className={`my-bg w-40 py-2 my-2 rounded-full shadow-lg ${isDarkMode ? 'text-slate-400 my-bg-dark' : 'text-slate-500'} hover:text-purple-600`} onClick={closeMenu} >Projects</a>
                <i className={`my-bg opacity-75 w-40 my-2 rounded-full shadow-lg px-8 py-6 fa-solid fa-${isDarkMode ? 'sun my-bg-dark' : 'moon'} fa-xl hover:cursor-pointer ${isDarkMode ? 'text-slate-300' : 'text-purple-700'}`} onClick={swichModeAndClose}></i>
                <i className={`my-bg opacity-75 w-40 my-2 rounded-full shadow-lg px-8 py-6 fa-regular fa-flag fa-xl ${isDarkMode && 'my-bg-dark'} text-purple-700 hover:cursor-pointer`} onClick={onSwitchLanguage}></i>
            </div>

            <div className={`my-bg hidden hui:flex md:items-center border ${isDarkMode && 'border-slate-800 my-bg-dark'} rounded-l-full lg:rounded-full lg:mx-8 shadow-xl right-0 top-0 lg:px-12 px-6 hover:cursor-pointer`}>
                <img src={Mode} alt='' className='hidden md:block py-5' onClick={onSwitchMode} style={modestyle} />
                <div className={`ml-3 w-1 h-20 ${isDarkMode ? 'bg-slate-800' : 'bg-slate-200'}`}></div>
                <i className='ml-4 fa-regular fa-flag fa-2x text-purple-700 hover:cursor-pointer' onClick={onSwitchLanguage}></i>
            </div>

            <div className={`my-bg border flex items-center hui:hidden text-purple-700 ${isDarkMode && 'border-slate-800 my-bg-dark text-purple-500'} rounded-l-full lg:rounded-full shadow-xl right-0 top-0 py-6 px-6 sm:px-12`}>
                <button onClick={handleMenu}>
                    <i className={`fa-solid fa-xl fa-${isOpen ? 'folder-open' : 'folder-closed'}`}></i>
                    <span className="hidden font-bold ml-4 tn:inline">Menu</span>
                </button>
            </div>
        </div >
    );
};

export default Navbar;
