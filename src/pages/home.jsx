import React, { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import './home.css';
import avatar from '../assets/avatar.png';





const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  const words = ["Web Developer.", "Designer.", "Creator."];
  let i = 0;
  let j = 0;
  let currentWord = '';
  let isDeleting = false;

  const typingElement = document.getElementById("typing-text");

  function type() {
    currentWord = words[i];
    if (isDeleting) {
      j--;
    } else {
      j++;
    }

    typingElement.textContent = "I'm a " + currentWord.substring(0, j);

    if (!isDeleting && j === currentWord.length) {
      setTimeout(() => {
        isDeleting = true;
        type();
      }, 1000);
      return;
    } else if (isDeleting && j === 0) {
      isDeleting = false;
      i = (i + 1) % words.length;
    }

    setTimeout(type, isDeleting ? 50 : 120);
  }

  type();
}, []);

  return (
    <div className="home-container">
      <nav className="navbar">
        <div className="logo">PortFolio</div>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

<section className="hero" data-aos="fade-up">
  <div className="avatar-glow" data-aos="zoom-in" data-aos-delay="200">
    <div className="avatar-background">
      <img src={avatar} alt="Avatar" className="avatar-img" />
    </div>
  </div>

  <div className="hero-text" data-aos="fade-up" data-aos-delay="300">
    <p className="greeting">
      Hello! I am <span className="name">Ria</span>
    </p>

    <p className="title typing-container">
      <span id="typing-text"></span>
      <span className="cursor">|</span>
    </p>

    <p className="description">
      A self-taught web queen, coding my way through the chaos for 3+ years.
      I create digital pleasure between function and fire.
    </p>
            <a href="/Riaa_SadhuCV.pdf" download className="download-btn">
    Download CV
  </a>
        </div>
      </section>
    </div>
  );
};


export default Home;


