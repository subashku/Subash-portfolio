function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        Subash
      </div>

      <div className="nav-links">

        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#education">Education</a>
        <a href="#projects">Projects</a>
        <a href="#experience">Experience</a>
        <a href="#resume">Resume</a>
        <a href="#contact">Contact</a>

      </div>

      <a href="#resume" className="resume-nav-button">
        Download Resume
      </a>

    </nav>
  );
}

export default Navbar;