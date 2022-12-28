import React from "react";
import "./SidebarMovies.css";
import "../style.css";

interface SideBarProps {
  setCurrentGenre: (id: number, title: string) => void
}

export default class Sidebar extends React.Component<SideBarProps, {}> {

  handleButtonClick = async (params: { genre: number, title: string }) => {
    this.props.setCurrentGenre(params.genre, params.title)
  };

  render() {
    return (
      <div>
        <div className="navigation">
          <ul>
              <button onClick={() =>this.handleButtonClick({ genre: 0, title: "All Movies" })}>All Movies</button>
              <button onClick={() =>this.handleButtonClick({ genre: 1, title: "Drama" })}>Drama</button>
              <button onClick={() =>this.handleButtonClick({ genre: 2, title: "Action" })}>Action</button>
              <button onClick={() =>this.handleButtonClick({ genre: 3, title: "Adventure" })}>Adventure</button>
              <button onClick={() =>this.handleButtonClick({ genre: 4, title: "Sci-Fi" })}>Sci-Fi</button>
              <button onClick={() =>this.handleButtonClick({ genre: 5, title: "Comedy" })}>Comedy</button>
              <button onClick={() =>this.handleButtonClick({ genre: 6, title: "Animation" })}>Animation</button>
          </ul>
        </div>
      </div>
    );
  }
}
