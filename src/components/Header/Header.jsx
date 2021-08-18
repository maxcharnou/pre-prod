import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faHamburger,
  faHome,
  faQuestionCircle,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./Header.scss";

export default function Header() {
  return (
    <header>
      <div className="container">
        <div className="header-burger-menu">
            <FontAwesomeIcon icon={faHamburger} color="#047186"></FontAwesomeIcon>
        </div>
        <div className="header-home">
            <FontAwesomeIcon icon={faHome} color="#047186"></FontAwesomeIcon>
            <span> Home</span>
        </div>
        <div className="header-date">04-44PM(EESET)</div>
        <div className="header-add-info">YOU ON KAP-WFR-AP01</div>
        <div className="header-search-bar">
          <input type="text" placeholder="Search"/>
          <button>
            <FontAwesomeIcon icon={faSearch} color="black" />
          </button>
        </div>
        <div className="header-support">
          <FontAwesomeIcon icon={faQuestionCircle} color="#047186" />
        </div>
        <div className="header-notifications">
          <FontAwesomeIcon icon={faBell} color="#047186" />
        </div>
        <div className="header-user">
            <span>NA</span>
        </div>
      </div>
    </header>
  );
}
