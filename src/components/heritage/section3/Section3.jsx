import React, { PureComponent } from "react";

import "./section.css";

export default class Section3 extends PureComponent {
  render() {
    const images = [
      {
        link: "https://res.cloudinary.com/farish/image/upload/v1627304514/Growmore/finance_and_trade_centre_karachi_1989_yasmeen_lari_barefoot_economy_architectural_review_399455576-1024x683_i4ltbc.jpg",
      },
      {
        link: "https://res.cloudinary.com/farish/image/upload/v1627304534/Growmore/zerocarbon_cultural_centre_makli_201519_yasmeen_lari_zc3aerialview_0_372186422-1024x576_pjx5fd.jpg",
      },
      {
        link: "https://res.cloudinary.com/farish/image/upload/v1627303087/Growmore/bamboo_double_storey_women_centre_yasmeenlari_barefoot_economy_architectural_review_ar_sindh_province_201115_5_3391593-1024x768_fj0uoc.jpg",
      },
      {
        link: "https://res.cloudinary.com/farish/image/upload/v1627304299/Growmore/drr_flood_response_shelters_bamboo_201011_yasmeenlari_barefoot_economy_architectural_review_ar_dscn1658_352654596-1024x510_bebzry.jpg",
      },
    ];

    return (
      <div className="heritage-page-section3">
        {images.map((item) => (
          <div className="heritage-page-section3-image-slider " key={item.link} style={{ backgroundImage: `url('${item.link}')` }} />
        ))}
      </div>
    );
  }
}
