import React, { PureComponent } from "react";

export default class Head extends PureComponent {
  render() {
    const {
      title, content, pathname,
    } = this.props;

    return (
      <head>
        <meta charset="utf-8" />
        <title>{title ? `${title} | GROWMORE INTERNATIONAL` : "GROWMORE INTERNATIONAL"}</title>
        <link rel="icon" href="/logo.svg" />
        <meta name="viewport" content="width=device-width, user-scalable=no" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content={content || "Industry's most versatile team dedicated to maximizing the potential of our environment by utilizing AI solutions for businesses, homes, and users alike."} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://portal.dubauae.com${pathname}`} />
        <meta property="og:title" content={title ? `${title} | GROWMORE INTERNATIONAL` : "GROWMORE INTERNATIONAL"} />
        <meta property="og:description" content={content || "Industry's most versatile team dedicated to maximizing the potential of our environment by utilizing AI solutions for businesses, homes, and users alike."} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={`https://portal.dubauae.com${pathname}`} />
        <meta property="twitter:title" content={title ? `${title} | GROWMORE INTERNATIONAL` : "GROWMORE INTERNATIONAL"} />
        <meta property="twitter:description" content={content || "Industry's most versatile team dedicated to maximizing the potential of our environment by utilizing AI solutions for businesses, homes, and users alike."} />
      </head>
    );
  }
}
