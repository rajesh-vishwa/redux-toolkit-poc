import { createSlice } from "@reduxjs/toolkit";
import { Layout } from "react-grid-layout";

type DashboardState = {
  layout: Layout[];
};

let initialState: DashboardState = {
  layout: [
    { i: "b", x: 1, y: 0, w: 3, h: 2, minW: 3, maxW: 4, minH: 2, maxH: 4 },
    { i: "c", x: 4, y: 0, w: 3, h: 2, minW: 3, maxW: 4, minH: 2, maxH: 4 },
    { i: "a", x: 7, y: 0, w: 3, h: 2, minW: 3, maxW: 4, minH: 2, maxH: 4 },
  ],
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {},
});

// export const {} = dashboardSlice.actions;
export default dashboardSlice.reducer;
