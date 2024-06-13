import SignInUserUseCase from "@/application/usecases/userUseCase/SignInUserUseCase";
import Button from "@/components/Button";
import Input from "@/components/Input";
import User from "@/domain/entities/user";
import UserRepo from "@/infraestructure/implementation/httpRequest/axios/UserRepo";
import {
  Container,
  Content,
  Form,
  FormContainer,
  ImageContainer,
} from "@/styles/Login.style";
import Cookies from "js-cookie";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import CryptoJS from "crypto-js";
import { IoEyeSharp, IoEyeOffSharp } from "react-icons/io5";

export default function Login() {
  const route = useRouter();
  const [isShowPassword, setShowPassword] = useState(false);
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

  const togglePasswordVisibility = () => {
    setShowPassword(!isShowPassword);
  };

  const onSubmit = async (data) => {
    try {
      const user = new User(null, null, data.email, data.password);
      const userRepo = new UserRepo();
      const signInUseCase = new SignInUserUseCase(userRepo);
      const signInResponse = await signInUseCase.run(user);

      if (signInResponse && signInResponse.token) {
        const encryptedToken = CryptoJS.AES.encrypt(
          signInResponse.token,
          "cookie-encrypted"
        ).toString();
        Cookies.set("userToken", encryptedToken, { expires: 1 / 24 });
        route.push("/blog");
      }
    } catch (error) {
      console.log("Error: ", error);
    }
  };

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
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Input fullWidth control={control} name="email" label="Email" />
            <Input
              fullWidth
              control={control}
              name="password"
              label="Password"
              type={isShowPassword ? "text" : "password"}
              icon={
                isShowPassword ? (
                  <IoEyeOffSharp onClick={togglePasswordVisibility} />
                ) : (
                  <IoEyeSharp onClick={togglePasswordVisibility} />
                )
              }
            />
            <Button fullWidth text="Iniciar sesión" type="submit" />
          </Form>
          <div>
            <span>
              No tienes cuenta?{" "}
              <a href="/register" className="register">
                Regístrate
              </a>
            </span>
          </div>
        </FormContainer>
        <ImageContainer>
          <Image
            src="/img/login.jpg"
            fill
            sizes="100vw, 100vh"
            priority={false}
            loading="lazy"
            alt="login"
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
