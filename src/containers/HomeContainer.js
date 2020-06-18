import React from "react";
import TopicContainer from "./TopicContainer";
// import NavBar from "../components/NavBar";
// import Sidebar from "../components/Sidebar";

class HomeContainer extends React.Component {
  render() {
    console.log("home container rendering");
    return (
      <div id="alltopics">
        <h1 className="homeText">Topics</h1>
        <TopicContainer />
      </div>
    );
  }
}

export default HomeContainer;
