const Experience = ({ isDarkMode }) => {
    const experiences = {
        1: {
            "title": "Développeur Web Back-end",
            "company": "LCom",
            "content": "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat."
        },
        2: {
            "title": "Développeur Web PHP",
            "company": "MyAgency",
            "content": "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat."
        }
    }

    return (
        <div id="experiences" className={`pt-12 h-auto ${isDarkMode ? 'my-bg-dark text-gray-300' : 'my-bg text-gray-600'}`} >
            <div className="ml-4">
                <h2 className="font-bold text-3xl pb-6 ml-2">Experiences</h2>
                {Object.entries(experiences).map(([key, experience]) => (
                    <div key={key} className="flex justify-center">
                        <div>
                            <i className="fa fa-circle text-purple-600 mr-2 text-xl"></i>
                            <span className={`lineStyle h-24 sm:h-20 bg-purple-600`}></span>
                        </div>
                        <div className="mr-4 mb-6">
                            <h4 className="font-bold text-lg text-purple-600">{experience.title}</h4>
                            <span className="font-bold text-base">{experience.company}</span>
                            <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                                {experience.content}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div >
    )
}

export default Experience;
