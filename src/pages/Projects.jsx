import Card from "../components/Card"

const Project = ({ isDarkMode }) => {
    return (
        <div id="projects" className={`-pt-10 my-16 lg:pt-20 h-auto md:flex ${isDarkMode ? 'my-bg-dark text-gray-300' : 'my-bg text-gray-600'}`} >
            <h2 className="font-bold text-3xl ml-8">Projects</h2>
            <div className="py-4 sm:flex">
                <Card />
                <Card />
            </div>
        </div>
    )
}

export default Project
