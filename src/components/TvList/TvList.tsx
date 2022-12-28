import React from "react";
import "./TvList.css";
import "../style.css";

export default class TvList extends React.Component {
  render() {
    const topTv = [
      { title: "Game of Thrones", rating: "9.7" },
      { title: "Breaking Bad", rating: "9.6" },
      { title: "Big Bang Theory", rating: "8.8" },
      { title: "How I Met Your Mother", rating: "8.8" },
      { title: "The Boys", rating: "8.7" },
    ];

    return (
      <div className="tv-grid">
        <h3 className="genre-title">All TV</h3>
        <div className="tv-list">
          <ol>
            {topTv.map((tv, i) => {
              const num = `${i + 1}. ${tv.title}`;
              return (
                <li className="tv">
                  {num}({tv.rating})
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    );
  }
}
