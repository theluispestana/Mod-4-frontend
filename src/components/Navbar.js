import React from "react";
import * as requests from "../requests";
import { Link, Redirect } from "react-router-dom";

class NavBar extends React.Component {
  state = {
    user: {},
  };

  componentDidMount() {
    requests.fetchProfile().then((user) => this.setState({ user }));
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand">!001 Topics</a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/home">Home</Link>
                <Link to={`/user/${this.state.user.id}`}>
                  {this.state.user.name}
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link">Sign Up</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Log In</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
