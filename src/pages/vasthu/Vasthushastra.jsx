import React, { useEffect } from "react";

import "./vasthu.css";

import Hero from "../../components/vasthu/hero/Hero";
import Definition from "../../components/vasthu/definition/Definition";
import Section1 from "../../components/vasthu/section1/Section1";
import Section2 from "../../components/vasthu/section2/Section2";
import Section3 from "../../components/vasthu/section3/Section3";

import Enquire from "../../components/enquire/Enquire";

const vasthushastra = ({ setSiteTitle, setSiteContent }) => {
  useEffect(() => {
    setSiteTitle("Vasthushastra");
    setSiteContent("An ancient system of building a positive home includes an assessment of the entrance to the house and a series of recommendations for the bedroom, bathroom, kitchen and courtyard.");

    return () => {
      setSiteTitle(null);
      setSiteContent(null);
    };
  }, []);

  return (
    <div className="vasthu-page">
      <Hero />
      <Definition />
      <Section1 />
      <Section2 />
      <Section3 />
      <Enquire subject="Vasthushastra" />
    </div>
  );
};

export default vasthushastra;
