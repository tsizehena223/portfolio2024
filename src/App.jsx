import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Tools from "./pages/Tools";
import Experience from "./pages/Experience";
import Project from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const handleSwitchMode = () => {
        setIsDarkMode((prevMode) => !prevMode);
    }

    useEffect(() => {
        const body = document.body;

        if (isDarkMode) {
            body.classList.add("dark");
        } else {
            body.classList.remove("dark")
        }
    }, [isDarkMode])

    return (
        <>
            <Navbar isDarkMode={isDarkMode} onSwitchMode={handleSwitchMode} />
            {/* <Background isDarkMode={isDarkMode} /> */}
            <div id="sections">
                <About isDarkMode={isDarkMode} />
                <Experience isDarkMode={isDarkMode} />
                <Tools isDarkMode={isDarkMode} />
                <Project isDarkMode={isDarkMode} />
                <Contact isDarkMode={isDarkMode} />
            </div>
        </>
    );
}

export default App;
