import React, { PureComponent } from "react";

export default class ContactForm extends PureComponent {
  constructor(props) {
    super(props);

    this.submitForm = this.submitForm.bind(this);
    this.state = {
    //   name: "",
    //   company: "",
    //   email: "",
    //   phone: "",
    //   subject: "",
    //   message: "",
      disableForm: false,
    };
  }

  submitForm(e) {
    e.preventDefault();

    this.setState({
      disableForm: true,
    });
  }

  render() {
    const { disableForm } = this.state;

    return (
      <div className="contact-page-contact-section-RHS">
        <div className="contact-page-contact-section-RHS-header">
          <span>Send us a message</span>
        </div>
        <form onSubmit={this.submitForm} className="contact-page-contact-section-RHS-form">
          <div className="contact-page-contact-section-RHS-forminput-item-line">
            <div className="contact-page-contact-section-RHS-forminput-item">
              <label className="contact-page-contact-section-RHS-forminput-item-label">Name*</label>
              <input
                type="text"
                disabled={disableForm}
                required
                className="contact-page-contact-section-RHS-form-input"
              />
            </div>
            <div className="contact-page-contact-section-RHS-forminput-item">
              <label className="contact-page-contact-section-RHS-forminput-item-label">Company Name</label>
              <input
                type="text"
                disabled={disableForm}
                className="contact-page-contact-section-RHS-form-input"
              />
            </div>
          </div>
          <div className="contact-page-contact-section-RHS-forminput-item-line">
            <div className="contact-page-contact-section-RHS-forminput-item">
              <label className="contact-page-contact-section-RHS-forminput-item-label">Email Address*</label>
              <input
                type="text"
                disabled={disableForm}
                required
                className="contact-page-contact-section-RHS-form-input"
              />
            </div>
            <div className="contact-page-contact-section-RHS-forminput-item">
              <label className="contact-page-contact-section-RHS-forminput-item-label">Phone</label>
              <input
                type="text"
                disabled={disableForm}
                className="contact-page-contact-section-RHS-form-input"
              />
            </div>
          </div>
          <div className="contact-page-contact-section-RHS-forminput-item-line">
            <div className="contact-page-contact-section-RHS-forminput-item">
              <label className="contact-page-contact-section-RHS-forminput-item-label">Subject*</label>
              <input
                type="text"
                disabled={disableForm}
                required
                className="contact-page-contact-section-RHS-form-input form-input-subject"
              />
            </div>
          </div>
          <div className="contact-page-contact-section-RHS-forminput-item-line">
            <div className="contact-page-contact-section-RHS-forminput-item">
              <label className="contact-page-contact-section-RHS-forminput-item-label">Message*</label>
              <textarea
                type="textarea"
                disabled={disableForm}
                required
                className="contact-page-contact-section-RHS-form-input form-input-textarea"
              />
            </div>
          </div>
          <input
            type="submit"
            disabled={disableForm}
            value="Send Message"
            className="contact-page-contact-section-RHS-form-input form-input-submit"
          />
        </form>
      </div>
    );
  }
}
