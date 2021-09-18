import React, { PureComponent } from "react";

import "./careeritem.css";

export default class CareerItem extends PureComponent {
  render() {
    const {
      noData, position, location, minYear, maxYear,
    } = this.props;

    if (noData) {
      return (
        <div className="careers-page-list-item-unavailable">
          <span>No careers available at the moment.</span>
        </div>
      );
    }

    return (
      <div className="careers-page-list-item">
        <span className="careers-page-list-item-position">{position}</span>
        <div className="careers-page-list-item-centre-section">
          <div hidden={!location} className={!location ? null : "careers-page-list-item-location-section"}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" /></svg>
            <span>{location}</span>
          </div>
          <div hidden={!(minYear && maxYear)} className={!(minYear && maxYear) ? null : "careers-page-list-item-experience-section"}>
            <span className="careers-page-list-item-experience-section-main">{`${minYear} - ${maxYear} Year(s) `}</span>
            <span className="careers-page-list-item-experience-section-small">preferred experience</span>
          </div>
        </div>
        <div className="careers-page-list-item-mail">
          <a
            title="Apply via Mail"
            className="careers-page-list-item-mail-Link"
            href={`mailto:careers@growmoreinternational.com?subject=Job Application for ${position}`}
          >
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M24 23h-24v-13.275l2-1.455v-7.27h20v7.272l2 1.453v13.275zm-20-10.472v-9.528h16v9.527l-8 5.473-8-5.472zm14-.528h-12v-1h12v1zm0-3v1h-12v-1h12zm-7-1h-5v-3h5v3zm7 0h-6v-1h6v1zm0-2h-6v-1h6v1z" /></svg>
            <span>SEND MY CV</span>
          </a>
        </div>
      </div>
    );
  }
}
