import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import ViewsDropdownItem from "../ViewsDropdownItem/ViewsDropdownItem";
import "./ViewSelector.scss";

export default function ViewSelector(props) {
  const [inputValue, setInputValue] = React.useState('');
  const [editMode, setEditMode] = React.useState(false);

  const switchMode = () => {
    setEditMode(!editMode);
  }

  const handleChange = (e) => {
    props.handler(e.target.value);
  };

  const handleInputValue = (e) => {
    setInputValue(e.target.value);
  }

  const submitCreation = () => {
    props.addHandler(inputValue);
    switchMode();
  }

  return (
    <div className={"selector-status"}>
      <span>Saved: </span>
      <select name="select" id="view-select" onChange={handleChange}>
        {props?.views?.map((el) => (
          <ViewsDropdownItem data={el} key={el.name + "_view"}/>
        ))}
      </select>
      <button className="add_view" onClick={switchMode}>
        <FontAwesomeIcon icon={faPlus} color="white" size={"1x"}></FontAwesomeIcon>
      </button>
      {editMode && <div className="edit_view">
        <input type="text" onInput={handleInputValue} placeholder="Input view name"/>
        <button onClick={submitCreation}>Submit</button>
      </div>}
    </div>
  );
}
