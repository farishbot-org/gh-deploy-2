import React, { useEffect } from "react";

import "./heritage.css";

import Hero from "../../components/heritage/hero/Hero";

import Enquire from "../../components/enquire/Enquire";

const Heritage = ({ setSiteTitle }) => {
  useEffect(() => {
    setSiteTitle("Heritage");
    return () => {
      setSiteTitle(null);
    };
  }, []);

  return (
    <div className="heritage-page">
      <Hero />
      <Enquire subject="Heritage" />
    </div>
  );
};

export default Heritage;
