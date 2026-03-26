// export default function Contact(){

//   return(

//     <section id="contact">

//       <div className="container">

//         <h2 className="section-title">Contact Me</h2>

//         <form>

//           <input type="text" placeholder="Your Name"/>

//           <input type="email" placeholder="Your Email"/>

//           <textarea placeholder="Your Message"/>

//           <button className="btn-primary">
//             Send Message
//           </button>

//         </form>

//       </div>

//     </section>

//   )

// }

export default function Contact(){

  return(

    <section id="contact">

      <div className="container">

        <h2 className="section-title">Contact Me</h2>

        <div className="contact-grid">

          {/* EMAIL */}
          <div className="contact-card">
            <h3>Email</h3>
            <a href="mailto:ilsatariqwant@email.com">
              ilsatariqwant@email.com
            </a>
          </div>

          {/* GITHUB */}
          <div className="contact-card">
            <h3>GitHub</h3>
            <a href="https://github.com/ilsatariqwant" target="_blank" rel="noopener noreferrer">
              github.com/ilsatariqwant
            </a>
          </div>

          {/* LINKEDIN */}
          <div className="contact-card">
            <h3>LinkedIn</h3>
            <a href="http://www.linkedin.com/in/ilsa-want" target="_blank" rel="noopener noreferrer">
              linkedin.com/in/ilsa-want
            </a>
          </div>

        </div>

      </div>

    </section>

  )

}