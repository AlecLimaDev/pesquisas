import  { useEffect, useState } from "react";
import divisoesApi from "../../helper/data/Divisoes";
import { ErrorMessage } from "./styled";
import { Container } from "../Estatistica/styled";

type Dados = {
  id: string;
  descricao: string;
  divisao: {
    id: string;
    descricao: string;
    secao: {
      id: string;
      descricao: string;
    };
  };
  observacoes: string;
};

const Divisoes = () => {
  const [data, setData] = useState<Dados[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    divisoesApi
      .get("/cnae/divisoes/01/grupos")
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch(() => setError("Falha na Requisição"));
  }, []);

  const filteredDivision =
    search.length > 0
      ? data.filter((dados: Dados) => {
          const descricao = dados.descricao?.toLowerCase() || "";
          const observacoes =
            typeof dados.observacoes === "string"
              ? dados.observacoes.toLowerCase()
              : "";
          return (
            descricao.includes(search.toLowerCase()) ||
            observacoes.includes(search.toLowerCase())
          );
        })
      : data;

  return (
    <>
    <Container>
    <input
    placeholder="Buscar informações..."
        type="text"
        name="search"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
    </Container>
      {error ? (
        <ErrorMessage>{error}</ErrorMessage>
      ) : (
        <ul>
          {filteredDivision.map((dados: Dados, index) => (
            <div key={index}>
              <h1>{dados.descricao}</h1>
              <h3>{dados.observacoes}</h3>
            </div>
          ))}
        </ul>
      )}
    </>
  );
};

export default Divisoes;
