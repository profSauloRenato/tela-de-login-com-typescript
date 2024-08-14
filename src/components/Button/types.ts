// import { ButtonHTMLAttributes } from "react";

export interface IButtonProps {
    title: string;
    isValid: boolean;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}