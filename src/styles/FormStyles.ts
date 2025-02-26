import styled from "styled-components";

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center; /* Centraliza verticalmente */
  align-items: center; /* Centraliza horizontalmente */
  height: 100%; /* Ocupa toda a altura disponível da Box */
  width: 100%;
`;

export const Title = styled.h1`
  font-size: 3vw; /* Tamanho padrão no desktop */
  margin-bottom: 20px;
  text-align: center;
  color: white;

  @media (max-width: 768px) {
    font-size: 6vw; /* Aumenta no mobile */
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px; /* Espaço entre os inputs */
  width: 100%;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2%; /* Espaço relativo entre os botões */
  margin-top: 5%;
  width: 100%;
`;

interface ButtonProps {
  variant: "primary" | "secondary"; // Define o estilo do botão
  bgColor: string; // Cor do fundo da Box, para ajustar o botão secundário
}

export const Button = styled.button<ButtonProps>`
  width: 25%;
  height: 7.5vh;
  font-size: 1.5vw;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  /* Estilos alternados */
  background-color: ${({ variant, bgColor }) =>
    variant === "primary" ? "white" : bgColor};
  color: ${({ variant, bgColor }) =>
    variant === "primary" ? bgColor : "white"};
  border: ${({ variant }) =>
    variant === "primary" ? "none" : "2px solid white"};

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    width: 35%;
    height: 5vh;
    font-size: 4vw;
  }
`;
