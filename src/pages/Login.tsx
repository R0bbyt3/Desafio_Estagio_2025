import Box from "../components/Box";
import InputBox from "../components/InputBox";
import Checkbox from "../components/Checkbox"; // Importa o checkbox
import { useNavigate } from "react-router-dom";
import { ContentWrapper, Title, FormContainer, ButtonContainer, Button } from "../styles/FormStyles.ts";

export default function Login() {
  const navigate = useNavigate();
  const bgColor = "rgba(49, 72, 150, 1)";

  return (
    <Box bgColor={bgColor}>
      <ContentWrapper>
        <Title>Log In</Title>
      
        <FormContainer>

        <InputBox label="E-mail" placeholder="Digite seu e-mail" bgColor={bgColor} />
        <InputBox label="Senha" placeholder="Digite sua senha" bgColor={bgColor} />


          {/* Checkbox de "Esqueci minha senha" */}
          <Checkbox label="Esqueci minha senha" bgColor={bgColor} />

          <ButtonContainer>
            <Button variant="secondary" bgColor={bgColor} onClick={() => navigate("/signup")}>
              Cadastrar
            </Button>
            <Button variant="primary" bgColor={bgColor} onClick={() => console.log("Tentando login...")}>
              Entrar
            </Button>
          </ButtonContainer>
        </FormContainer>
      </ContentWrapper>
    </Box>
  );
}
