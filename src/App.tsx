import styled from "styled-components";
import AppRoutes from "./routes/Index";

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: url("src/assets/ExampleBackground.jpg") center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;

&::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(38, 109, 241, 0.5); /* Filtro azul acima do background */
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 2; /* Tudo dentro do AppRoutes ficará acima do fundo */
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh; /* Ocupa a tela toda */
`;

export default function App() {
  return (
    <Background>
      <ContentWrapper>
        <AppRoutes />
      </ContentWrapper>
    </Background>
  );
}
