import React, { useEffect, useState } from "react";

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
    const images = [Symfony, ReactJs, Tailwind, Laravel, Php, Js, Html, Css, Github, Git, Linux, Mysql];

    const colors = ["gray", "blue", "yellow", "red"];

    const [randomColors, setRandomColors] = useState(() => {
        return images.map(() => getRandomColor());
    });

    useEffect(() => {
        const intervalId = setInterval(() => {
            setRandomColors(() => {
                return images.map(() => getRandomColor());
            });
        }, 4000);
        return () => clearInterval(intervalId);
    }, []);

    function getRandomColor() {
        const randomIndex = Math.floor(Math.random() * colors.length);
        return colors[randomIndex];
    }

    return (
        <div id="tools" className={`${!isDarkMode && 'bg-gray-50'} mt-4 pb-20 sm:my-8 md:my-16 h-auto w-screen`}>
            <div className={`sm:text-4xl pt-16 sm:pb-20 px-4 md:px-8 block font-bold text-center ${isDarkMode ? 'text-gray-100' : 'text-gray-600'}`}>
                <div className="mb-4">Tools and Tech I use daily for coding</div>
                <span>as a developer</span>
            </div>
            <div className={`h-2/3 flex flex-wrap items-stretch justify-center mx-2 sm:mx-12`}>
                {images.map((imageUrl, index) => (
                    <img
                        alt=""
                        key={index}
                        className={`rounded-full my-8 mx-10 md:px-2 animate-bounce bg-${randomColors[index]}-${randomColors[index] === "gray" ? '300' : '500'}`}
                        style={{
                            width: "5rem",
                            height: "5rem",
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

