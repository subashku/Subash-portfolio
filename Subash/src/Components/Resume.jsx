import { useState } from "react";
import { FileText, Download, Eye, X, CheckCircle2, ArrowUpRight } from "lucide-react";

function Resume() {
  const [showPreview, setShowPreview] = useState(false);

  return (
    <section id="resume" className="editorial-section">
      {/* Chapter Marker */}
      <div className="section-chapter-header">
        <div className="chapter-meta">
          <span className="chapter-number">06 // </span>
          <span className="chapter-pill">OFFICIAL CURRICULUM VITAE</span>
        </div>
        <h2 className="editorial-heading">CURRICULUM VITAE</h2>
        <p className="editorial-subheading">
          Review my academic records, technical qualifications, projects, and contact information.
        </p>
      </div>

      <div className="resume-editorial-wrap">
        <div className="resume-dossier-card">
          {/* Top Dossier Header */}
          <div className="dossier-top">
            <div className="dossier-tag-group">
              <span className="dossier-tag">CANDIDATE DOSSIER</span>
              <span className="dossier-id">REF: SUBASH-2026-MCA</span>
            </div>
            <div className="dossier-stamp">
              <span>VERIFIED // 2026</span>
            </div>
          </div>

          <div className="dossier-grid">
            {/* Left: Document Icon & Overview */}
            <div className="dossier-preview-col">
              <div className="dossier-paper-sheet">
                <div className="paper-corner-fold"></div>
                <div className="paper-icon-wrap">
                  <FileText size={48} className="paper-icon" />
                </div>
                <h4 className="paper-doc-title">SUBASH_RESUME.PDF</h4>
                <span className="paper-doc-size">Official Document • Updated 2026</span>

                <div className="paper-summary-checks">
                  <div className="p-check-item">
                    <CheckCircle2 size={16} className="p-check-icon" />
                    <span>MCA &amp; BCA Degree Records</span>
                  </div>
                  <div className="p-check-item">
                    <CheckCircle2 size={16} className="p-check-icon" />
                    <span>React, Python &amp; SQL Competencies</span>
                  </div>
                  <div className="p-check-item">
                    <CheckCircle2 size={16} className="p-check-icon" />
                    <span>5 Practical Academic Projects</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Actions & Recruiter Message */}
            <div className="dossier-content-col">
              <h3 className="dossier-headline">
                Ready to review my profile for your engineering team?
              </h3>
              <p className="dossier-text">
                I am actively seeking an entry-level software developer or graduate trainee opportunity where I can 
                apply my problem-solving skills, learn from experienced mentors, and contribute to production web 
                applications. You can preview my complete resume directly in the browser or download an offline PDF copy.
              </p>

              <div className="dossier-actions">
                <a
                  href="/resume/Subash_Resume.pdf"
                  download="Subash_Resume.pdf"
                  className="btn-editorial-primary"
                  aria-label="Download Subash Resume PDF"
                >
                  <Download size={18} />
                  <span>DOWNLOAD RESUME (PDF)</span>
                </a>

                <button
                  type="button"
                  onClick={() => setShowPreview(true)}
                  className="btn-editorial-secondary"
                  aria-label="Preview Subash Resume in browser"
                >
                  <Eye size={18} />
                  <span>PREVIEW IN BROWSER</span>
                </button>
              </div>

              <div className="dossier-footnote">
                <span className="hand-script">
                  ✦ Direct PDF download • Formatted for ATS and human recruiters
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* In-Page Resume PDF Modal */}
      {showPreview && (
        <div 
          className="modal-backdrop" 
          onClick={() => setShowPreview(false)}
          role="dialog"
          aria-modal="true"
        >
          <div 
            className="editorial-modal-content resume-preview-modal" 
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-top-bar">
              <div className="modal-meta-left">
                <span className="modal-index">DOCUMENT PREVIEW</span>
                <span className="modal-badge">SUBASH_RESUME.PDF</span>
              </div>
              <button 
                type="button"
                className="modal-close-btn" 
                onClick={() => setShowPreview(false)}
                aria-label="Close Resume Preview"
              >
                <X size={20} />
              </button>
            </div>

            <div className="resume-iframe-container">
              <iframe 
                src="/resume/Subash_Resume.pdf#toolbar=0" 
                title="Subash Resume PDF Preview"
                width="100%" 
                height="560px"
              />
            </div>

            <div className="modal-footer-bar">
              <a
                href="/resume/Subash_Resume.pdf"
                download="Subash_Resume.pdf"
                className="btn-editorial-primary"
              >
                <Download size={16} />
                <span>Download Copy (PDF)</span>
              </a>
              <button 
                type="button" 
                className="btn-editorial-secondary" 
                onClick={() => setShowPreview(false)}
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Resume;