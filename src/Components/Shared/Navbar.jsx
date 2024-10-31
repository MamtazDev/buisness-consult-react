import { navigationData } from '../../utils/data';
import NavItem from './NavItem';

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
 <div className="menubar__section">
    <div className="container">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link to="/"><img className="img-fluid" src="https://i.postimg.cc/2SGdRdqJ/Logo-Main.png" alt="Logo" /></Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon">
            <i className="fa-solid fa-bars"></i>
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto">
            {navigationData.map((item, index) => (
              <NavItem key={index} link={item.link} label={item.label} />
            ))}
          </ul>
          <form className="d-flex">
            <Link to="/">  <button className="btn btn-success" type="button">
                Sign Up
              </button></Link>
          </form>
        </div>
      </div>
    </nav>
    </div>
 </div>
  );
};

export default Navbar;
