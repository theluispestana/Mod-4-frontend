import React from "react";
import Comment from "../components/Comment";

const CommentContainer = (props) => {
  const comments = props.comments;
  return (
    <div className="">
      <h3>Comments</h3>
      <div class="container">

        <div class="progress progress-bar-vertical">
          <div class="progress-bar" role="progressbar" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100" style={{height: '30%'}}>
            <span class="sr-only">30% Complete</span>
          </div>
        </div>
      </div>
      {/* {comments.map((c) => (
        <Comment key={c.id} comment={c} />
      ))} */}
    </div>
  );
};

export default CommentContainer;
