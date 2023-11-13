import { useEffect, useState } from "react";
import estatiticasApi from "../helper/data/Estatisticas/Estatisticas";

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

export function useEstatistica() {
  const [data, setData] = useState<Estatistic[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    async function handleData() {
      try {
        const response = await estatiticasApi.get("/produtos/estatisticas", {
          signal: controller.signal,
        });
        setData(response.data);
      } catch (error: unknown) {
        if (error instanceof Error && error.name !== "AbortError") {
          setError("Erro na requisição " + error.name);
        }
      }
    }

    handleData();

    return () => {
        console.log("cancelando...");
      };
  }, []);

  const filteredEstatistic = data.filter(
    (estatistic: Estatistic) =>
      search.length === 0 ||
      estatistic.titulo.toLowerCase().includes(search) ||
      estatistic.catTitle.toLowerCase().includes(search) ||
      estatistic.path.toLowerCase().includes(search) ||
      estatistic.parentCatTitle.toLowerCase().includes(search)
  );

  return {
    filteredEstatistic,
    setSearch,
    error,
    search,
  };
}
