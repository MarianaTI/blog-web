import React from "react";
import { Container, Content, Info } from "./index.style";

const Comment = ({ user, comment, date, hour }) => {
  return (
    <Container>
      <Content>
        <h1>{user}</h1>
        <p>{comment}</p>
      </Content>
      <Info>
        <span>{date}</span>
        <span>{hour}</span>
      </Info>
    </Container>
  );
};

export default Comment;
