import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Background from "./components/Background";
import Tools from "./pages/Tools";

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
            <Background />
            <div id="sections">
                <About isDarkMode={isDarkMode} />
                <Tools isDarkMode={isDarkMode} />
            </div>
        </>
    );
}

export default App;
