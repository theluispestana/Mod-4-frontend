import React from "react";
import * as requests from "../requests";
import { Link, Redirect } from "react-router-dom";

class NavBar extends React.Component {
  state = {
    user: {},
    dummy: false
  };

  componentDidMount() {
    requests.fetchProfile().then((user) => this.setState({ user }));
  }

  // handlerSignout = () => {
  //   localStorage.clear()
  //   alert('You have looged out')
  //   return <Redirect to='/'/>
  // }

  // handlerSignoutHelp = () =>{
  //   if(localStorage !== 'something'){
  //     return <Redirect to='/'/>
  //   }
  // }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="navbar-brand">
            <Link to="/home">!001 Topics</Link>
          </div>

          {/* button for when window gets smaller */}
          <button className="navbar-toggler" type="button" data-toggle="collapse"
            data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link id='userlink' to={{ pathname: `/user/${this.state.user.id}`, state: { user: this.state.user, link: true, self: true }}}>
                  {this.state.user.name}
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/"> Log In </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/signup">Sign up</a>
              </li>
              {/* <li className="nav-item">
                <button id='logOutBtn' className='btn btn-danger' onClick={() => this.handlerSignout()}>Logout</button>
                </li> */}
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
