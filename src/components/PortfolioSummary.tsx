import React from 'react'

interface PortfolioItem {
  title: string
  image: string
  link: string
  description: string
}

const portfolioItems: PortfolioItem[] = [
  {
    title: 'Freestyle Socials',
    image: 'assets/img/portfolio/cbc-tv-game.png',
    link: 'cbc-tv-game.html',
    description: 'Freestyle Socials: live TV trivia game for CBC News.',
  },
  {
    title: 'VS Code Extension',
    image: 'assets/img/portfolio/vscode-extension.png',
    link: 'vscode-extension.html',
    description:
      'VS Code extension: custom navigation for types. Useful for libraries that use factories like sequelize.',
  },
  {
    title: 'Party Playlist Votes',
    image: 'assets/img/portfolio/party-playlist-votes.png',
    link: 'party-playlist-votes.html',
    description:
      'Spotify party playlist with voting: create a playlist, add songs, upvote your favourites and share with friends.',
  },
  {
    "title": "Uber clone",
    "image": "assets/img/portfolio/uber-portfolio-image.png",
    "link": "uber-clone.html",
    "description": "Uber clone: address autocomplete, routes, travel times, and more."
  },
  {
    "title": "Virtual assistant",
    "image": "assets/img/portfolio/chat-app.png",
    "link": "chat-app.html",
    "description": "Virtual assistant: chatGPT with your personal context (just for fun)."
  },
  {
    "title": "Ecommerce website",
    "image": "assets/img/portfolio/ecommerce-website-portfolio-image.png",
    "link": "ecommercesite.html",
    "description": "Ecommerce website: complete with everything an online store needs."
  },
  {
    "title": "Sinventory",
    "image": "assets/img/portfolio/sinventory-portfolio-image.png",
    "link": "sinventory.html",
    "description": "Sinventory: smart inventory management for startups."
  },
  {
    "title": "Instaplace",
    "image": "assets/img/portfolio/instaplace-portfolio-image.png",
    "link": "instaplace.html",
    "description": "Instaplace: a media platform for people serious about travelling the world."
  },
  {
    "title": "4-Quadrants Task Manager",
    "image": "assets/img/portfolio/taskapp-portfolio-image.png",
    "link": "taskapp.html",
    "description": "4-Quadrants Task Manager: a task manager app for highly effective people."
  },
  {
    "title": "Simon Game",
    "image": "assets/img/portfolio/simongame-portfolio-image.png",
    "link": "simongame.html",
    "description": "Simon Game: just have fun."
  },
  {
    "title": "Marathon aircraft",
    "image": "assets/img/portfolio/aircraft.JPG",
    "link": "portfolio-details.html#aircraft",
    "description": "Marathon aircraft: what if humans could really fly?"
  },
  {
    "title": "Efficient Propeller",
    "image": "assets/img/portfolio/prop-assembly.jpg",
    "link": "prop.html",
    "description": "The most efficient low-speed propeller ever."
  },
  {
    "title": "TITAN Speedbike",
    "image": "assets/img/portfolio/titan.jpg",
    "link": "portfolio-details.html#titan",
    "description": "TITAN: The fastest tandem speedbike ever built."
  },
  {
    "title": "Curtain Opener",
    "image": "assets/img/portfolio/curtain-opener-arduino.png",
    "link": "portfolio-details.html#curtain-opener",
    "description": "Bluetooth-controlled curtains for my room."
  },
  {
    "title": "Testing Robot",
    "image": "assets/img/portfolio/kitchenmate-cookers.jpg",
    "link": "portfolio-details.html#testing-robot",
    "description": "Accelerated lifecycle testing robot for IoT smart cooker."
  }
]

const Portfolio: React.FC = () => {
  return (
    <section id='projects' className='portfolio'>
      <div className='container'>
        <div className='section-title'>
          <h2>Projects Overview</h2>
          <p>Designed and built.</p>
          <br />
        </div>

        <div
          className='row portfolio-container'
          data-aos='fade-up'
          data-aos-delay='100'
        >
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className='col-lg-4 col-md-6 portfolio-item filter-app'
            >
              <a href={item.link}>
                <div className='portfolio-wrap'>
                  <img
                    src={item.image}
                    className='img-fluid project-img'
                    alt={item.title}
                  />
                  <div className='portfolio-links'>
                    <p title='More Details'>{item.description}</p>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
