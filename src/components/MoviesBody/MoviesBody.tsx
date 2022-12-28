import React from "react";
import MovieList from "../MovieList/MovieList";
import SidebarMovies from "../SidebarMovies/SidebarMovies";

export default class MoviesBody extends React.Component {
    state = {
      currentGenre: { id: 0, title: "All Movies"}
    };

    setCurrentGenre = (id: number, title: string) => {
        this.setState({ currentGenre: {id, title} });
    };

  render() {
    return (
      <div>
        <SidebarMovies setCurrentGenre={this.setCurrentGenre} />
        <MovieList genre={this.state.currentGenre} />
      </div>
    );
  }
}
