import styled from "styled-components";
import AppRoutes from "./routes/Index";
import LogoImage from "./assets/Logo.png"; 

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
    background: rgba(38, 109, 241, 0.5);
    z-index: 1;
  }
`;

const Logo = styled.img`
  position: absolute;
  z-index: 3;
  width: 17vw; 
  
  top: 2vh;
  left: 1vw;

  @media (max-width: 768px) {
    width: 75vw; 
    top: 5vh;
    left: 50%;
    transform: translateX(-50%);
    right: auto;
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

export default function App() {
  return (
    <Background>
      <Logo src={LogoImage} alt="Logo" />
      <ContentWrapper>
        <AppRoutes />
      </ContentWrapper>
    </Background>
  );
}
