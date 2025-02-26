import styled from "styled-components";

const Row = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  @media (max-width: 768px) {
    flex-wrap: wrap;
     gap: 10px;
    }
`;

interface InputRowProps {
  children: React.ReactNode;
}

export default function InputRow({ children }: InputRowProps) {
  return <Row>{children}</Row>;
}
