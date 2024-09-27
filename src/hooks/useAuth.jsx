import axios from "axios";

const useAuth = () => {
  const request = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
  });
  return { request };
};

export default useAuth;

// // //get method

// // export const getPost = () => {
// //   return api.get("/posts");
// // };
