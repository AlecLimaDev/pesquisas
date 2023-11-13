import axios from "axios";

const divisoesApi = axios.create({
  baseURL: import.meta.env.VITE_API_DIVISOES,
  params: {},
});

export default divisoesApi;
