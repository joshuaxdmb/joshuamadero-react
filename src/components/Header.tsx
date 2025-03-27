import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { BiHome, BiUser, BiBarChartAlt2, BiRocket } from 'react-icons/bi';

interface NavItem {
  icon: React.ReactNode;
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { icon: <BiUser className='nav-icon'/>, label: 'Info', href: '#info' },
  { icon: <BiBarChartAlt2 className='nav-icon'/>, label: 'Skills', href: '#skills' },
  { icon: <BiRocket className='nav-icon'/>, label: 'Projects Overview', href: '#projects' },
  { icon: <BiBookAlt className='nav-icon'/>, label: 'Portfolio', href: '/projects' },
];

const Header: React.FC = () => {
  const [isMobileNavActive, setIsMobileNavActive] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavActive(!isMobileNavActive);
    document.body.classList.toggle('mobile-nav-active');
  };

  return (
    <>
      <i 
        className={`bi ${isMobileNavActive ? 'bi-x' : 'bi-list'} mobile-nav-toggle d-xl-none`}
        onClick={toggleMobileNav}
      ></i>
      <header id="header" className={isMobileNavActive ? 'mobile-nav-active' : ''}>
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
                  <a 
                    href={item.href} 
                    className="nav-link scrollto"
                    onClick={() => {
                      if (isMobileNavActive) {
                        setIsMobileNavActive(false);
                        document.body.classList.remove('mobile-nav-active');
                      }
                    }}
                  >
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