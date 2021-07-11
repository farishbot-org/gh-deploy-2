import React, { PureComponent } from "react";

import "./about.css";

export default class About extends PureComponent {
  render() {
    return (
      <div className="homepage-section section-short">
        <div className="homepage-about-section">
          <span className="homepage-about-heading">Growmore International Engineering Consultants</span>
          <span className="homepage-about-paragraph">
            With the industry's top engineering team, Growmore International is
            one of the leading consulting firms in engineering. As a team, we provide
            you with the best engineering solutions, giving your clients the most
            satisfying experiences. With Growmore International, you will receive the
            services of some of the industry's best engineers, so compromises will
            never have to be made and your innovations will be welcomed into the market
            with ease.
          </span>
        </div>
      </div>
    );
  }
}
