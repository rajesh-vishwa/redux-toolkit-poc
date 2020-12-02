import http from "./http-service";

const tokenKey = "TOKEN";

const login = async (loginRequestData: {
  username: string;
  password: string;
}) => {
  return await http.post("api/auth", loginRequestData);
};

const getUserSavedLayout = async (userId: string) => {
  return await http.get(`api/layout/${userId}`);
};

const saveUserLayout = async (userId: string, layout: string) => {
  return await http.post(`api/layout`, { userId, layout });
};

const logout = (): void => {
  localStorage.removeItem(tokenKey);
};

const isUserAuthenticated = (): boolean => {
  const token = localStorage.getItem(tokenKey);
  if (token) {
    return true;
  }
  return false;
};

export default {
  login,
  isUserAuthenticated,
  logout,
  getUserSavedLayout,
  saveUserLayout,
};
