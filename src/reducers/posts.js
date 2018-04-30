import {
  POST_INDEX_FETCH_SUCCESS,
  POST_SINGLE_FETCH_SUCCESS
} from "../actions/posts.js";

export default function(state = {}, action) {
  switch (action.type) {
    case POST_INDEX_FETCH_SUCCESS: {
      const { data } = action;

      return data.reduce((acc, post) => {
        acc[post.id] = post;

        return acc;
      }, {});
    }
    case POST_SINGLE_FETCH_SUCCESS: {
      const { data } = action;

      return {
        ...state,
        [data.id]: data
      };
    }
    default:
      return state;
  }
}
