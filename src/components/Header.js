import React, { Component } from 'react';
import '../styles/header.css';


class Header extends Component {
  render() {
    return (
        <div className="header-background">
          <div className="header-greeting">
            <h1><span className="greeting">Hello,</span> I'm Meredith! </h1>
            <ul id="links" className="header-nav">
                <li><a>Contact</a></li>
                <li><a>Portfolio</a></li>
                <li><a>About Me</a></li>
            </ul>
          </div>
        </div>
    );
  }
}

export default Header;