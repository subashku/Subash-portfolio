import { useState } from "react";
import { X, Layers, ArrowUpRight, CheckCircle2, Sparkles } from "lucide-react";
import { FaGithub } from "react-icons/fa";

// Project Artwork Assets
import mentalHealthImg from "../assets/project_mental_health.jpg";
import birdSoundImg from "../assets/project_bird_sound.jpg";
import courierImg from "../assets/project_courier.jpg";
import kaveriImg from "../assets/project_kaveri.jpg";
import jungleeImg from "../assets/project_junglee.jpg";

const PROJECTS_DATA = [
  {
    id: "mental-health",
    title: "AI-Based Mental Health Detection System",
    category: "AI & Machine Learning",
    badge: "NLP & FLASK // ACADEMIC PROTOTYPE",
    image: mentalHealthImg,
    description: "An academic prototype exploring natural language processing and machine learning to analyze emotional language patterns in user text prompts and recommend supportive wellness resources.",
    problem: "Identifying early linguistic cues of distress in text-based communications while strictly preserving user privacy and anonymity.",
    solution: "Developed an experimental machine learning NLP pipeline using Python and Flask to analyze language sentiment without storing personally identifiable information.",
    learningOutcomes: "Mastered text preprocessing pipelines (tokenization, stopword removal, TF-IDF vectorization), model classification boundaries, and ethical AI design.",
    architecture: [
      { step: "01. Input Layer", desc: "User text prompt submission with client-side sanitization" },
      { step: "02. NLP Preprocessing", desc: "Tokenization, stopword removal & TF-IDF feature extraction" },
      { step: "03. ML Inference", desc: "Trained classification model evaluates language pattern probabilities" },
      { step: "04. Presentation", desc: "Flask REST API returns supportive feedback & wellness resources" }
    ],
    features: [
      "Text input and preprocessing interface",
      "Machine-learning-based linguistic pattern analysis",
      "Supportive content suggestions & feedback",
      "Privacy-first data handling without persistent IDs"
    ],
    tech: ["Python", "Flask", "Machine Learning", "NLP", "Scikit-Learn"],
    sourceCode: "https://github.com/subashku"
  },
  {
    id: "bird-sound",
    title: "Bird Sound Recognition System",
    category: "AI & Machine Learning",
    badge: "AUDIO AI // LIBROSA & DSP",
    image: birdSoundImg,
    description: "An audio machine-learning project engineered to extract acoustic frequencies and classify avian vocalizations from sound recordings using digital signal processing.",
    problem: "Ecologists, researchers, and bird enthusiasts struggle to accurately identify fleeting bird calls in noisy environmental audio.",
    solution: "Employed acoustic signal feature extraction with Librosa to convert audio recordings into Mel-Frequency Cepstral Coefficients (MFCCs) for supervised classification.",
    learningOutcomes: "Learned digital audio signal preprocessing (spectrograms, MFCC feature extraction, audio sampling rates) and multiclass machine learning inference.",
    architecture: [
      { step: "01. Audio Ingestion", desc: "Captures WAV/MP3 sound recordings with sample rate normalization" },
      { step: "02. Signal Processing", desc: "Librosa library extracts Mel-frequency cepstral coefficients (MFCC)" },
      { step: "03. Classification", desc: "ML model evaluates spectral signatures against trained avian classes" },
      { step: "04. Output Display", desc: "Returns predicted bird species category with confidence score" }
    ],
    features: [
      "Audio file upload and waveform inspection",
      "Feature extraction using Librosa library",
      "Multiclass acoustic signal classification",
      "Predicted species category with confidence metrics"
    ],
    tech: ["Python", "Machine Learning", "Librosa", "Audio DSP", "NumPy"],
    sourceCode: "https://github.com/subashku"
  },
  {
    id: "courier-management",
    title: "Courier Management System",
    category: "Web Applications",
    badge: "LOGISTICS PLATFORM // PHP & MYSQL",
    image: courierImg,
    description: "A centralized database-backed logistics management web application designed to handle parcel booking, automated shipment tracking, and administrative dispatch records.",
    problem: "Manual shipment recording in small distribution hubs causes lost parcel status logs and administrative friction.",
    solution: "Built a relational database-backed management system with automated tracking IDs, status lifecycle updates, and secure administrative controls.",
    learningOutcomes: "Gained hands-on experience designing normalized relational schemas in MySQL, implementing CRUD operations, and session authentication in PHP.",
    architecture: [
      { step: "01. Parcel Booking", desc: "Customer inputs consignment weight, origin, and destination details" },
      { step: "02. Routing Controller", desc: "PHP application controller validates input & generates unique tracking code" },
      { step: "03. Data Persistence", desc: "MySQL tables record consignment lifecycle, timestamps & branch nodes" },
      { step: "04. Live Tracking", desc: "Responsive tracking view for customers and dispatch dashboard for staff" }
    ],
    features: [
      "Customer registration and session authentication",
      "Consignment booking with automated tracking ID",
      "Shipment lifecycle status updates (In-Transit, Delivered)",
      "Admin control center for hub dispatchers"
    ],
    tech: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3"],
    sourceCode: "https://github.com/subashku"
  },
  {
    id: "kaveri-homecare",
    title: "Kaveri Home Care",
    category: "Web Applications",
    badge: "HEALTHCARE PLATFORM // REACT & CSS3",
    image: kaveriImg,
    description: "A responsive home healthcare and elder assistance web platform connecting families with verified caregivers, dedicated nursing services, and personalized care inquiries.",
    problem: "Families seeking reliable elder care often struggle to access verified caregiver credentials, pricing clarity, and direct consultation booking.",
    solution: "Designed a responsive, accessible React web application featuring organized care service directories, verified caregiver credential profiles, and interactive consultation request forms.",
    learningOutcomes: "Mastered responsive UI design systems, accessible color contrast standards (WCAG), interactive inquiry forms, and modular React component architecture.",
    architecture: [
      { step: "01. Single Page App", desc: "Vite + React component architecture with smooth section navigation" },
      { step: "02. Service Directory", desc: "Filtered lists of available home-care packages & verified caregivers" },
      { step: "03. Interactive Form", desc: "Stateful booking & enquiry form with client-side field validation" },
      { step: "04. Direct Contact", desc: "Click-to-call and email dispatch links for family follow-up" }
    ],
    features: [
      "Home-care service catalog with comprehensive care tiers",
      "Verified caregiver profile cards & credentials",
      "Interactive booking and enquiry dispatch form",
      "High-contrast accessible layout for seniors and families"
    ],
    tech: ["React.js", "CSS3 Design System", "JavaScript (ES6+)", "Vite"],
    sourceCode: "https://github.com/subashku"
  },
  {
    id: "junglee-shopping",
    title: "Junglee Shopping",
    category: "Web Applications",
    badge: "E-COMMERCE // REACT & CLIENT STATE",
    image: jungleeImg,
    description: "A trendy fashion and apparel e-commerce web application featuring dynamic catalog navigation, promotional product banners, and responsive client-side cart interactions.",
    problem: "Providing online shoppers with an engaging, magazine-inspired fashion browsing experience with quick item inspection.",
    solution: "Engineered a contemporary React shopping interface with animated promotional cards, category selectors, and smooth cart drawer interactions.",
    learningOutcomes: "Strengthened skills in frontend performance, responsive UI layouts, client-side routing, and modular component reusability.",
    architecture: [
      { step: "01. Lookbook Showcase", desc: "Curated apparel collections with seasonal promotional banners" },
      { step: "02. Category Navigation", desc: "Multi-filter system for clothing types, sizes, and price tiers" },
      { step: "03. Cart Drawer", desc: "Sliding drawer cart with instant calculations and item removal" },
      { step: "04. Order Review", desc: "Validation of customer shipping details prior to simulated order dispatch" }
    ],
    features: [
      "Modern editorial fashion lookbook interface",
      "Dynamic product filtering by apparel category",
      "Interactive cart management and total pricing",
      "Fully responsive mobile and tablet layout"
    ],
    tech: ["React.js", "JavaScript", "Vite", "Responsive CSS"],
    sourceCode: "https://github.com/subashku"
  }
];

