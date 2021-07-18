import axios from "axios";
import React, { useEffect, useState } from "react";

import Loading from "../../components/loading/Loading";
import CareerItem from "../../components/careers/careeritem/CareerItem";

import "./careers.css";

const Careers = ({ setSiteTitle }) => {
  const [loading, setLoading] = useState(true);
  const [careers, setCareers] = useState(null);

  const fetchCareers = () => {
    axios.get("http://localhost:5000/v1/growmore/careers/list")
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
      </div>
    );
  }

  return <Loading message="Loading Careers" />;
};

export default Careers;
