import React from 'react';

const Footer: React.FC = () => {
  return (
    <>
      <footer id="footer">
        <div className="container">
          <div className="copyright">
            &copy; Copyright <span>Joshua Madero 2025</span>
          </div>
        </div>
      </footer>

      <a href="#" className="back-to-top d-flex align-items-center justify-content-center">
        <i className="bi bi-arrow-up-short"></i>
      </a>
    </>
  );
};

export default Footer; 