function Projects() {
  const [filter, setFilter] = useState("All");
  const [activeModalProject, setActiveModalProject] = useState(null);

  const filteredProjects = filter === "All" 
    ? PROJECTS_DATA 
    : PROJECTS_DATA.filter(p => p.category === filter);

  return (
    <section id="projects" className="projects-showcase-section">
      <div className="section-header-clean">
        <div className="chapter-meta">
          <span className="chapter-number">03 // </span>
          <span className="section-kicker">CURATED WORKS</span>
        </div>
        <h2 className="section-title">WORK THAT MOVES IDEAS FORWARD</h2>
        <p className="section-lead">
          A showcase of practical academic prototypes, audio machine learning systems, and full-stack web applications.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="projects-filter-nav">
        {["All", "AI & Machine Learning", "Web Applications"].map((cat) => (
          <button
            key={cat}
            type="button"
            className={`filter-pill-btn ${filter === cat ? "active" : ""}`}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Large Immersive Project Presentations — Dark & Light Mixture */}
      <div className="projects-immersive-list">
        {filteredProjects.map((project, index) => {
          const isReversed = index % 2 === 1;
          const isDarkCard = index % 2 === 0;

          return (
            <article 
              key={project.id} 
              className={`project-feature-card ${isReversed ? "card-reversed" : ""} ${isDarkCard ? "card-theme-dark" : "card-theme-light"}`}
            >
              {/* Expansive Artwork Showcase */}
              <div className="project-feature-visual">
                <div className="project-visual-wrapper">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="project-display-image"
                    loading="lazy"
                  />
                  <div className="project-badge-overlay">
                    <span>{project.badge}</span>
                  </div>
                </div>
              </div>

              {/* Informative Content Column */}
              <div className="project-feature-content">
                <span className="project-category-tag">{project.category}</span>
                <h3 className="project-display-title">{project.title}</h3>
                <p className="project-description-text">{project.description}</p>

                {/* Core Feature Highlights */}
                <div className="project-feature-bullets">
                  <span className="bullets-header">SYSTEM HIGHLIGHTS:</span>
                  <ul>
                    {project.features.slice(0, 3).map((feat, fIdx) => (
                      <li key={fIdx}>
                        <CheckCircle2 size={15} className="bullet-check-icon" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technology Badges */}
                <div className="project-tech-stack">
                  {project.tech.map((t, tIdx) => (
                    <span key={tIdx} className="tech-chip">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="project-actions-group">
                  <button
                    type="button"
                    className="btn-inspect-architecture"
                    onClick={() => setActiveModalProject(project)}
                  >
                    <span>Inspect Architecture</span>
                    <ArrowUpRight size={16} />
                  </button>

                  <a
                    href={project.sourceCode}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-github-source"
                    aria-label={`View ${project.title} code on GitHub`}
                  >
                    <FaGithub size={16} />
                    <span>GitHub Code</span>
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* Deep-Dive Architecture Inspection Modal */}
      {activeModalProject && (
        <div 
          className="modal-backdrop" 
          onClick={() => setActiveModalProject(null)}
          role="dialog"
          aria-modal="true"
        >
          <div 
            className="architecture-modal-dialog" 
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header-strip">
              <div>
                <span className="modal-kicker">SYSTEM ARCHITECTURE</span>
                <h3 className="modal-title">{activeModalProject.title}</h3>
              </div>
              <button
                type="button"
                className="modal-close-button"
                onClick={() => setActiveModalProject(null)}
                aria-label="Close architecture modal"
              >
                <X size={20} />
              </button>
            </div>

            <div className="modal-scroll-content">
              {/* Problem & Solution Cards */}
              <div className="modal-duo-overview">
                <div className="duo-box problem-box">
                  <span className="duo-label">THE PROBLEM</span>
                  <p>{activeModalProject.problem}</p>
                </div>
                <div className="duo-box solution-box">
                  <span className="duo-label">THE SOLUTION</span>
                  <p>{activeModalProject.solution}</p>
                </div>
              </div>

              {/* System Flow Diagram / Architecture Steps */}
              <div className="modal-system-flow">
                <h4 className="flow-heading">
                  <Layers size={18} /> Processing Pipeline
                </h4>
                <div className="flow-steps-grid">
                  {activeModalProject.architecture.map((step, sIdx) => (
                    <div key={sIdx} className="flow-step-item">
                      <span className="step-number">{step.step}</span>
                      <p className="step-desc">{step.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Takeaways */}
              <div className="modal-takeaways-block">
                <h4 className="takeaways-heading">
                  <Sparkles size={18} /> Engineering Learning Outcomes
                </h4>
                <p>{activeModalProject.learningOutcomes}</p>
              </div>

              {/* Technology Stack List */}
              <div className="modal-tech-summary">
                <span className="summary-label">TECHNOLOGY STACK:</span>
                <div className="modal-tech-chips">
                  {activeModalProject.tech.map((t, idx) => (
                    <span key={idx} className="tech-chip">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="modal-footer-strip">
              <a
                href={activeModalProject.sourceCode}
                target="_blank"
                rel="noreferrer"
                className="btn-primary-action"
              >
                <FaGithub size={16} />
                <span>View Repository on GitHub</span>
              </a>
              <button
                type="button"
                className="btn-secondary-action"
                onClick={() => setActiveModalProject(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;