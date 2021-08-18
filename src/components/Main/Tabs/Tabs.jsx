import { faCog, faPlus, faSortDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Tab from "./Tab/Tab";
import "./Tabs.scss";

export default function Tabs(props) {
  const [inputValue, setInputValue] = React.useState('');
  const [editMode, setEditMode] = React.useState(false);

  const switchMode = () => {
    setEditMode(!editMode);
  }

  const handleInputValue = (e) => {
    setInputValue(e.target.value);
  }

  const submitCreation = () => {
    props.addHandler(inputValue);
    switchMode();
  }

  return (
    <div className="tabs-wrapper">
      {props?.tabs?.map((el) => (
        <Tab data={el} key={el.id} handler={props.handler} delHandler={props.delHandler}/>
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
