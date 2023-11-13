import { useState, useEffect } from "react";
import pesquisasIbge from "../helper/data/Pesquisas";

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

export function usePesquisas() {
  const [data, setData] = useState<PesquisaItem[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    async function handleFetch() {
      try {
        const response = await pesquisasIbge.get("/metadados/pesquisas", {
          signal: controller.signal,
        });
        setData(response.data);
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError("Erro na requisição: " + error.message);
        }
      }
    }
    handleFetch();
    return () => {
      console.log("cancelando...");
      controller.abort();
    };
  }, []);

  const filteredTheNews = data.filter(
    (item: PesquisaItem) =>
      search.length === 0 || item.nome.toLowerCase().includes(search)
  );

  return {
    data,
    error,
    setSearch,
    search,
    filteredTheNews,
  };
}
