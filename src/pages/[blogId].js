import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
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
} from "@/styles/BlogSlug.style";
import Button from "@/components/Button";
import Comment from "@/components/Comment";
import BlogRepo from "@/infraestructure/implementation/httpRequest/axios/BlogRepo";
import GetOneBlogUseCase from "@/application/usecases/blogUseCase/GetOneBlogUseCase";
import { useForm } from "react-hook-form";
import Textarea from "@/components/Textarea";
import CommentRepo from "@/infraestructure/implementation/httpRequest/axios/Comment";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

export default function BlogSlug() {
  const router = useRouter();
  const { blogId } = router.query;
  const userId = useSelector((state) => state.user._id);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isDirty },
  } = useForm({
    "comment": "",
  });

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleDateString("es-ES", { month: "long" });
    const year = date.getFullYear();
    return `${day} ${month}, ${year}`;
  };

  const formatHour = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
  };

  const blogRepo = new BlogRepo();
  const getOneBlogUseCase = new GetOneBlogUseCase(blogRepo);

  const onSubmit = async (data) => {
    const commentRepo = new CommentRepo();

    const commentData = {
      ...data,
      id_user: userId,
      blogId: blogId,
    }

    try {
      const response = await commentRepo.create(commentData);
      reset({comment: ""});
      toast.success("Comentario creado correctamente");
      fetchBlog();
    } catch (error) {
      console.error("Error al crear el commentario:", error);
    }
  };

  const fetchBlog = async () => {
    if (blogId) {
      try {
        const response = await getOneBlogUseCase.run(blogId);
        setSelectedBlog(response);
      } catch (error) {
        console.log(error);
      }
    }
  };

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
          <img src={selectedBlog.image.secureUrl} alt={selectedBlog._id} />
        </ImageContainer>
      </Grid>
      <BlogInfoContent>
        <p>{selectedBlog.content}</p>
      </BlogInfoContent>
      <Comments>
        <h5>Comentarios</h5>
        <FormStyled onSubmit={handleSubmit(onSubmit)} ref={handleSubmit}>
          <Textarea
            placeholder="Escriba aquí su comentario..."
            fullWidth
            control={control}
            name="comment"
            commentDesign
            error={errors.comment?.message}
          />
          <Button text="Enviar" />
        </FormStyled>
        <CommentContainer>
          {selectedBlog.comment.map((comment, index) => (
            <Comment
              key={index}
              user={comment.id_user.username}
              comment={comment.comment}
              date={formatDate(comment.createdAt)}
              hour={formatHour(comment.createdAt)}
            />
          ))}
        </CommentContainer>
      </Comments>
    </Container>
  );
}
