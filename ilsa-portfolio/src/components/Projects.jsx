export default function Projects(){

  const projects = [
    {
      title:"Fuelnomic",
      desc:"An all in one fuel management system.",
      img:"/images/fuelnomic.jpg",
      tech:["ReactNative","Supabase"],
      github:"https://github.com/ilsatariqwant/FYP-Fuelnomic.git"
    },
    {
      title:"FarmerPal Mobile App",
      desc:"Smart farming application supporting SDG 2",
      img:"/images/farmerPal.png",
      tech:["Android Studio","Java"],
      github:"https://github.com/Mohammed-AlSharafi/FarmerPal.git"
    },
    {
      title:"Pokemon Battle Game",
      desc:"Java turn based battle game using OOP",
      img:"/images/pokemon.png",
      tech:["Java","OOP"],
      github:"https://github.com/ferrxuS/Pokemon_KantoAdventure.git"
    }
  ]

  return(

    <section id="projects">

      <div className="container">

        <h2 className="section-title">Projects</h2>

        <div className="projects-grid">

          {projects.map(project => (

            <div className="project-card" key={project.title}>

              <img src={project.img}/>

              <h3>{project.title}</h3>

              <p>{project.desc}</p>

              {/* TECH STACK */}
                <div className="tech-stack">
                  {project.tech.map((tech, index) => (
                    <span key={index}>{tech}</span>
                  ))}
                </div>

                {/* ACTION BUTTONS */}
                <div className="project-links">
                  <a href={project.github} target="_blank">GitHub Repository</a>
                </div>

            </div>

          ))}

        </div>

      </div>

    </section>

  )
}