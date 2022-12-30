import React from "react";
import "./MovieList.css";
import "../style.css";
import axios from "axios";

interface Movie {
  id: number;
  title: string;
  rating: number;
  genre_id: number;
  image_uri: string;
}

interface MovieListState {
  movie_list: Movie[];
  loading: boolean;
  error: any;
}

interface MovieListProps {
  genre: { id: number, title: string };
  title: string;
}

export default class MovieList extends React.Component<MovieListProps, MovieListState> {
  state: MovieListState = {
    movie_list: [],
    loading: true,
    error: null,
  };

  async getMoviesByGenre(genreId: number): Promise<Movie[]> {
    const response = await axios.get<Movie[]>(`http://localhost:8080/movies?genre_id=${genreId}`);
    return response.data
  }

  async getMoviesByTitle(title: string): Promise<Movie[]> {
    const response = await axios.get<Movie[]>(`http://localhost:8080/movies/search?title=${title}`)
    return response.data
  }

  async setMovieState(genreId: number, title: string): Promise<void> {
    try {
      if (title === "") {
        const movies = await this.getMoviesByGenre(genreId)
        this.setState({ movie_list: movies, loading: false });
      }
      else if (title !== "") {
        const movies = await this.getMoviesByTitle(title);
        this.setState({movie_list: movies, loading: false});
      }
      else {
        return;
      }
    } catch (error) {
      this.setState({ error, loading: false });
    }
  }

  componentDidMount() {
    this.setMovieState(this.props.genre.id, "")
  }

  componentDidUpdate(prevProps: MovieListProps, prevState: MovieListState, snapshot: any) {
    const currentId = this.props.genre.id;
    if (prevProps.genre.id !== currentId) {
      // Update movie list based on currentId
      this.setMovieState(currentId, "")
      return;
    }
    const currentTitle = this.props.title;
    if (prevProps.title !== currentTitle) {
      this.setMovieState(0, currentTitle)
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
            {this.state.movie_list.map((movie, i) => {
              const num = `${i + 1}. ${movie.title}`;
              return (
                <div className="movie">
                  <img src={movie.image_uri}></img>
                  <li className="movie">
                    {num}({movie.rating})
                  </li>
                </div>
              );
            })}
          </ol>
        </div>
      </div>
    );
  }
}
