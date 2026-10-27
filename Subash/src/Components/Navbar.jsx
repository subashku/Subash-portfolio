import { useState } from "react";
import { Sun, Moon, Menu, X, Download, ArrowUpRight } from "lucide-react";

function Navbar({ theme, toggleTheme }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="navbar-header">
      <div className="nav-announcement-bar">
        <span>MCA GRADUATE 2026 // ASPIRING SOFTWARE DEVELOPER</span>
        <span className="announcement-badge">
          <span className="status-dot"></span> OPEN TO WORK
        </span>
      </div>

      <nav className="navbar" aria-label="Main Navigation">
        <a href="#home" className="logo" onClick={closeMenu}>
          <span className="logo-text">SUBASH</span>
          <span className="logo-dot">.</span>
          <span className="logo-tag">PORTFOLIO</span>
        </a>

        {/* Links matching reference */}
        <div className={`nav-links ${isMobileMenuOpen ? "mobile-open" : ""}`}>
          <a href="#home" onClick={closeMenu}><span className="nav-num">00</span> Home</a>
          <a href="#about" onClick={closeMenu}><span className="nav-num">01</span> About</a>
          <a href="#skills" onClick={closeMenu}><span className="nav-num">02</span> Toolkit</a>
          <a href="#projects" onClick={closeMenu}><span className="nav-num">03</span> Projects</a>
          <a href="#education" onClick={closeMenu}><span className="nav-num">04</span> Education</a>
          <a href="#experience" onClick={closeMenu}><span className="nav-num">05</span> Experience</a>
          <a href="#resume" onClick={closeMenu}><span className="nav-num">06</span> Resume</a>
          <a href="#contact" onClick={closeMenu}><span className="nav-num">07</span> Contact</a>
          
          {/* Mobile direct resume download */}
          <a 
            href="/resume/Subash_Resume.pdf" 
            download="Subash_Resume.pdf" 
            className="mobile-resume-link"
            onClick={closeMenu}
          >
            <Download size={16} /> Download Resume (PDF)
          </a>
        </div>

        <div className="nav-actions">
          <button 
            onClick={toggleTheme} 
            className="theme-toggle" 
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
            title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
          >
            {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
          </button>

          <a 
            href="/resume/Subash_Resume.pdf" 
            download="Subash_Resume.pdf" 
            className="resume-nav-button"
            aria-label="Download Resume PDF"
          >
            <Download size={14} /> Resume <ArrowUpRight size={14} className="nav-arrow" />
          </a>

          <button 
            className="mobile-menu-btn" 
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;