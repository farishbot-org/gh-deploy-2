import React, { PureComponent } from "react";
import { Link } from "react-router-dom";

import "../../../pages/heritage/heritage.css";

export default class HeritageBanner extends PureComponent {
  render() {
    return (
      <Link to="/heritage" className="heritage-homepage-banner">
        <span className="heritage-homepage-banner-typo">Heritage Projects</span>
        <span className="heritage-homepage-banner-typo-long">
          Our deep commitment to heritage has led us to develop pristine architecture that
          embodies the values of the past.
        </span>
        <span className="heritage-homepage-banner-typo-small">Learn more</span>
      </Link>
    );
  }
}
