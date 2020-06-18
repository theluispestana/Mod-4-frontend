import React from "react";
import TopicContainer from "./TopicContainer";
import { Redirect } from "react-router-dom";
// import NavBar from "../components/NavBar";
// import Sidebar from "../components/Sidebar";

class Container extends React.Component {
  state = {
    token: localStorage.getItem('token')
  }

  checkToken = () =>{
    if( (this.state.token === null) ){
      return <Redirect to='/'/>
    } else if(this.state.token === "undefined"){
      localStorage.clear()
      return <Redirect to='/'/>
    }
  }

  handlerSignout = () => {
    localStorage.clear()
    alert('You have looged out')
    this.setState({
      token: null
    })
  }

  render() {
    return (
      <div id="alltopics">
        {this.checkToken()}
        <h1 className="homeText">Topics</h1>
        <button id='logOutBtn' className='btn btn-danger' onClick={() => this.handlerSignout()}>Logout</button>
        <TopicContainer />
      </div>
    );
  }
}

export default Container;
