import React, { useEffect } from "react";

import "./contact.css";

import ContactSection from "../../components/contact/ContactSection";

const ContactUs = ({ setSiteTitle, setSiteContent }) => {
  useEffect(() => {
    setSiteTitle("Contact Us");
    setSiteContent("Contact us for your enquiries.");

    return () => {
      setSiteTitle(null);
      setSiteContent(null);
    };
  }, []);

  return (
    <div className="contact-page">
      <div className="contact-page-header-section">
        <span className="contact-page-header">Contact Us</span>
        <span className="contact-page-header-small">Get in touch today with Customer Service to learn how we can assist you with your next project.</span>
      </div>
      <ContactSection />
    </div>
  );
};

export default ContactUs;
