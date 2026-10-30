
import NavBar from "./NavBar";
import About from "./About";
import Skills from "./Skills";
import ProjectCard from "./ProjectCard";
import projects from "./data/projects";
import { useState, useEffect } from "react";
import ContactForm from "./ContactForm";
import Hero from "./Hero";
import PlayfulIcon from "./PlayfulIcon";
import Stats from "./Stats";
import Particles from "./Particles";
import SocialLinks from "./SocialLinks";

function App() {
  const [isDark, setIsDark] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

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

      // Calculate scroll progress
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={isDark ? "app theme-dark" : "app theme-light"}>
      <div className="scroll-progress-bar" style={{ width: `${scrollProgress}%` }}></div>
      <NavBar isDark={isDark} toggleTheme={toggleTheme} />

      <Hero />

      <Stats />

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
        <SocialLinks />
      </footer>

      <PlayfulIcon />
      <Particles />
    </div>
  );
}

export default App;
