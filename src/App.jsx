
import NavBar from "./NavBar";
import About from "./About";
import Skills from "./Skills";
import ProjectCard from "./ProjectCard";
import projects from "./data/projects";
import { useState } from "react";
import ContactForm from "./ContactForm";
import Hero from "./Hero";

function App() {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

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
    </div>
  );
}

export default App;
