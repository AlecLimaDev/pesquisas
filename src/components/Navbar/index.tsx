import React from "react";
import { LinkList, Nav, SubNav } from "./styled";
import { NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <>
      <Nav>
        <NavLink to="/" className="brand">
          IBGE ESTATÍSTICAS
        </NavLink>
        <LinkList>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/pesquisas">Pesquisas</NavLink>
          </li>
        </LinkList>
      </Nav>
      <SubNav>
        <NavLink to="/" className="brand">
          <img src="src/assets/img/ibge-logo.png" />
        </NavLink>
        <LinkList>
          <li>
            <NavLink to="/estatistica">Estatistica</NavLink>
          </li>
          <li>
            <NavLink to="/agregados">Agregados</NavLink>
          </li>
        </LinkList>
      </SubNav>
      <></>
    </>
  );
};

export default Navbar;
