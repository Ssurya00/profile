import { useState } from "react";
import Home from "./components/home/Home";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";
import Footer from "./components/footer/Footer";
import Experience from "./components/experience/Experience";
import "./App.css";
import Education from "./components/education/Education";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Home />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
