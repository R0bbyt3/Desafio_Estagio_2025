import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Box from "../components/Box";
import InputBox from "../components/InputBox";
import Checkbox from "../components/Checkbox";
import { ContentWrapper, Title, FormContainer, ButtonContainer, Button, LoginErrorMessage } from "../styles/FormStyles.ts";
import useFormValidation from "../hooks/useFormValidation";

export default function Login() {
  const navigate = useNavigate();
  const bgColor = "rgba(49, 72, 150, 1)";

  const [loginError, setLoginError] = useState(""); 

  const { values, states, handleChange, validateForm } = useFormValidation({
    email: {
      validators: [
        (value) => value.trim() !== "",
        (value) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value), 
      ],
    },
    password: {
      validators: [
        (value) => value.trim() !== "", 
      ],
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
      if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)) return "E-mail inválido.";
    }

    if (field === "password") {
      if (value.trim() === "") return "Digite algo no campo."; 
    }

    return "";
  };

  const handleLogin = () => {
    setLoginError(""); 

    const isFormValid = validateForm();

    const isPasswordCorrect = isPasswordValid(values.password || "");

    if (!isFormValid || !isPasswordCorrect) {
      setLoginError("E-mail ou senha incorretos."); 
      return;
    }

    console.log("Tentando login...");
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
            errorMessage={states.email === "error" ? getErrorMessage("email") : ""}
            onChange={(e) => handleChange("email", e.target.value)}
          />
          <InputBox
            label="Senha"
            placeholder="Digite sua senha"
            bgColor={bgColor}
            state={states.password || "neutral"} 
            errorMessage={states.password === "error" ? getErrorMessage("password") : ""}
            onChange={(e) => handleChange("password", e.target.value)}
            type="password"
          />

          {loginError && <LoginErrorMessage>{loginError}</LoginErrorMessage>} 

          <Checkbox label="Esqueci minha senha" bgColor={bgColor} />

          <ButtonContainer>
            <Button variant="secondary" bgColor={bgColor} onClick={() => navigate("/signup")}>
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
