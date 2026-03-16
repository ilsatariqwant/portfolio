export default function Tech(){

  const skills = [
    "Java","Python","HTML","CSS",
    "JavaScript","SQL","Android Studio",
    "Firebase","Streamlit","Git"
  ]

  return(

    <section id="tech">

      <div className="container">

        <h2 className="section-title">Tech Stack</h2>

        <div className="tech-grid">

          {skills.map(skill => (
            <div className="tech-card" key={skill}>
              {skill}
            </div>
          ))}

        </div>

      </div>

    </section>

  )
}