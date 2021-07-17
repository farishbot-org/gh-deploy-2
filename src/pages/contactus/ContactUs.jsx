import React, { useEffect, useState } from "react";

import "./contact.css";

import ContactSection from "../../components/contact/ContactSection";

const ContactUs = ({ setSiteTitle, setSiteContent, location }) => {
  const [subject, setSubject] = useState(null);
  useEffect(() => {
    setSiteTitle("Contact Us");
    setSiteContent("Contact us for your enquiries.");
    const { search } = location;
    if (search) setSubject(search.replace("?", ""));

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
      <ContactSection existingSubject={subject} />
    </div>
  );
};

export default ContactUs;
