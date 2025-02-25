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
  font-size: 3vw; /* Tamanho ajustável */
  margin-bottom: 20px;
  text-align: center;
  color: white;
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

export const Button = styled.button`
  width: 60%; 
  max-width: 200px; /* Limite para não ficar muito grande em telas grandes */
  height: 7.5vh; /* Altura proporcional à tela */
  font-size: 1.5vw; /* Ajustável ao tamanho da tela */
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
