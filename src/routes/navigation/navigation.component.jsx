import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import SiteLogo from "../../assets/react.svg?react";
import "./navigation.styles.scss";

const NavBar = () => {
  return (
    <Fragment>
      <div className="NavBar">
        <Link className="linkLogo" to="/">
          <div>
            <SiteLogo className="logo" />
          </div>
        </Link>
        <div className="links">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          <Link className="nav-link" to="/shop">
            CONTACT
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
