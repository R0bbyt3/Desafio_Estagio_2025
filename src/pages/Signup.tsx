import Box from "../components/Box";
import InputBox from "../components/InputBox";
import InputRow from "../components/InputRow";
import { useNavigate } from "react-router-dom";
import { ContentWrapper, Title, FormContainer, ButtonContainer, Button } from "../styles/FormStyles.ts";

export default function Signup() {
  const navigate = useNavigate();

  return (
    <Box bgColor="rgba(77, 112, 228, 1)">
      <ContentWrapper>
        <Title>Cadastro</Title>

        <FormContainer>
          <InputBox label="Nome" placeholder="Digite seu nome" />
          <InputBox label="Empresa" placeholder="Digite o nome da empresa" />

          <InputRow>
            <InputBox label="CNPJ" placeholder="00000000000000" size="small" />
            <InputBox label="Telefone" placeholder="(xx) xxxxx-xxxx" size="small" />
          </InputRow>

          <InputRow>
            <InputBox label="E-mail" placeholder="Digite seu e-mail" size="small"/>
            <InputBox label="Senha" placeholder="Digite sua senha" size="small"/>
          </InputRow>

          <ButtonContainer>
            <Button onClick={() => console.log("Tentando cadastro...")}>Cadastrar</Button>
            <Button onClick={() => navigate("/login")}>Voltar</Button>
          </ButtonContainer>
        </FormContainer>
      </ContentWrapper>
    </Box>
  );
}
