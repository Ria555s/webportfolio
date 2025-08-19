import React from "react";
import { motion } from "framer-motion";
import "./projects.css";

// ✅ Rename this to projectData to avoid confusion
const projectData = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio built with React.",
    image: "src//assets/projects/portfolio.png",
    link: "https://your-portfolio-link.com",
    github: "https://github.com/yourname/portfolio",
  },
  {
    title: "E-Commerce App",
    description: "A full-stack MERN e-commerce application.",
    image: "/src/assets/projects/ecommerce.png",
    link: "https://your-ecommerce-link.com",
    github: "https://github.com/yourname/ecommerce",
  },
  {
    title: "Appointment Application",
    description: "Real-time appointment app using React.",
    image: "src/assets/projects/appointment.png",
    link: "https://doctor-appointment-app-ksqr.onrender.com/",
    github: "https://github.com/Ria555s/doctor-appointment-app",
  },
];

// ✅ Rename the component to Projects (capitalized)
const Projects = () => {
  return (
    <section className="project-showcase" id="projects">
      <h2 className="project-title">My Projects</h2>
      <div className="project-grid">
        {projectData.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-content">
              <h3 className="project-name">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-links">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-btn demo-btn"
                >
                  Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-btn github-btn"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};


export default Projects;

