export default function Hero(){
  return(
    <section id="home" className="hero">

      <div className="hero-container">

        <h1>Hi, I'm <span>Ilsa Tariq Want</span></h1>

        <p>
          Computer Science student at Universiti Malaya building
          mobile apps, dashboards and interactive systems.
        </p>

        <div className="hero-buttons">

          <a href="#projects" className="btn-primary">
            View Projects
          </a>

          <a href="/images/CV_ilsa.pdf" className="btn-secondary">
            Download CV
          </a>

        </div>

      </div>

    </section>
  )
}