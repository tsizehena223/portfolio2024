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
    };

    // Register GSAP + ScrollSmoother on mount
    useEffect(() => {
        const gsap = window.gsap;
        const ScrollSmoother = window.ScrollSmoother;

        if (gsap && ScrollSmoother) {
            gsap.registerPlugin(ScrollSmoother);

            ScrollSmoother.create({
                wrapper: "#smooth-wrapper",
                content: "#smooth-content",
                smooth: 1.5,
                smoothTouch: 0.1,
                effects: true,
            });
        }
    }, []);

    // Toggle dark mode
    useEffect(() => {
        document.body.classList.toggle("dark", isDarkMode);
    }, [isDarkMode]);

    return (
        <>
            <header
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "100px",
                    zIndex: 1000,
                    backdropFilter: "blur(20px)",
                    WebkitBackdropFilter: "blur(20px)",
                    backgroundColor: "rgba(255, 255, 255, 0.6)",
                }}
            >
                <Navbar isDarkMode={isDarkMode} onSwitchMode={handleSwitchMode} />
            </header>

            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <div id="sections">
                        <About isDarkMode={isDarkMode} />
                        <Experience isDarkMode={isDarkMode} />
                        <Tools isDarkMode={isDarkMode} />
                        <Project isDarkMode={isDarkMode} />
                        <Contact isDarkMode={isDarkMode} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;

