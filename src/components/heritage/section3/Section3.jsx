import React, { PureComponent } from "react";

import "./section.css";

import Image1 from "./finance_and_trade_centre_karachi_1989_yasmeen_lari_barefoot_economy_architectural_review_399455576-1024x683_i4ltbc.jpg";
import Image2 from "./zerocarbon_cultural_centre_makli_201519_yasmeen_lari_zc3aerialview_0_372186422-1024x576_pjx5fd.jpg";
import Image3 from "./bamboo_double_storey_women_centre_yasmeenlari_barefoot_economy_architectural_review_ar_sindh_province_201115_5_3391593-1024x768_fj0uoc.jpg";
import Image4 from "./drr_flood_response_shelters_bamboo_201011_yasmeenlari_barefoot_economy_architectural_review_ar_dscn1658_352654596-1024x510_bebzry.jpg";

export default class Section3 extends PureComponent {
  render() {
    const images = [
      {
        link: Image1,
      },
      {
        link: Image2,
      },
      {
        link: Image3,
      },
      {
        link: Image4,
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
