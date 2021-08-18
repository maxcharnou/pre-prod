import React from "react";
import NewTile from "./NewTile/NewTile";
import Tile from "./Tile/Tile";
import "./Tiles.scss";

export default function Tiles(props) {
  return (
    <div className="tiles-wrapper">
      {props.data?.tiles?.map((el) => (
        <Tile
          data={el}
          key={"dashboard_" + el.name}
          delHandler={props.deleteHandler}
          changeHandler={props.changeHandler}
        />
      ))}
      <NewTile handler={props.addHandler}></NewTile>
    </div>
  );
}
