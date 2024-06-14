import GetAllBlogUseCase from "@/application/usecases/blogUseCase/GetAllBlogUseCase";
import Card from "@/components/Card";
import BlogRepo from "@/infraestructure/implementation/httpRequest/axios/BlogRepo";
import {
  ButtonContainer,
  Container,
  PostContainer,
  Section,
  Subtitle,
  Title,
} from "@/styles/Crud.style";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function Crud() {
  const user = useSelector((state) => state.user.username);
  const [blogs, setBlogs] = useState([]);

  const blogRepo = new BlogRepo();
  const getAllBlogUseCase = new GetAllBlogUseCase(blogRepo);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleDateString("es-ES", { month: "long" });
    const year = date.getFullYear();
    return `${day} ${month}, ${year}`;
  };

  const fetchBlogs = async () => {
    try {
      const response = await getAllBlogUseCase.run();
      const filteredBlogs = response.response.blogs.filter(
        (blog) => blog.user === user
      );
      console.log(filteredBlogs);
      setBlogs(filteredBlogs);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, [user]);

  return (
    <Container>
      <Title>Mis publicaciones</Title>
      <ButtonContainer>
        <button>Agregar</button>
      </ButtonContainer>
      <div>
        <Subtitle>Publicaciones</Subtitle>
        <Section>
          {blogs.map((blog, index) => (
            <Card
              key={index}
              image={blog.image.secureUrl}
              alt={blog.title}
              title={blog.title}
              date={formatDate(blog.createdAt)}
              user={blog.user}
            />
          ))}
        </Section>
      </div>
    </Container>
  );
}
