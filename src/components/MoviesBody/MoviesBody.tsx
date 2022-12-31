import React from "react";
import MovieList from "../MovieList/MovieList";
import SearchBar from "../SearchBar/SearchBar";
import SidebarMovies from "../SidebarMovies/SidebarMovies";
import "./MoviesBody.css";

export default class MoviesBody extends React.Component {
    state = {
      currentGenre: { id: 0, title: "All Movies"},
      currentTitle: ""
    };

    setCurrentGenre = (id: number, title: string) => {
        this.setState({ currentGenre: {id, title} });
    };

    setCurrentTitle = (title: string) => {
        this.setState({ currentTitle : title });
    }

  render() {
    return (
      <div className="movies-container">
        <SearchBar setCurrentTitle={this.setCurrentTitle} setCurrentGenre={this.setCurrentGenre} />
        <div className="siebar-list-container">
            <SidebarMovies setCurrentGenre={this.setCurrentGenre} setCurrentTitle={this.setCurrentTitle} />
            <MovieList genre={this.state.currentGenre} movie_search_title={this.state.currentTitle}/>
        </div>
      </div>
    );
  }
}
