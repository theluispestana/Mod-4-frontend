import React from "react";
import { Redirect } from "react-router";
import * as requests from "../requests";

class LoginForm extends React.Component {
  state = {
    user: {
      name: "",
      password: "",
    },
    error: false,
  };

  handleChange = (event) => {
    const target = event.target;
    this.setState({
      user: { ...this.state.user, [target.name]: target.value },
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    requests.loginUser(this.state.user).then((json) => {
      if(json.message){
        alert(json.message)
        return <Redirect to='/'/>
      }
      
      localStorage.setItem("token", json.jwt);
      localStorage.setItem("userId", json.user.id);
      localStorage.setItem("userName", json.user.name);
      localStorage.setItem("userGroup", json.user.group_id);
      this.setState(this.state);
    });
  };

  render() {
    return (
      <div>
        {localStorage.getItem("token") ? <Redirect push to="/home" /> : null}
        {this.state.error ? "Invalid Login" : null}
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
