import { useState, useEffect, SetStateAction } from "react";
import dataIbge from "../helper/data/Ibge";

interface Dados {
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
}

interface DataFetcher {
  fetchData(signal: AbortSignal): Promise<Dados[]>;
}

class HomeHandleFetch implements DataFetcher {
  fetchData(signal: AbortSignal): Promise<Dados[]> {
    return dataIbge.get("/noticias", { signal }).then(({ data }) => data.items);
  }
}

interface FilterFunction {
  (dados: Dados, search: string): boolean;
}

interface HomeResult {
  setSearch: React.Dispatch<SetStateAction<string>>;
  error: string | null;
  filteredDados: Dados[];
  search: string;
  loading: boolean;
}

export function useHome(
  dataFetcher: DataFetcher = new HomeHandleFetch(),
  filterFunction: FilterFunction = defaultFilter
): HomeResult {
  const [data, setData] = useState<Dados[]>([]);
  const [search, setSearch] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const abortController = new AbortController();
    const { signal } = abortController;

    async function fetchData() {
      try {
        const result = await dataFetcher.fetchData(signal);
        setData(result);
        console.log(result);
        setLoading(false);
      } catch (error: unknown) {
        if (error instanceof Error && error.name !== "AbortError") {
          setError("Falha na requisição");
          setLoading(false);
        }
      }
    }

    fetchData();

    return () => {
      console.log("Cancelado...");
      abortController.abort();
    };
  }, []);

  const filteredDados = data.filter((dados) =>
    filterFunction(dados, search.toLowerCase())
  );

  return {
    setSearch,
    error,
    filteredDados,
    search,
    loading,
  };
}

function defaultFilter(dados: Dados, searchTerm: string): boolean {
  return (
    searchTerm.length === 0 ||
    dados.editorias.toLowerCase().includes(searchTerm) ||
    dados.data_publicacao?.toLowerCase().includes(searchTerm) ||
    dados.titulo.toLowerCase().includes(searchTerm) ||
    dados.introducao.toLowerCase().includes(searchTerm)
  );
}
