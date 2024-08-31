import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h2>Contact Me</h2>
          <p>If you have any questions or want to get in touch, feel free to reach out!</p>
          <a href="mailto:paljinder@example.com" className="footer-email">Email Me</a>
        </div>
        <div className="footer-section">
          <h2>Follow Me</h2>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="social-icon linkedin">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer" className="social-icon github">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer" className="social-icon twitter">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
        <div className="footer-section">
          <h2>Subscribe</h2>
          <p>Stay updated with my latest projects and blog posts.</p>
          <form className="subscribe-form">
            <input type="email" placeholder="Your email address" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Paljinder Singh. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
