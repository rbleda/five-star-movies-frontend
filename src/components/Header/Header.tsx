import React from "react";
import "./Header.css";
import "../style.css";
import { Link } from "react-router-dom";

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="nav-bar">
          <Link to="/">
            <h1 className="logo">Five Star Movies</h1>
          </Link>
          <div className="nav-bar-subscript">
            <Link to="/">Movie Rankings</Link>
            <Link to="/blog">Blog</Link>
          </div>
        </div>
      </header>
    );
  }
}
