import SignUpUserUseCase from "@/application/usecases/userUseCase/SignUpUserUseCase";
import Button from "@/components/Button";
import Input from "@/components/Input";
import User from "@/domain/entities/user";
import UserRepo from "@/infraestructure/implementation/httpRequest/axios/UserRepo";
import { Container, Content, Form, FormContainer, ImageContainer } from "@/styles/Register.style";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { useForm } from "react-hook-form";

export default function Register() {
  const route = useRouter();
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

  const onSubmit = async (data) => {
    const user = new User(null, data.username, data.email, data.password);
    const userRepo = new UserRepo();
    const signUpUserUseCase = new SignUpUserUseCase(userRepo);

    try {
      const registeredUser = await signUpUserUseCase.run(user);
      console.log("Usuario creado: ", registeredUser);
      route.push("/login");
    } catch (error) {
      console.error("Error creando usuario:", error);
    }
  }

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
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Input fullWidth control={control} name="username" label="Username" />
            <Input fullWidth control={control} name="email" label="Email" />
            <Input
              fullWidth
              control={control}
              name="password"
              label="Password"
            />
            <Button fullWidth text="Regístrarse" type="submit"/>
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
            fill
            sizes="100vw, 100vh"
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
