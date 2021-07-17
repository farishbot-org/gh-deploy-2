import React, { PureComponent } from "react";

import "./contactsection.css";

import ContactInformation from "./componnts/contactinfo/ContactInformation";
import ContactForm from "./componnts/contactform/ContactForm";

export default class ContactSection extends PureComponent {
  render() {
    const { existingSubject } = this.props;
    return (
      <div className="contact-page-contact-section">
        <ContactInformation />
        <ContactForm existingSubject={existingSubject || null} />
      </div>
    );
  }
}
