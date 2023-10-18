import axios from "axios";

const estatiticasApi = axios.create({
  baseURL: import.meta.env.VITE_API_ESTATISTICA,
  params: {},
});

export default estatiticasApi;
