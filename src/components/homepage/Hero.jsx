import React, { PureComponent } from "react";
import { Fade } from "react-slideshow-image";
import { Link } from "react-router-dom";
import axios from "axios";

import "./hero.css";

import Error500 from "../../pages/500/Error500";
import Loading from "../loading/Loading";

export default class Hero extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      sliderItems: [],
      error: null,
    };
  }

  componentDidMount() {
    axios.get("http://localhost:5000/v1/growmore/projects/list/banner")
      .then((response) => {
        const data = [];

        response.data.forEach((project) => {
          const {
            name, location, id, image,
          } = project;

          const pushData = {
            name,
            id,
            link: image,
            location,
          };

          data.push(pushData);
        });

        this.setState({
          sliderItems: data,
        });
      })
      .catch((err) => {
        const { response } = err;

        this.setState({
          error: {
            code: response.status,
            message: response.data,
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
            <div key={image.link} className="each-slide">
              <div className="each-slide-image" style={{ backgroundImage: `url(${image.link})` }}>
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
