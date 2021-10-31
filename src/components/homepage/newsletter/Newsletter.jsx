import React, { PureComponent } from "react";

import "./newsletter.css";

export default class Newsletter extends PureComponent {
  constructor(props) {
    super(props);

    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onSubmitNewsletter = this.onSubmitNewsletter.bind(this);
    this.state = { email: "" };
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }

  onSubmitNewsletter(e) {
    e.preventDefault();
  }

  render() {
    const { email } = this.state;

    return (
      <div className="homepage-newsletter-section">
        <div className="homepage-newsletter-maintypo-section">
          <span className="homepage-newsletter-maintypo">Want our project news and updates?</span>
          <span className="homepage-newsletter-submaintypo">Sign up for our newsletter.</span>
        </div>
        <div className="homepage-newsletter-form-section">
          <form onSubmit={this.onSubmitNewsletter} className="homepage-newsletter-form">
            <input
              type="text"
              className="homepage-newsletter-form-input"
              value={email}
              onChange={this.onChangeEmail}
            />
            <input
              type="submit"
              value="Notify me"
              className="homepage-newsletter-form-submit"
            />
          </form>
        </div>
      </div>
    );
  }
}
