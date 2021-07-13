import React, { useEffect } from "react";

import "./services.css";

const Services = ({ setSiteTitle, setSiteContent }) => {
  useEffect(() => {
    setSiteTitle("Our Services");
    setSiteContent("With the expertise to help you get laser-focused on what will make your project stand out. By providing you with a talented design and engineering team, you will be able to grow and progress faster");

    return () => {
      setSiteTitle(null);
      setSiteContent(null);
    };
  }, []);

  return (
    <div className="service-page">
      <div className="service-page-header-section">
        <span className="service-page-header">Our Services</span>
        <span className="service-page-header-long">
          We have the expertise to help you get laser-focused
          on what will make your project stand out. By providing
          you with a talented design and engineering team,
          you will be able to grow and progress faster
        </span>
      </div>
    </div>
  );
};

export default Services;
