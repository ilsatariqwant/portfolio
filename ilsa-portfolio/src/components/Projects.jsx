export default function Projects(){

  const projects = [
    {
      title:"FarmerPal Mobile App",
      desc:"Smart farming application supporting SDG 2.",
      img:"/images/farmerPal.png"
    },
    {
      title:"Pokemon Battle Game",
      desc:"Java turn based battle game using OOP.",
      img:"/images/farmerPal.png"
    },
    {
      title:"MemeCoin Dashboard",
      desc:"Streamlit dashboard for memecoin analytics.",
      img:"/images/farmerPal.png"
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

            </div>

          ))}

        </div>

      </div>

    </section>

  )
}