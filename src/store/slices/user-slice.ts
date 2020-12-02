import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "../store";
import userService from "../../services/user-service";
import jwtDecode from "jwt-decode";
import { history } from "../../../src/history";
import { alertError } from "./alert-slice";
import { Layout } from "react-grid-layout";

type TUser = {
  userId: string;
  name: string;
  userLayout: Layout[];
};

type UserState = {
  loggedIn?: boolean;
  username?: string;
  user?: TUser;
};

const initialState: UserState = {};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginRequest: (state, action: PayloadAction<string>) => {
      state.loggedIn = true;
      state.username = action.payload;
    },
    loginSuccess: (state, action: PayloadAction<TUser>) => {
      state.loggedIn = true;
      state.user = action.payload;
    },
    loginFailure: (state, action: PayloadAction<void>) => {
      state.loggedIn = undefined;
      state.user = undefined;
      state.username = undefined;
    },
    logout: (state, action: PayloadAction<void>) => {
      state.loggedIn = undefined;
      state.user = undefined;
      state.username = undefined;
    },
    // saveUserLayout: (state, action: PayloadAction<Layout[]>) => {
    //   if(state.user) {
    //     state.user?.userLayout = action.payload;
    //   }
    // },
  },
});

export const {
  loginRequest,
  loginSuccess,
  loginFailure,
  logout,
} = userSlice.actions;

export default userSlice.reducer;

export const userLogin = (
  username: string,
  password: string
): AppThunk => async (dispatch, getState) => {
  let response, userLayout, layout;
  dispatch(loginRequest(username));
  try {
    response = await userService.login({ username, password });
  } catch (err) {
    dispatch(loginFailure());
    dispatch(alertError("Invalid username or password."));
    return;
  }

  const { data } = response;
  localStorage.setItem("TOKEN", data);
  const { _id, name } = jwtDecode(data);

  try {
    userLayout = await userService.getUserSavedLayout(_id);
    layout = JSON.parse(userLayout.data.layout);
  } catch (error) {
    layout = getState().dashboard.layout;
  }

  console.log("userLayout", userLayout);
  dispatch(loginSuccess({ userId: _id, name, userLayout: layout }));
  history.push("/layout");
};

export const userLogout = (): AppThunk => (dispatch) => {
  userService.logout();
  dispatch(logout());
  history.push("/");
};

export const saveUserLayout = (
  userId: string,
  layout: Layout[]
): AppThunk => async (dispatch) => {
  await userService.saveUserLayout(userId, JSON.stringify(layout));
};
