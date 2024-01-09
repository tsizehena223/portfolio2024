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

    const colors = ["purple", "blue", "yellow", "red"];

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
        <div id="tools" className={`${isDarkMode ? 'my-bg-dark' : 'my-bg'} mt-16 mb-8 h-auto w-screen`}>
            <div className={`font-bold text-center mx-6 text-xl min-[400px]:text-2xl sm:text-4xl min-[800px]:mx-40 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <p className="mb-10 sm:mx-8">Tools and Tech I use daily for coding as a developer</p>
            </div>
            <div className={`h-2/3 flex flex-wrap items-stretch justify-center mx-0 min-[400px]:mx-32`}>
                {images.map((imageUrl, index) => (
                    <img
                        alt=""
                        key={index}
                        className={`rounded-full my-4 mx-4 animate-bounce bg-${getRandomColor()}-500 w-10`}
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

