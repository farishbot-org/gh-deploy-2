import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Loading from "../../components/loading/Loading";
import Error500 from "../500/Error500";

import "./projects.css";

const Projects = ({ setSiteTitle }) => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null);

  // const router = useHistory();
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
          message: response.data,
        });
      });

    return () => {
      setSiteTitle(null);
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
            <Link title={project.name} className="projects-page-project-item" key={project.key} to={`/projects/${project.id}`}>
              <div className="projects-page-project-item-image" style={{ backgroundImage: `url(${project.image})` }} />
              <div className="projects-page-project-item-name">
                <span>{project.name}</span>
              </div>
              <div className="projects-page-project-item-location">
                <span>{project.location}</span>
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
