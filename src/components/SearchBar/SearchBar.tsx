import React, { FormEventHandler } from "react";
import "./SearchBar.css";

interface SearchBarProps {
    setCurrentTitle: (title: string) => void
}

interface SearchBarState {
    input: string
}

export default class SearchBar extends React.Component<SearchBarProps, SearchBarState> {
    state: SearchBarState = {
        input: ""
    }

    handleSubmit: FormEventHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        this.props.setCurrentTitle(this.state.input);
        this.setState({ input: "" })
    };

    handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ input: event.target.value });
    };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <button type="submit">Search</button>
        <input type="text" value={this.state.input} onChange={this.handleChange} />
      </form>
    );
  }
}