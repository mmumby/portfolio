import React, { Component } from 'react';
import '../styles/contact.css';
import Footer from './Footer';

class Contact extends Component {
  render() {
    return (
      <div className="contact-background">
        <div class="profilelinks">
        <h1> Like what you see? Let's grab a coffee </h1>
          <p> or, find me online! </p>
          <ul class="contact-icons">
            <li><i class="fa fa-2x fa-github" aria-hidden="true"></i></li>
            <li><i class="fa fa-2x fa-linkedin" aria-hidden="true"></i></li>
            <li><i class="fa fa-2x fa-envelope" aria-hidden="true"></i></li>
          </ul>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Contact;