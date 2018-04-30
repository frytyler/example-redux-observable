import { FETCH_REQUEST } from "../epics/fetch";

export const POST_INDEX_FETCH_SUCCESS = "POST_INDEX_FETCH_SUCCESS";
export const POST_SINGLE_FETCH_SUCCESS = "POST_SINGLE_FETCH_SUCCESS";

export const getPosts = () => {
  return {
    type: FETCH_REQUEST,
    method: "GET",
    resource: "/posts",
    nextType: POST_INDEX_FETCH_SUCCESS
  };
};

export const getPost = id => {
  return {
    type: FETCH_REQUEST,
    method: "GET",
    resource: `/posts${id}`,
    nextType: POST_SINGLE_FETCH_SUCCESS
  };
};

export const createPost = data => {
  console.log(data);
  return {
    type: FETCH_REQUEST,
    method: "POST",
    resource: "/posts",
    body: {
      ...data,
      userId: 1
    },
    nextType: POST_SINGLE_FETCH_SUCCESS
  };
};
