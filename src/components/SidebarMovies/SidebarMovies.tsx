import React from "react";
import "./SidebarMovies.css";
import "../style.css";
import axios from "axios";
import config from "../../config";

interface Genre {
  id: number;
  genre: string;
}

interface SideBarProps {
  setCurrentGenre: (id: number, title: string) => void
  setCurrentTitle: (title: string) => void
}

interface SideBarState {
  genreList: Genre[];
}

export default class Sidebar extends React.Component<SideBarProps, SideBarState> {
  state: SideBarState = {
    genreList: []
  }

  async componentDidMount() {
    try {
      const response = await axios.get<Genre[]>(`${config.baseURL}:8080/genres`);
      const genres = response.data;
      this.setState({genreList: genres});
    } catch(error) {
      return <p>Error!</p>;
    }
  }

  handleButtonClick = async (params: { genre: number, title: string }) => {
    this.props.setCurrentGenre(params.genre, params.title)
    this.props.setCurrentTitle("");
  };

  render() {
    return (
      <div>
        <div className="navigation">
          <div className="genreList">
            <button onClick={() =>this.handleButtonClick({ genre: 0, title: "All Movies" })}>All Movies</button>
            {this.state.genreList.map((g) => {
                return (
                  <button onClick={() =>this.handleButtonClick({ genre: g.id, title: g.genre })}>{ g.genre }</button>
                );
              })}
          </div>
        </div>
      </div>
    );
  }
}
