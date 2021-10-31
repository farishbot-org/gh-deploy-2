import React, { PureComponent } from "react";
import { Link } from "react-router-dom";

import "./card.css";

export default class Card extends PureComponent {
  render() {
    const {
      link, country, name, description, image,
    } = this.props;

    return (
      <Link to={link} key={name} className="homepage-architects-section-architects-list-item">
        <div style={{ backgroundImage: `url('${image}')` }} className="homepage-architects-section-architects-list-item-image" />
        <div className="homepage-architects-section-architects-list-item-details">
          <span className="homepage-architects-section-architects-list-item-details-name">{name}</span>
          <span className="homepage-architects-section-architects-list-item-details-country">{country}</span>
          <span className="homepage-architects-section-architects-list-item-details-description">{description}</span>
        </div>
      </Link>
    );
  }
}
