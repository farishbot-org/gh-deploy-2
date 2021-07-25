import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import Chance from "chance";

import "./enquire.css";

export default class Enquire extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      ctaMessage: "",
    };
  }

  componentDidMount() {
    const chacneObj = new Chance();

    const ctaMessages = [
      "Sounds good?",
      "Sounds great?",
      "Are you ready?",
      "Ready to dive in?",
      "Want to learn more?",
      "Sounds interesting?",
      "Got questions to ask?",
    ];

    this.setState({
      ctaMessage: chacneObj.pickone(ctaMessages),
    });
  }

  render() {
    const { subject } = this.props;
    const { ctaMessage } = this.state;

    return (
      <div className="enquire-section">
        <div className="enquire-section-typo-section">
          <span className="enquire-section-typo-main">{ctaMessage}</span>
          <span className="enquire-section-typo-cta">Talk to our team today.</span>
        </div>
        <div className="enquire-section-cta-button-section">
          <Link to={subject ? `/contact/?${subject}` : "/contact"} className="enquire-section-cta-button">Enquire</Link>
        </div>
      </div>
    );
  }
}
