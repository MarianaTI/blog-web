import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { comments } from "../../constants";
import {
  AutorInfo,
  BlogInfoContent,
  CommentContainer,
  Comments,
  Container,
  FormStyled,
  Grid,
  ImageContainer,
  Info,
  TextAreaStyled,
} from "@/styles/BlogSlug.style";
import Image from "next/image";
import Button from "@/components/Button";
import Comment from "@/components/Comment";
import BlogRepo from "@/infraestructure/implementation/httpRequest/axios/BlogRepo";
import GetOneBlogUseCase from "@/application/usecases/blogUseCase/GetOneBlogUseCase";

export default function BlogSlug() {
  const router = useRouter();
  const { blogId } = router.query;
  console.log(blogId);
  const [selectedBlog, setSelectedBlog] = useState(null);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleDateString("es-ES", { month: "long" });
    const year = date.getFullYear();
    return `${day} ${month}, ${year}`;
  };

  const blogRepo = new BlogRepo();
  const getOneBlogUseCase = new GetOneBlogUseCase(blogRepo);

  const fetchBlog = async () => {
    if (blogId) {
      try {
        const response = await getOneBlogUseCase.run(blogId);
        console.log(response);
        setSelectedBlog(response);
      } catch (error) {
        console.log(error);
      }
    }
  }

  useEffect(() => {
    fetchBlog();
  }, [blogId]);

  if (!selectedBlog) {
    return <div>No existe este blog, intenta seleccionando otro.</div>;
  }

  return (
    <Container>
      <Grid>
        <Info>
          <div>
            <h1>{selectedBlog.title}</h1>
            <h3>{selectedBlog.description}</h3>
          </div>
          <AutorInfo>
            <span>By {selectedBlog.user.username}</span>
            <span>{formatDate(selectedBlog.createdAt)}</span>
          </AutorInfo>
        </Info>
        <ImageContainer>
          <img
            src={selectedBlog.image.secureUrl}
            alt={selectedBlog._id}
          />
        </ImageContainer>
      </Grid>
      <BlogInfoContent>
        <p>{selectedBlog.content}</p>
      </BlogInfoContent>
      <Comments>
        <h5>Comentarios</h5>
        <FormStyled>
          <TextAreaStyled placeholder="Escribe algún comentario..." />
          <Button text="Enviar" />
        </FormStyled>
        <CommentContainer>
          {comments.map((comment, index) => (
            <Comment
              key={index}
              user={comment.user}
              comment={comment.comment}
              date={comment.date}
              hour={comment.hour}
            />
          ))}
        </CommentContainer>
      </Comments>
    </Container>
  );
}
