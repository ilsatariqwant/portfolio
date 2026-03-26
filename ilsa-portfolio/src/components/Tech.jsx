export default function Tech(){

  const skills = [
    "Java","Python","HTML","CSS",
    "JavaScript","React.js","Node.js",
    "React Native","Django","PostgreSQL",
    "SQL","Git","GitHub","Docker","Supabase"
  ]

  return(

    <section id="tech">

      <div className="container">

        <h2 className="section-title">Skills & Certifications</h2>

        <div className="tech-cert-grid">

          {/* TECHNICAL SKILLS */}
          <div className="tech-section">

            <h3 className="sub-title">Technical Skills</h3>

            <div className="tech-grid">

              {skills.map(skill => (
                <div className="tech-card" key={skill}>
                  {skill}
                </div>
              ))}

            </div>

          </div>


          {/* CERTIFICATES */}
          <div className="cert-section">

            <h3 className="sub-title">Certificates</h3>

            <div className="cert-card">

              <h4>CCNAv7: Introduction to Networks</h4>

              <p className="cert-meta">
                Cisco Networking Academy | Mar 2024 – Jun 2024
              </p>

              <p>
                Covered networking fundamentals, IP addressing,
                Ethernet concepts, and router/switch configuration
                using Cisco Packet Tracer.
              </p>

            </div>


            <div className="cert-card">

              <h4>Graphic Design</h4>

              <p className="cert-meta">
                Udemy | Dec 2021 – Feb 2022
              </p>

              <p>
                Learned Adobe Photoshop, Illustrator, and InDesign.
                Applied design theory to create personal branding
                and promotional design projects.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>

  )
}