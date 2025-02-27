import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Box from "../components/Box";
import InputBox from "../components/InputBox";
import Checkbox from "../components/Checkbox";
import {ContentWrapper, Title,FormContainer,ButtonContainer,Button,LoginErrorMessage,LoginSuccessMessage} from "../styles/FormStyles.ts";
import useFormValidation from "../hooks/useFormValidation";

export default function Login() {
  const navigate = useNavigate();
  const bgColor = "rgba(49, 72, 150, 1)";

  const [loginError, setLoginError] = useState("");
  const [loginSuccess, setLoginSuccess] = useState(""); 

  const { values, states, handleChange, validateForm } = useFormValidation({
    email: {
      validators: [
        (value) => value.trim() !== "",
        (value) =>
          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value),
      ],
    },
    password: {
      validators: [(value) => value.trim() !== ""],
    },
  });

  const isPasswordValid = (password: string) => {
    return (
      password.length >= 8 &&
      /[A-Z]/.test(password) &&
      /[a-z]/.test(password) &&
      /[0-9]/.test(password) &&
      /[@#$%^&+=*!]/.test(password) &&
      !/\s/.test(password)
    );
  };

  const getErrorMessage = (field: string) => {
    const value = values[field] || "";

    if (field === "email") {
      if (value.trim() === "") return "Digite algo no campo.";
      if (
        !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)
      )
        return "E-mail inválido.";
    }

    if (field === "password") {
      if (value.trim() === "") return "Digite algo no campo.";
    }

    return "";
  };

  const handleLogin = async () => {
    setLoginError("");
    setLoginSuccess("");

    const isFormValid = validateForm();
    const isPasswordCorrect = isPasswordValid(values.password || "");

    if (!isFormValid || !isPasswordCorrect) {
      setLoginError("E-mail ou senha incorretos.");
      return;
    }

    const payload = {
      email: values.email,
      password: values.password,
    };

    try {
      const response = await fetch("https://homologacao.flopo.com.br/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setLoginError(errorData.message || "Erro ao fazer login.");
        return;
      }

      const data = await response.json();
      localStorage.setItem("jwtToken", data.token);
      setLoginSuccess("Login realizado com sucesso!");
      setTimeout(() => {
        navigate("/dashboard");
      }, 2000);
    } catch (error) {
      setLoginError("Erro de conexão. Tente novamente mais tarde.");
    }
  };

  return (
    <Box bgColor={bgColor}>
      <ContentWrapper>
        <Title>Log In</Title>
        <FormContainer>
          <InputBox
            label="E-mail"
            placeholder="Digite seu e-mail"
            bgColor={bgColor}
            state={states.email || "neutral"}
            errorMessage={
              states.email === "error" ? getErrorMessage("email") : ""
            }
            onChange={(e) => handleChange("email", e.target.value)}
          />
          <InputBox
            label="Senha"
            placeholder="Digite sua senha"
            bgColor={bgColor}
            state={states.password || "neutral"}
            errorMessage={
              states.password === "error" ? getErrorMessage("password") : ""
            }
            onChange={(e) => handleChange("password", e.target.value)}
            type="password"
          />

          {loginError && <LoginErrorMessage>{loginError}</LoginErrorMessage>}
          {loginSuccess && <LoginSuccessMessage>{loginSuccess}</LoginSuccessMessage>}

          <Checkbox label="Esqueci minha senha" bgColor={bgColor} />

          <ButtonContainer>
            <Button
              variant="secondary"
              bgColor={bgColor}
              onClick={() => navigate("/signup")}
            >
              Cadastrar
            </Button>
            <Button variant="primary" bgColor={bgColor} onClick={handleLogin}>
              Entrar
            </Button>
          </ButtonContainer>
        </FormContainer>
      </ContentWrapper>
    </Box>
  );
}
