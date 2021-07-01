import React, { PureComponent } from "react";
import { Fade } from "react-slideshow-image";
import { Link } from "react-router-dom";
import axios from "axios";

import "./hero.css";

export default class Hero extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      sliderItems: [
        {
          // link: "images/img-1.jpg",
          link: "https://derbyde.ae/wp-content/uploads/2018/06/DD_Hosp_Cresent_4.jpg",
          name: "CRESCENT DEVELOPMENT – OFFSHORE STRUCTURES LA LUNA HOTEL",
          location: "BAKU, AZERBAIJAN",
          id: "",
        },
        {
          // link: "images/img-2.jpg",
          link: "https://derbyde.ae/wp-content/uploads/2018/06/DD_Res_JAV_3.jpg",
          name: "JEBEL ALI VILLAGE, PHASE II RESIDENTIAL DEVELOPMENT",
          location: "Dubai, United Arab Emirates",
          id: "",
        },
      ],
    };
  }

  componentDidMount() {
    axios.get("https://amnuz.herokuapp.com/v1/growmore/projects/list/banner")
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
      });
  }

  render() {
    const { sliderItems } = this.state;

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
