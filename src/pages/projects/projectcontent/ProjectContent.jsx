import axios from "axios";
import React, { useEffect, useState } from "react";
import { Slide } from "react-slideshow-image";

import Loading from "../../../components/loading/Loading";
import Error404 from "../../404/Error404";

import "./projectcontent.css";

const ProjectContent = ({ setSiteTitle, setSiteContent, match }) => {
  const [existing, setExisting] = useState(null);
  const [images, setImages] = useState([]);
  const [projectData, setProjectData] = useState({});

  const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    prevArrow: <svg className="project-info-page-slider-arrow slider-arrow-lett" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" /></svg>,
    nextArrow: <svg className="project-info-page-slider-arrow slider-arrow-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" /></svg>,
  };

  useEffect(() => {
    axios.get("https://amnuz.herokuapp.com/v1/growmore/projects/", {
      params: {
        id: match.params.id,
      },
    })
      .then((response) => {
        if (response.data) {
          const {
            name, images: imageURLs,
          } = response.data;

          setImages(imageURLs);
          setExisting(true);
          setProjectData(response.data);
          setTimeout(() => {
            setSiteTitle(name);
          }, 1000 / 10);
        } else {
          setExisting(false);
        }
      })
      .catch(() => setExisting(false));

    return () => {
      setSiteTitle(null);
    };
  }, []);

  if (existing) {
    return (
      <div className="project-info-page">
        <div className="project-info-LHS">
          <Slide
            pauseOnHover={false}
            easing="ease"
            {...properties}
          >
            {images.map((image) => (
              <div key={image} className="project-info-each-slide">
                <div className="project-info-each-slide-image" style={{ backgroundImage: `url(${`https://cf.jare.io/?u=${image}`})` }} />
              </div>
            ))}
          </Slide>
        </div>
        <div className="project-info-RHS">
          <div className="project-info-name">
            <span>{projectData.name}</span>
          </div>
          <div className="project-info-location">
            <span>{projectData.location}</span>
          </div>
          <div className="project-info-architect">
            <span className="project-info-type">
              Architect:
              {" "}
            </span>
            <span>{projectData.architect}</span>
          </div>
          <div className="project-info-client">
            <span className="project-info-type">
              Client:
              {" "}
            </span>
            <span>{projectData.client}</span>
          </div>
          <div className="project-info-year">
            <span className="project-info-type">
              Year:
              {" "}
            </span>
            <span>{projectData.date}</span>
          </div>
          <div className="project-info-description">
            <span>{projectData.description}</span>
          </div>
        </div>
      </div>
    );
  }

  if (existing === false) {
    return (
      <Error404 setSiteTitle={setSiteTitle} setSiteContent={setSiteContent} />
    );
  }

  return (
    <Loading message={`Loading Project Data ${match.params.id}`} />
  );
};

export default ProjectContent;
