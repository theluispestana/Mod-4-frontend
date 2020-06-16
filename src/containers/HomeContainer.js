import React from "react";
import TopicContainer from "./TopicContainer";
import NavBar from "../components/Navbar";
import Sidebar from "../components/sidebar";

class HomeContainer extends React.Component {
  render() {
    return (
      <div className="home">
        <h1>HOME</h1>
        <TopicContainer />
      </div>
    );
  }
}

export default HomeContainer;
