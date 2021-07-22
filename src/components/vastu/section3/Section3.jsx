import React, { PureComponent } from "react";
// import { Link } from "react-router-dom";

import "./section.css";

import Logo from "./kannipayyur.svg";

export default class Section3 extends PureComponent {
  constructor(props) {
    super(props);
    this.onClickKanippayyurLogo = this.onClickKanippayyurLogo.bind(this);
  }

  onClickKanippayyurLogo() {
    window.open("https://kanippayyur.in/");
  }

  render() {
    return (
      <div className="vastu-page-section3">
        <span className="vastu-page-section3-heading">Designed by India's leading Vastushastra Family</span>
        <img title="Click to visit Kanippayyur Famil's website." onClick={this.onClickKanippayyurLogo} className="kanippayyur-logo" src={Logo} alt="logo" />
      </div>
    );
  }
}
