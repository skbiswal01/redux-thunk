import { Link } from "react-router-dom";

import "../App.css";

export const Navbar = () => {
  return (
    <>
      <div className="navbar bg-dark">
        <Link className="nav-list bg-danger" to="/Dashboard">
          Dashboard
        </Link>
        <Link className="nav-list  bg-danger" to="/register">
          Register
        </Link>
        <Link className="nav-list  bg-danger" to="/login">
          Login
        </Link>
      </div>
    </>
  );
};
