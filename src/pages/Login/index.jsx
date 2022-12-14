import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { api } from "../../services";
import { useNavigate } from "react-router-dom";

import logo from "../../assets/Logo.png";
import * as S from "./styles";

function Login({setUserData}) {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate()

  const onSubmit = (data) => {
    console.log(data.email);
    api
      .post("/auth/login", data)
      .then((res) => {
        setUserData(res.data)
        navigate("/hoje")
      })
      .catch((erro) => console.log(erro));
  };

  return (
    <S.Container>
      <S.Content>
        <img src={logo} alt="" />
        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <S.Input type="email" {...register("email", { required: true })} placeholder="email" />
          <S.Input type="password" {...register("password", { required: true })} placeholder="senha" />
          <S.SubmitBtn type="submit">Entrar</S.SubmitBtn>
        </S.Form>
        <S.StyledLink to={"/cadastro"}>Não tem uma conta? Cadastre-se!</S.StyledLink>
      </S.Content>
    </S.Container>
  );
}

export default Login;
