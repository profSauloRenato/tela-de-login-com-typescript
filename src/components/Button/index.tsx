import { ButtonContainer } from "./styles";
import { IButtonProps } from "./types";

const Button = ({ title, isValid, onClick }: IButtonProps) => {
  return (
    isValid
    ? <ButtonContainer onClick={onClick}>{title}</ButtonContainer>
    : <ButtonContainer disabled onClick={onClick}>{title}</ButtonContainer>
  )
};

export default Button;
