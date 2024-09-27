import React from "react";
import { getPost } from "../api/PostApi";

function Posts() {
  async function getPostData() {
    return await getPost();
  }

  return { getPostData };
}

export default Posts;
