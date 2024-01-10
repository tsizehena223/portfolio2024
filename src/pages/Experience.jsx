import AboutIllustration from "../assets/code.svg";
import AnimatedWords from "../components/AnimatedWords";

const Experience = ({ isDarkMode }) => {
    return (
        <div id="experience" className={`h-auto pt-32 pb-10 md:pt-40 md:flex lg:pt-32 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            <div className="text-center font-bold mx-8 md:w-3/5 md:mr-0 md:text-left lg:pt-20">
                <p className="text-base min-[600px]:text-xl md:mx-2 animate-pulse lg:mx-8 min-[1124px]:mx-16">
                    Welcome to my portfolio website!
                </p>
                <h1 className="text-3xl mt-6 min-[600px]:text-4xl md:mt-8 md:mx-2 md:mb-4 lg:mx-8 min-[1124px]:mx-16">
                    Hey there, <br />
                    <span className={`text-purple-${isDarkMode ? '500' : '700'} text-2xl lg:text-4xl lg:mx-0`}><span className={`text-gray-${isDarkMode ? '300' : '600'} text-3xl`}>I'm </span><AnimatedWords /></span>...
                </h1>
                <p className="font-normal my-6 mx-0 min-[600px]:text-xl md:mx-2 md:text-base md:mt-0 lg:mx-8 lg:pt-4 lg:text-xl min-[1124px]:mx-16">
                    Active, curious and insightful... I seek to improve myself and experiment in the field of Information Technology!
                </p>
                <div className="mx-2 min-[500px]:mx-32 min-[500px]:mt-16 md:mx-0 md:mt-0 lg:mx-8 min-[1124px]:mx-16">
                    <a href="#contact"><button className={`w-56 py-3 rounded-full shadow-md md:mr-4 md:w-40 lg:w-56 ${isDarkMode ? 'text-purple-700 my-bg' : 'my-bg-dark text-slate-300'}`}>Contact Me</button></a>
                    <a href="#resume"><button className={`w-56 mt-4 border border-slate-500 py-3 md:w-44 lg:w-56 rounded-full shadow-md ${isDarkMode ? 'text-slate-300 my-bg-dark' : 'text-purple-700 my-bg'}`}>Download Resume</button></a>
                </div>
            </div>
            <div className="flex items-center justify-center mt-10 min-[600px]:mt-16 md:-mt-4 md:w-2/5 lg:mr-16 lg:mt-16 min-[1124px]:mt-12">
                <img src={AboutIllustration} alt="" className="w-1/2 min-[500px]:w-2/5 md:w-4/5 lg:w-4/5 min-[1124px]:w-3/4" />
            </div>
        </div >
    )
}

export default Experience;
