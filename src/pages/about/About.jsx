import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const About = ({ setSiteTitle }) => {
  useEffect(() => {
    setSiteTitle("About Us");
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
