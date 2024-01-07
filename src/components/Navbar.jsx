import { useState, useEffect } from 'react';
import Mode from '../assets/mode.png';

const Navbar = ({ isDarkMode, onSwitchMode }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleMenu = () => {
        setIsOpen(!isOpen);
    }

    const modestyle = {
        "width": "75px",
    }

    useEffect(() => {
        const others = document.getElementById("others");
        const navbar = document.getElementById("navbar");

        if (isOpen) {
            others.classList.add("blur-md");
            navbar.classList.add("backdrop-fiter-none");
        } else {
            others.classList.remove("blur-md");
        }
    }, [isOpen])

    return (
        <div id='navbar' className={`fixed pb-5 md:pb-5 lg:pb-6 lg:pt-4 flex my-0 items-center justify-between w-screen z-50 my-bg ${isDarkMode && 'my-bg-dark'}`} >
            <a href="#about" className={`my-bg border ${isDarkMode && 'border-slate-800 my-bg-dark'} font-bold left-0 top-0 flex items-center rounded-r-full lg:rounded-full lg:mx-8 shadow-xl px-8 md:px-12 py-5 md:py-6 ${isDarkMode ? 'text-slate-200' : 'text-purple-700'} i5:text-red-500 hover:cursor-pointer`}>
                <i className={`mr-3 md:mr-4 fa fa-xl fa-user-astronaut`}></i>
                <span className='text-xl md:text-2xl'>Sarobidi</span>
            </a>

            <div className={`my-bg border ${isDarkMode && 'border-slate-800 my-bg-dark'} hidden md:block shadow-xl font-bold top-0 left-80 py-6 px-4 rounded-full items-center justify-center text-xl ${isDarkMode ? 'text-gray-400' : 'text-slate-500'}`}>
                <a href="#experiences" className={`text-base lg:text-xl px-3 py-1 mx-3 hover:text-purple-600`}>Experiences</a>
                <a href="#projects" className={`text-base lg:text-xl px-3 py-1 mx-3 hover:text-purple-600`}>Projects</a>
                <a href="#tools" className={`text-base lg:text-xl px-3 py-1 mx-3 hover:text-purple-600`}>Tools</a>
            </div>

            <div className={`${!isOpen && 'hidden'} md:hidden sm:text-lg fixed flex flex-col items-center top-24 right-0 w-screen text-center pt-2 font-bold`}>
                <a href="#experiences" className={`my-bg w-40 py-2 my-2 rounded-full shadow-lg ${isDarkMode ? 'text-slate-400 my-bg-dark' : 'text-slate-500'} hover:text-purple-600`}>Experiences</a>
                <a href="#projects" className={`my-bg w-40 py-2 my-2 rounded-full shadow-lg ${isDarkMode ? 'text-slate-400 my-bg-dark' : 'text-slate-500'} hover:text-purple-600`}>Projects</a>
                <a href="#tools" className={`my-bg w-40 py-2 my-2 rounded-full shadow-lg ${isDarkMode ? 'text-slate-400 my-bg-dark' : 'text-slate-500'} hover:text-purple-600`}>Tools</a>
                <i className={`my-bg opacity-75 w-40 my-2 rounded-full shadow-lg px-8 py-6 fa-solid fa-${isDarkMode ? 'sun my-bg-dark' : 'moon'} fa-xl hover:cursor-pointer ${isDarkMode ? 'text-slate-300' : 'text-purple-700'}`} onClick={onSwitchMode}></i>
            </div>

            <div className={`my-bg hidden md:block border ${isDarkMode && 'border-slate-800 my-bg-dark'} rounded-l-full lg:rounded-full lg:mx-8 shadow-xl right-0 top-0 lg:px-12 px-6 hover:cursor-pointer`} onClick={onSwitchMode}>
                <img src={Mode} alt='' className='hidden md:block py-5' style={modestyle} />
            </div>

            <div className={`my-bg border flex items-center md:hidden text-purple-700 ${isDarkMode && 'border-slate-800 my-bg-dark text-slate-300'} rounded-l-full lg:rounded-full shadow-xl right-0 top-0 py-6 px-6 sm:px-12`}>
                <button onClick={handleMenu}>
                    <i className={`fa-solid fa-xl fa-${isOpen ? 'folder-open' : 'folder-closed'}`}></i>
                    <span className="hidden font-bold ml-4 min-[400px]:inline">Menu</span>
                </button>
            </div>
        </div >
    );
};

export default Navbar;
