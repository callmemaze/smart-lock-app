import * as api from "../api/index.js";
import { DELETE, FETCH_ALL } from "../constant/type";

export const getHistory = () => async (dispatch) => {
  try {
    const { data } = await api.fetchHistory();
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const getAlert = () => async (dispatch) => {
  try {
    const { data } = await api.fetchNotification();
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteHistory = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);
    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.meesage);
  }
};
