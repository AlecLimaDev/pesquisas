import React from "react";
import { LinkList, Nav } from "./styled";
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
          <li>
            <NavLink to="/estatistica">Estatística</NavLink>
          </li>
        </LinkList>
      </Nav>
    </>
  );
};

export default Navbar;
