import React, { useEffect } from "react";

import "./vasthu.css";

import Hero from "../../components/vasthu/hero/Hero";
import Definition from "../../components/vasthu/definition/Definition";
import Section1 from "../../components/vasthu/section1/Section1";
import Section2 from "../../components/vasthu/section2/Section2";
import Section3 from "../../components/vasthu/section3/Section3";

import Enquire from "../../components/enquire/Enquire";

const vasthushastra = ({ setSiteTitle }) => {
  useEffect(() => {
    setSiteTitle("vasthushastra");
    return () => {
      setSiteTitle(null);
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
