import React from "react";
import logo from "./logo.svg";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import WelcomeContainer from "./containers/WelcomeContainer";
import SignUpContainer from "./containers/SignUpContainer";
import HomeContainer from "./containers/HomeContainer";
import TopicShowContainer from "./containers/TopicShowContainer";
import User from "./components/User";
import "./App.css";

function App() {
  return (
    <Router>
      <NavBar />
      <Route exact path="/" component={WelcomeContainer} />
      <Route exact path="/signup" component={SignUpContainer} />
      {/* <Route
        exact
        path={["/home", "/topic/:id", "/user/:id", "/signup"]}
        component={NavBar}
      /> */}
      <Route exact path="/home" component={HomeContainer} />
      <Route exact path="/topic/:id" component={TopicShowContainer} />
      <Route exact path="/user/:id" component={User} />
    </Router>
  );
}

const ReactDefaultPage = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
