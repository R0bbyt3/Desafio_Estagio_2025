
import styled from "styled-components";
import { useState } from "react";
import EyeOpenIcon from "../assets/O_eye.png";
import EyeClosedIcon from "../assets/C_eye.png";

interface InputBoxProps {
  label: string;
  placeholder?: string;
  textColor?: string;
  placeholderColor?: string;
  size?: "default" | "small";
  bgColor: string;
  state?: "neutral" | "error" | "success";
  errorMessage?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

const Wrapper = styled.div<{ size: "default" | "small" }>`
  width: ${({ size }) => (size === "small" ? "35%" : "80%")};
  display: flex;
  flex-direction: column;
  gap: 5px;
  position: relative;

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

const Input = styled.input<{
  placeholderColor?: string;
  bgColor: string;
  state: "neutral" | "error" | "success";
}>`
  width: 100%;
  height: 8vh;
  max-height: 60px;
  background: rgb(244, 244, 248);
  border-radius: 12px;
  border: ${({ state }) =>
    state === "error" ? "4px solid red" : state === "success" ? "4px solid lightgreen" : "none"};
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

const ErrorMessage = styled.span`
  position: absolute;
  top: -0.2vh;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(255, 0, 0, 0.8);
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 1vw;
  text-align: center;
  display: none;

  ${Wrapper}:hover & {
    display: block;
  }

  @media (max-width: 768px) {
    font-size: 3vw;
  }
`;


const EyeIcon = styled.img`
  position: absolute;
  right: 0px; 
  width: 2vw;
  height: auto;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 6vw;
  }
`;

export default function InputBox({
  label,
  placeholder = "Digite aqui...",
  textColor,
  placeholderColor,
  size = "default",
  bgColor,
  state = "neutral",
  errorMessage,
  onChange,
  type = "text",
}: InputBoxProps) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const isPasswordField = type === "password";

  const currentType = isPasswordField && isPasswordVisible ? "text" : type;

  function handleTogglePassword() {
    setIsPasswordVisible((prev) => !prev);
  }

  return (
    <Wrapper size={size}>
      <Label textColor={textColor}>{label}</Label>
      <Input
        placeholder={placeholder}
        placeholderColor={placeholderColor}
        bgColor={bgColor}
        state={state}
        onChange={onChange}
        type={currentType}
      />
      {isPasswordField && (
        <EyeIcon
          src={isPasswordVisible ? EyeOpenIcon : EyeClosedIcon}
          alt="Exibir/ocultar senha"
          onClick={handleTogglePassword}
        />
      )}
      {state === "error" && errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </Wrapper>
  );
}
