import logo from "../Images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="Logo" />
          </a>
          <div className="col-auto" id="">
            <label htmlFor="search">
              <FontAwesomeIcon
                icon={faSearch}
                className="fasearch"
                aria-hidden="true"
              />
              <input
                type="text"
                placeholder="Search movies... "
                className="searchbox form-control"
                name="search"
              />
            </label>
          </div>
          <div className="mode-box">
            <div className="mode-box-container">
              <div className="switch"></div>
              <span>DarkMode</span>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
