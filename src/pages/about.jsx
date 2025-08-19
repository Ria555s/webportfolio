import React from 'react';
import './about.css';
import idCardImage from '../assets/id-card.png';
import { motion } from "framer-motion";
import htmlLogo from '../assets/skills/html-logo.png';
import cssLogo from '../assets/skills/css3-logo.png';
import jsLogo from '../assets/skills/javaScript-logo.png';
import reactLogo from '../assets/skills/react-logo.png';
import nodeLogo from '../assets/skills/nodeJs-logo.png';
import mongoLogo from '../assets/skills/mongoDB-logo.png';
import figmaLogo from '../assets/skills/figma-logo.png';
import postmanLogo from '../assets/skills/postman-logo.png';

const About = () => {
  // ✅ move constants here (above return)
const skillLogos = {
  "html-logo.png": htmlLogo,
  "css3-logo.png": cssLogo,
  "javaScript-logo.png": jsLogo,
  "react-logo.png": reactLogo,
  "nodeJs-logo.png": nodeLogo,
  "mongoDB-logo.png": mongoLogo,
  "figma-logo.png": figmaLogo,
  "postman-logo.png": postmanLogo,
};

const skills = [
  { name: "HTML", logo: htmlLogo, percent: 98 },
  { name: "CSS", logo: cssLogo, percent: 90 },
  { name: "JavaScript", logo: jsLogo, percent: 80 },
  { name: "React", logo: reactLogo, percent: 75 },
  { name: "Node.js", logo: nodeLogo, percent: 92 },
  { name: "MongoDB", logo: mongoLogo, percent: 80 },
  { name: "Figma", logo: figmaLogo, percent: 30 },
  { name: "Postman", logo: postmanLogo, percent: 80 },
];

  return (
    
    <section className="about-section" id="about">
      <div className="id-card" data-aos="zoom-in">
        <img src={idCardImage} alt="ID card" className="id-image" />
      </div>
      <div className="fullscreen-bg"></div> 

      <div className="about-info" data-aos="fade-up">
        <h2 className="about-title">Hello, I’m <span>Ria</span></h2>
        <p className="about-text">
                 A highly motivated and creative individual currently pursuing UI/UX design with a strong foundation in full-stack web development. Skilled in front-end technologies like JavaScript, React, and Bootstrap, with hands-on experience in backend development, REST APIs, and tools like Postman. Passionate about building user-centered, responsive web applications and now expanding expertise in user research, wireframing, prototyping, and interaction design. Eager to blend development skills with design thinking to create seamless digital experiences.
        </p>

        <section className="section__container skill__container" id="skill" data-aos="fade-up">
          <div className="skills-grid" data-aos="fade-up">
            {skills.map((skill, index) => (
              <div className="skill-box" data-aos="zoom-in" data-aos-delay={index * 100} key={skill.name}>
                <img src={skill.logo} alt={skill.name} className="skill-logo w-12 h-12 object-contain" />


                <h4>{skill.name}</h4>
                <div className="progress-bar">
                  <div className="fill" style={{ width: `${skill.percent}%` }}></div>
                </div>
                <span className="percent">{skill.percent}%</span>
              </div>
            ))}
          </div>
        </section>

       

  
            
          </div>
    </section>
  );
};

export default About;

