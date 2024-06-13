import { useRouter } from "next/router";
import React from "react";
import { blog } from "../../constants";
import { AutorInfo, BlogInfoContent, Comments, Container, Grid, Info } from "@/styles/BlogSlug.style";
import Image from "next/image";
import Button from "@/components/Button";

export default function BlogSlug() {
  const router = useRouter();
  const { blogSlug } = router.query;

  const blogs = blog.find((blog) => blog.slug === blogSlug);

  if (!blogSlug) {
    return <div>No existe este blog, intenta seleccionando otro.</div>;
  }

  return (
    <Container>
      <Grid>
        <Info>
          <div>
            <h1>{blogs.title}</h1>
            <h3>{blogs.description}</h3>
          </div>
          <AutorInfo>
            <span>By {blogs.user}</span>
            <span>{blogs.date}</span>
          </AutorInfo>
        </Info>
        <div>
          <Image
            src={blogs.image}
            fill={true}
            loading="lazy"
            style={{
              objectFit: "cover",
              borderRadius: "20px",
            }}
          />
        </div>
      </Grid>
      <BlogInfoContent>
        <p>{blogs.content}</p>
      </BlogInfoContent>
      <Comments>
          <h5>Comentarios</h5>
          <form>
            <textarea></textarea>
            <Button text="Enviar"/>
          </form>
      </Comments>
    </Container>
  );
}
