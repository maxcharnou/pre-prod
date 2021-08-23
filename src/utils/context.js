import React from "react";

import * as response from "./response.json";

export const DataContext = React.createContext();
export const useDataContext = () => React.useContext(DataContext);

export const useDataContextControls = () => {
  const [data, setData] = React.useState(response);
  const [defaultTab, setDefaultTab] = React.useState(0);
  const [defaultView, setDefaultView] = React.useState(0);

  const getDefaultTab = React.useCallback(() => {
    const idx = data.dashboard_tabs.findIndex((el) => el.default);
    return idx > 0 ? idx : 0;
  }, [data]);

  const getDefaultView = React.useCallback(() => {
    const idx = data?.dashboard_tabs[defaultTab]?.dashboard_views.findIndex(
      (el) => el.default
    );
    return idx > 0 ? idx : 0;
  },[data.dashboard_tabs, defaultTab]);

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
    const idx =
      newData.dashboard_tabs[defaultTab].dashboard_views[
        defaultView
      ].tiles.findIndex((el) => el.name === oldName) || 0;
    newData.dashboard_tabs[defaultTab].dashboard_views[defaultView].tiles[
      idx
    ].url = url;
    newData.dashboard_tabs[defaultTab].dashboard_views[defaultView].tiles[
      idx
    ].name = newName;
    setData(newData);
  };

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
    const idx = data.dashboard_tabs.findIndex((el) => el.name === name);
    newData.dashboard_tabs.splice(idx, 1);
    if(newData.dashboard_tabs.length > 0) {
      newData.dashboard_tabs[idx > 0 ? idx - 1 : 0].default = true;
      newData.dashboard_tabs[idx > 0 ? idx - 1 : 0].dashboard_views[0].default = true;
    }
    setDefaultTab(idx > 0 ? idx - 1 : 0);
    setDefaultView(0);
    setData(newData);
  };

  const deleteTile = (name) => {
    const newData = { ...data };
    const idx =
      newData.dashboard_tabs[defaultTab]?.dashboard_views[
        defaultView
      ].tiles.findIndex((el) => el.name === name) || 0;
    newData.dashboard_tabs[defaultTab]?.dashboard_views[
      defaultView
    ].tiles.splice(idx, 1);
    setData(newData);
  };

  React.useEffect(() => {
    setDefaultTab(getDefaultTab());
    setDefaultView(getDefaultView());
  }, [data, getDefaultTab, getDefaultView])


  return {
    DataContext,
    addTab,
    addTile,
    addView,
    changeDefaultTab,
    changeDefaultView,
    changeTile,
    data,
    defaultTab,
    defaultView,
    deleteTab,
    deleteTile,
    getDefaultTab,
    getDefaultView,
    setData,
    setDefaultTab,
    setDefaultView,
    useDataContext
  };
};
