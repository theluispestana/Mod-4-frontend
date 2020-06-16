import React from "react";
import { Redirect } from "react-router";
import * as requests from "../requests";

class LoginForm extends React.Component {
  state = {
    name: "",
    password: "",
  };

  handleChange = (event) => {
    const target = event.target;
    this.setState({ [target.name]: target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    requests.loginUser(this.state).then((json) => {
      console.log(json.jwt);
      localStorage.setItem("token", json.jwt);
    });
  };

  render() {
    return (
      <div>
        {localStorage.token ? <Redirect to="/home" /> : null}
        <form onChange={this.handleChange}>
          <input type="text" name="name" placeholder="Username" />
          <input type="password" name="password" placeholder="password" />
          <input type="submit" value="Login" onClick={this.handleSubmit} />
        </form>
      </div>
    );
  }
}

export default LoginForm;
