import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import About from "./pages/About";
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

            <div id="others">
                <About isDarkMode={isDarkMode} />
                <Contact />
            </div>
        </>
    );
}

export default App;
