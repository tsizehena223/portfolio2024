import React from "react";

import Symfony from "../assets/tools/symfony.svg";
import ReactJs from "../assets/tools/react.svg";
import Tailwind from "../assets/tools/tailwind.svg";
import Laravel from "../assets/tools/laravel.png";
import Php from "../assets/tools/php.png";
import Js from "../assets/tools/js.png";
import Html from "../assets/tools/html.png";
import Css from "../assets/tools/css.png";
import Mysql from "../assets/tools/mysql.png";
import Github from "../assets/tools/github.svg";
import Git from "../assets/tools/git.svg";
import Linux from "../assets/tools/linux.png";

const Tools = ({ isDarkMode }) => {
    const images = [Symfony, Tailwind, Git, Laravel, Html, Php, Github, ReactJs, Js, Linux, Css, Mysql];

    return (
        <div id="tools" className={`${isDarkMode ? 'bg-slate-800' : 'bg-light-t'} mt-16 py-32 mb-0 h-auto md:mt-24 lg:mt-32 w-screen`}>
            <div className={`font-bold text-center mx-6 text-xl tn:text-2xl sh:mx-8 sm:text-4xl hui:mx-24 uu:mx-40 dct:mt-28 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <p className="mb-10 sm:mx-8">Tools and Tech I use daily for coding <br />
                    <span className="text-purple-500 md:mt-8">as a developer</span>
                </p>
            </div>
            <div className={`h-2/3 flex flex-wrap items-stretch justify-center mx-4 tn:mx-12 md:mt-20 md:mx-32 lg:mx-72`}>
                {images.map((imageUrl, index) => (
                    <img
                        alt=""
                        key={index}
                        className={`
                            rounded-full my-4 mx-4 animate-bounce w-10 sm:w-12 md:w-16
                            ${(index === 0 || index === 3 || index === 5) && 'bg-blue-500'}
                            ${(index === 2 || index === 6 || index === 9 || index === 11) && 'bg-red-500'}
                            ${(index === 4 || index === 8 || index === 7 || index === 10) && 'bg-yellow-500'}
                            ${(index === 1 || index === 10) && 'bg-green-500'}
                        `}
                        style={{
                            animationDelay: `${index * 200}ms`
                        }}
                        src={imageUrl}
                    />
                ))}
            </div>
        </div>
    )
}

export default Tools;

