import { Editorial, Introducao } from "../Home/styled";
import { PesquisaContainer, Tematica, Descricao, ErrorMessage } from "./styled";
import { Container } from "../Estatistica/styled";
import { usePesquisas } from "../../hooks/usePesquisas";
import { StyledInput } from "../../components/Input/styled";

type PesquisaItem = {
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

const Pesquisas = () => {
  const { error, filteredTheNews, setSearch, search } = usePesquisas();

  return (
    <div>
      <Container>
        <StyledInput
          placeholder="Buscar..."
          name="search"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
      </Container>
      {filteredTheNews.map((pesquisa: PesquisaItem, index) => (
        <PesquisaContainer key={index}>
          <Editorial>{pesquisa.nome}</Editorial>
          <Introducao>
            <Tematica>{pesquisa.classificacoes_tematicas[0].nome}</Tematica>
            <Descricao>
              {pesquisa.classificacoes_tematicas[0].descricao}
            </Descricao>
          </Introducao>
        </PesquisaContainer>
      ))}
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </div>
  );
};

export default Pesquisas;
