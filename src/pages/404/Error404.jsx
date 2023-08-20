import React, { useEffect } from "react";
import { useNavigate as useHistory } from "react-router-dom";

import "./errorpage.css";

function Error404({ setSiteTitle, setSiteContent }) {
  useEffect(() => {
    setSiteTitle("404 - Page Not Found");
    setSiteContent(null);

    return () => {
      setSiteTitle(null);
    };
  }, []);

  const router = useHistory();

  const onClickButton = () => {
    router("/");
  };

  return (
    <div className="error-page">
      <img className="error-code" src="/404.svg" alt="Page not found" />
      <button type="button" className="error-page-back-button" onClick={onClickButton}>Go Home</button>
    </div>
  );
}

export default Error404;
