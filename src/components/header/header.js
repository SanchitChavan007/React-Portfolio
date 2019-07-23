import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <React.Fragment>
      {/*generated code*/}
       <header id="home">
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
          <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
          <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
            <li><a className="smoothscroll" href="#resume">Resume</a></li>
            <li><a className="smoothscroll" href="#contact">Contact</a></li>
          </ul> {/* end #nav */}
        </nav> {/* end #nav-wrap */}
        <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline">I'm Sanchit Chavan</h1>
            <h3>I'm a Boston based <span>software developer</span>, <span>mobile developer</span> and <span>web designer</span> creating awesome and
              effective visual identities for companies of all sizes around the globe. Let's <a className="smoothscroll" href="#about">start scrolling </a>
              and learn more <a className="smoothscroll" href="#about">about me</a>.</h3>
            <hr />
            <ul className="social">
              <li><a href="https://www.facebook.com/sanchit.chavan.5"><i className="fa fa-facebook" /></a></li>
              <li><a href="https://github.com/SanchitChavan007"><i className="fa fa-github" /></a></li>
              <li><a href="https://twitter.com/sanchitchavan7"><i className="fa fa-twitter" /></a></li>
              <li><a href="https://www.linkedin.com/in/sanchit-chavan-924ba5134/"><i className="fa fa-linkedin" /></a></li>
              <li><a href="https://www.instagram.com/being__notorious/"><i className="fa fa-instagram" /></a></li>
            </ul>
          </div>
        </div>
        <p className="scrolldown">
          <a className="smoothscroll" href="#about"><i className="icon-down-circle" /></a>
        </p>
      </header>
      </React.Fragment>
    );
  }
}