import Home from "./components/Home/Home";
import "./App.css";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import EducationBar from "./components/EducationBar/EducationBar";
import Contact from "./components/Contacts/Contact";
import Footer from "./components/Footers/Footer";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
function App() {
  return (
    <>
      {/* <BrowserRouter>
        <Routes> */}
      {/* <Route path="/Contact" Component={Contact}></Route> */}
      {/* </Routes> */}
      <Home />
      <About />
      <Skills />
      <Projects />
      <EducationBar />
      <Contact />
      <Footer />
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
