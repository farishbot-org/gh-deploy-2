import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const About = ({ setSiteTitle, setSiteContent }) => {
  useEffect(() => {
    setSiteTitle("About Us");
    return () => {
      setSiteContent(null);
      setSiteTitle(null);
    };
  }, []);

  return (
    <div>
      <Link to="/">
        About
      </Link>
    </div>
  );
};

export default About;
