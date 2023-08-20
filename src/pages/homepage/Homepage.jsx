import React, { useEffect } from "react";

import "./homepage.css";

import Hero from "../../components/homepage/hero/Hero";
import News from "../../components/homepage/news/News";
import About from "../../components/homepage/about/About";

import HeritageBanner from "../../components/homepage/Heritage Banner/HeritageBanner";
import Architects from "../../components/homepage/architects/Architects";
import Newsletter from "../../components/homepage/newsletter/Newsletter";

function Homepage({ setSiteTitle, setSiteContent }) {
  useEffect(() => {
    setSiteTitle(null);
    setSiteContent(null);

    return () => {
      setSiteTitle(null);
      setSiteContent(null);
    };
  }, []);

  return (
    <div className="homepage">
      <Hero />
      <div className="homepage-section-horizontal section-short">
        <div className="LHS">
          <About />
        </div>
        <div className="RHS">
          <News />
        </div>
      </div>
      <HeritageBanner />
      <Architects />
      <Newsletter />
    </div>
  );
}

export default Homepage;
