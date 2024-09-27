import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

//get method

export const getPost = async () => {
  return await api.get("/posts");
};
