import axios from "axios";

const agregadosApi = axios.create({
  baseURL: import.meta.env.VITE_API_URL_1,
  params: {},
});

export default agregadosApi;
