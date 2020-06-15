import React from "react";
import { quizData } from "./quizData";
import Groups from "./Groups";

export default class Quiz extends React.Component {
  state = {
    currentQuestion: 0,
    myAnswer: null,
    options: [],
    airScore: 0,
    fireScore: 0,
    waterScore: 0,
    earthScore: 0,
    disabled: true,
    isEnd: false,
    group: []
  };

  //quiz stars: load first question with next button disable 
  loadQuizData = () => {
    this.setState({
        questions: quizData[this.state.currentQuestion].question,
        airAnswer: quizData[this.state.currentQuestion].airAnswer,
        fireAnswer: quizData[this.state.currentQuestion].fireAnswer,
        waterAnswer: quizData[this.state.currentQuestion].waterAnswer,
        earthAnswer: quizData[this.state.currentQuestion].earthAnswer,
        options: quizData[this.state.currentQuestion].options
    });
  };

  componentDidMount() {
    this.loadQuizData();
  }

  //checks for answer and add add to corresponding score
  nextQuestionHandler = () => {
    const { myAnswer, airAnswer, fireAnswer, waterAnswer, earthAnswer, airScore, fireScore,
    waterScore, earthScore } = this.state;

    if (myAnswer === airAnswer) {
      this.setState({
        airScore: airScore + 1
      });
    } else if (myAnswer === fireAnswer) {
        this.setState({
          fireScore: fireScore + 1
        });
    } else if (myAnswer === waterAnswer) {
        this.setState({
          waterScore: waterScore + 1
        });
    } else if (myAnswer === earthAnswer) {
        this.setState({
          earthScore: earthScore + 1
        });
    }

    this.setState({
      currentQuestion: this.state.currentQuestion + 1
    });
  };

  //whenever an update happenened, for example next question, disable the 'next' button + loads up the next 
  // question, options and answer 
  componentDidUpdate(prevProps, prevState) {
    if (this.state.currentQuestion !== prevState.currentQuestion) {
      this.setState({
        disabled: true,
        questions: quizData[this.state.currentQuestion].question,
        options: quizData[this.state.currentQuestion].options,
        airAnswer: quizData[this.state.currentQuestion].airAnswer,
        fireAnswer: quizData[this.state.currentQuestion].fireAnswer,
        waterAnswer: quizData[this.state.currentQuestion].waterAnswer,
        earthAnswer: quizData[this.state.currentQuestion].earthAnswer
      });
    }
  }

 //whenever you check answer/option, enables the next button and save your selected answer in the state myAnswer
  checkAnswer = answer => {
    this.setState({ myAnswer: answer, disabled: false });
  };

 //whenever you click on the finish button, will set the isEnd to true which will trigger the result page
 //and also check if your last answer to add to your score
    finishHandler = () => {
      this.checkGroup()
      //send the name of the group up to app so we can have it for the user
      if (this.state.currentQuestion === quizData.length - 1) {
        this.setState({
          isEnd: true
        });
      }
      if (this.state.myAnswer === this.state.answer) {
        this.setState({
          score: this.state.score + 1
        });
      }
    };

    //function to check in which group the user belongs to, gets stored in the state 
    //and passed to groups child component, this is being called when the user clicks on finish button
    checkGroup = () =>{
        const { airScore, fireScore, waterScore, earthScore } = this.state;

        if( (airScore > fireScore) && (airScore > waterScore) && (airScore > earthScore) ){
            fetch('http://localhost:3000/groups/1')
            .then(resp => resp.json())
            .then(data => {
              this.props.handlerGroup(data)
              this.setState({ group: data })
            })
        } else if ( (fireScore > airScore) && (fireScore > waterScore) && (fireScore > earthScore) ){
            fetch('http://localhost:3000/groups/2')
            .then(resp => resp.json())
            .then(data => {
              this.props.handlerGroup(data)
              this.setState({ group: data })
            })
        } else if ( (earthScore > airScore) && (earthScore > waterScore) && (earthScore > fireScore) ){
            fetch('http://localhost:3000/groups/3')
            .then(resp => resp.json())
            .then(data => {
              this.props.handlerGroup(data)
              this.setState({ group: data })
            })
        } else if ( (waterScore > airScore) && (waterScore > earthScore) && (waterScore > fireScore) ){
            fetch('http://localhost:3000/groups/4')
            .then(resp => resp.json())
            .then(data => {
              this.props.handlerGroup(data)
              this.setState({ group: data })
            })
        }
    }

  render() {
    const { options, myAnswer, currentQuestion, isEnd, group} = this.state;

    //check if you answered all questions and pressed finish button so isEnd is true
    if (isEnd) {
        return (
        <div className="result">
          <Groups group={group} handlerSubmit={this.props.handlerSubmit}/>
        </div>
      );
    }

    // if it was not the last question go to the next question 
    else {
      return (
        <div className="Quizz">
          <h1>{this.state.questions} </h1>
          <span>{`Questions ${currentQuestion}  out of ${quizData.length -1} remaining `}</span>
          {options.map((option, index) => {
              //line 124 checks what is the state myAnswer so it can highlight the selected answer and unhighlight the other ones
              return <p key={index} className={`ui floating message options 
            ${myAnswer === option ? "selected" : null} `}
              onClick={() => this.checkAnswer(option)}>
              {option}
            </p>
            })}
          
          {/*check if the user is at the last question, 
          if not show the next button if yes show finish button */}
          {currentQuestion < quizData.length - 1 && (
            <button className="ui inverted button" disabled={this.state.disabled} 
            onClick={this.nextQuestionHandler}>
              Next
            </button>
          )}

          {/*adding a finish button when we are at the last question*/}
          {currentQuestion === quizData.length - 1 && (
            <button className="ui inverted button" onClick={this.finishHandler}>
              Finish
            </button>
          )}
        </div>
      );
    }
  }
}