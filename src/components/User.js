import React from "react";
import * as requests from "../requests";

class User extends React.Component {
  state = {
    user: {},
    edit: false,
  };

  componentDidMount() {
    // if (this.props.location.state.link) {
    //   const user = this.props.location.state.user;
    //   this.setState({ user });
    // } else {
    requests
      .fetchUser(this.props.match.params.id)
      .then((user) => this.setState({ user }));
    // }
  }

  handleClick = () => this.setState({ edit: !this.state.edit });

  handleChange = (event) => {
    const target = event.target;
    this.setState({
      user: { ...this.state.user, [target.name]: target.value },
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    requests
      .patchUser(this.state.user)
      .then((user) => this.setState({ user: user, edit: false }));
  };

  renderProfile = () => {
    const { name, picture, age } = this.state.user;
    return (
      <>
        <h1>Profile</h1>
        <p>Name: {name}</p>
        <p>Picture: {picture}</p>
        <p>Age: {age}</p>
      </>
    );
  };

  renderEditInputs = () => {
    console.log("user: ", this.state.user);
    const { name, picture, age } = this.state.user;
    return (
      <>
        <input
          type="text"
          name="name"
          value={name}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="picture"
          value={picture}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="age"
          value={age}
          onChange={this.handleChange}
        />
        <input type="submit" value="Save Changes" onClick={this.handleSubmit} />
      </>
    );
  };

  render() {
    // console.log("props: ", this.props.location.state);
    console.log("user state: ", this.state.user);
    return (
      <div>
        {!this.state.edit ? this.renderProfile() : this.renderEditInputs()}
        {this.props.location.state.self && !this.state.edit ? (
          <input
            type="button"
            value="Edit Profile"
            onClick={this.handleClick}
          />
        ) : null}
      </div>
    );
  }
}

export default User;
