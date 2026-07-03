import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
// import Counter from "./components/Counter"
import Contactform from "./components/Contactform"
function MyApp(){
  return(
    <>
    <Navbar />
    <Hero 
    name="Aayush Jadoun"
    tagline="Computer Vision • Machine Learning • Algorithm Optimization"
    description="AI Engineering student building specialized machine learning models and robust software systems. From developing pathology classification models for agricultural disease detection to creating standalone desktop management applications, I focus on designing optimized, scalable solutions that solve real-world problems."
    />
    <Contactform />
    <About />
    <Skills />
    <Projects />
    <Contact />
    </>
  )
}

export default MyApp