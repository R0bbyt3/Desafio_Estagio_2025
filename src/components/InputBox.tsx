import styled from "styled-components";

interface InputBoxProps {
  label: string;
  placeholder?: string;
  textColor?: string; // Cor do título acima
  placeholderColor?: string; // Cor do placeholder
  size?: "default" | "small"; // Define tamanho
}

const Wrapper = styled.div<{ size: "default" | "small" }>`
  width: ${({ size }) => (size === "small" ? "35%" : "80%")}; /* Se for pequeno, ocupa 48% */
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Label = styled.label<{ textColor?: string }>`
  color: ${({ textColor }) => textColor || "white"}; /* Branco por padrão */
  font-size: 1.2vw;
  text-align: left;
`;

const Input = styled.input<{ placeholderColor?: string }>`
  font-style: italic;
  width: 100%;
  height: 7.5vh;
  background: rgb(244, 244, 248);
  border-radius: 12px;
  border: none;
  padding: 10px;
  font-size: 1.2vw;

  &::placeholder {
    color: ${({ placeholderColor }) => placeholderColor || "rgb(100, 100, 100)"};
  }
`;

export default function InputBox({
  label,
  placeholder = "Digite aqui...",
  textColor,
  placeholderColor,
  size = "default",
}: InputBoxProps) {
  return (
    <Wrapper size={size}>
      <Label textColor={textColor}>{label}</Label>
      <Input placeholder={placeholder} placeholderColor={placeholderColor} />
    </Wrapper>
  );
}
