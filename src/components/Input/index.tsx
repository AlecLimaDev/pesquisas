import { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Input = ({ type = "text", children, ...rest }: InputProps) => {
  return (
    <>
      <input type={type} {...rest} placeholder="Digite aqui...">
        {children}
      </input>
    </>
  );
};

export default Input;
