import { useState } from "react";
import { Mail, Send, CheckCircle, AlertCircle, Copy, Check, ArrowUpRight } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const emailAddress = "subashkulandaivelan@gmail.com";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");
    setStatusMessage("");
    
    // Strict Field Validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus("error");
      setStatusMessage("Please fill in your name, email address, and message before sending.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setStatus("error");
      setStatusMessage("Please enter a valid email address (e.g., name@domain.com).");
      return;
    }

    setIsSubmitting(true);

    try {
      const formEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT || "";
      
      if (formEndpoint) {
        const response = await fetch(formEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(formData)
        });
        if (response.ok) {
          setStatus("success");
          setStatusMessage("Thank you! Your message has been sent successfully. I will get back to you shortly.");
          setFormData({ name: "", email: "", subject: "", message: "" });
          setIsSubmitting(false);
          return;
        }
      }

      // Honest fallback without fake backend claims: prepares mailto draft
      setIsSubmitting(false);
      setStatus("ready-email");
      setStatusMessage(
        "Direct email prepared! Clicking below opens your mail application to send to subashkulandaivelan@gmail.com."
      );
      
      const mailtoUrl = `mailto:${emailAddress}?subject=${encodeURIComponent(
        formData.subject.trim() || `Recruiter Inquiry: ${formData.name.trim()}`
      )}&body=${encodeURIComponent(
        `Hi Subash,\n\nName: ${formData.name.trim()}\nEmail: ${formData.email.trim()}\n\nMessage:\n${formData.message.trim()}`
      )}`;

      window.location.href = mailtoUrl;
    } catch {
      setIsSubmitting(false);
      setStatus("error");
      setStatusMessage("Could not dispatch message. Please email directly at subashkulandaivelan@gmail.com.");
    }
  };

  return (
    <section id="contact" className="editorial-section">
      {/* Chapter Marker */}
      <div className="section-chapter-header">
        <div className="chapter-meta">
          <span className="chapter-number">07 // </span>
          <span className="chapter-pill">THE FINAL SIGNATURE</span>
        </div>
        <h2 className="editorial-heading contact-signature-heading">
          <span className="heading-line-1">HAVE AN IDEA?</span>
          <span className="heading-line-2">LET'S BUILD IT.</span>
        </h2>
        <p className="editorial-subheading">
          I am actively looking for an opportunity to begin my career as an entry-level software developer. Let's create something meaningful together.
        </p>
      </div>

      <div className="contact-editorial-grid">
        {/* Left: Contact Info & Channels */}
        <div className="contact-info-col">
          <div className="contact-info-card">
            <span className="card-badge">DIRECT CHANNELS</span>
            <h3 className="contact-info-title">Let's Connect &amp; Discuss Roles</h3>
            <p className="contact-info-desc">
              Whether you have an entry-level developer opening, a question about my academic projects, 
              or would like to review my technical background, I'd love to hear from you.
            </p>

            <div className="contact-methods-stack">
              {/* Email */}
              <div className="method-item">
                <div className="method-icon-wrap">
                  <Mail size={20} className="method-icon" />
                </div>
                <div className="method-details">
                  <span className="method-label">OFFICIAL EMAIL</span>
                  <a href={`mailto:${emailAddress}`} className="method-link">
                    {emailAddress}
                  </a>
                </div>
                <button
                  type="button"
                  className="copy-btn"
                  onClick={handleCopyEmail}
                  title="Copy email to clipboard"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? <Check size={16} color="#16A34A" /> : <Copy size={16} />}
                </button>
              </div>

              {/* LinkedIn */}
              <div className="method-item">
                <div className="method-icon-wrap">
                  <FaLinkedin size={20} className="method-icon" />
                </div>
                <div className="method-details">
                  <span className="method-label">LINKEDIN PROFILE</span>
                  <a 
                    href="https://www.linkedin.com/in/subash-kulandaivelan" 
                    target="_blank" 
                    rel="noreferrer"
                    className="method-link"
                  >
                    linkedin.com/in/subash-kulandaivelan <ArrowUpRight size={14} className="inline-arrow" />
                  </a>
                </div>
              </div>

              {/* GitHub */}
              <div className="method-item">
                <div className="method-icon-wrap">
                  <FaGithub size={20} className="method-icon" />
                </div>
                <div className="method-details">
                  <span className="method-label">GITHUB REPOSITORY</span>
                  <a 
                    href="https://github.com/subashku" 
                    target="_blank" 
                    rel="noreferrer"
                    className="method-link"
                  >
                    github.com/subashku <ArrowUpRight size={14} className="inline-arrow" />
                  </a>
                </div>
              </div>
            </div>

            {/* Hand-drawn note */}
            <div className="contact-hand-doodle">
              <span className="hand-script">
                ✦ Available for full-time on-site, hybrid, or remote positions across India!
              </span>
            </div>
          </div>
        </div>

        {/* Right: Validated Editorial Contact Form */}
        <div className="contact-form-col">
          <form className="editorial-form-card" onSubmit={handleSubmit} noValidate>
            <div className="form-header-row">
              <span className="form-headline">SEND A DIRECT INQUIRY</span>
              <span className="form-req">* Required fields</span>
            </div>

            {/* Name Field */}
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                Your Name <span className="req-star">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-input"
                placeholder="e.g. Alex Morgan"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            {/* Email Field */}
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Your Email Address <span className="req-star">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-input"
                placeholder="e.g. alex@company.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            {/* Subject Field */}
            <div className="form-group">
              <label htmlFor="subject" className="form-label">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="form-input"
                placeholder="e.g. Software Developer Opportunity / Project Inquiry"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>

            {/* Message Field */}
            <div className="form-group">
              <label htmlFor="message" className="form-label">
                Your Message <span className="req-star">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                className="form-textarea"
                placeholder="Hello Subash, we are reviewing candidates for an entry-level software engineer role..."
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            {/* Status Feedback Banner */}
            {status && (
              <div 
                className={`form-status-alert ${
                  status === "success" 
                    ? "status-success" 
                    : status === "ready-email" 
                    ? "status-info" 
                    : "status-error"
                }`}
                role="alert"
              >
                {status === "success" && <CheckCircle size={18} className="alert-icon" />}
                {status === "ready-email" && <Mail size={18} className="alert-icon" />}
                {status === "error" && <AlertCircle size={18} className="alert-icon" />}
                <p className="alert-text">{statusMessage}</p>
              </div>
            )}

            {/* Submit Button */}
            <div className="form-submit-row">
              <button
                type="submit"
                className="btn-editorial-primary btn-submit"
                disabled={isSubmitting}
              >
                <Send size={16} />
                <span>{isSubmitting ? "Preparing..." : "SEND MESSAGE"}</span>
              </button>

              <span className="form-notice">
                Sends directly to subashkulandaivelan@gmail.com
              </span>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;