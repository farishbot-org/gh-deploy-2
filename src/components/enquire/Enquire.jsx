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
      "Are you ready?",
      "Ready to dive in?",
      "Sounds good?",
      "Sounds interesting?",
      "Sounds great?",
      "Want to learn more?",
      "Got questions to ask?",
    ];

    this.setState({
      ctaMessage: chacneObj.pickone(ctaMessages),
    });
  }

  render() {
    const { ctaMessage } = this.state;

    const { subject } = this.props;
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
