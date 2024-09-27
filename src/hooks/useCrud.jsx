import React from "react";
import useAuth from "./useAuth";

const useCrud = () => {
  const { request } = useAuth();

  // get data

  const getData = async () => {
    return (await request.get("/posts")).data;
  };

  // delete data

  const deleteData = async (id) => {
    return await request.delete(`/posts/${id}`);
  };

  //add data

  const postData = async (post) => {
    return await request.post("/posts", post);
  };

  return {
    getData,
    deleteData,
    postData,
  };
};

export default useCrud;
