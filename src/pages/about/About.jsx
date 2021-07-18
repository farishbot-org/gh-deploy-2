import React, { useEffect } from "react";

import "./about.css";

import Hero from "../../components/about/hero/Hero";
import Leader from "../../components/about/leader/Leader";
import Careers from "../../components/about/careers/Careers";

const About = ({ setSiteTitle, setSiteContent }) => {
  useEffect(() => {
    setSiteTitle("About Us");
    return () => {
      setSiteContent(null);
      setSiteTitle(null);
    };
  }, []);

  return (
    <div className="about-page">
      <Hero />
      <Leader />
      <Careers />
    </div>
  );
};

export default About;
