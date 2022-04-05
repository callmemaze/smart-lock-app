import { combineReducers } from "redux";

import history from "./history";
import auth from "./auth.js";
import alert from "./alert";
export const reducers = combineReducers({ history, auth });
