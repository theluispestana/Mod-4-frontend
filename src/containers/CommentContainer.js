import React from "react";
import Comment from "../components/Comment";

const CommentContainer = (props) => {
  const comments = props.comments;
  return (
    <div className="comments">
      <h3>Comments</h3>
      {comments.map((c) => (
        <Comment key={c.id} comment={c} />
      ))}
    </div>
  );
};

export default CommentContainer;
