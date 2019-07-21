import React, { Component } from 'react';
import { white } from 'ansi-colors';
export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
      {/*generated code*/}
      <section id="contact">
        <div className="row">
          <div className="three columns">
          </div>
          <div className="nine columns main-col">
            <div className="row">
              <div className="columns contact-details">
                <h2 style={{color: 'white'}}>Contact Details</h2>
                <p className="address">
                  <span>Sanchit Chavan</span><br />
                  <span>31 St. Germain Street, Apt 6<br />
                    Boston, MA 02115 US
                  </span><br />
                  <span>(857)800-5920</span><br />
                  <span>anyone@website.com</span>
                </p>
              </div>
              </div>
            </div> {/* end row */}
          </div> {/* end .main-col */}
      </section>
      </React.Fragment>
    );
  }
}