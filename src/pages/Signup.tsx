import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Box from "../components/Box";
import InputBox from "../components/InputBox";
import InputRow from "../components/InputRow";
import Checkbox from "../components/Checkbox";
import {ContentWrapper, Title, FormContainer, ButtonContainer, Button, LoginErrorMessage, LoginSuccessMessage } from "../styles/FormStyles.ts";
import useFormValidation from "../hooks/useFormValidation";
import {validateName, validateCompany, validateCNPJ, validatePhone, validateEmail, validatePassword} from "../utils/Validations";

export default function Signup() {
  const navigate = useNavigate();
  const bgColor = "rgba(77, 112, 228, 1)";

  const [signupError, setSignupError] = useState("");
  const [signupSuccess, setSignupSuccess] = useState(""); 
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [termsError, setTermsError] = useState(false);

  const { values, states, handleChange, validateForm } = useFormValidation({
    name: {
      validators: [(value) => validateName(value) === ""],
    },
    company: {
      validators: [(value) => validateCompany(value) === ""],
    },
    cnpj: {
      validators: [(value) => validateCNPJ(value) === ""],
    },
    phone: {
      validators: [(value) => validatePhone(value) === ""],
    },
    email: {
      validators: [(value) => validateEmail(value) === ""],
    },
    password: {
      validators: [(value) => validatePassword(value) === ""],
    },
  });

  const getErrorMessage = (field: string) => {
    const value = values[field] || "";
    switch (field) {
      case "name":
        return validateName(value);
      case "company":
        return validateCompany(value);
      case "cnpj":
        return validateCNPJ(value);
      case "phone":
        return validatePhone(value);
      case "email":
        return validateEmail(value);
      case "password":
        return validatePassword(value);
      default:
        return "";
    }
  };

  const handleSignup = async () => {
    setSignupError("");
    setSignupSuccess("");
    setTermsError(false);

    const isFormValid = validateForm();

    if (!isFormValid) {
      setSignupError("Preencha todos os campos corretamente.");
      return;
    }

    if (!termsAccepted) {
      setTermsError(true);
      setSignupError("Você deve aceitar os Termos de Uso para continuar.");
      return;
    }

    const payload = {
      name: values.name,
      company: values.company,
      cnpj: values.cnpj,
      phone: values.phone,
      email: values.email,
      password: values.password,
    };

    try {
      const response = await fetch("https://homologacao.flopo.com.br/api/customers/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setSignupError(errorData.message || "Erro ao realizar cadastro.");
        return;
      }

      const data = await response.json();
      setSignupSuccess(data.message || "Cadastro realizado com sucesso.");

      setTimeout(() => {
        navigate("/login");
      }, 2000);

    } catch (error) {
      setSignupError("Erro de conexão. Tente novamente mais tarde.");
    }
  };

  return (
    <Box bgColor={bgColor}>
      <ContentWrapper>
        <Title>Cadastro</Title>

        <FormContainer>
          <InputBox
            label="Nome"
            placeholder="Digite seu nome"
            bgColor={bgColor}
            state={states.name || "neutral"}
            errorMessage={states.name === "error" ? getErrorMessage("name") : ""}
            onChange={(e) => handleChange("name", e.target.value)}
          />
          <InputBox
            label="Empresa"
            placeholder="Digite o nome da empresa"
            bgColor={bgColor}
            state={states.company || "neutral"}
            errorMessage={states.company === "error" ? getErrorMessage("company") : ""}
            onChange={(e) => handleChange("company", e.target.value)}
          />

          <InputRow>
            <InputBox
              label="CNPJ"
              placeholder="00.000.000/0000-00"
              size="small"
              bgColor={bgColor}
              state={states.cnpj || "neutral"}
              errorMessage={states.cnpj === "error" ? getErrorMessage("cnpj") : ""}
              onChange={(e) => handleChange("cnpj", e.target.value)}
            />
            <InputBox
              label="Telefone"
              placeholder="(XX) XXXXX-XXXX"
              size="small"
              bgColor={bgColor}
              state={states.phone || "neutral"}
              errorMessage={states.phone === "error" ? getErrorMessage("phone") : ""}
              onChange={(e) => handleChange("phone", e.target.value)}
            />
          </InputRow>

          <InputRow>
            <InputBox
              label="E-mail"
              placeholder="Digite seu e-mail"
              size="small"
              bgColor={bgColor}
              state={states.email || "neutral"}
              errorMessage={states.email === "error" ? getErrorMessage("email") : ""}
              onChange={(e) => handleChange("email", e.target.value)}
            />
            <InputBox
              label="Senha"
              placeholder="Digite sua senha"
              size="small"
              bgColor={bgColor}
              state={states.password || "neutral"}
              errorMessage={states.password === "error" ? getErrorMessage("password") : ""}
              onChange={(e) => handleChange("password", e.target.value)}
              type="password"
            />
          </InputRow>

          <Checkbox
            label="Li e aceito os termos de uso"
            isRequired
            onChange={setTermsAccepted}
            hasError={termsError}
          />

          {signupError && <LoginErrorMessage>{signupError}</LoginErrorMessage>}
          {signupSuccess && (
            <LoginSuccessMessage>{signupSuccess}</LoginSuccessMessage>
          )}

          <ButtonContainer>
            <Button variant="primary" bgColor={bgColor} onClick={handleSignup}>
              Cadastrar
            </Button>
            <Button
              variant="secondary"
              bgColor={bgColor}
              onClick={() => navigate("/login")}
            >
              Voltar
            </Button>
          </ButtonContainer>
        </FormContainer>
      </ContentWrapper>
    </Box>
  );
}
