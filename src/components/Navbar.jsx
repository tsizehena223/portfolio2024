import React, { useState } from 'react';

const Navbar = ({ isDarkMode, onSwitchMode }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <nav className={`w-screen shadow-lg px-4 ${isDarkMode ? 'bg-gray-800 text-gray-100' : 'bg-gray-50 text-gray-700'}`}>
            <div className="container flex mx-auto items-center justify-between h-16 sm:h-20 sm:text-2xl">
                <div className="font-bold">
                    <span className='text-xl sm:text-2xl hover:text-red-500 hover:cursor-none'>Sarobidi</span>
                </div>

                <div className={`hidden lg:flex items-center justify-center text-xl`}>
                    <a href="#bla" className={`px-4 py-1 mx-3 hover:underline decoration-4 hover:text-red-500`}>Home</a>
                    <a href="#bla" className={`px-4 py-1 mx-3 hover:underline decoration-4 hover:text-red-500`}>About</a>
                    <a href="#bla" className={`px-4 py-1 mx-3 hover:underline decoration-4 hover:text-red-500`}>Services</a>
                    <a href="#bla" className={`px-4 py-1 mx-3 hover:underline decoration-4 hover:text-red-500`}>Contact</a>
                </div>

                <div className={`${!isOpen && 'hidden'} lg:hidden sm:text-xl fixed flex flex-col items-center top-16 sm:top-20 w-screen right-0 text-center shadow-2xl pt-2 ${isDarkMode ? 'bg-gray-800 text-gray-100' : 'bg-gray-100 text-gray-700'}`}>
                    <a href="#bla" className={`w-40 py-2 my-2 rounded-full shadow-lg ${isDarkMode && 'border-gray-800'} hover:text-red-500`}>Home</a>
                    <a href="#bla" className={`w-40 py-2 my-2 rounded-full shadow-lg ${isDarkMode && 'border-gray-800'} hover:text-red-500`}>About</a>
                    <a href="#bla" className={`w-40 py-2 my-2 rounded-full shadow-lg ${isDarkMode && 'border-gray-800'} hover:text-red-500`}>Services</a>
                    <a href="#bla" className={`w-40 py-2 my-2 rounded-full shadow-lg ${isDarkMode && 'border-gray-800'} hover:text-red-500`}>Contact</a>
                    <i className={`px-8 py-8 fa-solid fa-${isDarkMode ? 'cloud-sun' : 'cloud-moon'} fa-xl sm:fa-2xl text-red-500 hover:cursor-pointer`} onClick={onSwitchMode}></i>
                </div>

                <i className={`hidden lg:block px-4 py-1 fa-solid fa-${isDarkMode ? 'cloud-sun' : 'cloud-moon'} fa-xl sm:fa-2xl text-red-500 hover:cursor-pointer`} onClick={onSwitchMode}></i>

                <div className="block lg:hidden">
                    <button onClick={handleMenu}>
                        <i className={`fa-solid fa-xl sm:fa-2xl fa-${isOpen ? 'folder-open' : 'folder-closed'}`}></i>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
