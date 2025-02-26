import styled from "styled-components";

interface InputBoxProps {
  label: string;
  placeholder?: string;
  textColor?: string;
  placeholderColor?: string;
  size?: "default" | "small";
  bgColor: string; // Nova prop para definir a cor do texto dentro do input
}

const Wrapper = styled.div<{ size: "default" | "small" }>`
  width: ${({ size }) => (size === "small" ? "35%" : "80%")}; 
  display: flex;
  flex-direction: column;
  gap: 5px;

  @media (max-width: 768px) {
    width: 80%;
  }
`;

const Label = styled.label<{ textColor?: string }>`
  color: ${({ textColor }) => textColor || "white"}; 
  font-size: 1.4vw;
  font-weight: 600;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 4.5vw; 
  }
`;

const Input = styled.input<{ placeholderColor?: string; bgColor: string }>`
  width: 100%;
  height: 8vh;
  max-height: 60px;
  background: rgb(244, 244, 248);
  border-radius: 12px;
  border: none;
  padding: 10px;
  font-weight: 400;
  font-size: 1.2vw;
  color: ${({ bgColor }) => bgColor}; 

  &::placeholder {
    font-style: italic;
    color: ${({ placeholderColor }) => placeholderColor || "rgb(100, 100, 100)"};
  }

  @media (max-width: 768px) {
    height: 4vh;
    font-size: 4vw; 
  }
`;

export default function InputBox({
  label,
  placeholder = "Digite aqui...",
  textColor,
  placeholderColor,
  size = "default",
  bgColor,
}: InputBoxProps) {
  return (
    <Wrapper size={size}>
      <Label textColor={textColor}>{label}</Label>
      <Input placeholder={placeholder} placeholderColor={placeholderColor} bgColor={bgColor} />
    </Wrapper>
  );
}
