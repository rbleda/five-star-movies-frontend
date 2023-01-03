import React from 'react';
import axios from "axios";

interface PopupProps {
  movie_id: number;
  onClose: () => void;
}

class Movie {
  id!: number;
  title!: string;
  rating!: number;
  genre_id!: number;
  image_uri!: string;
}

interface PopupState {
  movie: Movie;
}

export default class Popup extends React.Component<PopupProps, PopupState> {
  state: PopupState = {
    movie: {id: 0, title: "", rating: 0, genre_id: 0, image_uri: ""}
  }

  async getMovieInformation(): Promise<Movie> {
    const response = await axios.get<Movie>(`http://localhost:8080/movies/single_movie?id=${this.props.movie_id}`);
    return response.data;
  }

  async componentDidMount() {
    const movie = await this.getMovieInformation();
    this.setState({ movie: movie });
  }

  render() {
    return (
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: 1000, height: '100%' }}>
        <div style={{ position: 'relative', top: '50%', transform: 'translateY(-50%)', width: '80%', maxWidth: '500px', margin: '0 auto', padding: '20px', backgroundColor: 'white', borderRadius: '5px', color: 'black' }}>
          <img src={this.state.movie.image_uri} />
          <div>{this.state.movie.title}({this.state.movie.rating})</div>
          <button onClick={this.props.onClose}>Close</button>
        </div>
      </div>
    );
  };
}

