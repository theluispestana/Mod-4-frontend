import React from "react";
import Topic from "../components/Topic";
import * as requests from "../requests";

class TopicContainer extends React.Component {
  state = {
    topics: [],
    start: 0,
  };

  componentDidMount() {
    console.log("fetching topics");
    requests.fetchTopics().then((topics) => {
      this.setState({ topics });
    });
  }

  nextFourTopics = () => {
    let newIndex = this.state.start + 4;
    if (this.state.topics.length <= newIndex) {
      newIndex = 0;
    }
    this.setState({ start: newIndex });
  };

  previousFourTopics = () => {
    let newIndex = this.state.start - 4;
    if (newIndex < 0) {
      newIndex = 0;
    }
    this.setState({ start: newIndex });
  };

  render() {
    const topics = this.state.topics;
    // console.log("topics: ", topics);
    return (
      <div className="container">
        <button
          id="previousFourTopic"
          className="btn btn-danger"
          onClick={this.previousFourTopics}
        >
          Previous Topics
        </button>
        <button
          id="nextFourTopic"
          className="btn btn-success"
          onClick={this.nextFourTopics}
        >
          Next Topics
        </button>
        {topics.slice(this.state.start, this.state.start + 4).map((topic) => (
          <div className="topic">
            <Topic key={topic.id} topic={topic} preview={true} />
          </div>
        ))}
      </div>
    );
  }
}

export default TopicContainer;
