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
          <a className="navbar-brand">
            <Link to="/home">!001 Topics</Link>
          </a>

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
                <Link
                  to={{
                    pathname: `/user/${this.state.user.id}`,
                    state: { user: this.state.user, link: true, self: true },
                  }}
                >
                  {this.state.user.name}
                </Link>
                {/* <a className="nav-link" href={`/user/${this.state.user.id}`}> */}
                {/*   {this.state.user.name} */}
                {/* </a> */}
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Log In
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/signup">
                  Sign up
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
