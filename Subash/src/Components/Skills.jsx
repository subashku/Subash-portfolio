import { useState } from "react";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaPython, FaDatabase, FaGitAlt, FaGithub } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { Sparkles } from "lucide-react";
import TechOrbit from "./TechOrbit";

const SKILLS_DATA = [
  {
    category: "frontend",
    name: "HTML5 & CSS3",
    tagline: "Semantic Structure & Modern Styling",
    desc: "Building accessible semantic markup, responsive flexbox and grid layouts, and custom design systems.",
    icon: (
      <div className="dual-icon-wrap">
        <FaHtml5 color="#E34F26" size={26} />
        <FaCss3Alt color="#1572B6" size={26} />
      </div>
    ),
    badge: "CORE UI"
  },
  {
    category: "frontend",
    name: "JavaScript (ES6+)",
    tagline: "Client-side Logic & DOM",
    desc: "Modern ECMAScript standards, asynchronous fetch calls, event handling, and interactive application logic.",
    icon: <FaJsSquare color="#F7DF1E" size={28} />,
    badge: "LANGUAGE"
  },
  {
    category: "frontend",
    name: "React.js",
    tagline: "Component Architecture",
    desc: "Single Page Applications, modular functional components, reactive state with hooks, and Vite build tooling.",
    icon: <FaReact color="#61DAFB" size={28} />,
    badge: "LIBRARY"
  },
  {
    category: "backend",
    name: "Python",
    tagline: "Backend & Machine Learning",
    desc: "Writing automation scripts, Flask REST APIs, and building audio analysis and NLP text classification pipelines.",
    icon: <FaPython color="#3776AB" size={28} />,
    badge: "BACKEND / ML"
  },
  {
    category: "backend",
    name: "SQL & Relational Databases",
    tagline: "Schema Design & Queries",
    desc: "Relational database schema modeling, writing structured queries, JOIN operations, and data management in MySQL.",
    icon: <FaDatabase color="#0EA5FF" size={26} />,
    badge: "DATABASES"
  },
  {
    category: "tools",
    name: "Git & GitHub",
    tagline: "Version Control & Collaboration",
    desc: "Branching workflows, structured commit histories, repository management, and hosting open-source code.",
    icon: (
      <div className="dual-icon-wrap">
        <FaGitAlt color="#F05032" size={26} />
        <FaGithub color="#0A0A0A" size={26} />
      </div>
    ),
    badge: "COLLABORATION"
  },
  {
    category: "tools",
    name: "Visual Studio Code",
    tagline: "Primary Development IDE",
    desc: "Configured developer environment with extensions, integrated debugging, terminal workflows, and code formatting.",
    icon: <VscVscode color="#007ACC" size={28} />,
    badge: "WORKFLOW"
  }
];

function Skills() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredSkills = activeTab === "all" 
    ? SKILLS_DATA 
    : SKILLS_DATA.filter(s => s.category === activeTab);

  return (
    <section id="skills" className="editorial-section toolkit-dark-showcase">
      <div className="section-header-clean">
        <div className="chapter-meta">
          <span className="chapter-number">02 // </span>
          <span className="section-kicker">TECHNICAL CAPABILITIES</span>
        </div>
        <h2 className="section-title">MY DIGITAL TOOLKIT</h2>
        <p className="section-lead">
          Technologies and tools I build with daily, refined through academic systems and practical programming.
        </p>
      </div>

      {/* Interactive 3D Technology Radar */}
      <div className="toolkit-orbit-card">
        <div className="orbit-card-badge">
          <Sparkles size={14} /> <span>INTERACTIVE 3D RADAR</span>
        </div>
        <TechOrbit />
      </div>

      {/* Category Filter Tabs */}
      <div className="toolkit-tabs-row">
        {[
          { id: "all", label: "All Technologies" },
          { id: "frontend", label: "Frontend Craft" },
          { id: "backend", label: "Backend & Data" },
          { id: "tools", label: "Developer Tools" }
        ].map((tab) => (
          <button
            key={tab.id}
            type="button"
            className={`tab-pill-btn ${activeTab === tab.id ? "active" : ""}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Refined Skills Grid */}
      <div className="toolkit-cards-grid">
        {filteredSkills.map((skill, index) => (
          <div key={index} className="toolkit-item-card">
            <div className="toolkit-card-header">
              <div className="toolkit-icon-frame">
                {skill.icon}
              </div>
              <span className="toolkit-badge">{skill.badge}</span>
            </div>

            <h3 className="toolkit-skill-name">{skill.name}</h3>
            <span className="toolkit-skill-tagline">{skill.tagline}</span>
            <p className="toolkit-skill-desc">{skill.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;