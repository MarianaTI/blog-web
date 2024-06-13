import React from "react";

const Comment = ({ user, comment, date, hour }) => {
  return (
    <div>
      <div>
        <h1>{user}</h1>
        <p>{comment}</p>
      </div>
      <div>
        <span>{date}</span>
        <span>{hour}</span>
      </div>
    </div>
  );
};

export default Comment;
