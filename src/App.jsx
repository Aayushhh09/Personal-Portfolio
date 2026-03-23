import { Routes, Route } from "react-router-dom";
import Navbar from "./navbar";
import Hero from "./hero";
import Footer from "./footer";
import About from "./about";
import Projects from "./project";
import Skills from "./skill";
import Contact from "./contact";



function App(){
  return(
    <div>
      <Navbar></Navbar>

      <Routes>

        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />


      </Routes>

      <Footer></Footer>
    </div>
  
  )
    
  
   
}

export default App;