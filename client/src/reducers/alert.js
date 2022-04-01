import { DELETE, FETCH_ALL } from "../constant/type";

export default (history = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    default:
      return history;
  }
};
