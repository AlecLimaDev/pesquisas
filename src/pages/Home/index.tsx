import {
  Button,
  Container,
  Data,
  Editorial,
  Introducao,
  Title,
} from "./styled";
import { useHome } from "../../hooks/useHome";
import { StyledInput } from "../../components/Input/styled";

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
  destaque: boolean;
  link: string;
};

const Home: React.FC = () => {
  const { error, filteredDados, setSearch, search } = useHome();

  return (
    <>
      <Container>
        <StyledInput
          placeholder="Buscar..."
          name="search"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
      </Container>
      {filteredDados.map((dados: Dados, index) => (
        <div key={index}>
          <Container>
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
        </div>
      ))}{" "}
      : (<>{error}</>)
    </>
  );
};

export default Home;
