import React, { useEffect, useState } from "react";
import axios from "axios";

import Card from "../../components/projects/card/Card";

import Loading from "../../components/loading/Loading";
import Error500 from "../500/Error500";

import "./projects.css";

const Projects = ({ setSiteTitle, setSiteContent }) => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    setSiteTitle("Projects");
    axios.get("https://amnuz.herokuapp.com/v1/growmore/projects/list")
      .then((response) => {
        if (response.data.length > 0) {
          setProjects(response.data);
        }
        setLoading(false);
      })
      .catch((err) => {
        const { response } = err;
        setError({
          code: response.status ? response.status : "503",
          message: response.data.message ? response.data.message : "Cannot reach the server",
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
          <span>Projects</span>
        </div>
        <div className="projects-page-projects-list">
          {projects.map((project) => (
            <Card
              key={project.key}
              id={project.id}
              name={project.name}
              image={project.image}
              location={project.location}
            />
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
