import { ArrowUp, Sparkles, Heart } from "lucide-react";

function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="editorial-footer">
      <div className="footer-top-accent">
        <div className="footer-running-track">
          <span>PORTFOLIO EDITION // 2026</span>
          <span>✦</span>
          <span>SUBASH KULANDAIVELAN</span>
          <span>✦</span>
          <span>MCA GRADUATE</span>
          <span>✦</span>
          <span>ASPIRING SOFTWARE DEVELOPER</span>
          <span>✦</span>
          <span>OPEN FOR OPPORTUNITIES</span>
          <span>✦</span>
        </div>
      </div>

      <div className="footer-main-container">
        <div className="footer-col-brand">
          <a href="#home" className="footer-huge-logo">
            SUBASH<span>.</span>
          </a>
          <p className="footer-bio-summary">
            MCA Graduate from Dhanalakshmi Srinivasan Engineering College. Dedicated to crafting reliable web applications, 
            exploring machine learning solutions, and writing clean, accessible code.
          </p>

          <div className="footer-status-pill">
            <span className="footer-dot"></span> Available for full-time software developer opportunities
          </div>
        </div>

        <div className="footer-col-nav">
          <span className="footer-heading">NAVIGATION</span>
          <div className="footer-nav-grid">
            <a href="#home">00 // Home</a>
            <a href="#about">01 // About</a>
            <a href="#skills">02 // Toolkit</a>
            <a href="#projects">03 // Selected Projects</a>
            <a href="#education">04 // Education</a>
            <a href="#experience">05 // Experience</a>
            <a href="#resume">06 // Resume</a>
            <a href="#contact">07 // Contact</a>
          </div>
        </div>

        <div className="footer-col-connect">
          <span className="footer-heading">CHANNELS</span>
          <div className="footer-social-list">
            <a href="mailto:subashkulandaivelan@gmail.com">
              Email <span>subashkulandaivelan@gmail.com</span>
            </a>
            <a href="https://www.linkedin.com/in/subash-kulandaivelan" target="_blank" rel="noreferrer">
              LinkedIn <span>in/subash-kulandaivelan</span>
            </a>
            <a href="https://github.com/subashku" target="_blank" rel="noreferrer">
              GitHub <span>github.com/subashku</span>
            </a>
            <a href="/resume/Subash_Resume.pdf" download="Subash_Resume.pdf">
              Resume <span>Download Official PDF</span>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom-bar">
        <div className="footer-bottom-content">
          <p className="footer-copyright">
            © {currentYear} Subash Kulandaivelan. Built with React &amp; Modern CSS.
          </p>
          <span className="footer-craft-tag">
            Crafted with curiosity &amp; clean code ✦
          </span>
          <button
            type="button"
            className="footer-back-to-top"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <span>Back to Top</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;