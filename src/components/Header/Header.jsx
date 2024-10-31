import "../../assets/partials/__global.scss";
import "../../assets/partials/typography.scss";
import "../../assets/partials/__variables.scss";
import "../../assets/partials/__mixins.scss";
import "./Header.scss";
import { NavLink } from "react-router-dom";

import MohanMuruge from "../../assets/images/Mohan-muruge.jpg";
import SearchIcon from "../../assets/Icons/search.svg";
import BrainflixLogo from "../../assets/Logo/BrainFlix-logo.svg";
import UploadIcon from "../../assets/Icons/upload.svg";

export default function Header() {
  return (
    <div className="nav">
      <NavLink to = "/">
      <img className="nav__logo" src={BrainflixLogo} alt="brainflix-logo"
       />
       </NavLink>
      <div className="nav__container">
        <div className="nav__search-container">
          <input
            type="search"
            name="search-bar"
            id="search-bar"
            className="nav__search-bar"
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search"
          />
          <img
            className="nav__search-icon"
            src={SearchIcon}
            alt="search-icon"
          />
          <img className="nav__mohan" src={MohanMuruge} alt="Mohan-muruge" />
        </div>
        <div className="nav__button-container">
        <img
            className="nav__upload-icon"
            src={UploadIcon}
            alt="upload-icon"
          />
          <button className="nav__button">UPLOAD</button>
        </div>
      </div>
    </div>
  );
}
