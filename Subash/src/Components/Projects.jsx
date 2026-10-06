function Projects() {
  return (
    <section id="projects">

      <h2>My Projects</h2>

      <div className="projects-container">

        {/* Project 1 */}

        <div className="project-card">

          <div className="project-icon">
            🤖
          </div>

          <h3>AI-Based Mental Health Detection System</h3>

          <p>
            A machine learning based project designed to analyze
            mental-health-related statements and provide relevant
            suggestions.
          </p>

          <div className="project-tech">
            <span>Python</span>
            <span>Machine Learning</span>
          </div>

          <button>View Project</button>

        </div>

        {/* Project 2 */}

        <div className="project-card">

          <div className="project-icon">
            🛒
          </div>

          <h3>Tino Online Supermarket</h3>

          <p>
            A supermarket website designed to display products,
            categories and shopping features for an online grocery
            shopping experience.
          </p>

          <div className="project-tech">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
          </div>

          <button>View Project</button>

        </div>

        {/* Project 3 */}

        <div className="project-card">

          <div className="project-icon">
            📦
          </div>

          <h3>Courier Management System</h3>

          <p>
            A system designed to manage courier-related activities
            and maintain organized courier information.
          </p>

          <div className="project-tech">
            <span>Web Development</span>
            <span>Database</span>
          </div>

          <button>View Project</button>

        </div>

        {/* Project 4 */}

        <div className="project-card">

          <div className="project-icon">
            🐦
          </div>

          <h3>Bird Sound Recognition System</h3>

          <p>
            A machine learning based project designed to recognize
            and classify bird sounds.
          </p>

          <div className="project-tech">
            <span>Python</span>
            <span>Machine Learning</span>
          </div>

          <button>View Project</button>

        </div>

      </div>

    </section>
  );
}

export default Projects;