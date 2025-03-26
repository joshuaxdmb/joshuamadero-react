import React from 'react';

interface PortfolioItem {
  title: string;
  image: string;
  link: string;
  description: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    title: 'Freestyle Socials',
    image: 'assets/img/portfolio/cbc-tv-game.png',
    link: 'cbc-tv-game.html',
    description: 'Freestyle Socials: live TV trivia game for CBC News.'
  },
  {
    title: 'VS Code Extension',
    image: 'assets/img/portfolio/vscode-extension.png',
    link: 'vscode-extension.html',
    description: 'VS Code extension: custom navigation for types. Useful for libraries that use factories like sequelize.'
  },
  {
    title: 'Party Playlist Votes',
    image: 'assets/img/portfolio/party-playlist-votes.png',
    link: 'party-playlist-votes.html',
    description: 'Spotify party playlist with voting: create a playlist, add songs, upvote your favourites and share with friends.'
  },
  // Add more portfolio items here
];

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <div className="section-title">
          <h2>Portfolio</h2>
          <p>Designed and built.</p>
          <br />
        </div>

        <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="100">
          {portfolioItems.map((item, index) => (
            <div key={index} className="col-lg-4 col-md-6 portfolio-item filter-app">
              <a href={item.link}>
                <div className="portfolio-wrap">
                  <img src={item.image} className="img-fluid project-img" alt={item.title} />
                  <div className="portfolio-links">
                    <p title="More Details">{item.description}</p>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio; 