import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { BiHome, BiUser, BiBarChartAlt2, BiRocket } from 'react-icons/bi';

interface NavItem {
  icon: React.ReactNode;
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { icon: <BiHome />, label: 'Home', href: '#info' },
  { icon: <BiUser />, label: 'Info', href: '#info' },
  { icon: <BiBarChartAlt2 />, label: 'Skills', href: '#skills' },
  { icon: <BiRocket />, label: 'Projects Overview', href: '#portfolio' },
];

const Header: React.FC = () => {
  return (
    <>
      <i className="bi bi-list mobile-nav-toggle d-xl-none"></i>
      <header id="header">
        <div className="d-flex flex-column">
          <div className="profile">
            <img src="assets/img/profile-img.jpg" alt="" className="img-fluid rounded-circle" />
            <h1 className="text-light">
              <a href="index.html">Joshua Madero</a>
            </h1>
            <div className="social-links text-center">
              <a href="https://github.com/joshuaxdmb/" target="_blank" rel="noopener noreferrer" className="instagram">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/joshua-madero/" target="_blank" rel="noopener noreferrer" className="linkedin">
                <FaLinkedin />
              </a>
            </div>
          </div>

          <nav id="navbar" className="nav-menu navbar">
            <ul>
              {navItems.map((item, index) => (
                <li key={index}>
                  <a href={item.href} className="nav-link scrollto">
                    {item.icon} <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header; 