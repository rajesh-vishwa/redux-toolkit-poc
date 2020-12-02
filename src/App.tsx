import React, { useEffect } from "react";
import Login from "./components/login/login.component";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./store/rootReducer";
import "./App.css";

import { Switch, Route, Redirect, useHistory } from "react-router";
import LayoutComponent from "./components/layout/layout.component";
import { alertClear } from "./store/slices/alert-slice";
import userService from "./services/user-service";

const App: React.FC = () => {
  const alert = useSelector((state: RootState) => state.alert);
  const dispatch = useDispatch();
  let history = useHistory();

  const isLoggedIn = userService.isUserAuthenticated();

  useEffect(() => {
    history.listen((location, action) => {
      // clear alert on location change
      dispatch(alertClear());
    });
  }, [dispatch, history]);

  return (
    <React.Fragment>
      {/* <Header /> */}
      {alert.message && (
        <div className={`alert ${alert.type}`}>{alert.message}</div>
      )}
      <Switch>
        <Route
          path="/layout"
          render={(props) => {
            if (!isLoggedIn) {
              return <Redirect to="/" />;
            }
            return <LayoutComponent />;
          }}
          exact
        ></Route>

        <Route
          path="/"
          render={(props) => {
            if (isLoggedIn) {
              return <Redirect to="/layout" />;
            }
            return <Login />;
          }}
          exact
        ></Route>
        <Redirect to="/" />
      </Switch>
    </React.Fragment>
  );
};

export default App;
