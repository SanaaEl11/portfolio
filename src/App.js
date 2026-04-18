import About from "./components/About";
import Certification from "./components/Certification";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";

function App() {
  return (
    <div>
     <Navbar/>
     <Hero/>
     <Education />
    <Certification />
    <Skills/>
    <About/>
    <Work/>
    <Contact/>
    <Footer/>
    </div>
  );
}

export default App;
