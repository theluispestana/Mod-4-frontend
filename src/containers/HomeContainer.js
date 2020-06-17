import React from "react";
import TopicContainer from "./TopicContainer";
// import NavBar from "../components/NavBar";
// import Sidebar from "../components/Sidebar";

class Container extends React.Component {
  render() {
    return (
      <div >
        <h1 className="homeText">Topics</h1>
        <TopicContainer />
      </div>
    );
  }
}

export default Container;
