import React, { PureComponent } from "react";
import { Link } from "react-router-dom";

import "./card.css";

export default class Card extends PureComponent {
  render() {
    const {
      id, name, location, image,
    } = this.props;

    return (
      <Link to={`/projects/${id}`} title={name} className="projects-page-project-item">
        <div className="projects-page-project-item-image" style={image ? { backgroundImage: `url(${image})` } : { background: "white" }} />
        <div className="projects-page-project-item-data-section">
          <div className="projects-page-project-item-name-section">
            <div className="projects-page-project-item-name">{name}</div>
          </div>
          <div className="projects-page-project-item-location-section">
            <span className="projects-page-project-item-location">{location}</span>
          </div>
          <div className="projects-page-project-item-action-section">
            <div className="projects-page-project-item-action-button">VIEW PROJECT</div>
          </div>
        </div>
      </Link>
    );
  }
}
