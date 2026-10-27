
import NavBar from "./NavBar";
import About from "./About";
import Skills from "./Skills";
import ProjectCard from "./ProjectCard";
import projects from "./data/projects";
import { useState, useEffect } from "react";
import ContactForm from "./ContactForm";
import Hero from "./Hero";
import PlayfulIcon from "./PlayfulIcon";

function App() {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.content-section');
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.85;
        if (isVisible) {
          section.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={isDark ? "app theme-dark" : "app theme-light"}>
      <NavBar isDark={isDark} toggleTheme={toggleTheme} />

      <Hero />

      <About />

      <Skills />

      <section id="projects" className="content-section">
        <p className="section-label">MY WORK</p>
        <h2>My Projects</h2>

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              name={project.name}
              technology={project.technology}
              technologies={project.technologies}
              description={project.description}
              url={project.url}
              featured={project.featured}
            />
          ))}
        </div>
      </section>

      <ContactForm />

      <footer>
        <p>© 2024 Fikir Alemayehu. All rights reserved.</p>
      </footer>

      <PlayfulIcon />
    </div>
  );
}

export default App;
