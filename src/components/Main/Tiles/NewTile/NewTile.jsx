import {
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import PropTypes from 'prop-types';
import "./NewTile.scss";

export default function NewTile(props) {
  const h = 33;
  const [isEdit, setIsEdit] = React.useState(false);
  const [url, setUrl] = React.useState("");
  const [name, setName] = React.useState("");

  const handleMode = () => {
    setIsEdit(!isEdit);
  };

  const handleNameInput = (e) => {
    setName(e.target.value);
  };

  const handleUrlInput = (e) => {
    setUrl(e.target.value);
  };

  const submitChanges = () => {
    if (url !== "" && name !== "") {
      props.handler(url, name);
      setIsEdit(!isEdit);
      setName("");
      setUrl("");
    } else {
      setIsEdit(!isEdit);
    }
  };

  return (
    <div className="tile" style={{ width: `${0.5 * h}%` }}>
      {!isEdit && (
        <button className="add-card" onClick={handleMode}>
          <FontAwesomeIcon
            icon={faPlus}
            color="white"
            size={"10x"}
          ></FontAwesomeIcon>
        </button>
      )}
      {isEdit && (
        <input
          type="text"
          placeholder="Input URL for change picture"
          onInput={handleUrlInput}
        />
      )}
      {isEdit && (
        <input
          type="text"
          placeholder="Input name of picture"
          onInput={handleNameInput}
        />
      )}
      {isEdit && (
        <button className="submit-edit-card" onClick={submitChanges}>
          Submit changes
        </button>
      )}
    </div>
  );
}

NewTile.propTypes = {
  handler: PropTypes.func,
}
