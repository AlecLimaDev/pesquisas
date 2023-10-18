import { useEffect, useState } from "react";
import dataIbge from "../../helper/data/Ibge";

import {
  Button,
  Container,
  Data,
  Editorial,
  Introducao,
  Title,
} from "./styled";

type Dados = {
  id: number;
  tipo: string;
  titulo: string;
  introducao: string;
  data_publicacao: string;
  produto_id: number;
  produtos: string;
  editorias: string;
  imagens: string;
  produtos_relacionados: string;
  destaque: true;
  link: string;
};

const Home: React.FC = () => {
  const [data, setData] = useState<Dados[]>([]);
  const [search, setSearch] = useState("");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    dataIbge
      .get("/noticias")
      .then((response) => {
        setData(response.data.items);
        console.log(response.data.item);
      })
      .catch(() => setError("Falha na requisição"));
  }, []);

  const filteredDados = data.filter(
    (dados: Dados) =>
      search.length === 0 ||
      dados.editorias.toLowerCase().includes(search) ||
      dados.data_publicacao?.toLowerCase().includes(search) ||
      dados.titulo.toLowerCase().includes(search) ||
      dados.introducao.toLowerCase().includes(search)
  );

  return (
    <>
     <Container>
      <input
      placeholder="Buscar..."
        name="search"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
      </Container>
      {filteredDados.map((dados: Dados, index) => (
        <>
          <Container key={index}>
            <Editorial>{dados.editorias} </Editorial>
            <Data>Postado: {dados.data_publicacao}</Data>
            <Title>Assunto: {dados.titulo}</Title>
            <Introducao>{dados.introducao}</Introducao>
            <Button type="button">
              <a target="_blank" href={dados.link}>
                Ver matéria
              </a>
            </Button>
          </Container>
        </>
      ))} : (
        <>{error}</>
      )
    </>
  );
};

export default Home;
