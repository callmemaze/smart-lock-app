import * as api from "../api/index.js";
import { GET_ALL } from "../constant/type";

export const getAlert = () => async (dispatch) => {
  try {
    const { data } = await api.fetchNotification();
    dispatch({ type: GET_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteAlert = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);
    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.meesage);
  }
};
