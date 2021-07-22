import React, { useEffect } from "react";

import "./vastu.css";

import Hero from "../../components/vastu/hero/Hero";
import Definition from "../../components/vastu/definition/Definition";
import Section1 from "../../components/vastu/section1/Section1";
import Section2 from "../../components/vastu/section2/Section2";
import Section3 from "../../components/vastu/section3/Section3";

import Enquire from "../../components/enquire/Enquire";

const Vastushastra = ({ setSiteTitle }) => {
  useEffect(() => {
    setSiteTitle("Vastushastra");
    return () => {
      setSiteTitle(null);
    };
  }, []);

  return (
    <div className="vastu-page">
      <Hero />
      <Definition />
      <Section1 />
      <Section2 />
      <Section3 />
      <Enquire subject="Vastushastra" />
    </div>
  );
};

export default Vastushastra;
