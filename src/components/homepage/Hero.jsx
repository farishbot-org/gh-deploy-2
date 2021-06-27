import React, { PureComponent } from "react";
import { Fade as Slide } from "react-slideshow-image";
import { Link } from "react-router-dom";
// import Chance from "chance";

import "./hero.css";

export default class Hero extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      sliderItems: [
        {
        // link: "images/img-1.jpg",
          link: "http://derbyde.ae/wp-content/uploads/2018/06/DD_Hosp_Cresent_4.jpg",
          title: "CRESCENT DEVELOPMENT – OFFSHORE STRUCTURES LA LUNA HOTEL",
          location: "Baku, Indonasia",
          id: "popopo",
        },
        {
        // link: "images/img-2.jpg",
          link: "http://derbyde.ae/wp-content/uploads/2018/06/DD_Res_JAV_3.jpg",
          title: "JEBEL ALI VILLAGE, PHASE II RESIDENTIAL DEVELOPMENT",
          location: "Dubai, United Arab Emirates",
          id: "popopo",
        },
        {
        // link: "images/img-3.jpg",
          link: "http://derbyde.ae/wp-content/uploads/2018/06/DD_Hosp_WaterRest_5.jpg",
          title: "JUMEIRAH BEACH RESORT & SPA – WATER RESTAURANT",
          location: "Dubai, United Arab Emirates",
          id: "popopo",
        },
        {
        // link: "images/img-4.jpg",
          link: "http://derbyde.ae/wp-content/uploads/2018/06/DD_Public_GEMSBarsha_1.jpg",
          title: "GEMS AMERICAN ACADEMY",
          location: "Dubai, United Arab Emirates",
          id: "popopo",
        },
        {
        // link: "images/img-5.jpg",
          link: "http://derbyde.ae/wp-content/uploads/2018/06/DD_Hangars_Salalah_3.jpg",
          title: "SALALAH AIRPORT",
          location: "Salalah, Oman",
          id: "popopo",
        },
        {
          link: "images/img-6.jpg",
          title: "Auditaurium",
          location: "Kerala, India",
          id: "popopo",
        },
      ],
    };
  }

  componentDidMount() {
    // const chanceObj = new Chance();
    // const { sliderItems } = this.state;

    // this.setState({
    //   sliderItems: chanceObj.shuffle(sliderItems),
    // });
  }

  render() {
    const { sliderItems } = this.state;

    return (
      <div className="hero-section">
        <Slide
          autoplay
          arrows={false}
          indicators
          pauseOnHover={false}
        >
          {sliderItems.map((image) => (
            <div key={image.link} className="each-slide">
              <div className="each-slide-image" style={{ backgroundImage: `url(${image.link})` }}>
                <Link className="each-slide-image-info" to={`/projects/${image.id}`}>
                  <span className="each-slide-image-info-title">{image.title}</span>
                  <span className="each-slide-image-info-location">{image.location}</span>
                  <span className="each-slide-image-info-learnmore">Learn More</span>
                </Link>
              </div>
            </div>
          ))}
        </Slide>
      </div>
    );
  }
}
