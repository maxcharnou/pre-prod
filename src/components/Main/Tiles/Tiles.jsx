import React, { useEffect } from "react";
import { DataContext } from "../../../utils/context";
import NewTile from "./NewTile/NewTile";
import Tile from "./Tile/Tile";
import "./Tiles.scss";

export default function Tiles() {
  const {addTile, deleteTile, changeTile, defaultTab, defaultView, data} = React.useContext(DataContext);
  const [localData, setLocalData] = React.useState(data);

  useEffect(() => {
    setLocalData(data);
  }, [data])

  return (
    <div className="tiles-wrapper">
      {localData.dashboard_tabs[defaultTab]?.dashboard_views[defaultView]?.tiles.map((el) => (
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
