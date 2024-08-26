import React from 'react';
import './Footer.css';  // Add custom styling here if needed

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <p>&copy; 2024 MyApp. All Rights Reserved.</p>
        <p>
          <a href="/privacy-policy">Privacy Policy</a> | <a href="/terms-of-service">Terms of Service</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
