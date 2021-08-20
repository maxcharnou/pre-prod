import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useDataContext } from "../../../utils/context";
import Tab from "./Tab/Tab";
import "./Tabs.scss";

export default function Tabs() {
  const {changeDefaultTab, data, addTab, deleteTab} = useDataContext()
  const [inputValue, setInputValue] = React.useState('');
  const [editMode, setEditMode] = React.useState(false);
  const [localData, setLocalData] = React.useState(data);

  const switchMode = () => {
    setEditMode(!editMode);
  }

  const handleInputValue = (e) => {
    setInputValue(e.target.value);
  }

  const submitCreation = () => {
    addTab(inputValue);
    switchMode();
  }

  React.useEffect(() => {
    setLocalData(data)
  }, [data])

  return (
    <div className="tabs-wrapper">
      {localData.dashboard_tabs.map((el) => (
        <Tab data={el} key={el.id} handler={changeDefaultTab} delHandler={deleteTab}/>
      ))}
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
            placeholder="Input tab name"
          />
          <button onClick={submitCreation}>Submit</button>
        </div>
      )}
    </div>
  );
}
