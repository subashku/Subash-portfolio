import resume from "../resume/Subash_Resume.pdf";

function Resume() {
  return (
    <section id="resume">

      <div className="resume-container">

        <h2>My Resume</h2>

        <p>
          Interested in my profile? Download my resume to learn more
          about my education, skills, projects and experience.
        </p>

        <a
          href={resume}
          download="Subash_Resume.pdf"
          className="resume-download-button"
        >
          Download Resume
        </a>

      </div>

    </section>
  );
}

export default Resume;