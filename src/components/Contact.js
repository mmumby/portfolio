import React, { Component } from 'react';
import '../styles/contact.css';
import Footer from './Footer';

class Contact extends Component {
  render() {
    return (
      <div id="contact-me" className="contact-background">
        <div class="contact-message">
        <h1> Like what you see? Let's grab a coffee </h1>
          <p> or, find me online! </p>
          <div className="profile-links">
            <ul class="contact-icons">
              <li><a href="https://github.com/mmumby"><i class="fa fa-2x fa-github" aria-hidden="true"></i></a></li>
              <li><a href="https://www.linkedin.com/in/meredithmumby"><i class="fa fa-2x fa-linkedin" aria-hidden="true"></i></a></li>
              <li><a href="mailto:meredith.mumby@outlook.com"><i class="fa fa-2x fa-envelope" aria-hidden="true"></i></a></li>
            </ul>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Contact;