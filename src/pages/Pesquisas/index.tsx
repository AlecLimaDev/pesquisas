import { useEffect, useState } from "react";
import pesquisasIbge from "../../helper/data/Pesquisas";
import { Editorial, Introducao } from "../Home/styled";
import { PesquisaContainer, Tematica, Descricao, ErrorMessage } from "./styled";
import { Container } from "../Estatistica/styled";

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

const Pesquisas = () => {
  const [data, setData] = useState<Pesquisas[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    pesquisasIbge
      .get("/metadados/pesquisas")
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch(() => setError("Falha na Requisição"));
  }, []);

  const filteredTheNews = data.filter(
    (item: Pesquisas) =>
      search.length === 0 || item.nome.toLowerCase().includes(search)
  );

  return (
    <div>
      <Container>
      <input
      placeholder="Buscar..."
        name="search"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
      </Container>
      {filteredTheNews.map((pesquisa: Pesquisas, index) => (
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
      : (<ErrorMessage>{error}</ErrorMessage>)
    </div>
  );
};

export default Pesquisas;
