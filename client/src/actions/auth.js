import AsyncStorage from "@react-native-async-storage/async-storage";
import { AUTH, TOKEN } from "../constant/type";

export const Init = () => {
  return async (dispatch) => {
    let token = await AsyncStorage.getItem("user");

    if (token !== null) {
      console.log("token fetched");
      dispatch({
        type: TOKEN,
        data: token,
      });
    }
  };
};
