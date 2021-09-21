// import axios from "axios";
import React, { PureComponent } from "react";
import Moment from "moment-timezone";
import Chance from "chance";

import driveConfig from "../../../utils/drive/driveFetch";

import "./news.css";

export default class News extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      newsContent: [],
    };
  }

  componentDidMount() {
    const { driveFetch, tabs } = driveConfig;

    driveFetch(tabs.news)
      .then((response) => {
        if (response.length > 0) {
          this.setState({
            newsContent: response,
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
    const { newsContent } = this.state;
    const chanceObj = new Chance();

    return (
      <div className="homepage-section section-short">
        <div hidden={!(newsContent.length > 0)} className="homepage-news-section">
          <div className="news-heading">
            <span>LATEST UPDATES</span>
          </div>
          <div className="homepage-news-list">
            {newsContent.map((news) => {
              const {
                news_content: content, date,
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
