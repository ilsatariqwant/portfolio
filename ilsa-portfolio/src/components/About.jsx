export default function About(){
  return(
    <section id="about">

      <div className="container">

        <div className="about-grid">

          {/* Flip Card */}
          <div className="flip-card">

            <div className="flip-card-inner">

              {/* FRONT (IMAGE) */}
              <div className="flip-card-front">
                <img src="/images/ilsaimage.jpg" className="about-img"/>
              </div>

              {/* BACK (FUN TEXT) */}
              <div className="flip-card-back">
                <h3>Fun Facts About Me</h3>

                <p>
                  ☕ Powered by coffee  
                  <br/>
                  💻 Loves building cool apps  
                  <br/>
                  🌱 Tech + creativity enthusiast  
                  <br/>
                  🚀 Future software engineer
                </p>

              </div>

            </div>

          </div>

          {/* TEXT SIDE */}
          <div>

            <h2>About Me</h2>

            <p>
              I am a Computer Science student passionate about software
              development, UI/UX design and building systems that solve
              real problems.
            </p>

          </div>

        </div>

      </div>

    </section>
  )
}