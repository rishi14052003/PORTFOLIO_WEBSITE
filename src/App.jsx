import React, { useState } from "react";
import Navigation from "./components/Navigation.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Education from "./components/Education.jsx";
import Experience from "./components/Experience.jsx";
import Skills from "./components/Skills.jsx";
import Publications from "./components/Publications.jsx";
import Projects from "./components/Projects.jsx";
import Footer from "./components/Footer.jsx";
import ProjectsModal from "./components/ProjectsModal.jsx";
import LoadingScreen from "./components/LoadingScreen.jsx";
import "./index.css";

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const openProject = (p) => { setActiveProject(p); setModalOpen(true); };
  const closeModal = () => { setModalOpen(false); setActiveProject(null); };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="App">
      <Navigation scrollToSection={scrollToSection} />

      <div className="container">
        <div className="main-content">
          <Sidebar />

          <main className="content">
            <Education />
            <Experience />
            <Skills />
            <Publications />
            <Projects openProject={openProject} />
          </main>
        </div>
      </div>

      <Footer />

      <ProjectsModal open={modalOpen} project={activeProject} onClose={closeModal} />
    </div>
  );
}

export default App;
