import axios from "axios";

const BASE_URL =
  import.meta.env.MODE === "development"
    ? "http://localhost:5002/api"
    : import.meta.env.VITE_API_URL; // ✅ production में env से लो

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true, // cookies/token support
});
