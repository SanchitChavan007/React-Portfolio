import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
      {/*generated code*/}
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img style = {{marginTop : 15}} className="profile-pic" src="images/pic.png" alt />
          </div>
          <div className="nine columns main-col">
            <p>A graduate student, pursuing Master’s degree in Information System at Northeastern University. Interested in Software Development and Software Engineering job opportunities. I have been developing software and web applications using programming languages and web technologies like Java, Swift, React Native, HTML, CSS, JavaScript, Angular, React, Spring MVC & Hibernate. I am keenly interested in Information Technology and I love to solve business problems by providing efficient software solutions to the same. I aim to be an important asset to the company I work with, involving myself in decision making, designing and development processes of their products.
            </p>
            </div> {/* end row */}
            <div className="columns download">
                  <a style = {{backgroundColor: '#11ABB0'}}  href='resume.pdf' className="button"><i className="fa fa-download" />Download Resume</a>
              </div>
          </div> {/* end .main-col */}
      </section>
      </React.Fragment>
    );
  }
}