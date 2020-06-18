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
      <div className="userProfileDiv">
        <img className="UserEditImg" src="https://www.inboundwriter.com/wp-content/uploads/2019/08/topic_mobile_header.png" alt="welcome image"/>
        <h1>Profile</h1>
        <h4>Name: {name}</h4>
        <p><img id="userEditPic" src={picture} alt={name} /></p>
        <h5>Age: {age}</h5>
      </div>
    );
  };

  renderEditInputs = () => {
    console.log("user: ", this.state.user);
    const { name, picture, age } = this.state.user;
    return (
      <>
        <img className="UserEditImg" src="https://www.inboundwriter.com/wp-content/uploads/2019/08/topic_mobile_header.png" alt="welcome image"/>
      <form id="EditForm">

        <div class="form-group">
        <label class="control-label col-sm-2" for="name"><h3>Name:</h3></label>
            <input
              className="form-control"
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
            />
        </div>

        <div class="form-group">
        <label class="control-label col-sm-2" for="name"><h3>Picture:</h3></label>
          <input
            className="form-control"
            type="text"
            name="picture"
            value={picture}
            onChange={this.handleChange}
          />
        </div>

        <div class="form-group">
        <label class="control-label col-sm-2" for="name"><h3>Age:</h3></label>
          <input
            className="form-control"
            type="text"
            name="age"
            value={age}
            onChange={this.handleChange}
          />
          </div>
        <input type="submit" className="btn btn-success btn-lg" value="Save Changes" 
          onClick={this.handleSubmit} />
      </form>
      </>
    );
  };

  render() {
    // console.log("props: ", this.props.location.state);
    // console.log("user state: ", this.state.user);
    return (
      <div>
        {!this.state.edit ? this.renderProfile() : this.renderEditInputs()}
        {this.props.location.state.self && !this.state.edit ? (
          <input
            id="EditProfileBtn"
            className="btn btn-info btn-lg"
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
