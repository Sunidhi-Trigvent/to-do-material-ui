import React from "react";
import useAuth from "./useAuth";

const useCrud = () => {
  const { request } = useAuth();

  // get posts

  const getPost = async () => {
    return (await request.get("/posts")).data;
  };

  return {
    getPost,
  };
};

export default useCrud;
