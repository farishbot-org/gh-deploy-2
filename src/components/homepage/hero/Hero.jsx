import React, { PureComponent } from "react";
import { Fade } from "react-slideshow-image";
import { Link } from "react-router-dom";
import Chance from "chance";

import "./hero.css";

import Error500 from "../../../pages/500/Error500";
import Loading from "../../loading/Loading";

import driveConfig from "../../../utils/drive/driveFetch";

export default class Hero extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      sliderItems: [],
      error: null,
    };
  }

  componentDidMount() {
    const chanceObj = new Chance();
    const { driveFetch, tabs } = driveConfig;

    driveFetch(tabs.projects, true)
      .then((response) => {
        const data = [];

        response.forEach((project) => {
          const {
            project_name: name, project_location: location, id, image_urls: images,
          } = project;

          const pushData = {
            name,
            id,
            link: images.split(",")[0],
            location,
            key: chanceObj.guid(),
          };

          data.push(pushData);
        });

        this.setState({
          sliderItems: data,
        });
      })
      .catch(() => {
        this.setState({
          error: {
            code: "503",
            message: "Internal Server Error",
          },
        });
      });
  }

  render() {
    const { sliderItems, error } = this.state;

    if (error) {
      return <Error500 errorCode={error.code} errorMessage={error.message} />;
    }

    if (sliderItems.length === 0) {
      return <Loading message="Loading Featured Projects" noScroll />;
    }

    return (
      <div className="hero-section">
        <Fade
          autoplay
          arrows={false}
          indicators
          pauseOnHover={false}
        >
          {sliderItems.map((image) => (
            <div key={image.key} className="each-slide">
              <div className="each-slide-image" style={{ backgroundImage: `url(${`https://cf.jare.io/?u=${image.link}`})` }}>
                <Link className="each-slide-image-info" to={`/projects/${image.id}`}>
                  <span className="each-slide-image-info-title">{image.name}</span>
                  <span className="each-slide-image-info-location">{image.location}</span>
                  <span className="each-slide-image-info-learnmore">Learn More</span>
                </Link>
              </div>
            </div>
          ))}
        </Fade>
      </div>
    );
  }
}
