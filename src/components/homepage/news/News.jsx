import axios from "axios";
import React, { PureComponent } from "react";

import "./news.css";

export default class News extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      newsContent: [],
    };
  }

  componentDidMount() {
    // console.log("test");

    axios.get("http://localhost:5000/v1/growmore/news")
      .then((response) => {
        if (response.data.length > 0) {
          this.setState({
            newsContent: response.data,
          });
        }
      });
  }

  render() {
    const { newsContent } = this.state;
    return (
      <div className="homepage-section">
        <div className="homepage-news-section">
          <h2>Latest Updates</h2>
          {newsContent.map((news) => {
            const { newscontent: content, imagelink, date } = news;
            return (
              <div className="news-card">
                <div className="news-card-image" style={{ backgroundImage: `url(${imagelink})` }} />
                <span>{content}</span>
                <span>{date}</span>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
