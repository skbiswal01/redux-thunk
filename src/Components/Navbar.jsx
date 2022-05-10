import { Link } from "react-router-dom";

import "../App.css";

export const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <Link className="nav-list" to="/Dashboard">
          Dashboard
        </Link>
        <Link className="nav-list" to="/register">
          Register
        </Link>
        <Link className="nav-list" to="/login">
          Login
        </Link>
      </div>
    </>
  );
};
