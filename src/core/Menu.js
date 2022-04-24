import React, { Fragment } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";

import { signout, isAuthenticated } from "../auth/helper";

const withRouter = (Component) => {
	const Wrapper = (props) => {
		const history = useNavigate();
		return <Component history={history} {...props} />;
	};
	return Wrapper;
};

const CurrentTab = (path) => {
    const location = useLocation();
    
    if (location.pathname === path) {
        return { color: "#2ecc72" };
    } else {
        return { color: "#FFFFFF" };
    }
};

const Menu = (path) => {

    return (
    <div>
      <ul className="nav nav-tabs bg-dark">
        <li className="nav-item" >
          <Link
            style={CurrentTab("/")}
            className="nav-link"
            to="/"
          >
            Home
          </Link>
        </li>
        {isAuthenticated() && (
        <li className="nav-item">
          <Link
            style={CurrentTab("/cart")}
            className="nav-link"
            to="/cart"
          >
            Cart
          </Link>
        </li>
        )}
        {isAuthenticated() && (
          <li className="nav-item">
            <Link
              style={CurrentTab("/user/dashboard")}
              className="nav-link"
              to="/user/dashboard"
            >
              Dashboard
            </Link>
          </li>
        )}
        {!isAuthenticated() && (
          <Fragment>
            <li className="nav-item">
              <Link
                style={CurrentTab("/signup")}
                className="nav-link"
                to="/signup"
              >
                Signup
              </Link>
            </li>
            <li className="nav-item">
              <Link
                style={CurrentTab("/signin")}
                className="nav-link"
                to="/signin"
              >
                Signin
              </Link>
            </li>
          </Fragment>
        )}

        {isAuthenticated() && (
          <li className="nav-item">
        
            <Link
                onClick={() => {
                    signout(() => {
                        <Navigate to="/" />;
                    });
                }}
                className="nav-link"
                to="/">
                Signout
            </Link>  
          </li>
        )}
      </ul>
    </div>
    );
};

export default withRouter(Menu);
