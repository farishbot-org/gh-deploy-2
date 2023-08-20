// import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Slide } from "react-slideshow-image";
import axios from "axios";

import Loading from "../../../components/loading/Loading";
import Error404 from "../../404/Error404";

// import driveFetch from "../../../utils/drive/driveFetch";
// import tabs from "../../../utils/drive/tabs.json";

import "./projectcontent.css";

function ProjectContent({ setSiteTitle, setSiteContent }) {
  const [existing, setExisting] = useState(null);
  const [images, setImages] = useState([]);
  const [projectData, setProjectData] = useState({});

  const router = useLocation();

  const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    prevArrow: <svg className="project-info-page-slider-arrow slider-arrow-lett" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" /></svg>,
    nextArrow: <svg className="project-info-page-slider-arrow slider-arrow-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" /></svg>,
  };

  useEffect(() => {
    const id = router.pathname.split("/")[2];
    axios.get("https://server.amnuz.com/v1/growmore/projects/", { params: { id }, headers: { "Cache-Control": "no-store" } })
      .then((response) => {
        if (response.data) {
          const project = response.data;
          const { name, images: imageurls, description } = project;

          setImages(imageurls);
          setExisting(true);
          setProjectData({
            name,
            description,
            location: project.location,
            architect: project.architect,
            client: project.client,
            year: project.date,
          });

          setSiteContent(description);
          return setSiteTitle(name);
        }

        return setExisting(false);
      })
      .catch(() => setExisting(false));

    return () => {
      setSiteContent(null);
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
                <div className="project-info-each-slide-image" style={{ backgroundImage: `url(${image})` }} />
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
            <span>{projectData.year}</span>
          </div>
          <div className="project-info-description">
            <span>{projectData.description}</span>
          </div>
        </div>
      </div>
    );
  }

  if (existing === false) {
    return <Error404 setSiteTitle={setSiteTitle} setSiteContent={setSiteContent} />;
  }

  return <Loading message="Loading Project" />;
}

export default ProjectContent;
