import React from "react";
import Header from "./Header/Header";
import MoviesBody from "./MoviesBody/MoviesBody";

export default class Movies extends React.Component {
  render() {
    return (
      <div className="movies-box">
        <Header />
        <MoviesBody/>
      </div>
    );
  }
}
