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

  @media (max-width: 768px) {
    width: 90%;
    height: auto;
    max-height: calc(100vh - 35%);
    margin-top: 25vh;
    padding-bottom: 10vh;
    overflow-y: auto;
    border-radius: 12px;
  }
`;

interface BoxProps {
  children: React.ReactNode;
  bgColor?: string;
}

export default function Box({ children, bgColor }: BoxProps) {
  return <BoxContainer bgColor={bgColor}>{children}</BoxContainer>;
}
