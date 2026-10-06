import Navbar from "./Components/Navbar";
import Home from "./Components/home";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Education from "./Components/Education";
import Projects from "./Components/Projects";
import Experience from "./Components/Experience";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
    return (
        <div>
            <h1>Subash Portfolio</h1>

            <Navbar />
            <Home />
            <About />
            <Skills />
            <Education />
            <Projects />
            <Experience />
            <Resume />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;