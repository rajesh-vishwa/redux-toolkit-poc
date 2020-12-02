import React, { useState } from "react";
import Header from "../header/header.component";
import Dashboard from "./dashboard.component";
import { useSelector } from "react-redux";
import { RootState } from "../../store/rootReducer";

const LayoutComponent: React.FC = () => {
  const layout = useSelector(
    (state: RootState) => state.user.user?.userLayout || state.dashboard.layout
  );

  const [newCounter, setNewcCounter] = useState<number>(0);

  const onAddWidget = () => {};

  // const newLayout = layout.push(items)
  return (
    <div>
      <Header layout={layout} onAddWidget={onAddWidget} />
      <Dashboard layout={layout} />
    </div>
  );
};

export default LayoutComponent;
