import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
      {/*generated code*/}
      <section id="portfolio">
      <div className="row work">
          <div className="three columns header-col">
            <h1><span>Work Experience</span></h1>
          </div>
          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <h3>Copart Inc | Dallas, Texas</h3>
                <p className="info">Software Engineering Intern <span>•</span> <em className="date">September 2018 - December 2018</em></p>
                <p>
                • Developed cross-platform mobile solutions to transform business functions using JavaScript, React Native and Redux
                <br></br>• Collaborated with other engineers to achieve optimal application architecture and design
                <br></br>• Provided POCs by researching through libraries and developing better implementations for adding the required features
in the existing applications
                </p>
              </div>
            </div> {/* item end */}
            <div className="row item">
              <div className="twelve columns">
                <h3>Endurance International Group | Mumbai, India</h3>
                <p className="info">Web Solution Specialist <span>•</span> <em className="date">August 2016 - August 2017</em></p>
                <p>
                • Troubleshooted & resolved technical issues related to the products & services provided by the company using Linux
systems
<br></br>• Escalated, followed-up & fixed recurrent issues by coordinating with product development teams
<br></br>• Enhanced client websites using HTML 5, CSS and JavaScript
                </p>
              </div>
            </div> {/* item end */}
          </div> {/* main-col end */}
        </div> {/* End Work */}
      </section>
      </React.Fragment>
    );
  }
}