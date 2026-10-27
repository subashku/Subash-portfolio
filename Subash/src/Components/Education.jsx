import { GraduationCap, Award, BookOpen } from "lucide-react";

function Education() {
  return (
    <section id="education" className="editorial-section">
      {/* Chapter Marker */}
      <div className="section-chapter-header">
        <div className="chapter-meta">
          <span className="chapter-number">04 // </span>
          <span className="chapter-pill">ACADEMIC FOUNDATIONS</span>
        </div>
        <h2 className="editorial-heading">EDUCATION &amp; QUALIFICATIONS</h2>
        <p className="editorial-subheading">
          Academic degrees shaping my core understanding of Computer Science, software architecture, and algorithms.
        </p>
      </div>

      <div className="editorial-timeline">
        {/* Item 1: MCA */}
        <div className="timeline-entry">
          <div className="timeline-date-col">
            <span className="oversized-year">2026</span>
            <span className="timeline-status-tag tag-completed">COMPLETED MAY 2026</span>
          </div>

          <div className="timeline-node" aria-hidden="true">
            <div className="node-dot"></div>
            <div className="node-line"></div>
          </div>

          <div className="timeline-card">
            <div className="timeline-card-header">
              <div className="timeline-icon-wrap">
                <GraduationCap size={24} className="timeline-icon" />
              </div>
              <div className="timeline-title-meta">
                <span className="card-badge">POSTGRADUATE DEGREE</span>
                <h3 className="card-title">Master of Computer Applications (MCA)</h3>
              </div>
            </div>

            <p className="timeline-institution">
              Dhanalakshmi Srinivasan Engineering College
            </p>

            <p className="timeline-summary">
              Comprehensive two-year postgraduate program focused on advanced software engineering, database management systems, web applications, object-oriented programming, and applied artificial intelligence concepts.
            </p>

            <div className="timeline-highlights">
              <span className="highlight-pill">Advanced DBMS &amp; SQL</span>
              <span className="highlight-pill">Web Applications Architecture</span>
              <span className="highlight-pill">Machine Learning Foundations</span>
              <span className="highlight-pill">Software Project Lifecycle</span>
            </div>
          </div>
        </div>

        {/* Item 2: BCA */}
        <div className="timeline-entry">
          <div className="timeline-date-col">
            <span className="oversized-year">2024</span>
            <span className="timeline-status-tag tag-completed">COMPLETED 2024</span>
          </div>

          <div className="timeline-node" aria-hidden="true">
            <div className="node-dot"></div>
            <div className="node-line"></div>
          </div>

          <div className="timeline-card">
            <div className="timeline-card-header">
              <div className="timeline-icon-wrap">
                <BookOpen size={24} className="timeline-icon" />
              </div>
              <div className="timeline-title-meta">
                <span className="card-badge">UNDERGRADUATE DEGREE</span>
                <h3 className="card-title">Bachelor of Computer Applications (BCA)</h3>
              </div>
            </div>

            <p className="timeline-institution">
              Government Arts and Science College, Tittagudi
            </p>

            <p className="timeline-summary">
              Three-year undergraduate education building fundamental competencies in computer programming, data structures, algorithms, operating systems, and web technologies.
            </p>

            <div className="timeline-highlights">
              <span className="highlight-pill">Programming Fundamentals</span>
              <span className="highlight-pill">Data Structures</span>
              <span className="highlight-pill">Relational Databases</span>
              <span className="highlight-pill">Computer Networks</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;