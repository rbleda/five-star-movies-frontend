import React from "react";
import "./MovieList.css";
import "../style.css";
import axios from "axios";

interface MovieListState {
  movieList: { title: string; rating: number }[];
  loading: boolean;
  error: any;
}

export default class MovieList extends React.Component<{}, MovieListState> {
  state: MovieListState = {
    movieList: [],
    loading: true,
    error: null,
  };

  async componentDidMount() {
    try {
      const response = await axios.get("http://localhost:8080/movies/rating");
      this.setState({ movieList: response.data, loading: false });
    } catch (error) {
      this.setState({ error, loading: false });
    }
  }

  render() {
    if (this.state.loading) {
      return <p>Loading data...</p>;
    }
    if (this.state.error) {
      return <p>Error: {this.state.error.message}</p>;
    }

    return (
      <div className="movie-grid">
        <h3 className="genre-title">All Movies</h3>
        <div className="movie-list">
          <ol>
            {this.state.movieList.map((movie, i) => {
              const num = `${i + 1}. ${movie.title}`;
              return (
                <li className="movie">
                  {num}({movie.rating})
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    );
  }
}
