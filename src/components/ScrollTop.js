import React, { Component } from 'react';
import '../styles/ScrollTop.css';

class ScrollTop extends Component {
  constructor() {
    super();

    this.state = {
        pageTop: 0
    };
  }

  scrollStep() {
    if (window.pageYOffset === 0) {
        clearInterval(this.state.pageTop);
    }
    window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
  }

  scrollToTop() {
    let pageTop = setInterval(this.scrollStep.bind(this), this.props.delayInMs);
    this.setState({
        pageTop: pageTop
      });
  }

  render () {
      return <button title='Back to top' className='scroll'
               onClick={this.scrollToTop.bind(this)}>
                <i className="fa fa-2x fa-arrow-up" aria-hidden="true"></i>
              </button>;
   }
}

export default ScrollTop;