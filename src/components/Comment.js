import React from "react";

const Comment = (props) => {
  console.log("comments props: ", props);
  const { content, created_at: createdAt, likesCount, user } = props.comment;
  return (
    <div>
      <h4>{user.name} says:</h4>
      <p>{content}</p>
    </div>
  );
};

export default Comment;
