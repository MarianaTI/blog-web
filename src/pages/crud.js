import GetAllBlogUseCase from "@/application/usecases/blogUseCase/GetAllBlogUseCase";
import Button from "@/components/Button";
import CardCrud from "@/components/CardCrud";
import File from "@/components/File";
import Input from "@/components/Input";
import ModalComponent from "@/components/Modal";
import Textarea from "@/components/Textarea";
import BlogRepo from "@/infraestructure/implementation/httpRequest/axios/BlogRepo";
import {
  ButtonContainer,
  Container,
  FormStyled,
  Section,
  Subtitle,
  Title,
} from "@/styles/Crud.style";
import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";

export default function Crud() {
  const user = useSelector((state) => state.user.username);
  const [blogs, setBlogs] = useState([]);
  const [open, setOpen] = useState(false);
  const fileInputRef = useRef(null);
  const [imageUrl, setImageUrl] = useState("");
  const {
    control,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm({});

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
        <Button text="Agregar" onClick={handleOpen} />
      </ButtonContainer>
      <div>
        <Subtitle>Publicaciones</Subtitle>
        <Section>
          {blogs.map((blog, index) => (
            <CardCrud
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
      <ModalComponent
        open={open}
        onClose={handleClose}
        title="Agregar blog"
        message="Por favor, complete la información a continuación para agregar un nuevo blog."
      >
        <FormStyled>
          <Input fullWidth control={control} name="title" label="Título" />
          <Input
            fullWidth
            control={control}
            name="description"
            label="Descripción del blog"
          />
          <Textarea
            placeholder="Escriba el contenido de su blog aquí..."
            fullWidth
            control={control}
            name="content"
            label="Contenido del blog"
          />
          <File
            name="image"
            onChange={(e) => {
              const file = e.target.files[0];
              if (file) {
                const reader = new FileReader();
                reader.onloadend = function () {
                  // Aquí `reader.result` contiene la representación base64 de la imagen
                  console.log("Imagen en base64:", reader.result);
                  setImageUrl(reader.result); // Ahora `imageUrl` almacenará la cadena base64 de la imagen
                };
                reader.readAsDataURL(file);
              }
            }}
            ref={fileInputRef}
          />
          <div>
            <Button text="Aceptar" />
          </div>
        </FormStyled>
      </ModalComponent>
    </Container>
  );
}
