export default function About(){
  return(
    <section id="about">

      <div className="container">

        <h2 className="section-title">About Me</h2>

        <div className="about-grid">

          {/* IMAGE SIDE */}
          <div className="flip-card">
            <div className="flip-card-inner">

              <div className="flip-card-front">
                <img src="/images/ilsaimage.jpg" className="about-img"/>
              </div>

              <div className="flip-card-back">
                <h3>Fun Facts</h3>
                <p>
                  ☕ Coffee-powered coder <br/>
                  🎨 Loves UI/UX design <br/>
                  🌱 Builds tech that solves real problems <br/>
                  🚀 Always learning new technologies
                </p>
              </div>

            </div>
          </div>
          

          {/* TEXT SIDE */}
          {/* TEXT SIDE */}
          <div className="about-content">

            {/* EDUCATION */}
            <div className="about-card">

              <h3>Education</h3>

              <p className="uniname-text">Universiti Malaya</p>

              <p className="degree">
                Bachelor in Computer Science (Software Engineering) <br/>
                Oct 2023 – March 2027
              </p>

            </div>

            {/* EXPERIENCE */}
            <div className="about-card">

              <h3>Experience</h3>

              <p className="uniname-text">
                Sapu (Ride-Hailing Platform)
              </p>

              <p className="degree">
                Software Engineer &nbsp; | &nbsp; Nov 2025 – Present
              </p>

              <p className="courses">
                Revamp the UI, Fix issues, optimize performance, and add new features to support app.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}