import React, { useEffect, useState } from "react";
import axios from "axios";

import Loading from "../../components/loading/Loading";
import CareerItem from "../../components/careers/careeritem/CareerItem";

import "./careers.css";

function Careers({ setSiteTitle, setSiteContent }) {
  const [loading, setLoading] = useState(true);
  const [careers, setCareers] = useState(null);

  const fetchCareers = () => {
    axios.get("https://server.amnuz.com/v1/growmore/careers/list", { headers: { "Cache-Control": "no-store" } })
      .then((response) => {
        if (response.data && response.data.length > 0) {
          setCareers(response.data);
        }
        setLoading(false);
      });
  };

  useEffect(() => {
    setSiteTitle("Careers");
    fetchCareers();

    return () => {
      setSiteContent(null);
      setSiteTitle(null);
    };
  }, []);

  if (!loading) {
    return (
      <div className="careers-page">
        <div className="careers-page-hero">
          <div className="careers-page-hero-heading">
            <span>Careers </span>
          </div>
        </div>
        <div className="careers-page-list-section">
          {careers ? careers.map((data) => (
            <CareerItem
              key={data.key}
              position={data.position}
              location={data.location}
              minYear={data.minimumexperience}
              maxYear={data.maximumexperience}
            />
          ))
            : <CareerItem noData />}
        </div>
        <div className="careers-page-email-section">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z" /></svg>
          <span>Drop in your CV/Resumé</span>
          <a className="careers-page-email-link" href="mailto:careers@growmoreinternational.com?subject=Job Application">careers@growmoreinternational.com</a>
        </div>
      </div>
    );
  }

  return <Loading message="Loading Careers" />;
}

export default Careers;
