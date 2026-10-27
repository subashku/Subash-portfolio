import { GraduationCap, Code2, Database, Brain, Sparkles } from "lucide-react";
import profilePhoto from "../images/profile.jpeg";

function About() {
  return (
    <section id="about" className="editorial-section">
      <div className="section-header-clean">
        <div className="chapter-meta">
          <span className="chapter-number">01 // </span>
          <span className="section-kicker">BIOGRAPHY &amp; ASPIRATION</span>
        </div>
        <h2 className="section-title">THE PERSON BEHIND THE CODE</h2>
      </div>

      <div className="about-editorial-layout">
        {/* Left Column: Authentic Personal Portrait */}
        <div className="about-visual-column">
          <div className="about-portrait-card">
            <img 
              src={profilePhoto} 
              alt="Subash K. - Software Developer" 
              className="about-real-portrait"
              loading="lazy"
            />
            <div className="portrait-legend">
              <span className="legend-tag">SUBASH K. // MCA 2026</span>
              <span className="legend-text">Logic • Architecture • Continuous Learning</span>
            </div>
          </div>
        </div>

        {/* Right Column: Clear Narrative & Credentials */}
        <div className="about-text-column">
          <div className="about-narrative-block">
            <h3 className="about-greeting-title">
              Hello, I'm Subash.
            </h3>
            <p className="about-paragraph">
              I completed my <strong>Master of Computer Applications (MCA)</strong> in May 2026 at 
              <em> Dhanalakshmi Srinivasan Engineering College</em>, following my 
              <strong> Bachelor of Computer Applications (BCA)</strong> from 
              <em> Government Arts and Science College, Tittagudi</em> in 2024.
            </p>
            <p className="about-paragraph">
              My engineering approach centers on clarity and craft. Whether structuring scalable React frontends, 
              writing Python automation routines, or querying relational databases in SQL, I focus on writing 
              readable, maintainable code that solves tangible problems.
            </p>
          </div>

          {/* Genuine Academic Qualifications Grid */}
          <div className="about-education-highlights">
            <div className="edu-highlight-card">
              <div className="edu-card-top">
                <GraduationCap size={20} className="edu-icon" />
                <span className="edu-year">2024 — 2026</span>
              </div>
              <h4 className="edu-degree">Master of Computer Applications</h4>
              <p className="edu-school">Dhanalakshmi Srinivasan Engineering College</p>
              <span className="edu-status">Completed — May 2026</span>
            </div>

            <div className="edu-highlight-card">
              <div className="edu-card-top">
                <GraduationCap size={20} className="edu-icon" />
                <span className="edu-year">2021 — 2024</span>
              </div>
              <h4 className="edu-degree">Bachelor of Computer Applications</h4>
              <p className="edu-school">Government Arts and Science College, Tittagudi</p>
              <span className="edu-status">Completed — 2024</span>
            </div>
          </div>

          {/* Core Competency Pillars */}
          <div className="about-pillars-row">
            <div className="pillar-item">
              <Code2 size={18} className="pillar-icon" />
              <div>
                <strong>Frontend Craft</strong>
                <span>React.js, responsive layouts, clean UI architecture</span>
              </div>
            </div>

            <div className="pillar-item">
              <Brain size={18} className="pillar-icon" />
              <div>
                <strong>Python &amp; ML Exploration</strong>
                <span>NLP classification pipelines, audio signal analysis</span>
              </div>
            </div>

            <div className="pillar-item">
              <Database size={18} className="pillar-icon" />
              <div>
                <strong>Data Architecture</strong>
                <span>Relational modeling, SQL queries, database logic</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;