import React, { useEffect } from "react";

import "./homepage.css";

import Hero from "../../components/homepage/Hero";

const Homepage = ({ setSiteTitle }) => {
  useEffect(() => {
    setSiteTitle("");
  }, []);

  return (
    <div className="homepage">
      <Hero />
      <div className="homepage-section">
        <span>hello</span>
      </div>
    </div>
  );
};

export default Homepage;
