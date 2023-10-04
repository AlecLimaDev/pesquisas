import React, { useEffect, useState } from "react";
import estatiticasApi from "../../helper/data/Estatisticas";
import styled from "styled-components";

const Container = styled.div`
  background-color: #f7f7f7;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const StatisticItem = styled.div`
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

const ErrorMessage = styled.p`
  font-size: 18px;
  color: #ff6347;
`;

interface Estatistic {
  id: number;
  tipo: string;
  titulo: string;
  alias: string;
  sigla: string;
  catId: number;
  catTitle: string;
  parentCatId: number;
  parentCatTitle: string;
  path: string;
}

const Estatistic: React.FC = () => {
  const [data, setData] = useState<Estatistic[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    estatiticasApi
      .get("/produtos/estatisticas")
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((err) => {
        console.log(err);
        setError("Falha na requisição");
      });
  }, []);

  return (
    <Container>
      {error ? (
        <ErrorMessage>{error}</ErrorMessage>
      ) : (
        data.map((dados: Estatistic) => (
          <StatisticItem key={String(dados.id)}>
            <h1>{dados.titulo}</h1>
            <h2>{dados.catTitle}</h2>
            <p>{dados.path}</p>
          </StatisticItem>
        ))
      )}
    </Container>
  );
};

export default Estatistic;
