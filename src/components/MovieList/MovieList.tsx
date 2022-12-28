import React from "react";
import "./MovieList.css";
import "../style.css";
import axios from "axios";

interface Movie {
  title: string;
  rating: number
}

interface MovieListState {
  movieList: { title: string; rating: number }[];
  loading: boolean;
  error: any;
}

interface MovieListProps {
  genre: { id: number, title: string } 
}

export default class MovieList extends React.Component<MovieListProps, MovieListState> {
  state: MovieListState = {
    movieList: [],
    loading: true,
    error: null,
  };

  async getMoviesByGenre(genreId: number): Promise<Movie[]> {
    const response = await axios.get<Movie[]>(`http://localhost:8080/movies?genre_id=${genreId}`);
    return response.data
  }

  async setMovieState(genreId: number): Promise<void> {
    try {
      const movies = await this.getMoviesByGenre(genreId)
      this.setState({ movieList: movies, loading: false });
    } catch (error) {
      this.setState({ error, loading: false });
    }
  }

  componentDidMount() {
    this.setMovieState(this.props.genre.id)
  }

  componentDidUpdate(prevProps: MovieListProps, prevState: MovieListState, snapshot: any) {
    const currentId = this.props.genre.id;
    if (prevProps.genre.id !== currentId) {
      // Update movie list based on currentId
      this.setMovieState(currentId)
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
        <h3 className="genre-title">{this.props.genre.title}</h3>
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
