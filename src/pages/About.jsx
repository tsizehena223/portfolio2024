import React from "react";
import AboutIllustration from "../assets/code.svg";

const About = ({ isDarkMode }) => {
    return (
        <div id="about" className={`pt-40 h-screen`}>
            <div className="text-2xl h-60 w-auto mx-6 md:mx-32 mt-4 flex flex-wrap items-center">
                <div className={`w-screen lg:w-2/3 mr-4 ${isDarkMode ? 'text-gray-100' : 'text-gray-600'}`}>
                    <div className="flex font-bold">
                        <p className={`${isDarkMode && 'text-gray-600'} text-4xl bg-yellow-500 hidden md:block mr-2`}>Hey, </p>
                        <p className="">
                            <span className="">Welcome to my portfolio website!</span>
                            <br />
                            <span className="font-normal">My fullname is <span className={`bg-sky-300 ${isDarkMode && 'text-gray-600'}`}>SAROBIDI</span>NIRINA Tsizehena Bienvenue</span>
                        </p>
                    </div>
                    <p className="text-2xl sm:text-3xl font-bold mt-6 sm:mt-12">I'm a <span className="text-red-500">Web Developper</span></p>
                    <p className="mt-2">Active, curious and insightful... I seek to improve myself and experiment in the field of Information Technology!</p>
                </div>

                <div className="w-1/4 hidden lg:flex items-center justify-center">
                    <img src={AboutIllustration} className="ml-40" alt="" />
                </div>

                <div className="mt-12">
                    <button className="border text-gray-200 bg-gray-600 font-semibold rounded-full px-4 py-2">Download my CV</button>
                </div>
            </div>
        </div >
    )
}

export default About;
