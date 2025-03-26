const Contact = ({ isDarkMode }) => {
    return (
        <div id="contact" className={`h-auto pb-8 rounded-t-full ${isDarkMode ? 'bg-slate-800' : 'bg-light-t'}`}>
            <h3 className={`font-bold text-center pt-8 pb-4 m-4 text-2xl md:text-3xl ${isDarkMode ? 'text-purple-500' : 'text-purple-700'}`}>Contact</h3>
            <div className="flex justify-center items-center">
                <a href="https://github.com/tsizehena223" target="_blank" rel="noopener noreferrer"><li className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} fa-xl fa-brands fa-github mx-3`}></li></a>
                <a href="https://www.linkedin.com/in/sarobidi-tsizehena/" target="_blank" rel="noopener noreferrer"><li className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} fa-xl fa-brands fa-linkedin mx-3`}></li></a>
                <a href="mailto:tsizehena223@gmail.com" target="_blank" rel="noopener noreferrer"><li className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} fa-xl fa-solid fa-envelope mx-3`}></li></a>
                <a href="tel:+261327502539" target="_blank" rel="noopener noreferrer"><li className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} fa-xl fa-solid fa-phone mx-3`}></li></a>
                <a href="https://www.facebook.com/Tsizehena" target="_blank" rel="noopener noreferrer"><li className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} fa-xl fa-brands fa-facebook mx-3`}></li></a>
            </div>
        </div >
    )
}

export default Contact;
