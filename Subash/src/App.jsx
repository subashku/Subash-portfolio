import { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/home";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Education from "./Components/Education";
import Experience from "./Components/Experience";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import { ArrowUp } from "lucide-react";

function App() {
    const [theme, setTheme] = useState("light");
    const [showScrollTop, setShowScrollTop] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    useEffect(() => {
        const handleScroll = () => {
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            if (totalHeight > 0) {
                const currentProgress = (window.scrollY / totalHeight) * 100;
                setScrollProgress(currentProgress);
            }

            if (window.scrollY > 400) {
                setShowScrollTop(true);
            } else {
                setShowScrollTop(false);
            }
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className={`app-container ${theme}`}>
            {/* Reading Progress Indicator */}
            <div 
                className="scroll-progress-bar" 
                style={{ width: `${scrollProgress}%` }}
                aria-hidden="true"
            />

            <Navbar theme={theme} toggleTheme={toggleTheme} />
            <main>
                <Home />
                <About />
                <Skills />
                <Projects />
                <Education />
                <Experience />
                <Resume />
                <Contact />
            </main>
            <Footer />

            {showScrollTop && (
                <button 
                    onClick={scrollToTop} 
                    className="scroll-to-top"
                    aria-label="Scroll to top"
                >
                    <ArrowUp size={18} />
                </button>
            )}
        </div>
    );
}

export default App;