import React, { PureComponent } from "react";

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
      <div className="vasthu-page-section3">
        <span className="vasthu-page-section3-heading">Designed by India's leading Vasthushastra Family</span>
        <img title="Click to visit Kanippayyur Family's website." onClick={this.onClickKanippayyurLogo} className="kanippayyur-logo" src={Logo} alt="logo" />
      </div>
    );
  }
}
