import Button from "@/components/Button";
import Input from "@/components/Input";
import { Container, Content, Form, FormContainer, ImageContainer } from "@/styles/Register.style";
import Image from "next/image";
import React from "react";
import { useForm } from "react-hook-form";

export default function Register() {
  const {
    control,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });
  return (
    <Container>
      <Content>
        <FormContainer>
          <div>
            <h1>Bienvenido!</h1>
            <span>
            Regístrate para acceder a consejos exclusivos y todo lo que necesitas para una piel radiante.
            </span>
          </div>
          <Form>
            <Input fullWidth control={control} name="username" label="Username" />
            <Input fullWidth control={control} name="email" label="Email" />
            <Input
              fullWidth
              control={control}
              name="password"
              label="Password"
            />
            <Button text="Regístrarse" />
          </Form>
          <div>
            <span>
              ¿Ya tienes cuenta?{" "}
              <a href="/login" className="register">
                Inicia sesión
              </a>
            </span>
          </div>
        </FormContainer>
        <ImageContainer>
          <Image
            src="/img/register.jpg"
            fill={true}
             loading="lazy"
            alt="register"
            style={{
              borderRadius: "50px",
              padding: "24px",
              objectFit: "cover",
            }}
          />
        </ImageContainer>
      </Content>
    </Container>
  );
}
