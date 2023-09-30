import { useEffect, useState } from "react";
import dataIbge from "../../helper/data/Ibge";
import styled from "styled-components";

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

const Container = styled.div`
  background: #000000,
`;

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
        data.map((dados: Dados) => (
          <Container key={String(dados.id)}>
            <img src={dados.imagens} alt="" />
            <p>{dados.data_publicacao}</p>
            <h1>{dados.editorias}</h1>
            <h3>{dados.introducao}</h3>
            <p>{dados.destaque}</p>
            <a href={dados.link}>Ver matéria</a>
          </Container>
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
