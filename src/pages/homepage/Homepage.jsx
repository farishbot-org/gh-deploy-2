import React, { useEffect } from "react";

import "./homepage.css";

import Hero from "../../components/homepage/Hero";
import News from "../../components/homepage/news/News";

const Homepage = ({ setSiteTitle }) => {
  useEffect(() => {
    setSiteTitle("");
  }, []);

  return (
    <div className="homepage">
      <Hero />
      <News />
    </div>
  );
};

export default Homepage;
