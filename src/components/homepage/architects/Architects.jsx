import React, { PureComponent } from "react";

import "./architects.css";

import Card from "./card/Card";

import YasminLari from "./yasmeen-lari-portrait-heritage-foundation-sq_a_coiq9t.jpg";
import Kannipayyur from "./maxresdefault_tdhibw.jpg";

export default class Architects extends PureComponent {
  render() {
    const architects = [
      {
        name: "Kannipayyur Narayanan Namboodiripad",
        country: "Kerala, India",
        description: "Narayanan Namboodiripad is a member of the Kanippayyur family, which is famous for its practice of Traditional Architecture, Temple Building, Astrology and related studies. We have partnered with this renowned Vastu Architect.",
        image: Kannipayyur,
        link: "/vasthu",
      },
      {
        name: "Yasmeen Lari",
        country: "Punjab, Pakistan",
        description: "As Pakistan's first female architect, Yasmeen Lari is a pioneer in her field. The intersection of architecture and social justice is the most important contribution to her career. Now Growmore has partnered with this renowned architect for the resort construction in India.",
        image: YasminLari,
        link: "/heritage",
      },
    ];

    return (
      <div className="homepage-architects-section">
        <div className="homepage-architects-section-header">
          <span>Working with the Industry Leaders</span>
        </div>
        <div className="homepage-architects-section-architects-list">
          {architects.map((item) => (
            <Card
              key={item.link}
              name={item.name}
              link={item.link}
              image={item.image}
              description={item.description}
              country={item.country}
            />
          ))}

        </div>
      </div>
    );
  }
}
