import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Homepage = ({ setSiteTitle }) => {
  useEffect(() => {
    setSiteTitle("hom");
  }, []);

  return (
    <div>
      <Link to="/about">
        Homeeee
      </Link>
    </div>
  );
};

export default Homepage;
