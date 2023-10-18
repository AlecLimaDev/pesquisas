import axios from "axios";

const pesquisasIbge = axios.create({
  baseURL: import.meta.env.VITE_API_PESQUISAS,
  params: {},
});

export default pesquisasIbge;
