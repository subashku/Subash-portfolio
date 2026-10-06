import profile from "../images/profile.jpeg";

function Home() {
  return (
    <section id="home">

      <div className="home-content">

        <div className="home-text">

          <p>Hello, I'm</p>

          <h1>Subash</h1>

          <h2>MCA Graduate | Aspiring Software Developer</h2>

          <p>
            I am an MCA graduate interested in building web applications
            and starting my career in the IT industry. I am eager to
            learn new technologies and contribute to real-world projects.
          </p>

          <div className="home-buttons">
            <button>View My Projects</button>
            <button>Download Resume</button>
          </div>

        </div>

        <div className="home-image">

          <img
            src={profile}
            alt="Subash profile"
            className="profile-image"
          />

        </div>

      </div>

    </section>
  );
}

export default Home;