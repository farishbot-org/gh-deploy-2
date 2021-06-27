import React, { PureComponent } from "react";

import "./footer.css";

export default class Footer extends PureComponent {
  render() {
    return (
      <div className="footer">
        <h1>footer</h1>
        <div className="footer-copyright-section">
          <span className="footer-copyright">
            © 2012 -
            {" "}
            {new Date().getFullYear()}
            {" "}
            Growmore International. All Rights Reserved.
          </span>
          <a href="https://www.amnuz.com/?referrer=growmoreweb" target="https://www.amnuz.com/?referrer=growmoreweb">
            <span className="footer-copyright">Designed and Developed by Amnuz Technologies</span>
          </a>
        </div>
      </div>
    );
  }
}
