import React from "react";
import Topic from "../components/Topic";
import * as requests from "../requests";

class TopicContainer extends React.Component {
  state = {
    topics: [],
  };

  componentDidMount() {
    requests.fetchTopics().then((topics) => this.setState({ topics }));
  }

  render() {
    const topics = this.state.topics;
    console.log("topics: ", topics);
    return (
      <div>
        {topics.map((topic) => (
          <Topic key={topic.id} topic={topic} preview={true} />
        ))}
      </div>
    );
  }
}

export default TopicContainer;
