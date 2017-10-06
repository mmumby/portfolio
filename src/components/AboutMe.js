import React, { Component } from 'react';
import '../styles/aboutme.css';

class AboutMe extends Component {
  render() {
    return (
      <div className="aboutme">
        <p> this is the section all about me </p>
        <img className="my-photo" src={require('../styles/img/me.jpg')} alt="Frame"/>
      </div>
    );
  }
}

export default AboutMe;