import { faWindowClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { AppContext } from "../../../../App";
import "./Tab.scss";

export default function Tab(props) {

  const handleChange = (e) => {
    props.handler(e.target.innerText)
  } 
  const deleteTab = (e) => {
    props.delHandler(props.data.name);
    e.stopPropagation();
  }

  return (
      <button className={props.data?.default ? "tab active": "tab"} onClick={handleChange}>
        {props.data?.name}
        <div onClick={deleteTab} className="del-tab">
          <FontAwesomeIcon icon={faWindowClose} color="red"></FontAwesomeIcon>
        </div>
      </button>
  );
}
