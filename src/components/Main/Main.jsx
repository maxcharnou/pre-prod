import React from "react";
import * as response from "../../utils/response.json";
import "./Main.scss";
import Tabs from "./Tabs/Tabs";
import Tiles from "./Tiles/Tiles";
import ViewSelector from "./ViewSelector/ViewSelector";

export default function Main() {
  const [data, setData] = React.useState(response);
  const [defaultTab, setDefaultTab] = React.useState(0);
  const [defaultView, setDefaultView] = React.useState(0);
  const [dataArray, setDataArray] = React.useState(null);

  const getDefaultTab = () => {
    const idx = data.dashboard_tabs.findIndex((el) => el.default);
    return idx > 0 ? idx : 0;
  };

  const getDefaultView = () => {
    const idx = data.dashboard_tabs[getDefaultTab()].dashboard_views.findIndex(
      (el) => el.default
    );
    return idx > 0 ? idx : 0;
  };

  const changeDefaultTab = (name) => {
    const nData = { ...data };
    nData.dashboard_tabs.forEach((el) => (el.default = false));
    nData.dashboard_tabs.find((el) => el.name === name).default = true;
    setData(nData);
  };

  const changeDefaultView = (name) => {
    const nData = { ...data };
    nData.dashboard_tabs[defaultTab].dashboard_views.forEach(
      (el) => (el.default = false)
    );
    data.dashboard_tabs[defaultTab].dashboard_views.find(
      (el) => el.name === name
    ).default = true;
    setData(nData);
  };

  const changeTile = (url, newName, oldName) => {
    const newData = { ...data };
    const idx = newData.dashboard_tabs[defaultTab].dashboard_views[defaultView].tiles.findIndex(
      (el) => el.name === oldName
    ) || 0;
    newData.dashboard_tabs[defaultTab].dashboard_views[defaultView].tiles[idx].url = url;
    newData.dashboard_tabs[defaultTab].dashboard_views[defaultView].tiles[idx].name = newName;
    setData(newData);
    console.log(data)
  }

  const addTab = (name) => {
    const newData = { ...data };
    const newTab = {
      default: false,
      id: 0,
      name: name,
      dashboard_views: [],
    };
    newData.dashboard_tabs.push(newTab);
    setData(newData);
  };

  const addView = (name) => {
    const newData = { ...data };
    const newView = {
      default: false,
      id: 0,
      name: name,
      tiles: [],
    };
    newData.dashboard_tabs[defaultTab].dashboard_views.push(newView);
    setData(newData);
  };

  const addTile = (url, name) => {
    const newData = { ...data };
    const newTile = {
      url: url,
      name: name,
      height: 1,
      width: 1,
    };
    newData.dashboard_tabs[defaultTab].dashboard_views[defaultView].tiles.push(
      newTile
    );
    setData(newData);
  };

  const deleteTab = (name) => {
    const newData = { ...data };
    const idx = data.dashboard_tabs.findIndex(el=>el.name === name);
    newData.dashboard_tabs.splice(idx, 1);
    newData.dashboard_tabs[idx - 1].default = true;
    newData.dashboard_tabs[idx - 1].dashboard_views[0].default = true;
    getDefaultTab();
    getDefaultView();
    setData(newData);
  };

  const deleteTile = (name) => {
    const newData = { ...data };
    const idx = newData.dashboard_tabs[defaultTab]?.dashboard_views[defaultView].tiles.findIndex(
      (el) => el.name === name
    ) || 0;
    newData.dashboard_tabs[defaultTab]?.dashboard_views[defaultView].tiles.splice(idx, 1);
    setData(newData);
  };

  React.useEffect(() => {
    setDefaultTab(getDefaultTab());
    setDefaultView(getDefaultView());
  }, [data, defaultTab, defaultView]);

  return (
    <main>
      <div className="container">
        <Tabs
          tabs={data.dashboard_tabs}
          handler={changeDefaultTab}
          addHandler={addTab}
          delHandler={deleteTab}
        />
        {
          <ViewSelector
            views={data.dashboard_tabs[defaultTab]?.dashboard_views}
            handler={changeDefaultView}
            addHandler={addView}
          />
        }
        {
          <Tiles
            data={data.dashboard_tabs[defaultTab]?.dashboard_views[defaultView]}
            addHandler={addTile}
            deleteHandler={deleteTile}
            changeHandler={changeTile}
          />
        }
      </div>
    </main>
  );
}
