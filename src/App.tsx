import Navbar from "./components/Navbar";
import navLinks from "./data/navigation";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import { footerData } from "./data/footer";


function App() {
  return (
    <>
      <Navbar navLinks={navLinks} /> 
      <main className="pt-20">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer footerData={footerData} />
    </>
  );
}

export default App;