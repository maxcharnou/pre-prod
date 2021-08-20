import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { DataContext } from "../../../utils/context";
import ViewsDropdownItem from "../ViewsDropdownItem/ViewsDropdownItem";
import "./ViewSelector.scss";

export default function ViewSelector() {
  const {
    data,
    changeDefaultView,
    addView,
    defaultTab,
    defaultView
  } = React.useContext(DataContext);
  const [inputValue, setInputValue] = React.useState("");
  const [editMode, setEditMode] = React.useState(false);
  const [localData, setLocalData] = React.useState(data);

  const switchMode = () => {
    setEditMode(!editMode);
  };

  const handleChange = (e) => {
    console.log(e.target.label)
    changeDefaultView(e.target.value);
  };

  const handleInputValue = (e) => {
    setInputValue(e.target.value);
  };

  const submitCreation = () => {
    addView(inputValue);
    switchMode();
  };

  useEffect(() => {
    setLocalData(data);
  }, [data]);

  return (
    <div className={"selector-status"}>
      <span>Saved: </span>
      <select name="select" id="view-select" onChange={handleChange}>
        {localData.dashboard_tabs[defaultTab]?.dashboard_views.map((el) => (
          <ViewsDropdownItem data={el} key={el.name + "_view" }/>
        ))}
      </select>
      <button className="add_view" onClick={switchMode}>
        <FontAwesomeIcon
          icon={faPlus}
          color="white"
          size={"1x"}
        ></FontAwesomeIcon>
      </button>
      {editMode && (
        <div className="edit_view">
          <input
            type="text"
            onInput={handleInputValue}
            placeholder="Input view name"
          />
          <button onClick={submitCreation}>Submit</button>
        </div>
      )}
    </div>
  );
}
