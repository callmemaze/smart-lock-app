import AsyncStorage from "@react-native-async-storage/async-storage";
import * as actionType from "../constant/type";
const authReducer = (state = { authData: null }, action) => {
  switch (action.type) {
    case actionType.AUTH:
      AsyncStorage.setItem("user", JSON.stringify({ ...action?.data }));
      return { ...state, authData: action?.data };
    case actionType.TOKEN:
      return { authToken: action?.data };
    case actionType.LOGOUT:
      AsyncStorage.removeItem("user");
      return { ...state, authData: null, authToken: null };
    default:
      return state;
  }
};
export default authReducer;
