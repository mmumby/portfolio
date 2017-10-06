import React, { Component } from 'react';
import '../styles/App.css';
import Header from './Header';
import AboutMe from './AboutMe';
import Stack from './Stack';
import Portfolio from './Portfolio';
import Contact from './Contact';
import ScrollTop from './ScrollTop';
import NavBar from './NavBar';


class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <NavBar />
        <AboutMe />
        <Stack />
        <Portfolio />
        <ScrollTop />
        <Contact />
      </div>
    );
  }
}

export default App;
