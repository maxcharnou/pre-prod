import { faClosedCaptioning, faEdit, faWindowClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Tile.scss";

export default function Tile(props) {
  const h = 33;
    const [isEdit, setIsEdit] = React.useState(false);
    const [url, setUrl] = React.useState('');
    const [name, setName] = React.useState('');

    const handleMode = () => {
        setIsEdit(!isEdit);
    }

    const handleNameInput = (e) => {
        setName(e.target.value);
    }

    const handleUrlInput = (e) => {
        setUrl(e.target.value)
    }

    const submitChanges = () => {
        console.log([url, name, props.data.name]);
        props.changeHandler(url, name, props.data.name)
        setIsEdit(!isEdit);
    }

    const deleteTile = () => {
      props.delHandler(props.data.name);
    }

  return (
    <div className="tile" style={{ width: `${props.data.width * h}%` }}>
        <button className="delete-card" onClick={deleteTile}>
            <FontAwesomeIcon icon={faWindowClose} color="red"></FontAwesomeIcon>
        </button>
        <button className="edit-card" onClick={handleMode}>
            <FontAwesomeIcon icon={faEdit} color="red"></FontAwesomeIcon>
        </button>
      {isEdit ? <input type="text" placeholder="Input URL for change picture" onInput={handleUrlInput}/>:<img src={props.data.url} alt={props.data.name} />}
      {isEdit ? <input type="text" placeholder="Input name of picture" onInput={handleNameInput}/>:<p>{props.data.name}</p>}
      {isEdit && <button className="submit-edit-card" onClick={submitChanges}>Submit changes</button>}
    </div>
  );
}
