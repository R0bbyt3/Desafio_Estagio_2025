import styled from "styled-components";

const BoxContainer = styled.div<{ bgColor?: string }>`
  width: 60%;
  max-width: 1200px;
  height: 100vh;
  background: ${({ bgColor }) => bgColor || "rgba(255, 255, 255, 0.9)"};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 20px;
  box-sizing: border-box; /* Garante que o padding não ultrapasse a Box */
  overflow: hidden; /* Impede vazamento da scrollbar no desktop */

  @media (max-width: 768px) {
    width: 80%;
    height: auto;
    max-height: calc(100vh - 35%);
    margin-top: 25vh;
    padding-bottom: 10vh;
    overflow-y: auto; /* Habilita scroll apenas no mobile */
    border-radius: 6px;

    /* Garante que a barra de rolagem fique DENTRO da Box */
    overflow-x: hidden;
    scrollbar-gutter: stable;

    /* Estiliza a barra de rolagem para WebKit */
    &::-webkit-scrollbar {
      width: 8px; /* Mantém a barra dentro da Box */
    }

    &::-webkit-scrollbar-track {
      background: rgba(200, 200, 200, 0.2);
      border-radius: 25px;
    }

    &::-webkit-scrollbar-thumb {
      background: rgba(255, 255, 255, 1);
      border-radius: 25px;
    }

    &::-webkit-scrollbar-thumb:hover {
      background: rgba(255, 255, 255, 0.8);
    }
  }
`;

interface BoxProps {
  children: React.ReactNode;
  bgColor?: string;
}

export default function Box({ children, bgColor }: BoxProps) {
  return <BoxContainer bgColor={bgColor}>{children}</BoxContainer>;
}
