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
    const welcome = `It is set in a world that is divided into four nations based on the four elements of nature
    the Water Tribes - which are located at the North and South Poles - the Fire Nation, the Earth Nation, 
    and the Air Nomads. (As the name suggests, the Air Nomads had a nomadic society. 
    However, they also operated out of four temples located in four corners of the world: 
    the Northern, Southern, Eastern, and Western Air Temples). 
    Many people have the ability to manipulate one of the four elements. 
    This practice is known as bending. Only one person, known as the Avatar, can bend all four elements.
    If you lived in the Avatar universe, would you be a Waterbender, an Earthbender, a Firebender, or an Airbender? 
    Take the quiz to find out which bending nation you would belong to!!`

    return (
      <div className="SignUpContainer">
        <strong><h1>Get to know which group you belong to!</h1></strong>
        {this.state.toggle ? "" : <strong>{welcome}</strong>}
        <div>
        {this.state.toggle ? "" : <img className="angPic" src="https://media1.tenor.com/images/9a0fa15717261d8be67c147711247132/tenor.gif?itemid=12553002"/> }
        </div>
        <div>
          {this.renderRedirect()}
          {this.state.toggle ? (
            <Quiz
              handlerGroup={this.handlerGroup}
              handlerSubmit={this.handlerSubmit}
            />
          ) : (
            <button className='btn-warning btn-lg' onClick={this.handlerQuiz}>Take our Quiz</button>
          )}
        </div>
      </div>
    );
  }
}

export default SignUpContainer;
