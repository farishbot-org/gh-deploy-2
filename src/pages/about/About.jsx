import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const About = ({ setSiteTitle }) => {
  useEffect(() => {
    setSiteTitle("hom");
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
