export default function Contact(){

  return(

    <section id="contact">

      <div className="container">

        <h2 className="section-title">Contact Me</h2>

        <form>

          <input type="text" placeholder="Your Name"/>

          <input type="email" placeholder="Your Email"/>

          <textarea placeholder="Your Message"/>

          <button className="btn-primary">
            Send Message
          </button>

        </form>

      </div>

    </section>

  )

}