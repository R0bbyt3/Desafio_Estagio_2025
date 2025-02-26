import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Box from "../components/Box";
import InputBox from "../components/InputBox";
import InputRow from "../components/InputRow";
import Checkbox from "../components/Checkbox";
import { ContentWrapper, Title, FormContainer, ButtonContainer, Button, LoginErrorMessage } from "../styles/FormStyles.ts";
import useFormValidation from "../hooks/useFormValidation";
import { validateName, validateCompany, validateCNPJ, validatePhone, validateEmail, validatePassword } from "../utils/Validations";

export default function Signup() {
  const navigate = useNavigate();
  const bgColor = "rgba(77, 112, 228, 1)";

  const [signupError, setSignupError] = useState(""); // Erro geral de cadastro
  const [termsAccepted, setTermsAccepted] = useState(false); // Estado do checkbox
  const [termsError, setTermsError] = useState(false); // Se o checkbox obrigatório não estiver marcado

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

  // Obtém a mensagem de erro de um campo específico
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

  const handleSignup = () => {
    setSignupError(""); // Reseta erro antes da validação
    setTermsError(false); // Reseta erro do checkbox

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

    console.log("Tentando cadastro...");
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

          <Checkbox label="Li e aceito os termos de uso" isRequired onChange={setTermsAccepted} hasError={termsError} />

          {signupError && <LoginErrorMessage>{signupError}</LoginErrorMessage>}

          <ButtonContainer>
          <Button variant="primary" bgColor={bgColor} onClick={handleSignup}>
              Cadastrar
            </Button>
            <Button variant="secondary" bgColor={bgColor} onClick={() => navigate("/login")}>
              Voltar
            </Button>
          </ButtonContainer>
        </FormContainer>
      </ContentWrapper>
    </Box>
  );
}
