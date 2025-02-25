import Box from "../components/Box";
import InputBox from "../components/InputBox";
import { useNavigate } from "react-router-dom";
import { ContentWrapper, Title, FormContainer, ButtonContainer, Button } from "../styles/FormStyles.ts";

export default function Login() {
  const navigate = useNavigate();

  return (
    <Box bgColor="rgba(49, 72, 150, 1)">
      <ContentWrapper>
        <Title>Log In</Title>
      
        <FormContainer>
          <InputBox label="E-mail" placeholder="Digite seu e-mail" />
          <InputBox label="Senha" placeholder="Digite sua senha" />

          <ButtonContainer>
            <Button onClick={() => navigate("/signup")}>Cadastrar</Button>
            <Button onClick={() => console.log("Tentando login...")}>Entrar</Button>
          </ButtonContainer>
        </FormContainer>
      </ContentWrapper>
    </Box>
  );
}
