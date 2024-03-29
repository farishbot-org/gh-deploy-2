import React from "react";

import "./errorpage.css";

function Error500({ errorCode, errorMessage }) {
  return (
    <div className="error-500-page">
      <div className="error-500-page-errorcode-section">
        <span className="error-500-page-errorcode">{errorCode || "500"}</span>
        <span>{errorMessage || "Internal Server Error"}</span>
      </div>
    </div>
  );
}

export default Error500;
