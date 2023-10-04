import axios from "axios";

const dataIbge = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  params: {
    tipo: "noticias",
    de: "01-01-2023"
  }
});

export default dataIbge;
