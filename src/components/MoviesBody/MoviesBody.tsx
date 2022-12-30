import React from "react";
import MovieList from "../MovieList/MovieList";
import SearchBar from "../SearchBar/SearchBar";
import SidebarMovies from "../SidebarMovies/SidebarMovies";

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
      <div>
        <SearchBar setCurrentTitle={this.setCurrentTitle} />
        <SidebarMovies setCurrentGenre={this.setCurrentGenre} />
        <MovieList genre={this.state.currentGenre} title={this.state.currentTitle}/>
      </div>
    );
  }
}
