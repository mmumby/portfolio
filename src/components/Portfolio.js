import React, { Component } from 'react';
import '../styles/portfolio.css';

class Portfolio extends Component {
  render() {
    return (
      <div id="my-portfolio" className="portfolio">
          <ul>
            <li>
              <h1>JobSearch</h1>
              <p>React | Redux</p>
              <a className="portfolio-links" href="https://github.com/mmumby/jobSearch"><i class="fa fa-2x fa-github" aria-hidden="true"></i>view source code </a>
              <img className="portfolio-images" src={require('../styles/img/jobSearch.png')} alt="Frame"/>
            </li>
            <li>
              <h1>lettuceShare</h1>
              <p>Ruby |  Rails | WebSockets | PostgreSQL | Bootstrap | SASS</p>
              <a className="portfolio-links" href="https://github.com/mmumby/Lettuce-Share"><i class="fa fa-2x fa-github" aria-hidden="true"></i>view source code </a>
              <img className="portfolio-images" src={require('../styles/img/lettuceShare.png')} alt="Frame"/>
            </li>
            <li>
              <h1>ChattyApp</h1>
              <p>Express | Node | React | WebSockets</p>
              <a className="portfolio-links" href="https://github.com/mmumby/chattyApp"><i class="fa fa-2x fa-github" aria-hidden="true"></i>view source code </a>
              <img className="portfolio-images" src={require('../styles/img/ChattyApp.png')} alt="Frame"/>
            </li>
            <li>
              <h1>WikiMaps</h1>
              <p>Bootstrap | Express | jQuery | Node | PostgreSQL | SASS</p>
              <a className="portfolio-links" href="https://github.com/mmumby/WikiMap"><i class="fa fa-2x fa-github" aria-hidden="true"></i>view source code </a>
              <img className="portfolio-images" src={require('../styles/img/WikiMaps.png')} alt="Frame"/>
            </li>
            <li>
              <h1>Tweetr</h1>
              <p>Express | jQuery | MongoDB | Node </p>
              <a className="portfolio-links" href="https://github.com/mmumby/tweetr"><i class="fa fa-2x fa-github" aria-hidden="true"></i>view source code </a>
              <img className="portfolio-images" src={require('../styles/img/tweeter-photo.png')} alt="Frame"/>
            </li>
          </ul>
      </div>
    );
  }
}

export default Portfolio;