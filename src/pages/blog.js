import Card from "@/components/Card";
import { Content, Header, Section } from "@/styles/Blog.style";
import React from "react";
import { blog } from "../../constants";

export default function Blog() {
  return (
    <div>
      <Header>
        <Content>
          <h1>Blogs.</h1>
          <span>
          Sumérgete en nuestro blog y explora una colección de artículos diseñados para inspirarte, informarte y entretenerte. Aquí encontrarás las últimas tendencias, historias y consejos útiles. 
          </span>
        </Content>
      </Header>
      <Section>
        {blog.map((blog, index) => (
          <Card
            key={index}
            image={blog.image}
            alt={blog.title}
            title={blog.title}
            date={blog.date}
            user={blog.user}
          />
        ))}
      </Section>
    </div>
  );
}
