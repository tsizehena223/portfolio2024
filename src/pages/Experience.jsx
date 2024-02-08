const Experience = ({ isDarkMode }) => {
    const experiences = {
        1: {
            "title": "Web Development Intern",
            "company": "LCom",
            "date": "2023 ~ 2 months",
            "content": "I did an internship in back-end web development using the Laravel framework. This internship allowed me to strengthen my skills in back-end programming. But that's not all, it also helped me to better organize my time as I was studying at the same time."
        },
        2: {
            "title": "Discovery Internship in IT Development",
            "company": "MyAgency",
            "date": "2022 ~ 2 weeks",
            "content": "I completed a discovery internship in web development. This allowed me to gain a good understanding of what the roles of a developer entail."
        },
        3: {
            "title": "IT Intern",
            "company": "OMAPI",
            "date": "2022 ~ 3 months",
            "content": "During this internship, I was responsible for providing assistance in Information Technology, primarily focusing on strategies for its improvement. Additionally, I contributed to enhancing customer relations through over 100 calls."
        },
        4: {
            "title": "Discovery Internship in Network Administration",
            "company": "SMMEC",
            "date": "2021",
            "content": "I completed my first internship at SMMEC (formerly OTIV Tana). The objective was to immerse oneself in the role of a professional and gain a deeper understanding of the network administrator profession."
        }

    }

    const educations = {
        1: {
            "title": "Business IT, Software Engineering",
            "university": "ISPM",
            "date": "2021 - 2024",
            "content": "I am currently in my third year of Computer Science studies at ISPM. I am specializing in the field of 'Management Informatics, Software Engineering, and Artificial Intelligence'."
        },
        2: {
            "title": "Personal development and career guidance",
            "university": "Programme SESAME",
            "date": "2021",
            "content": "I am a beneficiary of the SESAME Program. This program supports talented young individuals in achieving their goals through various training sessions such as career guidance, personal development, and professional pathways."
        },
        3: {
            "title": "Baccalaureate",
            "university": "General High School Miarinarivo",
            "date": "2017 - 2020",
            "content": "I obtained my Baccalaureate in the C series with a 'fairly good' mention in 2020."
        }

    }

    return (
        <div id="experiences" className={`py-12 my-16 lg:pt-20 h-auto md:flex ${isDarkMode ? 'my-bg-dark text-gray-300' : 'my-bg text-gray-600'}`} >
            <div className="ml-4">
                <h2 className="font-bold text-3xl pb-6 ml-1 tn:ml-4 cin:mr-6 sm:ml-16 md:ml-2 lg:ml-8 xl:ml-16">Experiences</h2>
                {Object.entries(experiences).map(([key, experience], index, array) => (
                    <div key={key} className="flex justify-start ml-0 tn:ml-4 sm:mx-16 md:mx-2 lg:mx-8 xl:ml-16">
                        <div>
                            <i className="fa fa-circle text-purple-600 mr-2 text-xl"></i>
                            <span className={`lineStyle bg-purple-600 -mt-2 mb-0 pb-0 ${index === (array.length - 1) ? 'h-0' : 'h-full'}`}></span>
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

            <div className="ml-4 mt-12 md:my-0">
                <h2 className="font-bold text-3xl pb-6 ml-1 tn:ml-4 sm:ml-16 md:ml-2">Educations</h2>
                {Object.entries(educations).map(([key, education], index, array) => (
                    <div key={key} className="flex justify-center ml-0 tn:ml-4 cin:mr-6 sm:mx-16 md:mx-2 lg:mr-8 xl:mr-16">
                        <div>
                            <i className="fa fa-circle text-purple-600 mr-2 text-xl"></i>
                            <span className={`lineStyle bg-purple-600 -mt-2 ${(index === array.length - 1) ? 'h-0' : 'h-full'}`}></span>
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
