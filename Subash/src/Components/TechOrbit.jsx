import { useState } from "react";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaPython, FaDatabase, FaGitAlt, FaGithub } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";

const SKILLS_LIST = [
  { name: "HTML", label: "Semantic Markup", icon: <FaHtml5 color="#E34F26" size={26} />, color: "#E34F26", angle: 0 },
  { name: "CSS", label: "Responsive Styling", icon: <FaCss3Alt color="#1572B6" size={26} />, color: "#1572B6", angle: 45 },
  { name: "JavaScript", label: "Client-side Logic", icon: <FaJsSquare color="#F7DF1E" size={26} />, color: "#F7DF1E", angle: 90 },
  { name: "React", label: "Component Architecture", icon: <FaReact color="#61DAFB" size={26} />, color: "#61DAFB", angle: 135 },
  { name: "Python", label: "Scripting & Backend", icon: <FaPython color="#3776AB" size={26} />, color: "#3776AB", angle: 180 },
  { name: "SQL", label: "Database Queries", icon: <FaDatabase color="#0EA5FF" size={26} />, color: "#0EA5FF", angle: 225 },
  { name: "Git", label: "Version Control", icon: <FaGitAlt color="#F05032" size={26} />, color: "#F05032", angle: 270 },
  { name: "VS Code", label: "Development Environment", icon: <VscVscode color="#007ACC" size={26} />, color: "#007ACC", angle: 315 },
  { name: "GitHub", label: "Code Collaboration", icon: <FaGithub color="#A7B6C8" size={26} />, color: "#A7B6C8", angle: 360 }
];

function TechOrbit() {
  const [activeSkill, setActiveSkill] = useState(SKILLS_LIST[3]); // default to React
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div className="tech-orbit-wrapper">
      <div className="tech-orbit-center-info">
        <span className="orbit-badge">Interactive 3D Skill Orb</span>
        <div className="orbit-active-icon">{activeSkill.icon}</div>
        <h4>{activeSkill.name}</h4>
        <p>{activeSkill.label}</p>
        <span className="orbit-hint">Click any orbiting node to inspect</span>
      </div>

      <div 
        className={`orbit-ring-container ${isPaused ? "paused" : ""}`}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        role="region"
        aria-label="3D Technology Orbit"
      >
        <div className="orbit-ring ring-1">
          {SKILLS_LIST.slice(0, 5).map((skill, i) => (
            <button
              key={i}
              type="button"
              className={`orbit-node ${activeSkill.name === skill.name ? "selected" : ""}`}
              onClick={() => setActiveSkill(skill)}
              style={{
                "--item-angle": `${(i * 360) / 5}deg`,
                "--glow-color": skill.color
              }}
              aria-label={`Select ${skill.name}`}
            >
              {skill.icon}
            </button>
          ))}
        </div>

        <div className="orbit-ring ring-2">
          {SKILLS_LIST.slice(5).map((skill, i) => (
            <button
              key={i}
              type="button"
              className={`orbit-node ${activeSkill.name === skill.name ? "selected" : ""}`}
              onClick={() => setActiveSkill(skill)}
              style={{
                "--item-angle": `${(i * 360) / 4}deg`,
                "--glow-color": skill.color
              }}
              aria-label={`Select ${skill.name}`}
            >
              {skill.icon}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TechOrbit;
