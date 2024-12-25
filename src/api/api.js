import axios from "axios";

export const URLA = () =>
  window.location.hostname === "localhost"
    ? "http://localhost:8082"
    : "https://honebook-server.onrender.com";

export const contactsApi = axios.create({
  baseURL: URLA(),
  withCredentials: true,
});
