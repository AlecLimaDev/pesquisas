import styled from "styled-components";

export const Container = styled.div`
  background-color: #f7f7f7;
  border-radius: 5px;
  padding: 40px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

export const StatisticItem = styled.div`
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  padding: 20px;
  margin: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;

  h1 {
    font-size: 24px;
    color: #333;
    margin-bottom: 10px;
  }

  p {
    font-size: 16px;
    color: #666;
  }

  &:hover {
    transform: scale(1.03);
  }
`;

export const ErrorMessage = styled.p`
  font-size: 18px;
  color: #ff6347;
`;
