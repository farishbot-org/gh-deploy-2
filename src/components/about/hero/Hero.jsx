import React, { PureComponent } from "react";

import "./hero.css";

export default class Hero extends PureComponent {
  render() {
    return (
      <div className="about-page-hero">
        <span className="about-page-hero-header">Growmore International Engineering Consultants</span>
        <span className="about-page-hero-header-small">
          Among the largest engineering consulting firms, Growmore International has the industry's
          best engineering team. Our team provides the most effective engineering solutions for your
          clients, ensuring they have an excellent experience. Having Growmore International on your
          side means you'll have access to some of the best engineers in the industry, ensuring you
          won't have to compromise on quality or be unable to introduce your innovations into the
          market.
        </span>
      </div>
    );
  }
}
