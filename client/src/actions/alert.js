import * as api from "../api/index.js";
import { FETCH_ALL } from "../constant/type";

export const getAlert = () => async (dispatch) => {
  try {
    const { data } = await api.fetchNotification();
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
