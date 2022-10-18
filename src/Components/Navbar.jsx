import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="nav nav-masthead">
      <NavLink
        className={({ isActive }) =>
          isActive ? "active nav-link" : "inactive nav-link"
        }
        to="/index"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "active nav-link" : "inactive nav-link"
        }
        to="/about"
      >
        About
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "active nav-link" : "inactive nav-link"
        }
        to="/contact"
      >
        Contact
      </NavLink>
    </nav>
  );
}

export default Navbar;
