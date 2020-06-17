import React from "react";
import Topic from "../components/Topic";
import * as requests from "../requests";

class TopicShowContainer extends React.Component {
  state = {
    topic: {},
  };

  componentDidMount() {
    requests
      .fetchTopic(this.props.match.params.id)
      .then((topic) => this.setState({ topic }));
    // .then(console.log);
  }

  render() {
    console.log("topic: ", this.state.topic);
    return (
      <div>
        {this.state.topic.id ? (
          <Topic topic={this.state.topic} preview={false} />
        ) : null}
      </div>
    );
  }
}

export default TopicShowContainer;
