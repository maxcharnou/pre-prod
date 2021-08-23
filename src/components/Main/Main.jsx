import React from "react";
// import * as response from "../../utils/response.json";
import "./Main.scss";
import Tabs from "./Tabs/Tabs";
import Tiles from "./Tiles/Tiles";
import ViewSelector from "./ViewSelector/ViewSelector";
import { useDataContextControls, DataContext } from "../../utils/context";

export default function Main() {
  return (
    <DataContext.Provider value={useDataContextControls()}>
      <main>
        <div className="container">
          <Tabs />
          <ViewSelector />
          <Tiles />
        </div>
      </main>
    </DataContext.Provider>
  );
}
