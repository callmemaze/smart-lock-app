import { GET_ALL, DELETE } from "../constant/type";

export default (alert = [], action) => {
  switch (action.type) {
    case GET_ALL:
      return action.payload;
    case DELETE:
      return alert.filter((alert) => alert._id.$oid !== action.payload);
    default:
      return alert;
  }
};
