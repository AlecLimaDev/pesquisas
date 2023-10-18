import React, { useEffect, useState } from "react";
import estatiticasApi from "../../helper/data/Estatisticas";
import { Container, ErrorMessage, StatisticItem } from "./styled";

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
  const [search, setSearch] = useState("");

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

  const filteredEstatistic = data.filter(
    (estatistic: Estatistic) =>
      search.length === 0 ||
      estatistic.titulo.toLowerCase().includes(search) ||
      estatistic.catTitle.toLowerCase().includes(search) ||
      estatistic.path.toLowerCase().includes(search) ||
      estatistic.parentCatTitle.toLowerCase().includes(search)
  );

  return (
    <Container>
      <input
        placeholder="Buscar informações..."
        name="search"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
      {error ? (
        <ErrorMessage>{error}</ErrorMessage>
      ) : (
        filteredEstatistic.map((dados: Estatistic) => (
          <StatisticItem key={String(dados.id)}>
            <h1>{dados.titulo}</h1>
            <h2>{dados.catTitle}</h2>
            <a>{dados.path}</a>
            <p>{dados.catId}</p>
            <p>{dados.parentCatTitle}</p>
          </StatisticItem>
        ))
      )}
    </Container>
  );
};

export default Estatistic;
