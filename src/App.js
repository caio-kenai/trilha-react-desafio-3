import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";

const Container = styled.div`
  max-width: 400px;
  margin: 50px auto;
  padding: 30px;
  background: #222;
  border-radius: 8px;
  color: #fff;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 24px;
  color: #61dafb;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 6px;
  font-weight: 600;
`;

const Input = styled.input`
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #555;
  margin-bottom: 16px;
  font-size: 16px;
  background: #333;
  color: #fff;

  &:focus {
    outline: none;
    border-color: #61dafb;
  }
`;

const ErrorMessage = styled.span`
  color: #ff6b6b;
  font-size: 14px;
  margin-top: -12px;
  margin-bottom: 12px;
`;

const Button = styled.button`
  padding: 12px;
  background-color: #61dafb;
  border: none;
  border-radius: 4px;
  color: #222;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};

  &:hover:not(:disabled) {
    background-color: #21a1f1;
  }
`;

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });

  const onSubmit = (data) => {
    console.log("Dados enviados:", data);
    alert("Cadastro realizado com sucesso!");
  };

  return (
    <Container>
      <Title>Cadastro DIO</Title>
      <Form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Label htmlFor="nome">Nome</Label>
        <Input
          id="nome"
          {...register("nome", { required: "Nome é obrigatório" })}
          placeholder="Digite seu nome"
          type="text"
        />
        {errors.nome && <ErrorMessage>{errors.nome.message}</ErrorMessage>}

        <Label htmlFor="email">E-mail</Label>
        <Input
          id="email"
          {...register("email", {
            required: "E-mail é obrigatório",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "E-mail inválido",
            },
          })}
          placeholder="Digite seu e-mail"
          type="email"
        />
        {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}

        <Label htmlFor="senha">Senha</Label>
        <Input
          id="senha"
          {...register("senha", {
            required: "Senha é obrigatória",
            minLength: {
              value: 6,
              message: "Senha deve ter no mínimo 6 caracteres",
            },
          })}
          placeholder="Digite sua senha"
          type="password
