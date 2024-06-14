import Card from "@/components/Card";
import { Content, Header, Section } from "@/styles/Blog.style";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import BlogRepo from "@/infraestructure/implementation/httpRequest/axios/BlogRepo";
import GetAllBlogUseCase from "@/application/usecases/blogUseCase/GetAllBlogUseCase";

export default function Blog() {
  const router = useRouter();
  const [blogs, setBlogs] = useState([]);

  const navigateToBlog = (id) => {
    return router.push({
      pathname: "/[blogSlug]",
      query: { blogSlug: id },
    });
  };

  const blogRepo = new BlogRepo();
  const getAllBlogUseCase = new GetAllBlogUseCase(blogRepo);

  const fetchBlogs = async () => {
    try {
      const response = await getAllBlogUseCase.run();
      setBlogs(response.response.blogs);
    } catch (error) {
      console.log(error);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleDateString('es-ES', { month: 'long' });
    const year = date.getFullYear();
    return `${day} ${month}, ${year}`;
  };
  
  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div>
      <Header>
        <Content>
          <h1>Blogs.</h1>
          <span>
            Sumérgete en nuestro blog y explora una colección de artículos
            diseñados para inspirarte, informarte y entretenerte. Aquí
            encontrarás las últimas tendencias, historias y consejos útiles.
          </span>
        </Content>
      </Header>
      <Section>
        {blogs.map((blog, index) => (
          <Card
            key={index}
            image={blog.image.secureUrl}
            alt={blog.title}
            title={blog.title}
            date={formatDate(blog.createdAt)}
            user={blog.user}
            onClick={() => navigateToBlog(blog._id)}
          />
        ))}
      </Section>
    </div>
  );
}
