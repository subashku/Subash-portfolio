import { Briefcase, CheckCircle2, MessageSquare, ShieldCheck, Clock } from "lucide-react";

function Experience() {
  return (
    <section id="experience" className="editorial-section">
      {/* Chapter Marker */}
      <div className="section-chapter-header">
        <div className="chapter-meta">
          <span className="chapter-number">05 // </span>
          <span className="chapter-pill">WORK HISTORY</span>
        </div>
        <h2 className="editorial-heading">WORK EXPERIENCE</h2>
        <p className="editorial-subheading">
          Professional background and transferable interpersonal competencies gained in customer-facing operations.
        </p>
      </div>

      <div className="experience-editorial-wrap">
        <div className="experience-editorial-card">
          <div className="exp-top-bar">
            <div className="exp-badge-group">
              <span className="exp-type-pill">NON-IT PROFESSIONAL EXPERIENCE</span>
              <span className="exp-duration-pill">
                <Clock size={14} /> DURATION: ~4 MONTHS
              </span>
            </div>
            <span className="exp-verified-stamp">VERIFIED ROLE</span>
          </div>

          <div className="exp-main-body">
            <div className="exp-title-block">
              <div className="exp-icon-box">
                <Briefcase size={26} className="exp-icon" />
              </div>
              <div>
                <h3 className="exp-role-title">Collection Agent / Loan Recovery</h3>
                <h4 className="exp-company-name">Mayaa Financial Services</h4>
              </div>
            </div>

            <p className="exp-desc-paragraph">
              Handled systematic customer follow-up regarding loan repayments, maintaining and updating account 
              records, and resolving customer queries in a professional and calm demeanor. This role developed 
              strong empathy, active listening, structured documentation, and problem-solving under real-world constraints.
            </p>

            <div className="exp-responsibilities-box">
              <h5 className="responsibilities-title">CORE RESPONSIBILITIES &amp; TRANSFERABLE WORKPLACE SKILLS:</h5>
              <div className="responsibilities-grid">
                <div className="resp-item">
                  <CheckCircle2 size={18} className="resp-check" />
                  <div>
                    <strong>Customer Communication</strong>
                    <p>Clear, courteous, and professional phone follow-ups regarding repayment schedules.</p>
                  </div>
                </div>

                <div className="resp-item">
                  <CheckCircle2 size={18} className="resp-check" />
                  <div>
                    <strong>Record Maintenance</strong>
                    <p>Accurate updating of account data, payment status logs, and tracking details.</p>
                  </div>
                </div>

                <div className="resp-item">
                  <CheckCircle2 size={18} className="resp-check" />
                  <div>
                    <strong>Problem Solving &amp; Conflict Resolution</strong>
                    <p>Handling customer concerns patiently and finding mutually viable payment resolutions.</p>
                  </div>
                </div>

                <div className="resp-item">
                  <CheckCircle2 size={18} className="resp-check" />
                  <div>
                    <strong>Accountability &amp; Persistence</strong>
                    <p>Daily target execution, disciplined time management, and meticulous attention to detail.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="exp-transferable-note">
              <span className="hand-script">
                ✦ How this translates to Software Development: Clear communication, structured problem breakdown, and empathy for end users.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;