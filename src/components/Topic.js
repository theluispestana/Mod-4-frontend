import React from "react";
import CommentContainer from "../containers/CommentContainer";
import { render } from "@testing-library/react";
import * as requests from "../requests";

class Topic extends React.Component{
  state = {
    likesCount: 0
  }

  componentDidMount(){
    requests.fetchLikes().then((likes) =>
    this.setState({ 
      likesCount: (likes.filter(like => like.topic_id === this.props.topic.id)).length
    }));
  }
  
  handlerLike = () => {
    requests.newLike(localStorage.getItem('userId'), this.props.topic.id).then(
      this.setState({
        likesCount: this.state.likesCount + 1
      })
    )
  }

  render(){
    const {title, content, image: imageUrl, created_at: createdAt, comments} = this.props.topic;
    const {likesCount} = this.state

    return (
      <div>
        <h1>{title}</h1>
        <p>{content}</p>
        {imageUrl ? <img src={imageUrl} /> : null}
        <button onClick={() => this.handlerLike()}>Like</button> <span>{likesCount}</span>
        {comments.length ? (
          <CommentContainer
            key={comments[0].id}
            comments={comments}
            preview={this.props.preview}
          />
        ) : (
          "No Comments to Display"
        )}
      </div>
    );
  }    
};

export default Topic;
