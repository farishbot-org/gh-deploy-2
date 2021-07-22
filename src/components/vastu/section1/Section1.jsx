import React, { PureComponent } from "react";

import "./section.css";

export default class Section1 extends PureComponent {
  render() {
    return (
      <div className="vastu-page-section">
        <div className="vastu-page-section-image" />
        <div className="vastu-page-section-RHS">
          <span className="vastu-page-section-RHS-maintypo">A whole concept, centered around you.</span>
          <span className="vastu-page-section-RHS-typo">
            Household centres are regarded as the most sacred and
            powerful zones in a household. Cleanliness and clutter-free
            living are essential in this area. There should be no obstructions
            or built-up area within a circumference of 1 to 1.5 metres of the
            Brahmasthan.
          </span>
        </div>
      </div>
    );
  }
}
