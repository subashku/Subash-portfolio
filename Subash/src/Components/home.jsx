import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { ArrowDownRight, Download } from "lucide-react";
import profilePhoto from "../images/profile.jpeg";

const ROLES = [
  "MCA Graduate",
  "Aspiring Software Developer",
  "React & Web Developer",
  "Python & ML Explorer"
];

function Home() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState(() => {
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return "MCA Graduate | Aspiring Software Developer";
    }
    return "";
  });
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const currentFullRole = ROLES[roleIndex];
    const typingSpeed = isDeleting ? 35 : 75;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentFullRole.substring(0, displayText.length + 1));
        if (displayText.length + 1 === currentFullRole.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayText(currentFullRole.substring(0, displayText.length - 1));
        if (displayText.length - 1 === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % ROLES.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section id="home" className="hero-editorial">
      <div className="hero-inner-container">
        {/* Left Column: Typographic Focus & Narrative */}
        <div className="hero-content-col">
          <div className="hero-meta-badge">
            <span className="status-indicator-dot"></span>
            <span className="hero-meta-label">PORTFOLIO // 2026</span>
            <span className="hero-meta-sep">•</span>
            <span className="hero-meta-location">TAMIL NADU, INDIA</span>
          </div>

          <div className="hero-greeting-row">
            <span className="hero-greeting-sub">Hello, I'm</span>
            <span className="hand-annotation hero-curious-tag">✦ Aspiring Software Developer</span>
          </div>

          <h1 className="hero-wordmark">
            SUBASH
          </h1>

          <div className="hero-role-display">
            <span className="hero-role-lead">MCA GRADUATE</span>
            <span className="hero-role-sep">|</span>
            <span className="hero-role-text">{displayText}</span>
            <span className="hero-role-cursor" aria-hidden="true">_</span>
          </div>

          <p className="hero-lead-bio">
            I'm an MCA graduate with a passion for building clean web applications and exploring intelligent systems. 
            Eager to contribute technical curiosity, structured problem-solving, and clean code to a professional engineering team.
          </p>

          <div className="hero-actions-row">
            <a href="#projects" className="btn-primary-action">
              <span>View My Projects</span>
              <ArrowDownRight size={18} className="btn-icon" />
            </a>

            <a 
              href="/resume/Subash_Resume.pdf" 
              download="Subash_Resume.pdf" 
              className="btn-secondary-action"
              aria-label="Download Official Subash Resume PDF"
            >
              <Download size={16} />
              <span>Download Resume</span>
            </a>
          </div>

          <div className="hero-social-channels">
            <span className="channels-title">CHANNELS:</span>
            <a href="https://github.com/subashku" target="_blank" rel="noreferrer" aria-label="GitHub">
              <FaGithub size={17} />
              <span>GitHub</span>
            </a>
            <span className="channel-divider">/</span>
            <a href="https://www.linkedin.com/in/subash-kulandaivelan" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FaLinkedin size={17} />
              <span>LinkedIn</span>
            </a>
            <span className="channel-divider">/</span>
            <a href="mailto:subashkulandaivelan@gmail.com" aria-label="Email">
              <FaEnvelope size={17} />
              <span>Email</span>
            </a>
          </div>
        </div>

        {/* Right Column: Premium Editorial Real Portrait Composition */}
        <div className="hero-visual-col">
          <div className="hero-portrait-stage">
            {/* Subtle architectural ambient backdrop */}
            <div className="portrait-glow-ring" aria-hidden="true" />
            
            {/* Floating Technical Symbols */}
            <div className="floating-code-tag tag-react" aria-hidden="true">
              <code>&lt;React.js /&gt;</code>
            </div>
            <div className="floating-code-tag tag-python" aria-hidden="true">
              <code>&#123; Python &amp; ML &#125;</code>
            </div>
            <div className="floating-code-tag tag-sql" aria-hidden="true">
              <code>SELECT * FROM logic;</code>
            </div>

            {/* Hand-drawn arrow annotation pointing to Subash */}
            <div className="hero-drawn-arrow-box" aria-hidden="true">
              <svg width="48" height="32" viewBox="0 0 48 32" fill="none" className="drawn-arrow-svg">
                <path d="M4 24 C 18 28, 36 24, 42 8 M 32 10 L 42 8 L 42 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="hand-script arrow-text">That's me!</span>
            </div>

            <div className="hero-portrait-frame">
              <img 
                src={profilePhoto} 
                alt="Subash K. - Aspiring Software Developer" 
                className="hero-real-portrait"
                loading="eager"
              />
              <div className="portrait-lighting-overlay" aria-hidden="true" />
              
              <div className="portrait-status-bar">
                <div className="status-live-indicator">
                  <span className="live-pulse-dot"></span>
                  <span className="status-live-text">AVAILABLE FOR HIRE</span>
                </div>
                <span className="portrait-edition">MCA 2026</span>
              </div>
            </div>

            {/* Realistic Miniature Laptop / Terminal Snippet */}
            <div className="hero-floating-laptop">
              <div className="laptop-header-bar">
                <span className="dot dot-red"></span>
                <span className="dot dot-yellow"></span>
                <span className="dot dot-green"></span>
                <span className="laptop-filename">subash.config.js</span>
              </div>
              <div className="laptop-code-content">
                <code>
                  <span className="c-keyword">const</span> <span className="c-name">subash</span> = &#123;<br/>
                  &nbsp;&nbsp;focus: <span className="c-str">'Frontend &amp; Python'</span>,<br/>
                  &nbsp;&nbsp;degrees: [<span className="c-str">'BCA'</span>, <span className="c-str">'MCA'</span>],<br/>
                  &nbsp;&nbsp;status: <span className="c-status">'ReadyToShip'</span><br/>
                  &#125;;
                </code>
              </div>
            </div>

            {/* Subtle credential card pinned to the portrait */}
            <div className="portrait-credential-card">
              <span className="cred-kicker">ENGINEERING CANDIDATE</span>
              <strong className="cred-name">Subash K.</strong>
              <span className="cred-desc">MCA Graduate • Dhanalakshmi Srinivasan</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;