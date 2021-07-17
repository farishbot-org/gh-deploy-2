import React, { PureComponent } from "react";
import { Link } from "react-router-dom";

import "./servicecard.css";

export default class ServiceCard extends PureComponent {
  render() {
    const { title, description, icon } = this.props;
    return (
      <div className="service-page-servicecard">
        <div className="service-page-servicecard-icon-section">
          {icon}
        </div>
        <span className="service-page-servicecard-title">{title}</span>
        <span className="service-page-servicecard-description">{description}</span>
        <Link to={{ pathname: "/contact", search: title }} className="service-page-servicecard-link">ENQUIRE</Link>
      </div>
    );
  }
}
