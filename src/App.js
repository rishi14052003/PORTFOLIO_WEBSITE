import React, { useEffect, useState } from "react";
import profileImg from "./assets/p2.jpg";
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
      link: 'https://github.com/rishi14052003/ShowTimeBooker'
    },
    { 
      id: 2, 
      title: 'Sentiment Analysis using NLP', 
      blurb: 'NLP classifier with 83.2% accuracy on 10,000+ reviews',
      description: 'Designed and trained a Naive Bayes classifier on 10,000+ labeled reviews, achieving 83.2% accuracy. Optimized preprocessing (tokenization, vectorization, feature scaling), boosting accuracy by 7% compared to baseline. Deployed a real-time text classifier capable of processing 100+ live inputs per second, enabling practical customer feedback analysis.',
      link: 'https://github.com/rishi14052003/sentiment-analysis'
    },
    { 
      id: 3, 
      title: 'Random Image Generator using AI/ML', 
      blurb: 'Generative AI model for creative image synthesis',
      description: 'Built a generative model capable of creating 1,000+ unique images from random seeds and text prompts. Reduced design workload by 80% faster image prototyping for creative applications in gaming.',
      link: 'https://github.com/rishi14052003/image-generator'
    }
  ];

  const openProject = (p) => { setActiveProject(p); setModalOpen(true); };
  const closeModal = () => { setModalOpen(false); setActiveProject(null); };

  

  return (
        <div className="App">
      <Header />

      <main className="container">
        <section className="hero" id="summary">
          <div className="hero-content">
            <h1 className="name">Rishabh Hitesh Jain</h1>
            <p className="role">Software Engineer — Full-Stack & Machine Learning</p>
            <p className="hero-summary">
              A skilled Software Engineer with expertise in Full-Stack Development and Machine Learning.
              Passionate about building scalable web applications and ML systems, with experience in
              cloud deployment and system architecture.
            </p>
          </div>
          <div className="hero-profile">
            <img src={profileImg} alt="Rishabh Hitesh Jain" />
          </div>
        </section>
        <div className="grid">
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
            id="publications"
            title="Publications / Patents"
            text={
                <>
                  LIPNET: Deep Learning for Visual Speech Recognition — TensorFlow/PyTorch, OpenCV, NumPy, Keras 
                  {' '}
                  <a href="https://www.ijset.in/lipnet-deep-learning-visual-speech-recognitions/" target="_blank" rel="noreferrer">View Publication</a>
                  {' '}-{' '}
                  <a href="https://github.com/rishi14052003/lip_parser" target="_blank" rel="noreferrer">Github Link</a>
                </>
              }
            subtext="Published April 2025 | DOI: 10.61463/ijset.vol.13.issue2.210"
          />
        </div>
        <Section
          id="skills"
          title="Skills"
          list={[
            "Machine Learning: Expertise in GANs, VAEs, Naive Bayes, TensorFlow, PyTorch, and Scikit-Learn.",
            "NLP: Skilled in building NLP pipelines for text processing and sentiment analysis.",
            "Full-Stack Development: Proficient in React.js, HTML, CSS, Javascript, Node.js, Express.js, MySQL, MongoDB, and REST APIs.",
            "Cloud Computing: AWS Certified with experience in cloud deployment and management.",
            "Data Structures & Algorithms: Strong problem-solving skills with in-depth knowledge of data structures and algorithms.",
            "Systems: Proficient in Operating Systems, Networking, DBMS, and Compiler Design."
          ]}
        />

        <section className="card" id="projects" aria-labelledby="projects">
          <h2 className="card-title">Projects</h2>
          <div className="projects-grid">
            {projects.map((p) => (
              <div key={p.id} className="project-card" onClick={() => openProject(p)}>
                <div className="project-title">{p.title}</div>
                <div className="project-blurb">{p.blurb}</div>
              </div>
            ))}
          </div>
        </section>


    <ProjectsModal open={modalOpen} project={activeProject} onClose={closeModal} />
    </main>

    <Contact />
    <Footer />
    </div>
  );
}

export default App;