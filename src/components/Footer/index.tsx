import { HTMLAttributes } from "react";

type FooterProps = HTMLAttributes<HTMLElement>

const Footer = ({ children, ...rest }: FooterProps) => {
  return (
    <>
      <footer {...rest}>
        {children}
        <p>Celular: 21 99578 - 1792</p>
        <p>Email: aleclimadev@gmail.com</p>
        <h3>Desenvolvedor Web: Alec Lima</h3>
      </footer>
    </>
  );
};

export default Footer;
