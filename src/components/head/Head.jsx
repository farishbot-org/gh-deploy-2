import React from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import isdev from "isdev";

function Head({ title, content }) {
  const router = useLocation();

  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title ? `${title} - Growmore International` : "Growmore International Engineering Consultants"}</title>
      <link rel="icon" href="/logo.svg" />
      <meta name="viewport" content="width=device-width, user-scalable=no" />
      <meta name="theme-color" content="#000000" />
      <meta name="description" content={content || "Founded in the middle of the 1990's when Growmore Structural Consultant first provided structural expertise to various leading consultants in Abu Dhabi and Dubai,"} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={`https://growmoreinternational.com/${router.pathname}`} />
      <meta property="og:title" content={title ? `${title} - Growmore International` : "Growmore International Engineering Consultants"} />
      <meta property="og:description" content={content || "Founded in the middle of the 1990's when Growmore Structural Consultant first provided structural expertise to various leading consultants in Abu Dhabi and Dubai,"} />
      <meta property="og:image" content="/seo-img.jpg" />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={`https://growmoreinternational.com/${router.pathname}`} />
      <meta property="twitter:title" content={title ? `${title} - Growmore International` : "Growmore International Engineering Consultants"} />
      <meta property="twitter:description" content={content || "Founded in the middle of the 1990's when Growmore Structural Consultant first provided structural expertise to various leading consultants in Abu Dhabi and Dubai,"} />
      <meta property="twitter:image" content="/seo-img.jpg" />
      <noscript>You need to enable JavaScript to run this website.</noscript>
      <script src="/404.js" type="text/javascript" />
      {navigator.userAgent !== "ReactSnap" && !isdev && (
        <script src="//code.tidio.co/4hcrqur7ua3zsh3s6no2vuvmf2pa42rg.js" async />
      )}
    </Helmet>
  );
}

export default Head;
