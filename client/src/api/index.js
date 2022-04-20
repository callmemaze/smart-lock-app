import axios from "axios";

const API = axios.create({ baseURL: "http://127.0.0.1:5000" });

export const fetchHistory = () => API.get("/history");
export const fetchNotification = () => API.get("/alert");
export const deletePost = (id) => API.delete(`/history/${id}`);
