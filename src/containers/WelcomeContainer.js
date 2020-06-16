import React from "react";
import LoginForm from "../components/LoginForm";
import { BrowserRouter as link, Link } from "react-router-dom";

class WelcomeContainer extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome</h1>
        <p>
          This is our website. Join a team and participate in the discussions
        </p>
        <Link to={"/signup"}>Sign Up</Link>
        <LoginForm />
      </div>
    );
  }
}

export default WelcomeContainer;
