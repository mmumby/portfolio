import React, { Component } from 'react';
import '../styles/aboutme.css';

class AboutMe extends Component {
  render() {
    return (
      <div id="about-me" className="aboutme">
        <div className="aboutme-container">
          <p> this is the section all about me </p>
          <img className="my-photo" src={require('../styles/img/me.jpg')} alt="Frame"/>
        </div>
      </div>
    );
  }
}

export default AboutMe;