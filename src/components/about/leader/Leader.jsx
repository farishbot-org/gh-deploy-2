import React, { PureComponent } from "react";

import "./leader.css";

export default class Leader extends PureComponent {
  render() {
    return (
      <div className="about-page-leader-section">
        <div className="about-page-leader-section-heading">
          {/* <span>Meet Our Leader</span> */}
          <span>Welcome to Growmore</span>
        </div>
        <div className="about-page-leader-section-divisions">
          <div className="about-page-leader-section-LHS">
            <div className="about-page-leader-section-quote-section">
              <span>
                The Growmore International team takes pride in providing our clients
                with empowerment. Therefore, we have handpicked our engineering team
                to ensure they receive the best service.
              </span>
            </div>
            <div className="about-page-leader-section-quote-by-section">
              <span className="about-page-leader-section-quote-by-name">- Abdul Azeez</span>
              <span className="about-page-leader-section-quote-by-position">(Founder)</span>
            </div>
          </div>
          <div className="about-page-leader-section-RHS">
            {/* <img src="/leader.png" alt="leader" /> */}
            <img src="/Office Photo.jpg" hidden alt="leader" />
          </div>
        </div>
      </div>
    );
  }
}
