import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

import "./errorpage.css";

const Error404 = ({ setSiteTitle }) => {
  useEffect(() => {
    setSiteTitle("Page Not Found");
    return () => {
      setSiteTitle("");
    };
  }, []);

  const router = useHistory();

  const onClickButton = () => {
    router.replace("/");
  };

  return (
    <div className="error-page">
      {/* <h1>Grow More International Engineering Consultants</h1> */}
      <img className="error-code" src="/404.svg" alt="Page not found" />
      <button type="button" className="error-page-back-button" onClick={onClickButton}>Go Home</button>
    </div>
  );
};

export default Error404;
