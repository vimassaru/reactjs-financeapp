import axios from "axios";

const api = axios.create({
  // Calling our FastAPI applications with Axios
  baseURL: "http://localhost:8000",
});

export default api;
