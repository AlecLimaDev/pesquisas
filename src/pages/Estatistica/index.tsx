import React from "react";
import { Container, ErrorMessage, StatisticItem } from "./styled";
import { useEstatistica } from "../../hooks/useEstatistica";
import { StyledInput } from "../../components/Input/styled";

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
  const { error, filteredEstatistic, setSearch, search } = useEstatistica();

  return (
    <Container>
      <StyledInput
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
