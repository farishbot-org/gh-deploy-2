import axios from "axios";
import React, { PureComponent } from "react";

export default class ContactForm extends PureComponent {
  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeCompany = this.onChangeCompany.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePhone = this.onChangePhone.bind(this);
    this.onChangeSubject = this.onChangeSubject.bind(this);
    this.onChangeMessage = this.onChangeMessage.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      name: "",
      company: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      disableForm: false,
      success: null,
      existingSubject: false,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      const { existingSubject } = this.props;
      if (existingSubject) {
        this.setState({
          subject: `Service Enquiry: ${decodeURI(existingSubject)}`,
          existingSubject: true,
        });
      }
    }, 1000);
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value,
    });
  }

  onChangeCompany(e) {
    this.setState({
      company: e.target.value,
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }

  onChangePhone(e) {
    this.setState({
      phone: e.target.value,
    });
  }

  onChangeSubject(e) {
    this.setState({
      subject: e.target.value,
    });
  }

  onChangeMessage(e) {
    this.setState({
      message: e.target.value,
    });
  }

  submitForm(e) {
    e.preventDefault();
    this.setState({
      disableForm: true,
    });

    const {
      name, company, email, phone, subject, message,
    } = this.state;

    this.setState({
      success: "Sending",
    });

    const data = {
      name, company, email, phone, subject, message,
    };

    axios.post("https://amnuz.herokuapp.com/v1/growmore/contact", data)
      .then((response) => {
        if (response.data) {
          this.setState({
            success: "Message Sent!",
          });
        }
      });
  }

  render() {
    const {
      disableForm, name, company, email, phone, subject, message, success, existingSubject,
    } = this.state;

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
                autoFocus
                disabled={disableForm}
                value={name}
                onChange={this.onChangeName}
                required
                className="contact-page-contact-section-RHS-form-input"
              />
            </div>
            <div className="contact-page-contact-section-RHS-forminput-item">
              <label className="contact-page-contact-section-RHS-forminput-item-label">Company Name</label>
              <input
                type="text"
                disabled={disableForm}
                value={company}
                onChange={this.onChangeCompany}
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
                value={email}
                onChange={this.onChangeEmail}
                required
                className="contact-page-contact-section-RHS-form-input"
              />
            </div>
            <div className="contact-page-contact-section-RHS-forminput-item">
              <label className="contact-page-contact-section-RHS-forminput-item-label">Phone</label>
              <input
                type="text"
                disabled={disableForm}
                value={phone}
                onChange={this.onChangePhone}
                className="contact-page-contact-section-RHS-form-input"
              />
            </div>
          </div>
          <div className="contact-page-contact-section-RHS-forminput-item-line">
            <div className="contact-page-contact-section-RHS-forminput-item">
              <label className="contact-page-contact-section-RHS-forminput-item-label">Subject*</label>
              <input
                type="text"
                disabled={existingSubject ? true : disableForm}
                value={subject}
                onChange={this.onChangeSubject}
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
                value={message}
                onChange={this.onChangeMessage}
                required
                className="contact-page-contact-section-RHS-form-input form-input-textarea"
              />
            </div>
          </div>
          <input
            type="submit"
            disabled={disableForm}
            value={success || "Send Message"}
            className={success ? "contact-page-contact-section-RHS-form-input form-input-submit-success" : "contact-page-contact-section-RHS-form-input form-input-submit"}
          />
        </form>
      </div>
    );
  }
}
