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
    return (await request.delete(`/posts/${id}`)).data;
  };

  return {
    getData,
    deleteData,
  };
};

export default useCrud;
