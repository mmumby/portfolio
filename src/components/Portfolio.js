import React, { Component } from 'react';
import '../styles/portfolio.css';

//  will be adding backend/db to DRY up code

class Portfolio extends Component {
  constructor() {
    super();

    this.state = {
        inMouseInside: false,
        projects: []
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

  componentDidMount() {
    console.log("sending request...")
    fetch('/users')
      .then(res => res.json())
      .then(projects => this.setState({ projects }));
  }

  render() {
    return (
      <div id="my-portfolio" className="portfolio">
      {this.state.projects.map(project =>
        <div key={project.display_order}>
          <div className="portfolio-left">
            <ul>
              <li onMouseEnter={this.mouseEnter.bind(this)} onMouseLeave={this.mouseExit.bind(this)}>
                {this.state.isMouseInside ? <button className="viewmore-portfolio">View More</button> : null}
                <img className="portfolio-images" src={project.image_url}/>
              </li>
            </ul>
          </div>
          <div className="portfolio-right">
            <ul>
              <li>
                <h1>{project.project_name}</h1>
                {project.tech_stack.map((stack, index) =>
                  <div key={index}>
                    <p> {stack} | </p>
                  </div>
                  )}
                <p>{project.description}</p>
                <a href={project.github_url}><i class="fa fa-2x fa-github" aria-hidden="true"></i>view source code</a>
              </li>
            </ul>
          </div>
        </div>
        )}
      </div>
    );
  }
}

export default Portfolio;