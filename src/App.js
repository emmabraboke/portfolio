import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import ProjectDetails from "./components/ProjectDetails";
import Projects from "./components/Projects";
import {BrowserRouter as Router, Routes, Route, useLocation} from "react-router-dom"
import { useEffect } from "react";
import ScrollToTop from "./components/ScrollToTop";
import NotFound from "./pages/NotFound";



function App() {
  useEffect(() => {
    window.history.scrollRestoration = 'manual'
  }, []);
  return (
    <Router>
        <ScrollToTop />
        <NavBar />
        <Routes>
        <Route exact path="/"  element={
          <>
            <Home />
            <AboutMe />
            <Projects />
            <Contact />
          </>
        } />
        
        <Route path= "/project/:id" element={<ProjectDetails />} />
        <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
    </Router>
  );
}

export default App;
