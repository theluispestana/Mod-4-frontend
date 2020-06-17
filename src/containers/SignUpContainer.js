import React from "react";
import Quiz from "../components/signUpQuizFolder/Quiz";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

class SignUpContainer extends React.Component {
  state = {
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
      return <Redirect to="/" />;
    }
  };

  handlerGroup = (groupData) => {
    this.setState({
      group: groupData,
    });
  };

  handlerSubmit = (e) => {
    e.preventDefault();
    e.persist()
    if (e.target.age.value < 21) {
      alert("You must be an adult to continue");
    } else if(e.target.password.value !== e.target.confirmation.value){
      alert("Password does not match");
    } else{
      fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user:{
          name: e.target.name.value,
          password: e.target.password.value,
          age: e.target.age.value,
          zip: e.target.zipcode.value,
          picture: e.target.image.value,
          group_id: this.state.group.id
          }
        }),
      })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        this.setState({ redirect: true })
      })    
    }
    setTimeout(() => {
      console.log(this.state);
    }, 1500);
  };

  render() {
    return (
      <div className="SignUpContainer">
        {this.state.toggle ? "" : "Welcome!"}
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
      </div>
    );
  }
}

export default SignUpContainer;
