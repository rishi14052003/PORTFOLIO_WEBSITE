import React, { useCallback, useState } from "react";
import { AnimatePresence, motion, MotionConfig, useMotionValueEvent, useScroll } from "framer-motion";
import { ArrowUp } from "lucide-react";
import Navigation from "./components/Navigation.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Hero from "./components/Hero.jsx";
import Education from "./components/Education.jsx";
import Experience from "./components/Experience.jsx";
import Skills from "./components/Skills.jsx";
import Publications from "./components/Publications.jsx";
import Projects from "./components/Projects.jsx";
import Credentials from "./components/Credentials.jsx";
import Testimonials from "./components/Testimonials.jsx";
import GitHubActivity from "./components/GitHubActivity.jsx";
import ContactForm from "./components/ContactForm.jsx";
import Footer from "./components/Footer.jsx";
import ProjectsModal from "./components/ProjectsModal.jsx";

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(null);
  const { scrollY, scrollYProgress } = useScroll();
  const [showBackToTop, setShowBackToTop] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setShowBackToTop(latest > 500);
  });

  const openProject = useCallback((project) => {
    setActiveProject(project);
    setModalOpen(true);
  }, []);
  const closeModal = useCallback(() => {
    setModalOpen(false);
    setActiveProject(null);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      element.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' });
    }
  };

  return (
    <MotionConfig reducedMotion="user">
      <div className="App">
        <motion.div
          className="scroll-progress"
          style={{ scaleX: scrollYProgress }}
          aria-hidden="true"
        />
        <a className="skip-link" href="#main-content">Skip to content</a>
        <Navigation scrollToSection={scrollToSection} />
        <Hero scrollToSection={scrollToSection} />
        <AnimatePresence>
          {showBackToTop && (
            <motion.button
              key="back-to-top"
              type="button"
              className="back-to-top"
              aria-label="Back to top"
              initial={{ opacity: 0, y: 16, scale: 0.85 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.9 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.94 }}
              onClick={() => {
                const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
                window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
              }}
            >
              <ArrowUp size={17} />
              <span>Back to top</span>
            </motion.button>
          )}
        </AnimatePresence>

        <div className="container">
          <div className="main-content">
            <Sidebar />

            <main className="content" id="main-content" tabIndex="-1">
              <Education />
              <Experience />
              <Skills />
              <Publications />
              <Projects openProject={openProject} />
              <Credentials />
              <Testimonials />
              <GitHubActivity />
            </main>
          </div>
        </div>

        <div className="container contact-form-container">
          <ContactForm />
        </div>

        <Footer />

        <ProjectsModal open={modalOpen} project={activeProject} onClose={closeModal} />
      </div>
    </MotionConfig>
  );
}

export default App;
