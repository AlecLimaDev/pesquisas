import axios from "axios";

const pesquisasIbge = axios.create({
  baseURL: import.meta.env.VITE_API_URL_2,
  params: {},
});

export default pesquisasIbge;
