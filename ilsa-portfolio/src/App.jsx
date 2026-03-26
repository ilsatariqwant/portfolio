import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Tech from "./components/Tech"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import WandCursor from "./components/WandCursor"
import ClickBurst from "./components/ClickBurst"

function App(){

  return(
    <>
      <WandCursor/>
      <ClickBurst/>
      <Navbar/>
      <Hero/>
      <About/>
      <Tech/>
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  )

}

export default App