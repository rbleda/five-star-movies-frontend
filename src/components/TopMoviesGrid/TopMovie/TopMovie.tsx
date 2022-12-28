import React from 'react';
import './TopMovie.css'
import '../../style.css'

interface TopMovieProps {
  image: string
  title: string
}

interface TopMovieState {}

export default class TopMovie extends React.Component<TopMovieProps, TopMovieState> {

  render() {
    return (
      <div className="top-movie">
        <img src={`../images/${this.props.image}`} alt=""/>
        <sub className="img-text">
          {this.props.title}
        </sub>
      </div>
    );
  }
}
