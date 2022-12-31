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
  header: string;
  loading: boolean;
  error: any;
}

interface MovieListProps {
  genre: { id: number, title: string };
  movie_search_title: string;
}

export default class MovieList extends React.Component<MovieListProps, MovieListState> {
  state: MovieListState = {
    movie_list: [],
    header: "",
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
        this.setState({ movie_list: movies, loading: false, header: this.props.genre.title });
      }
      else if (title !== "") {
        const movies = await this.getMoviesByTitle(title);
        const searched_header = "Results for: '" + this.props.movie_search_title + "'";
        this.setState({movie_list: movies, loading: false, header: searched_header });
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
    const currentTitle = this.props.movie_search_title;
    if (currentId === 500) {

    }
    else if (prevProps.genre.id !== currentId) {
      // Update movie list based on currentId
      this.setMovieState(currentId, "")
      return;
    }
    if (currentTitle === "") {

    }
    else if (prevProps.movie_search_title !== currentTitle) {
      this.setMovieState(0, currentTitle)
      return;
    }
  }

  render() {
    if (this.state.loading) {
      return <p>Loading data...</p>;
    }
    if (this.state.error) {
      return <p>Error: {this.state.error.message}</p>;
    }
    if (this.state.movie_list.length === 0) {
      return (
        <div className="movie-grid">
        <h2 className="header">{this.state.header}</h2>
        <div className="movie-list">
          <ol>
            <div className="Movie">
              <img alt="There are no movies with this title in the application."></img>
              <li className="movie-text">
                Make sure there are no spelling errors in the inputted title.
              </li>
            </div>
          </ol>
        </div>
      </div>
      );
    }

    return (
      <div className="movie-grid">
        <h2 className="header">{this.state.header}</h2>
        <div className="movie-list">
          <ol>
          {this.state.movie_list.map((movie, i) => {
            const num = `${i + 1}. ${movie.title}`;
            return (
              <div className="movie">
                <img src={movie.image_uri}></img>
                <li className="movie-text">
                  {num}({movie.rating})
                </li>
              </div>
              );
            })
          }
          </ol>
        </div>
      </div>
    );
  }
}
