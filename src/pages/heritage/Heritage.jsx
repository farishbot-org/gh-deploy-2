import React, { useEffect } from "react";

import "./heritage.css";

// import Hero from "../../components/heritage/hero/Hero";
import Section1 from "../../components/heritage/section1/Section1";
import Section2 from "../../components/heritage/section2/Section2";
import Section3 from "../../components/heritage/section3/Section3";

import Enquire from "../../components/enquire/Enquire";

const Heritage = ({ setSiteTitle, setSiteContent }) => {
  useEffect(() => {
    setSiteTitle("Heritage");

    return () => {
      setSiteTitle(null);
      setSiteContent(null);
    };
  }, []);

  return (
    <div className="heritage-page">
      <Section1 />
      {/* <Hero /> */}
      <Section2 />
      <Section3 />
      <Enquire subject="Heritage" />
    </div>
  );
};

export default Heritage;
