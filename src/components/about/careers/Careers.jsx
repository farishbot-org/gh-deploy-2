import axios from "axios";
import React, { PureComponent } from "react";
import { Link } from "react-router-dom";

import "./careers.css";

export default class Careers extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      hideSection: true,
    };
  }

  componentDidMount() {
    axios.get("https://amnuz.herokuapp.com/v1/growmore/careers")
      .then((response) => {
        if (response.data) {
          this.setState({
            hideSection: false,
          });
        }
      });
  }

  render() {
    const { hideSection } = this.state;
    return (
      <div hidden={hideSection} className={hideSection ? null : "about-page-careers-section"}>
        <div className="about-page-careers-section-main-typo">
          <span>We're hiring!</span>
        </div>
        <span>Join our team if you think you have what it takes to work with us.</span>
        <Link className="about-page-careers-section-career-link" to="/careers">View Careers</Link>
      </div>
    );
  }
}
