import React, { useEffect } from "react";
import { DataContext } from "../../../utils/context";
import NewTile from "./NewTile/NewTile";
import Tile from "./Tile/Tile";
import "./Tiles.scss";

export default function Tiles() {
  const {addTile, deleteTile, changeTile, defaultTab, defaultView, data, getDefaultTab, getDefaultView} = React.useContext(DataContext);
  const [localData, setLocalData] = React.useState(data);
  const [localTab, setLocalTab] = React.useState(defaultTab);
  const [localView, setLocalView] = React.useState(defaultView);

  useEffect(() => {
    setLocalData(data);
    setLocalTab(getDefaultTab());
    setLocalView(getDefaultView());
  }, [data, getDefaultTab, getDefaultView])

  return (
    <div className="tiles-wrapper">
      {localData.dashboard_tabs[localTab]?.dashboard_views[localView]?.tiles.map((el) => (
        <Tile
          data={el}
          key={"dashboard_" + el.name}
          delHandler={deleteTile}
          changeHandler={changeTile}
        />
      ))}
      <NewTile handler={addTile}></NewTile>
    </div>
  );
}
