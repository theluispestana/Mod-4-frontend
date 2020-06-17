import React from "react";
import TopicContainer from "./TopicContainer";
import Sidebar from "../components/sidebar";

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
