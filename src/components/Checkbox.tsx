import { useState } from "react";
import styled from "styled-components";

interface CheckboxProps {
  label: string;
  bgColor?: string; // Cor do fundo quando desmarcado
  isRequired?: boolean; // Define se é obrigatório ou não
  onChange?: (checked: boolean) => void; // Função para passar o estado para o formulário
  hasError?: boolean; // Indica erro visualmente
}

const PreWrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: flex-start;
  gap: 115px;
`;

const CheckboxWrapper = styled.div<{ hasError: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.8vw;
  cursor: pointer;
  font-size: 1.2vw;
  color: ${({ hasError }) => (hasError ? "red" : "white")}; // Muda a cor do texto se houver erro
  font-weight: 600;
  font-style: italic;
  width: 100%;

  @media (max-width: 768px) {
    font-size: 4vw;
    gap: 1.8vw;
  }
`;

const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  display: none;
`;

const StyledCheckbox = styled.div<{ checked: boolean; bgColor: string; hasError: boolean }>`
  width: 1.75vw; 
  height: 1.75vw;
  min-width: 22px;
  min-height: 22px;
  border-radius: 0.5vw;
  border: 0.2vw solid ${({ hasError }) => (hasError ? "red" : "white")}; // Borda vermelha se houver erro
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s ease, transform 0.1s ease;
  cursor: pointer;

  background: ${({ checked, bgColor }) => (checked ? "white" : bgColor)};
  transform: ${({ checked }) => (checked ? "scale(1.1)" : "scale(1)")};

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    width: 5.5vw;
    height: 5.5vw;
    border-radius: 2vw;
    border: 0.6vw solid ${({ hasError }) => (hasError ? "red" : "white")};
  }
`;

export default function Checkbox({ label, bgColor = "transparent", isRequired = false, onChange, hasError = false }: CheckboxProps) {
  const [checked, setChecked] = useState(false);

  const handleCheckboxClick = () => {
    setChecked(!checked);
    if (onChange) {
      onChange(!checked); // Passa o novo estado para o formulário
    }
  };

  return (
    <PreWrapper>
      <CheckboxWrapper hasError={hasError}>
        <StyledCheckbox checked={checked} bgColor={bgColor} hasError={hasError} onClick={handleCheckboxClick} />
        <HiddenCheckbox checked={checked} readOnly />
        {label} {isRequired && "*"} {/* Adiciona um asterisco para indicar obrigatório */}
      </CheckboxWrapper>
    </PreWrapper>
  );
}
