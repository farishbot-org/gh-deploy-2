import React, { PureComponent } from "react";

import "./section.css";

export default class Section2 extends PureComponent {
  render() {
    return (
      <div className="heritage-page-section2">
        <div className="heritage-page-section2-LHS">
          <h2 className="heritage-page-section2-LHS-maintypo">From the World Renowned Architect.</h2>
          <span className="heritage-page-section2-LHS-longtypo">
            Yasmeen Lari is the first female architect in Pakistan who carved her name by creating
            landmarks characterized by a distinctive architectural design. Her
            work on the
            {" "}
            <a className="heritage-page-section2-LHS-longtypo-link" href="https://archnet.org/publications/3107" target="_blank" rel="noreferrer">
              Lines Area Resettlement
            </a>
            {" "}
            was inspired by both the morphology
            and sustainable aspects of ancient Asian towns and the vernacular
            heritage of rural earth buildings in the region, and the settlement
            included self-built incremental housing for the largest informal
            settlement in the area.
          </span>
        </div>
        <div className="heritage-page-section2-RHS">
          <div className="heritage-page-section2-img" title="Yasmin Lari" />
          {/* <span className="heritage-page-section2-architect">Yasmeen Lari</span> */}
        </div>
      </div>
    );
  }
}
