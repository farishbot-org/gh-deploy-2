import React, { PureComponent } from "react";

import "./section.css";

export default class Section2 extends PureComponent {
  render() {
    return (
      <div className="vastu-page-section2">
        <div className="vastu-page-section2-LHS">
          <span className="vastu-page-section2-LHS-maintypo">Bring a balance to enhance your life.</span>
          <span className="vastu-page-section2-RHS-typo">
            The Vastu principle states to paint your bedroom walls in neutral or earthy
            tones as they radiate positive energy. By tailoring your bedroom, Vastu
            Shastra can increase positive energy, strengthen relationships, and increase
            your security.
          </span>
        </div>
        <div className="vastu-page-section2-image" />
      </div>
    );
  }
}
