import logo from "../Images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Search from "./Search";

const Navbar = () => {
  return (
    <div className="row">
      <nav className="col-12 navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand w-25" href="#">
            <img src={logo} alt="Logo" className="w-50 h-50" />
          </a>
          <div className="col-auto w-50" id="">
            <label htmlFor="search">
              <FontAwesomeIcon
                icon={faSearch}
                className="fasearch"
                aria-hidden="true"
              />
              <Search />
            </label>
          </div>
          <div className="mode-box w-25">
            <div className="mode-box-container">
              <div className="switch"></div>
              <span>DarkMode</span>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
