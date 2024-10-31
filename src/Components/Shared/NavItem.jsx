import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const NavItem = ({ link, label }) => (
  <li className="nav-item">
    <Link to={link} className="nav-link">{label}</Link>
  </li>
);

export default NavItem;
