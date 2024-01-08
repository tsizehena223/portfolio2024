import React, {useState, useEffect} from "react";
import AboutIllustration from "../assets/code.svg";

const About = ({ isDarkMode }) => {
    const words = ["Sarobidi", "Web Developper", "IT Student"];
    const [indexWord, setIndexWord] = useState(0);

    useEffect(() => {
        const index = setInterval(() => {
            setIndexWord((nextWord) => (nextWord - 1 == words.length - 1 ? 0 : nextWord + 1));
        }, 3000);
        return clearInterval(index);
    }, [])
    
    return (
        <div id="about" className={`h-auto pt-32 pb-10 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            <div className="text-center font-bold mx-8">
                <p className="text-base">
                    Welcome to my portfolio website!
                </p>
                <h1 className="text-3xl mt-6">Hey there, I'm <span className="text-purple-700 text-2xl changeWords">{words[indexWord]}</span> !</h1>
                <p className="font-normal my-6 mx-0">Active, curious and insightful... I seek to improve myself and experiment in the field of Information Technology!</p>
                <div className="mx-2">
                    <a href="#contact"><button className={`w-56 py-3 rounded-full shadow-md ${isDarkMode ? 'text-slate-700 my-bg' : 'my-bg-dark text-slate-300'}`}>Contact Me</button></a>
                    <a href="#resume"><button className={`w-56 mt-4 border border-slate-500 my-bg py-3 rounded-full shadow-md ${isDarkMode ? 'text-slate-300 my-bg-dark' : 'text-slate-500'}`}>Download Resume</button></a>
                </div>
            </div>
            <div className="flex items-center justify-center mt-10">
                <img src={AboutIllustration} alt="" className="w-1/2" />
            </div>
        </div >
    )
}

export default About;
