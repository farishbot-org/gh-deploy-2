import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../../components/loading/Loading";

import "./projects.css";

const Projects = ({ setSiteTitle }) => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setSiteTitle("Projects");
    axios.get("http://localhost:5000/v1/growmore/projects/list")
      .then((response) => {
        if (response.data.length > 0) {
          setProjects(response.data);
        }
        setLoading(false);
      });

    return () => {
      setSiteTitle("");
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
            <Link className="projects-page-project-item" key={project.id} to={`/projects/${project.id}`}>
              <img className="projects-page-project-item-image" src={project.image} alt="project" />
              <div className="projects-page-project-item-name">
                <span>{project.name}</span>
              </div>
              <div className="projects-page-project-item-location">
                <span>{project.location}</span>
              </div>
              {/* <div className="projects-page-project-item-learnmore">
                <span>Learn More</span>
              </div> */}
            </Link>
          ))}
        </div>
      </div>
    );
  }

  return <Loading message="Loading Projects" />;
};

export default Projects;
