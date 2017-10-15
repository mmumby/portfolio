import React, { Component } from 'react';
import '../styles/navbar.css';

class NavBar extends Component {
  state = {
    isTop: true,
  };

  componentDidMount() {
    document.addEventListener('scroll', () => {
      this.setState({
        isTop: window.scrollY < 690
         })
    });
  }

  render() {
    return (
        <div id={this.state.isTop ? null : 'fixed-nav'}>
        <div className="fixed-nav">
          <div className="navbar-title">
            <p> Meredith Mumby </p>
          </div>
            <ul className="nav-list">
              <li><a href="#about-me">About Me</a></li>
              <li><a href="#my-portfolio">Portfolio</a></li>
              <li><a href="#contact-me">Contact</a></li>
            </ul>
          </div>
      </div>
    );
  }
}

export default NavBar;