import { useEffect, useState } from "react";
import pesquisasIbge from "../../helper/data/Pesquisas";
import { Editorial, Introducao } from "../Home/styled";
import styled from "styled-components";

type Pesquisas = {
  codigo: string;
  nome: string;
  nome_ingles: null;
  situacao: string;
  categoria: string;
  periodicidade_coleta: string;
  periodicidade_divulgacao: string;
  classificacoes_tematicas: [
    {
      nome: string;
      nome_ingles: string;
      descricao: string;
      descricao_ingles: null;
      dominio: string;
      dominio_ingles: string;
    }
  ];
};

const PesquisaContainer = styled.div`
  background-color: #f5f5f5;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`;

const Tematica = styled.span`
  color: #ff5733;
  font-family: "Arial", sans-serif;
  font-size: 24px;
  display: block;
  margin-bottom: 10px;
`;

const Descricao = styled.h3`
  font-family: "Arial", sans-serif;
  color: #3498db;
  font-size: 16px;
  margin: 0;
`;

const ErrorMessage = styled.p`
  font-size: 18px;
  color: #ff6347;
`;

const Pesquisas = () => {
  const [data, setData] = useState<Pesquisas[]>([]);

  useEffect(() => {
    pesquisasIbge
      .get("/metadados/pesquisas")
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {data.length > 0 ? (
        data.map((pesquisa: Pesquisas, index) => (
          <PesquisaContainer key={index}>
            <Editorial>{pesquisa.nome}</Editorial>
            <Introducao>
              <Tematica>{pesquisa.classificacoes_tematicas[0].nome}</Tematica>
              <Descricao>
                {pesquisa.classificacoes_tematicas[0].descricao}
              </Descricao>
            </Introducao>
          </PesquisaContainer>
        ))
      ) : (
        <ErrorMessage>Falha na requisição.</ErrorMessage>
      )}
    </div>
  );
};

export default Pesquisas;
