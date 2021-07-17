import React, { useEffect } from "react";

import "./services.css";

import ServiceCard from "../../components/services/service card/ServiceCard";

const Services = ({ setSiteTitle, setSiteContent }) => {
  useEffect(() => {
    setSiteTitle("Services");
    setSiteContent("With the expertise to help you get laser-focused on what will make your project stand out. By providing you with a talented design and engineering team, you will be able to grow and progress faster");

    return () => {
      setSiteTitle(null);
      setSiteContent(null);
    };
  }, []);

  const items = {
    architectural: [
      {
        title: "Residential",
        description: "Buildings and Villa projects.",
        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 7.093v-5.093h-3v2.093l3 3zm4 5.907l-12-12-12 12h3v10h7v-5h4v5h7v-10h3zm-5 8h-3v-5h-8v5h-3v-10.26l7-6.912 7 6.99v10.182z" /></svg>,
      },
      {
        title: "Commercial",
        description: "Offices, showrooms and shops.",
        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M9.939 0l-.939 4.971v1.098c0 1.066-.933 1.931-2 1.931s-2-.865-2-1.932v-1.097l2.996-4.971h1.943zm-3.052 0l-2.887 4.971v1.098c0 1.066-.933 1.931-2 1.931s-2-.865-2-1.932v-1.097l4.874-4.971h2.013zm17.113 6.068c0 1.067-.933 1.932-2 1.932s-2-.933-2-2v-1.098l-2.887-4.902h2.014l4.873 4.971v1.097zm-10-1.168v1.098c0 1.066-.933 2.002-2 2.002s-2-.933-2-2v-1.098l1.047-4.902h1.905l1.048 4.9zm2.004-4.9l2.993 5.002v1.098c.001 1.067-.93 1.9-1.997 1.9s-2-.933-2-2v-1.098l-.939-4.902h1.943zm4.996 12v10h-18v-10h18zm2-2h-22v14h22v-14zm-5.25 8h-11.5l-2.25 3h16l-2.25-3z" /></svg>,
      },
      {
        title: "Industrial",
        description: "Factories, godowns and storage containers.",
        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M24 24h-24v-18h6v6l6-4v4.008l6-4.008v4.017l6-4.017v16zm-20-16h-2v14h20v-10l-6 4v-4l-6 4v-4l-6 4v-8zm11 12h-2v-3h2v3zm-4 0h-2v-3h2v3zm-4 0h-2v-3h2v3zm12 0h-2v-3h2v3zm-16-15h-1c.198-2.182 1.785-4 3.5-4 .246 0 .478.059.683.164.316-.687 1.011-1.164 1.817-1.164s1.501.477 1.817 1.164c.205-.105.437-.164.683-.164.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5c-.246 0-.478-.059-.683-.164-.316.687-1.011 1.164-1.817 1.164-2.345 0-3.722-2.951-5 0z" /></svg>,
      },
      {
        title: "Hotel Appartments",
        description: "Residential Hotels.",
        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17 5h3v4h4v15h-23v-15h4v-4h3v-5h9v5zm-5 14h-2v4h2v-4zm3 0h-2v4h2v-4zm0-17h-5v5h-3v4h-4v11h5v-5h9v5h5v-11h-4v-4h-3v-5zm-10 14h2v2h-2v-2zm15 0v2h-2v-2h2zm-11-2h2v2h-2v-2zm5 0h2v2h-2v-2zm-9-1h2v2h-2v-2zm13 0h2v2h-2v-2zm-9-2h2v2h-2v-2zm5 0h2v2h-2v-2zm-5-3h2v2h-2v-2zm5 0h2v2h-2v-2zm-2-4h1v-1h1v3h-1v-1h-1v1h-1v-3h1v1z" /></svg>,
      },
      {
        title: "Public Buildings",
        description: "Public attractions, gathering areas.",
        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M24 24h-24v-2h24v2zm-1-3h-22v-1h22v1zm-17-1.999h-4v-7.001c-.552 0-1-.448-1-1s.448-1 1-1h4c.552 0 1 .448 1 1s-.448 1-1 1v7.001zm8 0h-4v-7.001c-.552 0-1-.448-1-1s.448-1 1-1h4c.552 0 1 .448 1 1s-.448 1-1 1v7.001zm8 0h-4v-7.001c-.552 0-1-.448-1-1s.448-1 1-1h4c.552 0 1 .448 1 1s-.448 1-1 1v7.001zm-10-19.001l-12 9h24.001l-12.001-9zm0 3c1.104 0 2 .896 2 2s-.896 2-2 2-2-.896-2-2 .896-2 2-2z" /></svg>,
      },
      {
        title: "Government Building",
        description: "Highly strong structures.",
        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M24 24h-24v-2h.998l.009-6h21.993v6h1v2zm-3-6h-18v4h2v-2c0-.552.448-1 1-1s1 .448 1 1v2h2v-2c0-.552.448-1 1-1s1 .448 1 1v2h2v-2c0-.552.448-1 1-1s1 .448 1 1v2h2v-2c0-.552.448-1 1-1s1 .448 1 1v2h2v-4zm2-3h-21.991l.003-2h3.988v-3h2v3h2v-3h2v3h2v-3h2v3h2v-3h2v3h4v2zm-8-13h-3v1c2.966 0 6.158 1.979 7 6h-14c.547-3.78 3.638-5.827 6-6v-3h4v2zm.954 5c-.88-1.1-2.229-2-3.954-2-1.96 0-3.264.837-4.086 2h8.04z" /></svg>,
      },
      {
        title: "Oil and Gas",
        description: "Oil mines and rigs.",
        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7.467 0c1.102.018 5.555 2.549 6.386 8.558.905-.889 1.409-3.664 1.147-4.843 3.952 2.969 6 6.781 6 11.034 0 5.094-3.43 9.251-8.963 9.251-5.728 0-9.037-3.753-9.037-8.276 0-6.26 5.052-7.62 4.467-15.724zm3.262 19.743c-.749.848-.368 1.945.763 2.045 1.035.093 1.759-.812 2.032-1.792.273-.978.09-2.02-.369-2.893-.998 1.515-1.52 1.64-2.426 2.64zm4.42 1.608c2.49-1.146 3.852-3.683 3.852-6.58 0-2.358-.94-4.977-2.5-7.04-.743 2.867-2.924 3.978-4.501 4.269.05-3.219-.318-6.153-2.602-8.438-.296 4.732-4.321 7.63-4.398 12.114-.029 1.511.514 3.203 1.73 4.415.491.489 1.054.871 1.664 1.16-.121-.608-.062-1.254.195-1.848.911-2.106 3.333-2.321 4.202-5.754.952.749 3.275 3.503 2.778 6.358-.082.469-.224.923-.42 1.344z" /></svg>,
      },
      {
        title: "Power and Water",
        description: "Power source foundations.",
        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 16c2.947 0 5.333-2.365 5.333-5.284 0-2.917-2.087-5.918-5.333-10.716-3.246 4.798-5.332 7.799-5.332 10.716 0 2.919 2.385 5.284 5.332 5.284zm-.018-12.587c.311.484.685 1.325.685 2.213 0 2.606-2.667 3.033-2.667 1.447 0-1.088 1.326-2.696 1.982-3.66zm.018 16.587c-2.367 0-5.711-.614-7.285-2.356.473-.294 1.15-.61 2.021-.889.923.589 2.702 1.245 5.264 1.245s4.341-.656 5.265-1.245c.87.278 1.548.595 2.022.889-1.574 1.742-4.92 2.356-7.287 2.356zm11.997-2c0 3.313-5.37 6-11.997 6-6.625 0-11.997-2.687-11.997-6l.003-.126c.043-1.009.615-1.921 1.505-2.398s1.965-.448 2.829.074l.023.014c-1.513.763-2.361 1.678-2.361 2.436 0 1.631 3.895 4 9.998 4s9.998-2.369 9.998-4c0-.757-.847-1.671-2.358-2.436l.021-.012c.877-.529 1.969-.548 2.864-.052s1.458 1.434 1.472 2.458v.042zm-4.999-4.031c1.453-1.406 3.064-.182 4.402-1.477.418-.403.603-.902.603-1.384 0-1.279-1.481-2.261-3.021-1.436-1.234.661-1.921 2.349-1.984 4.297zm.178-5.067c.63-1.037 1.749-.57 2.329-1.524.688-1.133-.729-2.29-1.829-1.269-.615.57-.76 1.654-.5 2.793zm-16.153.77c-1.539-.825-3.021.157-3.021 1.436 0 .482.185.98.602 1.384 1.338 1.295 2.95.071 4.402 1.477-.062-1.948-.748-3.636-1.983-4.297zm1.307-3.563c-1.1-1.021-2.518.136-1.83 1.269.58.954 1.699.487 2.33 1.524.259-1.139.115-2.223-.5-2.793z" /></svg>,
      },
    ],
    structural: [
      {
        title: "Reinforced Concrete",
        description: "Enhancing strength through reinforcement.",
        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11 2h10l3 3v2h-3v5h3v4h-7v-4h3v-5h-9v17h-6v-17h-1v2h-4v-7h5v-2h6v2zm13 22h-11v-4h4v-3h7v7zm-14-17h-4v16h4v-16zm13 14h-5v2h5v-2zm-6 0h-3v2h3v-2zm-8-1l-2 1v1l2-1v-1zm14-2h-5v2h5v-2zm-14-1l-2 1v1l2-1v-1zm0-3l-2 1v1l2-1v-1zm14-1h-5v2h5v-2zm-14-2l-2 1v1l2-1v-1zm0-3l-2 1v1l2-1v-1zm1-7h-4v2h-5v5h2v-2h20v-.586l-2.414-2.414h-10.586v-2z" /></svg>,
      },
      {
        title: "Pre-Cast Concrete",
        description: "Using reusable molds for casting concrete.",
        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11 2h10l3 3v2h-3v5h3v4h-7v-4h3v-5h-9v17h-6v-17h-1v2h-4v-7h5v-2h6v2zm13 22h-11v-4h4v-3h7v7zm-14-17h-4v16h4v-16zm13 14h-5v2h5v-2zm-6 0h-3v2h3v-2zm-8-1l-2 1v1l2-1v-1zm14-2h-5v2h5v-2zm-14-1l-2 1v1l2-1v-1zm0-3l-2 1v1l2-1v-1zm14-1h-5v2h5v-2zm-14-2l-2 1v1l2-1v-1zm0-3l-2 1v1l2-1v-1zm1-7h-4v2h-5v5h2v-2h20v-.586l-2.414-2.414h-10.586v-2z" /></svg>,
      },
      {
        title: "Pre-Stressed Concrete",
        description: "Production of prestressed concrete.",
        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11 2h10l3 3v2h-3v5h3v4h-7v-4h3v-5h-9v17h-6v-17h-1v2h-4v-7h5v-2h6v2zm13 22h-11v-4h4v-3h7v7zm-14-17h-4v16h4v-16zm13 14h-5v2h5v-2zm-6 0h-3v2h3v-2zm-8-1l-2 1v1l2-1v-1zm14-2h-5v2h5v-2zm-14-1l-2 1v1l2-1v-1zm0-3l-2 1v1l2-1v-1zm14-1h-5v2h5v-2zm-14-2l-2 1v1l2-1v-1zm0-3l-2 1v1l2-1v-1zm1-7h-4v2h-5v5h2v-2h20v-.586l-2.414-2.414h-10.586v-2z" /></svg>,
      },
      {
        title: "Structural Steelwork",
        description: "Constructing materials are made from steel.",
        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11 2h10l3 3v2h-3v5h3v4h-7v-4h3v-5h-9v17h-6v-17h-1v2h-4v-7h5v-2h6v2zm13 22h-11v-4h4v-3h7v7zm-14-17h-4v16h4v-16zm13 14h-5v2h5v-2zm-6 0h-3v2h3v-2zm-8-1l-2 1v1l2-1v-1zm14-2h-5v2h5v-2zm-14-1l-2 1v1l2-1v-1zm0-3l-2 1v1l2-1v-1zm14-1h-5v2h5v-2zm-14-2l-2 1v1l2-1v-1zm0-3l-2 1v1l2-1v-1zm1-7h-4v2h-5v5h2v-2h20v-.586l-2.414-2.414h-10.586v-2z" /></svg>,
      },
      {
        title: "Structural Timber",
        description: "Timber used in buildings as a loadbearing surface.",
        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11 2h10l3 3v2h-3v5h3v4h-7v-4h3v-5h-9v17h-6v-17h-1v2h-4v-7h5v-2h6v2zm13 22h-11v-4h4v-3h7v7zm-14-17h-4v16h4v-16zm13 14h-5v2h5v-2zm-6 0h-3v2h3v-2zm-8-1l-2 1v1l2-1v-1zm14-2h-5v2h5v-2zm-14-1l-2 1v1l2-1v-1zm0-3l-2 1v1l2-1v-1zm14-1h-5v2h5v-2zm-14-2l-2 1v1l2-1v-1zm0-3l-2 1v1l2-1v-1zm1-7h-4v2h-5v5h2v-2h20v-.586l-2.414-2.414h-10.586v-2z" /></svg>,
      },
      {
        title: "Structural Glazing",
        description: "An integral part of a building's design.",
        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11 2h10l3 3v2h-3v5h3v4h-7v-4h3v-5h-9v17h-6v-17h-1v2h-4v-7h5v-2h6v2zm13 22h-11v-4h4v-3h7v7zm-14-17h-4v16h4v-16zm13 14h-5v2h5v-2zm-6 0h-3v2h3v-2zm-8-1l-2 1v1l2-1v-1zm14-2h-5v2h5v-2zm-14-1l-2 1v1l2-1v-1zm0-3l-2 1v1l2-1v-1zm14-1h-5v2h5v-2zm-14-2l-2 1v1l2-1v-1zm0-3l-2 1v1l2-1v-1zm1-7h-4v2h-5v5h2v-2h20v-.586l-2.414-2.414h-10.586v-2z" /></svg>,
      },
      {
        title: "Foundations",
        description: "Weight distribution system for buildings.",
        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11 2h10l3 3v2h-3v5h3v4h-7v-4h3v-5h-9v17h-6v-17h-1v2h-4v-7h5v-2h6v2zm13 22h-11v-4h4v-3h7v7zm-14-17h-4v16h4v-16zm13 14h-5v2h5v-2zm-6 0h-3v2h3v-2zm-8-1l-2 1v1l2-1v-1zm14-2h-5v2h5v-2zm-14-1l-2 1v1l2-1v-1zm0-3l-2 1v1l2-1v-1zm14-1h-5v2h5v-2zm-14-2l-2 1v1l2-1v-1zm0-3l-2 1v1l2-1v-1zm1-7h-4v2h-5v5h2v-2h20v-.586l-2.414-2.414h-10.586v-2z" /></svg>,
      },
      {
        title: "Retaining Structures",
        description: "Engineered to sustain earth pressure.",
        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11 2h10l3 3v2h-3v5h3v4h-7v-4h3v-5h-9v17h-6v-17h-1v2h-4v-7h5v-2h6v2zm13 22h-11v-4h4v-3h7v7zm-14-17h-4v16h4v-16zm13 14h-5v2h5v-2zm-6 0h-3v2h3v-2zm-8-1l-2 1v1l2-1v-1zm14-2h-5v2h5v-2zm-14-1l-2 1v1l2-1v-1zm0-3l-2 1v1l2-1v-1zm14-1h-5v2h5v-2zm-14-2l-2 1v1l2-1v-1zm0-3l-2 1v1l2-1v-1zm1-7h-4v2h-5v5h2v-2h20v-.586l-2.414-2.414h-10.586v-2z" /></svg>,
      },
    ],
  };

  return (
    <div className="service-page">
      <div className="service-page-header-section">
        <span className="service-page-header">Our Services</span>
        <span className="service-page-header-long">
          We have the expertise to help you get laser-focused
          on what will make your project stand out. By providing
          you with a talented design and engineering team,
          you will be able to grow and progress faster.
        </span>
      </div>
      <div className="service-page-services-section">
        <div className="service-page-services-subsection">
          <div className="service-page-services-subsection-header">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 7c0 .552-.447 1-1 1s-1-.448-1-1 .447-1 1-1 1 .448 1 1zm19-4v8h-13v13h-8v-13h-3v-8h3v-3h8v3h13zm-19 0h4v-1h-4v1zm4 8h-4v11h4v-2h-2v-1h2v-2h-2v-1h2v-2h-2v-1h2v-2zm13-6h-2v3h-1v-3h-2v2h-1v-2h-2v3h-1v-3h-2v2h-1v-2h-2v3h-1v-3h-5v4h20v-4z" /></svg>
            <span>Architectural</span>
          </div>
          <div className="service-page-services-subsection-items">
            {items.architectural.map((item) => (
              <ServiceCard
                key={item.title}
                title={item.title}
                description={item.description}
                icon={item.icon}
              />
            ))}
          </div>
        </div>
        <div className="service-page-services-subsection">
          <div className="service-page-services-subsection-header">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2h9l3 3v2h-5v5h1v3.396c-1.66.085-2.782.652-3 1.604-.131.574.145 1.553 1.12 1.699.665.1 1.325-.24 1.657-.825.335-.661 1.201-.158.932.45-.429 1.023-1.526 1.676-2.709 1.676-1.656 0-3-1.344-3-3 0-1.305.835-2.417 2-2.829v-2.171h1v-5h-6v17h-6v-17h-1v2h-5v-7h6v-2h6v2zm-2 18.052l-2 .952v.996h2v-1.948zm-2-1.821v1.773l2-.952v-1.774l-2 .953zm0-2.859v1.859l2-.953v-1.858l-2 .952zm0-2.785v1.785l2-.952v-1.785l-2 .952zm0-2.768v1.768l2-.952v-1.768l-2 .952zm2-2.819h-2v1.819l2-.952v-.867zm10.017-3h-18.017v3h1v-2h18l-.983-1zm-10.017-3h-2v1h2v-1z" /></svg>
            <span>Structural Design</span>
          </div>
          <div className="service-page-services-subsection-items">
            {items.structural.map((item) => (
              <ServiceCard
                key={item.title}
                title={item.title}
                description={item.description}
                icon={item.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
