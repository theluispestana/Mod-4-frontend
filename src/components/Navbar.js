import React from "react";
import * as requests from "../requests";
import { Link } from "react-router-dom";

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
        <Link to="/home">Home</Link>
        <Link to={`/user/${this.state.user.id}`}>{this.state.user.name}</Link>
      </div>
    );
  }
}

export default NavBar;
