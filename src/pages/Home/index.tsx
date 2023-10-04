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

  useEffect(() => {
    dataIbge
      .get("/noticias")
      .then((response) => {
        setData(response.data.items);
        console.log(response.data.items);
      })
      .catch((err) => console.log(err));
  }, [setData]);

  return (
    <>
      {data.length > 0 ? (
        data.map((dados: Dados, index) => (
          <>
            <Container key={String(index)}>
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
        ))
      ) : (
        <div>
          <p>Falha na requisição</p>
        </div>
      )}
    </>
  );
};

export default Home;
