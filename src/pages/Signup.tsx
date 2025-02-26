import Box from "../components/Box";
import InputBox from "../components/InputBox";
import InputRow from "../components/InputRow";
import Checkbox from "../components/Checkbox"; // Importa o checkbox
import { useNavigate } from "react-router-dom";
import { ContentWrapper, Title, FormContainer, ButtonContainer, Button } from "../styles/FormStyles.ts";

export default function Signup() {
  const navigate = useNavigate();
  const bgColor = "rgba(77, 112, 228, 1)";

  return (
    <Box bgColor={bgColor}>
      <ContentWrapper>
        <Title>Cadastro</Title>

        <FormContainer>
          <InputBox label="Nome" placeholder="Digite seu nome" bgColor={bgColor}/>
          <InputBox label="Empresa" placeholder="Digite o nome da empresa" bgColor={bgColor} />

          <InputRow>
            <InputBox label="CNPJ" placeholder="00000000000000" size="small" bgColor={bgColor} />
            <InputBox label="Telefone" placeholder="(xx) xxxxx-xxxx" size="small" bgColor={bgColor} />
          </InputRow>

          <InputRow>
            <InputBox label="E-mail" placeholder="Digite seu e-mail" size="small" bgColor={bgColor} />
            <InputBox label="Senha" placeholder="Digite sua senha" size="small" bgColor={bgColor}/>
          </InputRow>

          {/* Checkbox de "Li e aceito os termos de uso" */}
          <Checkbox label="Li e aceito os termos de uso" bgColor={bgColor} />

          <ButtonContainer>
            <Button variant="primary" bgColor={bgColor} onClick={() => console.log("Tentando cadastro...")}>
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
