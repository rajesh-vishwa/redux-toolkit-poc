import React, { useState, useEffect } from "react";

import "./login.component.css";
// import { login } from "../../services/user-service";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/rootReducer";
import { userLogout, userLogin } from "../../store/slices/user-slice";

const Login: React.FC = () => {
  const [username, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const loggingIn = useSelector((state: RootState) => state.user.loggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userLogout());
  }, [dispatch]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (username && password) {
      dispatch(userLogin(username, password));
    }
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="form_bg">
            <form onSubmit={handleSubmit}>
              <h2 className="text-center">Login Page</h2>
              <br />
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="userid"
                  placeholder="Username"
                  onChange={(e) => setUserName(e.target.value)}
                  value={username}
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  id="pwd"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
              </div>
              <br />
              <div className="align-center">
                <button
                  type="submit"
                  className="btn btn-primary"
                  id="login"
                  disabled={!username || !password}
                >
                  {loggingIn === true && (
                    <span className="spinner-border spinner-border-sm mr-1"></span>
                  )}
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
