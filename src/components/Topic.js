import React from "react";
import CommentContainer from "../containers/CommentContainer";
import { render } from "@testing-library/react";
import { Link } from "react-router-dom";
import * as requests from "../requests";

class Topic extends React.Component {
  state = {
    likesCount: 0,
    dislikeCount: 0,
    firePercent: 0,
    earthPercent: 0,
    airPercent: 0,
    waterPercent: 0,
  };

  componentDidMount() {
    requests.fetchLikes().then((likes) =>
      this.setState({
        likesCount: likes.filter(
          (like) => like.topic_id === this.props.topic.id
        ).length,
        airPercent:
          likes
            .filter((like) => like.topic_id === this.props.topic.id)
            .filter((data) => data.group_id === 1).length * 2,
        firePercent:
          likes
            .filter((like) => like.topic_id === this.props.topic.id)
            .filter((data) => data.group_id === 2).length * 2,
        earthPercent:
          likes
            .filter((like) => like.topic_id === this.props.topic.id)
            .filter((data) => data.group_id === 3).length * 2,
        waterPercent:
          likes
            .filter((like) => like.topic_id === this.props.topic.id)
            .filter((data) => data.group_id === 4).length * 2,
      })
    );

    setTimeout(() => {
      requests.fetchDisLikes().then((dislikes) =>
        this.setState({
          dislikeCount: dislikes.filter(
            (dislike) => dislike.topic_id === this.props.topic.id
          ).length,
          airPercent:
            this.state.airPercent -
            dislikes
              .filter((like) => like.topic_id === this.props.topic.id)
              .filter((data) => data.group_id === 1).length *
              2,
          firePercent:
            this.state.firePercent -
            dislikes
              .filter((like) => like.topic_id === this.props.topic.id)
              .filter((data) => data.group_id === 2).length *
              2,
          earthPercent:
            this.state.earthPercent -
            dislikes
              .filter((like) => like.topic_id === this.props.topic.id)
              .filter((data) => data.group_id === 3).length *
              2,
          waterPercent:
            this.state.waterPercent -
            dislikes
              .filter((like) => like.topic_id === this.props.topic.id)
              .filter((data) => data.group_id === 4).length *
              2,
        })
      );
    }, 750);
  }

  handlerLike = () => {
    const number = localStorage.getItem("userGroup");
    switch (number) {
      case "1":
        requests
          .newLike(
            localStorage.getItem("userId"),
            this.props.topic.id,
            localStorage.getItem("userGroup")
          )
          .then(
            this.setState({
              likesCount: this.state.likesCount + 1,
              airPercent: this.state.airPercent + 2,
            })
          );
        break;
      case "2":
        requests
          .newLike(
            localStorage.getItem("userId"),
            this.props.topic.id,
            localStorage.getItem("userGroup")
          )
          .then(
            this.setState({
              likesCount: this.state.likesCount + 1,
              firePercent: this.state.firePercent + 2,
            })
          );
        break;
      case "3":
        requests
          .newLike(
            localStorage.getItem("userId"),
            this.props.topic.id,
            localStorage.getItem("userGroup")
          )
          .then(
            this.setState({
              likesCount: this.state.likesCount + 1,
              earthPercent: this.state.earthPercent + 2,
            })
          );
        break;
      case "4":
        requests
          .newLike(
            localStorage.getItem("userId"),
            this.props.topic.id,
            localStorage.getItem("userGroup")
          )
          .then(
            this.setState({
              likesCount: this.state.likesCount + 1,
              waterPercent: this.state.waterPercent + 2,
            })
          );
        break;
      default:
        console.log("no group assigned");
    }
  };

  handlerDisLike = () => {
    const number = localStorage.getItem("userGroup");
    switch (number) {
      case "1":
        requests
          .newDisLike(
            localStorage.getItem("userId"),
            this.props.topic.id,
            localStorage.getItem("userGroup")
          )
          .then(
            this.setState({
              dislikeCount: this.state.dislikeCount + 1,
              airPercent: this.state.airPercent - 2,
            })
          );
        break;
      case "2":
        requests
          .newDisLike(
            localStorage.getItem("userId"),
            this.props.topic.id,
            localStorage.getItem("userGroup")
          )
          .then(
            this.setState({
              dislikeCount: this.state.dislikeCount + 1,
              firePercent: this.state.firePercent - 2,
            })
          );
        break;
      case "3":
        requests
          .newDisLike(
            localStorage.getItem("userId"),
            this.props.topic.id,
            localStorage.getItem("userGroup")
          )
          .then(
            this.setState({
              dislikeCount: this.state.dislikeCount + 1,
              earthPercent: this.state.earthPercent - 2,
            })
          );
        break;
      case "4":
        requests
          .newDisLike(
            localStorage.getItem("userId"),
            this.props.topic.id,
            localStorage.getItem("userGroup")
          )
          .then(
            this.setState({
              dislikeCount: this.state.dislikeCount + 1,
              waterPercent: this.state.waterPercent - 2,
            })
          );
        break;
      default:
        console.log("no group assigned");
    }
  };

  render(){
    const {title, content, image: imageUrl, comments, id} = this.props.topic;
    const {likesCount, dislikeCount} = this.state
    
    return (
      <div className="list-group-item">
        <h1 className="list-group-item-heading">{title}</h1>
        <p className="list-group-item-text">{content}</p>
        {imageUrl ? <img className="topicImg" src={imageUrl} /> : null}
        <div id="likeDislikeBtn">
          <button className="btn btn-warning" onClick={() => this.handlerLike()}>Agree</button> <span className='likesCount'>{likesCount}</span>
          <button className="btn btn-danger" onClick={() => this.handlerDisLike()}>Disagree</button> <span>{dislikeCount}</span>
        </div>
        {/* {comments.length ? (
        <button onClick={() => this.handlerLike()}>Like</button>
        <span>{likesCount}</span> */}
        
        <div>
        {this.props.preview ? (<Link to={`/topic/${id}`}>See Full Post</Link>) : null}
        </div>
        {comments.length ? (
          <CommentContainer
            key={comments[0].id}
            comments={comments}
            preview={this.props.preview}
          />
        ) : (
          "No Comments to Display"
        )}


        <div className="progressBarContainer">
          <div className="progress progress-bar-vertical">
            <div
              id="fireBar"
              className="progress-bar progress-bar-danger progress-bar-striped"
              role="progressbar"
              aria-valuenow="30"
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ height: `${this.state.firePercent}%` }}
            ></div>
          </div>

          <div className="progress progress-bar-vertical">
            <div
              id="earthBar"
              className="progress-bar progress-bar-danger progress-bar-striped"
              role="progressbar"
              aria-valuenow="60"
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ height: `${this.state.earthPercent}%` }}
            ></div>
          </div>

          <div className="progress progress-bar-vertical">
            <div
              id="waterBar"
              className="progress-bar progress-bar-success progress-bar-striped "
              role="progressbar"
              aria-valuenow="100"
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ height: `${this.state.waterPercent}%` }}
            ></div>
          </div>

          <div className="progress progress-bar-vertical">
            <div
              id="airBar"
              className="progress-bar progress-bar-success progress-bar-striped"
              role="progressbar"
              aria-valuenow="100"
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ height: `${this.state.airPercent}%` }}
            ></div>
          </div>
        </div>
      </div>
    );       
  }
}

export default Topic;
