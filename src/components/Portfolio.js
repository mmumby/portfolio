import React, { Component } from 'react';
import '../styles/portfolio.css';

//  will be adding backend/db to DRY up code

class Portfolio extends Component {
  constructor() {
    super();

    this.state = {
        inMouseInside: false
    };
  }

  mouseEnter(){
    this.setState({
        isMouseInside: true
      });
  }

  mouseExit(){
    this.setState({
      isMouseInside: false
    });
  }

  render() {
    return (
      <div id="my-portfolio" className="portfolio">
        <div className="portfolio-left">
          <ul>
            <li onMouseEnter={this.mouseEnter.bind(this)} onMouseLeave={this.mouseExit.bind(this)}>
              {this.state.isMouseInside ? <button className="viewmore-portfolio">View More</button> : null}
              <img className="portfolio-images" src={require('../styles/img/jobSearch.png')} alt="Frame"/>
            </li>
            <li>
              <img className="portfolio-images" src={require('../styles/img/lettuceShare.png')} alt="Frame"/>
            </li>
            <li>
              <img className="portfolio-images" src={require('../styles/img/ChattyApp.png')} alt="Frame"/>
            </li>
            <li>
              <img className="portfolio-images" src={require('../styles/img/WikiMaps.png')} alt="Frame"/>
            </li>
            <li>
              <img className="portfolio-images" src={require('../styles/img/tweeter-photo.png')} alt="Frame"/>
            </li>
          </ul>
        </div>
        <div className="portfolio-right">
          <ul>
            <li>
              <h1>JobSearch</h1>
              <p>React | Redux</p>
              <a href="https://github.com/mmumby/jobSearch"><i class="fa fa-2x fa-github" aria-hidden="true"></i>view source code </a>
            </li>
            <li>
              <h1>lettuceShare</h1>
              <p>Ruby |  Rails | WebSockets | PostgreSQL | Bootstrap | SASS</p>
              <a href="https://github.com/mmumby/Lettuce-Share"><i class="fa fa-2x fa-github" aria-hidden="true"></i>view source code </a>
            </li>
            <li>
              <h1>ChattyApp</h1>
              <p>Express | Node | React | WebSockets</p>
              <a href="https://github.com/mmumby/chattyApp"><i class="fa fa-2x fa-github" aria-hidden="true"></i>view source code </a>
            </li>
            <li>
              <h1>WikiMaps</h1>
              <p>Bootstrap | Express | jQuery | Node | PostgreSQL | SASS</p>
              <a href="https://github.com/mmumby/WikiMap"><i class="fa fa-2x fa-github" aria-hidden="true"></i>view source code </a>
            </li>
            <li>
              <h1>Tweetr</h1>
              <p>Express | jQuery | MongoDB | Node </p>
              <a href="https://github.com/mmumby/tweetr"><i class="fa fa-2x fa-github" aria-hidden="true"></i>view source code </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Portfolio;