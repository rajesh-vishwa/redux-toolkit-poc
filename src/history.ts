import { createBrowserHistory } from "history";

export const history = createBrowserHistory({
  basename: process.env.NODE_ENV === "development" ? "/" : "/"
});
