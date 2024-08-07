import React from "react";
import "./MovieList.css";
import "../style.css";
import ApiService from "../../API/ApiService";
import axios from "axios";
import { Link } from "react-router-dom";
import config from "../../config";

interface Movie {
  id: number;
  position: number;
  title: string;
  rating: number;
  genre_id: number;
  image_uri: string;
}

interface MovieListState {
  movie_list: Movie[];
  header: string;
  page_number: number;
  loading: boolean;
  error: any;
}

interface MovieListProps {
  genre: { id: number, title: string };
  movie_search_title: string;
}

const apiService = new ApiService(config.baseURL);

export default class MovieList extends React.Component<MovieListProps, MovieListState> {
  state: MovieListState = {
    movie_list: [],
    header: "",
    page_number: 1,
    loading: true,
    error: null,
  };

  async setMovieState(genreId: number, title: string): Promise<void> {
    try {
      if (title === "") {
        const movies = await apiService.getMoviesByGenre(genreId, 1)
        this.setState({ movie_list: movies, loading: false, header: this.props.genre.title, page_number: 1 });
      }
      else if (title !== "") {
        const movies = await apiService.getMoviesByTitle(title, 1);
        const searched_header = "Results for: '" + this.props.movie_search_title + "'";
        this.setState({movie_list: movies, loading: false, header: searched_header, page_number: 1 });
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
    // Update movie list based on searched title
    else if (prevProps.movie_search_title !== currentTitle) {
      this.setMovieState(0, currentTitle)
      return;
    }
  }

  scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'auto'
    });
  };

  async setMovieListPageBack(current_page_number: number) {
    if (this.state.page_number === 1 || this.state.movie_list.length === 0) {
      return;
    }
    else {
      let movies = [];
      if (this.props.genre.id === 500) {
        movies = await apiService.getMoviesByTitle(this.props.movie_search_title, current_page_number - 1);
        this.setState({ movie_list: movies, page_number: current_page_number - 1})
      }
      else {
        movies = await apiService.getMoviesByGenre(this.props.genre.id, current_page_number - 1);
        this.setState({ movie_list: movies, page_number: current_page_number - 1})
      }
    }
  }

  async setMovieListPageForward(current_page_number: number) {
    if (this.state.movie_list.length < 35 || this.state.movie_list.length === 0) {
      return;
    }
    else {
      let movies = [];
      if (this.props.genre.id === 500) {
        movies = await apiService.getMoviesByTitle(this.props.movie_search_title, current_page_number + 1);
        this.setState({ movie_list: movies, page_number: current_page_number + 1})
      }
      else {
        movies = await apiService.getMoviesByGenre(this.props.genre.id, current_page_number + 1);
        this.setState({ movie_list: movies, page_number: current_page_number + 1})
      }
      this.scrollToTop();
    }
  }

  render() {
    if (this.state.loading) {
      return (
        <div className="movie-body">
          <p style={{ color: 'green' }} >Loading data...</p>
        </div>
      );
    }
    if (this.state.error) {
      return (
        <div className="movie-body">
          <p style={{ color: 'red' }}>Error: {this.state.error.message}</p>
        </div>
      );
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
            const num = `${movie.position}. ${movie.title}`;
            return (
              <div className="movie">
                <img src={movie.image_uri}/>
                <li className="movie-text">
                  {num}({movie.rating})
                </li>
              </div>
              );
            })
          }
          </ol>
        </div>
        <div className="pageControls">
          <button onClick={(e:any) => this.setMovieListPageBack(this.state.page_number)}>{"<"}</button>
          <div className="pageNumber">Page {this.state.page_number}</div>
          <button onClick={(e:any) => this.setMovieListPageForward(this.state.page_number)}>{">"}</button>
        </div>
      </div>
    );
  }
}
