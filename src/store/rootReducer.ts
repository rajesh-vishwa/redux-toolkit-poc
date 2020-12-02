import { combineReducers } from "@reduxjs/toolkit";
import dashboardReducer from "./slices/dashboard-slice";
import alertReducer from "./slices/alert-slice";
import userReducer from "./slices/user-slice";

const rootReducer = combineReducers({
  dashboard: dashboardReducer,
  alert: alertReducer,
  user: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
