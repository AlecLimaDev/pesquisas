import styled from "styled-components";

export const PesquisaContainer = styled.div`
  background-color: #f5f5f5;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.01);
  }

  input {
    margin-top: 29px;
  }
`;

export const Tematica = styled.span`
  color: #ff5733;
  font-family: "Arial", sans-serif;
  font-size: 24px;
  display: block;
  margin-bottom: 10px;
`;

export const Descricao = styled.h3`
  font-family: "Arial", sans-serif;
  color: #3498db;
  font-size: 16px;
  margin: 0;
`;

export const ErrorMessage = styled.p`
  font-size: 18px;
  color: #ff6347;
`;
