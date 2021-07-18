import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import Loading from "../../components/loading/Loading";
import Error500 from "../500/Error500";

import "./projects.css";

const Projects = ({ setSiteTitle, setSiteContent }) => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    setSiteTitle("Projects");
    axios.get("http://localhost:5000/v1/growmore/projects/list")
      .then((response) => {
        if (response.data.length > 0) {
          setProjects(response.data);
        }
        setLoading(false);
      })
      .catch((err) => {
        const { response } = err;
        setError({
          code: response.status,
          message: response.data.message,
        });
      });

    return () => {
      setSiteTitle(null);
      setSiteContent(null);
    };
  }, []);

  if (loading === false) {
    return (
      <div className="projects-page">
        <div className="projects-page-heading">
          <span>Completed Projects</span>
        </div>
        <div className="projects-page-projects-list">
          {projects.map((project) => (
            <Link to={`/projects/${project.id}`} key={project.key} title={project.name} className="projects-page-project-item">
              <div className="projects-page-project-item-image" style={{ backgroundImage: `url(${`https://cf.jare.io/?u=${project.image}`})` }} />
              <div className="projects-page-project-item-data-section">
                <div className="projects-page-project-item-name-section">
                  <div className="projects-page-project-item-name">{project.name}</div>
                </div>
                <div className="projects-page-project-item-location-section">
                  <span className="projects-page-project-item-location">{project.location}</span>
                </div>
                <div className="projects-page-project-item-action-section">
                  <div className="projects-page-project-item-action-button">LEARN MORE</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return <Error500 errorCode={error.code} errorMessage={error.message} />;
  }

  return <Loading message="Loading Projects" />;
};

export default Projects;
