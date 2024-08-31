import React from 'react';
import images from './images/me.jpg';
import './Home.css';


const Home = () => {
  return (
    <div className="home-container">
       <section className="home-about">
  <div className="about-container">
    <div className="about-text">
      <h2>About Me</h2>
      <p>
        I am a passionate developer specializing in building exceptional digital experiences. Currently, I am focused on creating responsive web applications.
      </p>
      <p>
        With a strong foundation in both frontend and backend technologies, I thrive on solving complex problems and delivering high-quality solutions. Let's build something amazing together.
      </p>
      <div className="skills">
        <h3>Skills</h3>
        <ul>
          <li>JavaScript , React.js</li>
          <li>HTML5, CSS3, SASS</li>
          <li>Node.js, React Native</li>
         
        </ul>
      </div>
      <blockquote className="quote">
        "Code is like humor. When you have to explain it, it’s bad."
      </blockquote>
      <div className="social-media">
        <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </div>
    </div>
    <div className="about-image">
      <img src="me.jpg" alt="Paljinder Singh" />
    </div>
  </div>
</section>






      <section className="home-projects">
        <h2>My Projects</h2>
        <div className="home-project-list">
          <div className="home-project-item">
            <h3>Project 1</h3>
            <p>A brief description of your project.</p>
          </div>
          <div className="home-project-item">
            <h3>Project 2</h3>
            <p>A brief description of your project.</p>
          </div>
        </div>
      </section>
     
    </div>
  );
};

export default Home;
