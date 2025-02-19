import axios from "axios";
const api = axios.create({
  baseURL: "https://react-auth-zkk9.onrender.com/auth",
  withCredentials: true,
});

export default api;
