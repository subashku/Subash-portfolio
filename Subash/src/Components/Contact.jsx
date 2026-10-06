function Contact() {
  return (
    <section id="contact">

      <h2>Contact Me</h2>

      <p className="contact-intro">
        I am currently looking for opportunities to start my career
        in the IT industry. Feel free to connect with me.
      </p>

      <div className="contact-container">

        {/* Contact Information */}

        <div className="contact-info">

          <h3>Let's Connect</h3>

          <p>
            I would be happy to connect and discuss career
            opportunities, projects and software development.
          </p>

          <div className="contact-item">
            <strong>Email</strong>
            <span>subashkulandaivelan@gmail.com</span>
          </div>

          <div className="contact-item">
            <strong>LinkedIn</strong>
            <span> https://www.linkedin.com/in/subash-kulandaivelan</span>
          </div>

          <div className="contact-item">
            <strong>GitHub</strong>
            <span>Your GitHub Profile</span>
          </div>

        </div>

        {/* Contact Form */}

        <form className="contact-form">

          <input
            type="text"
            placeholder="Your Name"
          />

          <input
            type="email"
            placeholder="Your Email"
          />

          <input
            type="text"
            placeholder="Subject"
          />

          <textarea
            placeholder="Your Message"
          ></textarea>

          <button type="submit">
            Send Message
          </button>

        </form>

      </div>

    </section>
  );
}

export default Contact;