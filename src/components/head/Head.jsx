import React from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";

const Head = ({ title, content }) => {
  const router = useLocation();

  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title ? `${title} - Growmore International` : "Growmore International Engineering Consultants"}</title>
      <meta name="viewport" content="width=device-width, user-scalable=no" />
      <meta name="theme-color" content="#000000" />
      <meta name="description" content={content || "Founded in the middle of the 1990's when Growmore Structural Consultant first provided structural expertise to various leading consultants in Abu Dhabi and Dubai,"} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={`https://growmoreinternational.com/${router.pathname}`} />
      <meta property="og:title" content={title ? `${title} - Growmore International` : "Growmore International Engineering Consultants"} />
      <meta property="og:description" content={content || "Founded in the middle of the 1990's when Growmore Structural Consultant first provided structural expertise to various leading consultants in Abu Dhabi and Dubai,"} />
      <meta
        property="og:image"
        content="/seo-img.jpg"
      />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={`https://growmoreinternational.com/${router.pathname}`} />
      <meta property="twitter:title" content={title ? `${title} - Growmore International` : "Growmore International Engineering Consultants"} />
      <meta property="twitter:description" content={content || "Founded in the middle of the 1990's when Growmore Structural Consultant first provided structural expertise to various leading consultants in Abu Dhabi and Dubai,"} />
      <meta
        property="twitter:image"
        content="/seo-img.jpg"
      />
    </Helmet>
  );
};

export default Head;
