import React, { useState } from "react";
import ProjectsModal from "./components/ProjectsModal.js";
import "./design/style.css";
import Header from "./components/Header.js";
import Section from "./components/Section.js";
import Contact from "./components/Contact.js";
import Footer from "./components/Footer.js";

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(null);

  const projects = [
    { 
      id: 1, 
      title: 'Movie Ticket Booking Website', 
      blurb: 'Full-stack platform handling 50+ movies and 100+ users',
      description: 'Engineered a full-stack booking platform handling 50+ movie listings and 100+ user accounts with MongoDB backend. Implemented RESTful APIs that improved query response times by 30%, enhancing database efficiency. Delivered a responsive UI that improved user interaction speed by 25%, increasing session duration and engagement.',
      link: 'https://github.com/rishi14052003/ShowTimeBooker',
      tags: ['React', 'Node.js', 'MongoDB', 'REST API']
    },
    { 
      id: 2, 
      title: 'Sentiment Analysis using NLP', 
      blurb: 'NLP classifier with 83.2% accuracy on 10,000+ reviews',
      description: 'Designed and trained a Naive Bayes classifier on 10,000+ labeled reviews, achieving 83.2% accuracy. Optimized preprocessing (tokenization, vectorization, feature scaling), boosting accuracy by 7% compared to baseline. Deployed a real-time text classifier capable of processing 100+ live inputs per second, enabling practical customer feedback analysis.',
      link: 'https://github.com/rishi14052003/sentiment-analysis',
      tags: ['Python', 'NLP', 'Machine Learning', 'scikit-learn']
    },
    { 
      id: 3, 
      title: 'Random Image Generator using AI/ML', 
      blurb: 'Generative AI model for creative image synthesis',
      description: 'Built a generative model capable of creating 1,000+ unique images from random seeds and text prompts. Reduced design workload by 80% faster image prototyping for creative applications in gaming.',
      link: 'https://github.com/rishi14052003/image-generator',
      tags: ['TensorFlow', 'GANs', 'Python', 'Deep Learning']
    }
  ];

  const openProject = (p) => { setActiveProject(p); setModalOpen(true); };
  const closeModal = () => { setModalOpen(false); setActiveProject(null); };

  return (
    <div className="App">
      <Header />

      <main className="main-wrapper">
        <aside className="sidebar">
          <div className="sidebar-card intro-card">
            <h1 className="intro-name">Rishabh Hitesh Jain</h1>
            <p className="intro-title">Software Engineer</p>
            <div className="intro-divider"></div>
            <p className="intro-subtitle">Full-Stack & Machine Learning</p>
          </div>

          <div className="sidebar-card about-card">
            <h2 className="sidebar-title">About Me</h2>
            <p className="sidebar-text">
              A skilled Software Engineer with expertise in Full-Stack Development and Machine Learning.
              Passionate about building scalable web applications and ML systems, with experience in
              cloud deployment and system architecture.
            </p>
          </div>
        </aside>

        <section className="main-content" id="summary">
          <Section
            id="education"
            title="Education"
            text="Vellore Institute of Technology — B.Tech in Computer Science (Sept 2021 – Aug 2025)"
            subtext="CGPA: 7.70"
          />

          <Section
            id="experience"
            title="Experience"
            text="MERN Stack Developer, iGeek — Surat, Gujarat (Sept 2025 – Present)"
            list={[
              "Developed an Online Restaurant Booking System, Expense Calculator, and Workaholic platform.",
              "Utilized React, Redux, Node.js, Express.js, and MySQL to build scalable applications.",
            ]}
          />

          <Section
            id="skills"
            title="Skills"
            list={[
              "Machine Learning: GANs, VAEs, Naive Bayes, TensorFlow, PyTorch, Scikit-Learn",
              "NLP: Text processing, sentiment analysis, language models",
              "Full-Stack: React.js, Node.js, Express.js, MySQL, MongoDB, REST APIs",
              "Cloud: AWS Certified, cloud deployment and management",
              "Problem-Solving: Data Structures, Algorithms, System Design"
            ]}
          />

          <Section
            id="publications"
            title="Publications"
            text={
                <>
                  <strong>LIPNET: Deep Learning for Visual Speech Recognition</strong>
                  <br />
                  TensorFlow, PyTorch, OpenCV, Keras
                  <br />
                  <a href="https://www.ijset.in/lipnet-deep-learning-visual-speech-recognitions/" target="_blank" rel="noreferrer" className="link">View Publication</a>
                  {' '} • {' '}
                  <a href="https://github.com/rishi14052003/lip_parser" target="_blank" rel="noreferrer" className="link">Github</a>
                  <br />
                  <span className="meta">Published April 2025 | DOI: 10.61463/ijset.vol.13.issue2.210</span>
                </>
              }
            subtext=""
          />

          <section className="card" id="projects" aria-labelledby="projects">
            <h2 className="card-title">Featured Projects</h2>
            <div className="projects-grid">
              {projects.map((p) => (
                <div key={p.id} className="project-card">
                  <div className="project-title">{p.title}</div>
                  <div className="project-blurb">{p.blurb}</div>
                  {p.tags && (
                    <div className="project-tags">
                      {p.tags.map((tag, idx) => (
                        <span key={idx} className="tag">{tag}</span>
                      ))}
                    </div>
                  )}
                  <div className="project-actions">
                    <button className="view-more" onClick={() => openProject(p)}>View Details</button>
                    <a href={p.link} target="_blank" rel="noreferrer" className="view-code">View Code</a>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </section>

    <ProjectsModal open={modalOpen} project={activeProject} onClose={closeModal} />
    <Contact />
    <Footer />
    </div>
  );
}

export default App;