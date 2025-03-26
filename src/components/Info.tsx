import React from 'react';

const Info: React.FC = () => {
  return (
    <section id="info" className="about">
      <div className="container">
        <div className="section-title">
          <h2>Personal Information</h2>
          <p>
            I am a Mechatronics Engineering graduate from the University of Toronto with a minor in Business and
            4+ years of experience in the Foodtech industry. My core area of expertise is full-stack development and hardware integration for IoT products. In my free time, I enjoy outdoor activities, weight training and martial arts.
          </p>
        </div>

        <div className="row">
          <div className="col-lg-4" data-aos="fade-right">
            <img src="assets/img/profile-img.jpg" className="img-fluid" alt="" />
          </div>
          <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
            <h3>Software Development | Automation | Mechatronics</h3>
            <br />
            <div className="row">
              <br />
              <div className="col-lg-6">
                <ul>
                  <li>
                    <i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>joshuaxdmb@gmail.com</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i> <strong>Location:</strong> <span>Toronto, CA</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i> <strong>Education:</strong> <span>University of Toronto</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info; 