import React from "react";
import Header from "./Header/Header";
import MovieList from "./MovieList/MovieList";
import SidebarMovies from "./SidebarMovies/SidebarMovies";

export default class Movies extends React.Component {
  render() {
    return (
      <div className="movies-box">
        <Header />
        <SidebarMovies />
      </div>
    );
  }
}
