import DeleteBlogUseCase from "@/application/usecases/blogUseCase/DeleteBlogUseCase";
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
import { toast } from "react-toastify";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRouter } from "next/router";
import UpdateBlogUseCase from "@/application/usecases/blogUseCase/UpdateBlogUseCase";

const schema = yup.object().shape({
  title: yup.string().required("El título es obligatorio"),
  description: yup.string().required("La descripción es obligatoria"),
  content: yup.string().required("El contenido es obligatorio"),
});

const editSchema = yup.object().shape({
  title: yup.string(),
  description: yup.string(),
  content: yup.string(),
});


export default function Crud() {
  const router = useRouter();
  const user = useSelector((state) => state.user.username);
  const userId = useSelector((state) => state.user._id);
  const [blogs, setBlogs] = useState([]);
  const [open, setOpen] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const fileInputRef = useRef(null);
  const [imageUrl, setImageUrl] = useState("");
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isDirty },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const editForm = useForm({
    resolver: yupResolver(editSchema),
  });

  const navigateToBlog = (id) => {
    return router.push({
      pathname: "/[blogId]",
      query: { blogId: id },
    });
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    reset();
  };

  const handleOpenEdit = (blog) => {
    setSelectedBlog(blog);
    editForm.reset(blog);
    setOpenEdit(true);
  };

  const handleCloseEdit = () => {
    setOpenEdit(false);
    reset();
  };

  const blogRepo = new BlogRepo();
  const getAllBlogUseCase = new GetAllBlogUseCase(blogRepo);
  const deleteBlogUseCase = new DeleteBlogUseCase(blogRepo);

  const onSubmit = async (data) => {
    const file = fileInputRef.current.files[0];
    const blogData = {
      ...data,
      image: file,
      id_user: userId,
    };

    try {
      const response = await blogRepo.create(blogData);
      console.log("Blog creado:", response);
      toast.success("Blog creado correctamente");
      fetchBlogs();
      handleClose();
    } catch (error) {
      console.error("Error al crear el blog:", error);
      toast.error("Error al crear el blog");
    }
  };

  const onSubmitUpdate = async (data) => {
    const file = fileInputRef.current.files[0];
    const updatedBlog = {
      _id: selectedBlog._id,
      id_user: userId,
      title: data.title,
      description: data.description,
      content: data.content,
      image: file,
    };
    const blogRepo = new BlogRepo(userId);
    const updateBlogUseCase = new UpdateBlogUseCase(blogRepo);

    try {
      const response = await updateBlogUseCase.run(updatedBlog);
      console.log("Blog updated successfully: ", response);
      toast.success("Blog editado correctamente");
      fetchBlogs();
      handleCloseEdit();
    } catch (error) {
      console.error("Error updating blog: ", error);
      toast.error("Error al crear el blog");
    }
  }

  const handleDelete = async (_id) => {
    try {
      const response = await deleteBlogUseCase.run(_id, userId);
      toast.success("Blog elimnado correctamente");
      fetchBlogs();
    } catch (error) {
      console.error("Error al eliminar el blog:", error);
      toast.error("Error al eliminar el blog");
    }
  };

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
        {blogs.length === 0 ? (
          <div style={{ textAlign: "center" }}>
            <span>No tienes publicaciones aún. ¡Agrega tu primer blog!</span>
          </div>
        ) : (
          <Section>
            {blogs.map((blog, index) => (
              <CardCrud
                key={index}
                image={blog.image.secureUrl}
                alt={blog.title}
                title={blog.title}
                date={formatDate(blog.createdAt)}
                user={blog.user}
                onDelete={() => handleDelete(blog._id)}
                onClick={() => navigateToBlog(blog._id)}
                onUpdate={() => handleOpenEdit(blog)}
              />
            ))}
          </Section>
        )}
      </div>
      <ModalComponent
        open={open}
        onClose={handleClose}
        title="Agregar blog"
        message="Por favor, complete la información a continuación para agregar un nuevo blog."
      >
        <FormStyled onSubmit={handleSubmit(onSubmit)}>
          <Input
            fullWidth
            control={control}
            name="title"
            label="Título"
            error={errors.title?.message}
          />
          <Input
            fullWidth
            control={control}
            name="description"
            label="Descripción del blog"
            error={errors.description?.message}
          />
          <Textarea
            placeholder="Escriba el contenido de su blog aquí..."
            fullWidth
            control={control}
            name="content"
            label="Contenido del blog"
            error={errors.content?.message}
          />
          <File
            name="image"
            onChange={(e) => {
              const file = e.target.files[0];
              if (file) {
                const reader = new FileReader();
                reader.onloadend = function () {
                  console.log("Imagen en base64:", reader.result);
                  setImageUrl(reader.result);
                };
                reader.readAsDataURL(file);
              }
            }}
            ref={fileInputRef}
          />
          <div>
            <Button text="Aceptar" type="submit" />
          </div>
        </FormStyled>
      </ModalComponent>
      <ModalComponent
        open={openEdit}
        onClose={handleCloseEdit}
        title="Editar blog"
        message="Por favor, complete la información a continuación para editar su blog."
      >
        <FormStyled onSubmit={editForm.handleSubmit(onSubmitUpdate)}>
          <Input
            fullWidth
            control={editForm.control}
            name="title"
            label="Título"
            defaultValue={selectedBlog?.title}
            error={editForm.formState.errors.title?.message}
          />
          <Input
            fullWidth
            control={editForm.control}
            name="description"
            label="Descripción del blog"
            defaultValue={selectedBlog?.description}
            error={editForm.formState.errors.description?.message}
          />
          <Textarea
            placeholder="Escriba el contenido de su blog aquí..."
            fullWidth
            control={editForm.control}
            name="content"
            label="Contenido del blog"
            defaultValue={selectedBlog?.content}
            error={editForm.formState.errors.content?.message}
          />
          <File
            name="image"
            onChange={(e) => {
              const file = e.target.files[0];
              if (file) {
                const reader = new FileReader();
                reader.onloadend = function () {
                  console.log("Imagen en base64:", reader.result);
                  setImageUrl(reader.result);
                };
                reader.readAsDataURL(file);
              }
            }}
            ref={fileInputRef}
          />
          <div>
            <Button text="Aceptar" type="submit" />
          </div>
        </FormStyled>
      </ModalComponent>
    </Container>
  );
}
