import React, { Component } from 'react';
import '../styles/header.css';


class Header extends Component {
  render() {
    return (
        <div className="header-background">
          <div className="header-greeting">
            <h1 className="hello"><span className="greeting">Hello,</span> I'm Meredith! </h1>
            <p className="introduction"> Full-stack web developer in Victoria, BC. </p>
            <ul id="links" className="header-nav">
                <li><a href="#about-me">About Me</a></li>
                <li><a href="#my-portfolio">Portfolio</a></li>
                <li><a href="#contact-me">Contact</a></li>
            </ul>
          </div>
        </div>
    );
  }
}

export default Header;