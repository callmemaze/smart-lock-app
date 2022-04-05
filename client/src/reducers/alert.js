import { DELETE, FETCH_ALL } from "../constant/type";

export default (alert = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    default:
      return alert;
  }
};
