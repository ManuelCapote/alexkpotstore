import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import "./navigation.styles.scss";

const NavBar = () => {
  return (
    <Fragment>
      <div className="NavBar">
        <Link className="linkLogo" to="/">
          <span className="logo">AlexKpot Store</span>
        </Link>
        <div className="links">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          <Link className="nav-link" to="/sign-in">
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default NavBar;
