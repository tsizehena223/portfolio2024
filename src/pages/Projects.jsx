import CardProjects from "../components/CardProjects"

const Project = ({ isDarkMode }) => {
    return (
        <div id="projects" className={`my-6 lg:pt-20 h-auto ${isDarkMode ? 'my-bg-dark text-gray-300' : 'my-bg text-gray-600'}`} >
            <h2 className={`font-bold text-3xl md:text-4xl lg:text-5xl text-center text-purple-600`}>Some projects</h2>
            <div className="py-6">
                <CardProjects isDarkMode={isDarkMode} />
            </div>
        </div >
    )
}

export default Project
