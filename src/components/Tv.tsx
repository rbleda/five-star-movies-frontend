import React from "react";
import Header from "./Header/Header";
import SidebarTv from "./SidebarTv/SidebarTv";
import TvList from "./TvList/TvList";

export default class Tv extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <SidebarTv />
        <TvList />
      </div>
    );
  }
}
