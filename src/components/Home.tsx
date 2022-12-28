import React from "react";
import Header from "./Header/Header";
import About from "./About/About";
import TopMoviesGrid from "./TopMoviesGrid/TopMoviesGrid";
import Criteria from "./Criteria/Criteria";
import News from "./News/News";

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <About />
        <TopMoviesGrid />
        <Criteria />
        <News />
      </div>
    );
  }
}
