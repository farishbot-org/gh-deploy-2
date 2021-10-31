// import axios from "axios";
import React, { PureComponent } from "react";
import Moment from "moment-timezone";
import Chance from "chance";
import axios from "axios";

// import driveConfig from "../../../utils/drive/driveFetch";

import "./news.css";

export default class News extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      newsContent: [],
    };
  }

  componentDidMount() {
    axios.get("https://amnuz.herokuapp.com/v1/growmore/news", { headers: { "Cache-Control": "no-store" } })
      .then((response) => {
        if (response.data.length > 0) {
          this.setState({
            newsContent: response.data,
          });
        }
      })
      .catch(() => {
        this.setState({
          newsContent: [],
        });
      });
  }

  render() {
    const chanceObj = new Chance();
    const { newsContent } = this.state;

    return (
      <div className="homepage-section section-short">
        <div hidden={!(newsContent.length > 0)} className="homepage-news-section">
          <div className="news-heading">
            <span>LATEST UPDATES</span>
          </div>
          <div className="homepage-news-list">
            {newsContent.map((news) => {
              const {
                newscontent: content, date,
              } = news;

              return (
                <div key={chanceObj.guid()} className="news-item">
                  <div className="news-item-date">
                    <span>{`${Moment(date).format("MMM")}\n${Moment(date).format("YYYY")}`}</span>
                  </div>
                  <div className="news-item-newscontent">
                    <span>{content}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
