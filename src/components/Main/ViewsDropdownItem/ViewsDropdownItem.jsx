import { faWindowClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./ViewsDropdownItem.scss";

export default function ViewsDropdownItem(props) {

  return (
    <>
    <option className="dropdown-item">
      {props.data.name}
    </option>
    </>
  );
}
