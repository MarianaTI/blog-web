import Button from "@/components/Button";
import Input from "@/components/Input";
import {
  Container,
  Content,
  Form,
  FormContainer,
  ImageContainer,
} from "@/styles/Login.style";
import Image from "next/image";
import React from "react";
import { useForm } from "react-hook-form";

export default function Login() {
  const {
    control,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  return (
    <Container>
      <Content>
        <FormContainer>
          <div>
            <h1>Bienvenido de vuelta!</h1>
            <span>
              Nos alegra verte nuevamente. Prepárate para descubrir más sobre el
              cuidado de tu piel y mantenerla radiante.
            </span>
          </div>
          <Form>
            <Input fullWidth control={control} name="email" label="Email" />
            <Input
              fullWidth
              control={control}
              name="password"
              label="Password"
            />
            <Button text="Iniciar sesión" />
          </Form>
          <div>
            <span>
              No tienes cuenta? <a className="register">Regístrate</a>
            </span>
          </div>
        </FormContainer>
        <ImageContainer>
          <Image
            src="/img/login.jpg"
            fill={true}
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
