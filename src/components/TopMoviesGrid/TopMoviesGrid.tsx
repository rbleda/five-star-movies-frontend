import React from "react";
import "./TopMoviesGrid.css";

import TopMovie from "./TopMovie/TopMovie";

export default class TopMoviesGrid extends React.Component {
  render() {
    const topMovies = [
      { image: "Forrest_Gump.jpeg", title: "Forrest Gump" },
      { image: "Django- Unchained.jpeg", title: "Django: Unchained" },
      { image: "Shawshank Redemption.jpeg", title: "The Shawshank Redemption" },
      { image: "Interstellar.jpeg", title: "Interstellar" },
      { image: "The Dark Knight.jpeg", title: "The Dark Knight" },
      { image: "Good Will Hunting.jpeg", title: "Good Will Hunting" },
      { image: "Inglorious Basterds.jpeg", title: "Inglorious Basterds" },
      { image: "Pulp Fiction.jpeg", title: "Pulp Fiction" },
      { image: "Gladiator.jpeg", title: "Gladiator" },
      { image: "The Matrix.jpeg", title: "The Matrix" },
    ];

    return (
      <div>
        <h3 className="top-ten-title">Top Ten Five Star Movies</h3>
        <div className="top-ten-grid">
          {topMovies.map((movie, i) => {
            const title = `${i + 1}. ${movie.title}`;
            return <TopMovie image={movie.image} title={title} />;
          })}
        </div>
      </div>
    );
  }
}
