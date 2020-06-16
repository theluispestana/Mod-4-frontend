import React from "react";
import CommentContainer from "../containers/CommentContainer";

const Topic = (props) => {
  const {
    title,
    content,
    image: imageUrl,
    likesCount,
    created_at: createdAt,
    comments,
  } = props.topic;

  return (
    <div>
      <h1>{title}</h1>
      <p>{content}</p>
      {imageUrl ? <img src={imageUrl} /> : null}
      {comments.length ? (
        <CommentContainer
          key={comments[0].id}
          comments={comments}
          preview={props.preview}
        />
      ) : (
        "No Comments to Display"
      )}
    </div>
  );
};

export default Topic;
