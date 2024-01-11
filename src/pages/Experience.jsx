const Experience = ({ isDarkMode }) => {
    const experiences = {
        1: {
            "title": "Web Development Intern",
            "company": "LCom",
            "date": "2023",
            "content": "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat."
        },
        2: {
            "title": "Discovery Internship in IT Development",
            "company": "MyAgency",
            "date": "2022",
            "content": "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat."
        },
        3: {
            "title": "IT Intern",
            "company": "OMAPI",
            "date": "2022",
            "content": "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat."
        }

    }

    const educations = {
        1: {
            "title": "Business IT, Software Engineering",
            "university": "ISPM",
            "date": "2021 - 2024",
            "content": "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat."
        },
        2: {
            "title": "Personal development and career guidance",
            "university": "Programme SESAME",
            "date": "2021",
            "content": "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat."
        },
        3: {
            "title": "Baccalaureate",
            "university": "General High School Miarinarivo",
            "date": "2017 - 2020",
            "content": "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat."
        }

    }

    return (
        <div id="experiences" className={`py-12 my-16 lg:pt-20 h-auto md:flex ${isDarkMode ? 'my-bg-dark text-gray-300' : 'my-bg text-gray-600'}`} >
            <div className="ml-4">
                <h2 className="font-bold text-3xl pb-6 ml-1 tn:ml-4 cin:mr-6 sm:ml-16 md:ml-2 lg:ml-8 xl:ml-16">Experiences</h2>
                {Object.entries(experiences).map(([key, experience], index, array) => (
                    <div key={key} className="flex justify-center ml-0 tn:ml-4 sm:mx-16 md:mx-2 lg:mx-8 xl:ml-16">
                        <div>
                            <i className="fa fa-circle text-purple-600 mr-2 text-xl"></i>
                            <span className={`lineStyle h-full bg-purple-600 -mt-2 mb-0 pb-0 ${index === (array.length - 1) && 'h-0'}`}></span>
                        </div>
                        <div className="mr-4 mb-6">
                            <h4 className="font-bold text-xl text-purple-500">{experience.title}</h4>
                            <span className="font-bold text-base">{experience.company} | <small className="text-sm">{experience.date}</small></span>
                            <p className={`mt-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                                {experience.content}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="ml-4">
                <h2 className="font-bold text-3xl pb-6 ml-1 tn:ml-4 sm:ml-16 md:ml-2">Educations</h2>
                {Object.entries(educations).map(([key, education], index, array) => (
                    <div key={key} className="flex justify-center ml-0 tn:ml-4 cin:mr-6 sm:mx-16 md:mx-2 lg:mr-8 xl:mr-16">
                        <div>
                            <i className="fa fa-circle text-purple-600 mr-2 text-xl"></i>
                            <span className={`lineStyle h-full bg-purple-600 -mt-2 ${(index === array.length - 1) && 'h-0'}`}></span>
                        </div>
                        <div className="mr-4 mb-6">
                            <h4 className="font-bold text-xl text-purple-500">{education.title}</h4>
                            <span className="font-bold text-base">{education.university} | <small className="text-sm">{education.date}</small></span>
                            <p className={`mt-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                                {education.content}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

        </div >
    )
}

export default Experience;
