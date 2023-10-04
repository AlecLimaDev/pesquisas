import styled from "styled-components";

export const Container = styled.div`
  margin: 20px;
  padding: 20px;
  display: grid;
  grid-template-columns: 30% 70%;
  gap: 20px;
  background-color: #f5f5f5;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Editorial = styled.h1`
  color: #ff5733;
  font-family: "Arial", sans-serif;
  font-size: 28px;
`;

export const Data = styled.p`
  color: #3498db;
  font-family: "Arial", sans-serif;
`;

export const Title = styled.h4`
  font-family: "Arial", sans-serif;
  color: #ff5733;
  font-size: 20px;
`;

export const Introducao = styled.p`
  font-family: "Arial", sans-serif;
  font-size: 20px;
`;

export const Destaque = styled.p`
  color: #f39c12;
  font-family: "Arial", sans-serif;
`;

export const Button = styled.button`
  background-color: #3498db;
  border: none;
  padding: 10px;
  width: 100%;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2980b9;
  }

  a {
    text-decoration: none;
    color: #fff;
    font-family: "Arial", sans-serif;
    font-weight: bold;
  }
`;
