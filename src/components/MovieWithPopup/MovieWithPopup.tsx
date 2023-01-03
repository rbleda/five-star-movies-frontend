import React, { Component } from 'react';
import Popup from '../Popup/Popup';

interface MovieWithPopupProps {
  src: string;
  popupContent: number;
}

interface MovieWithPopupState {
  showPopup: boolean;
}

class MovieWithPopup extends Component<MovieWithPopupProps, MovieWithPopupState> {
  constructor(props: MovieWithPopupProps) {
    super(props);
    this.state = {
      showPopup: false,
    };
  }

  togglePopup = () => {
    this.setState((prevState: MovieWithPopupState) => ({
      showPopup: !prevState.showPopup,
    }));
  }

  render() {
    return (
      <div>
        <img src={this.props.src} onClick={this.togglePopup} />
        {this.state.showPopup && <Popup movie_id={this.props.popupContent} onClose={this.togglePopup} />}
      </div>
    );
  }
}

export default MovieWithPopup;

