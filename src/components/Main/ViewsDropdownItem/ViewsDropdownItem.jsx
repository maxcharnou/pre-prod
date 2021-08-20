import React from "react";
import PropTypes from 'prop-types';
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

ViewsDropdownItem.propTypes = {
  data: PropTypes.object,
  handler: PropTypes.func
}
