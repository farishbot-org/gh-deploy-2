import React, { useEffect } from "react";

const Heritage = ({ setSiteTitle }) => {
  useEffect(() => {
    setSiteTitle("Heritage");
    return () => {
      setSiteTitle(null);
    };
  }, []);

  return (
    <div>
      <span>Heritage</span>
    </div>
  );
};

export default Heritage;
