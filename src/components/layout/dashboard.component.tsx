import React from "react";
import RGL, { Layout, WidthProvider } from "react-grid-layout";
import WidgetComponent from "../widget/widget.component";
import { saveUserLayout } from "../../store/slices/user-slice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/rootReducer";

const ReactGridLayout = WidthProvider(RGL);

type TProps = {
  layout: Layout[];
};
const Dashboard: React.FC<TProps> = ({ layout }) => {
  const userId = useSelector((state: RootState) => state.user.user?.userId);

  const dispatch = useDispatch();
  const onLayoutChange = (layout: Layout[]) => {
    // console.log(layout);
    if (userId) dispatch(saveUserLayout(userId, layout));
  };
  return (
    <ReactGridLayout layout={layout} onLayoutChange={onLayoutChange}>
      {layout &&
        layout.map((l) => (
          <div key={l.i} className={"gridItem"}>
            <WidgetComponent list={l.i}></WidgetComponent>
          </div>
        ))}
    </ReactGridLayout>
  );
};

export default Dashboard;
