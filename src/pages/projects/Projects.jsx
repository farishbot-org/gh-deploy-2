import React, { useEffect, useState } from "react";
import Chance from "chance";

import Card from "../../components/projects/card/Card";
import Loading from "../../components/loading/Loading";
import Error500 from "../500/Error500";

import "./projects.css";

import { driveFetch, tabs } from "../../utils/drive/driveFetch";

const Projects = ({ setSiteTitle, setSiteContent }) => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    setSiteTitle("Projects");

    driveFetch(tabs.projects)
      .then((response) => {
        if (response.length > 0) {
          setProjects(response.reverse());
        }
        setLoading(false);
      })
      .catch(() => {
        setError({
          code: "503",
          message: "Internal Server Error",
        });
      });

    return () => {
      setSiteTitle(null);
      setSiteContent(null);
    };
  }, []);

  const chanceObj = new Chance();

  if (loading === false) {
    return (
      <div className="projects-page">
        <div className="projects-page-heading">
          <span>Projects</span>
        </div>
        <div className="projects-page-projects-list">
          {projects.map((project) => (
            <Card
              key={chanceObj.guid()}
              id={project.id}
              name={project.project_name}
              image={project.image_urls.split(",")[0]}
              location={project.project_location}
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
