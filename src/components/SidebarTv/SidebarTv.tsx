import React from "react";
import "./SidebarTv.css";

export default class SidebarTv extends React.Component {
  render() {
    const genres = [
      { genre: "All Tv", icon: "glyphicon glyphicon-film" },
      { genre: "Drama", icon: "glyphicon glyphicon-tint" },
      { genre: "Action/Adventure", icon: "glyphicon glyphicon-fire" },
      { genre: "Sci-Fi", icon: "glyphicon glyphicon-exclamation-sign" },
      { genre: "Comedy", icon: "glyphicon glyphicon-piggy-bank" },
    ];

    return (
      <div className="navigationTv">
        <ul>
          {genres.map((genre, i) => {
            return (
              <li>
                <a href="#">
                  <span className="iconTv">
                    <i className={genre.icon} aria-hidden="true"></i>
                  </span>
                  <span className="titleTv">{genre.genre}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
