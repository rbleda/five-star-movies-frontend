import React from "react";
import "./SidebarMovies.css";
import "../style.css";
import "../MovieList/MovieList.css";
import axios from "axios";

interface MovieListState {
  movieList: { title: string; rating: number }[];
  sectionTitle: string;
  loading: boolean;
  error: any;
}

interface MovieQueryParams {
  genre: string,
}

export default class Sidebar extends React.Component {
  state: MovieListState = {
    movieList: [],
    sectionTitle: "All Movies",
    loading: true,
    error: null,
  };

  baseUrl = "http://localhost:8080";

  async componentDidMount() {
    try {
      const response = await axios.get(this.baseUrl + "/movies?genre_id=0");
      this.setState({ movieList: response.data, loading: false });
    } catch (error) {
      this.setState({ error, loading: false });
    }
  }

  handleButtonClick = async (params: MovieQueryParams, section: string) => {
    try {
      const response = await axios.get(this.baseUrl + "/movies?genre_id=" + params.genre);
      this.setState({movieList: response.data, loading: false, sectionTitle: section,});
    } catch (error) {
      this.setState({ error, loading: false });
    }
  };

  render() {
    return (
      <div>
        <div className="navigation">
          <ul>
              <button onClick={() =>this.handleButtonClick({genre: "0"}, "All Movies")}>All Movies</button>
              <button onClick={() =>this.handleButtonClick({genre: "1"}, "Drama")}>Drama</button>
              <button onClick={() =>this.handleButtonClick({genre: "2"}, "Action")}>Action</button>
              <button onClick={() =>this.handleButtonClick({genre: "3"}, "Adventure")}>Adventure</button>
              <button onClick={() =>this.handleButtonClick({genre: "4"}, "Sci-Fi")}>Sci-Fi</button>
              <button onClick={() =>this.handleButtonClick({genre: "5"}, "Comedy")}>Comedy</button>
              <button onClick={() =>this.handleButtonClick({genre: "6"}, "Animation")}>Animation</button>
          </ul>
        </div>
        <div className="movie-grid">
          <h3 className="genre-title">{this.state.sectionTitle}</h3>
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
      </div>
    );
  }
}
