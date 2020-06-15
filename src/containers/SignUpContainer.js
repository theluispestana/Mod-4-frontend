import React from "react";
import Quiz from "../components/signUpQuizFolder/Quiz";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

class SignUpContainer extends React.Component {
  state = {
    name: "",
    age: 0,
    zipcode: 0,
    image: "",
    group: "",
    toggle: false,
    redirect: false,
  };

  handlerQuiz = () => {
    this.setState({
      toggle: !this.state.toggle,
    });
  };

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/signUp" />;
    }
  };

  handlerGroup = (groupData) => {
    this.setState({
      group: groupData.name,
    });
  };

  handlerSubmit = (e) => {
    e.preventDefault();
    this.setState({
      name: e.target.name.value,
      age: e.target.age.value,
      zipcode: e.target.zipcode.value,
      image: e.target.image.value,
      redirect: true,
    });
    if (e.target.age.value < 21) {
      alert("You must be an adult to continue");
    }
    setTimeout(() => {
      console.log(this.state);
    }, 1500);
  };

  render() {
    return (
      <div className="SignUpContainer">
        Welcome!
        <div>
          {this.renderRedirect()}
          {this.state.toggle ? (
            <Quiz
              handlerGroup={this.handlerGroup}
              handlerSubmit={this.handlerSubmit}
            />
          ) : (
            <button onClick={this.handlerQuiz}>Take our Quiz</button>
          )}
        </div>
        {/* <div>
          <button>Log In</button>
        </div> */}
      </div>
    );
  }
}

export default SignUpContainer;
