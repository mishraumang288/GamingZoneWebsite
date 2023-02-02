import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="container-fluid nav_bg">
      <div className="row">
        <div className="col-12 mx-auto">
          
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid" style={{background:"rgb(11, 188, 243, 0.1)"}}>

              <NavLink style={{fontSize:"20px", fontWeight:"500", color:"#0bbcf3", textShadow:"textShadow: 0px 0px 100px #fff"}} 
              className="navbar-brand" to="/">
                Gaming Zone 
              </NavLink>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav mb-2 mb-lg-0">
                  <li className="nav-item">
                    
                    <NavLink
                      activeClassName="menu-active"
                      className="nav-link active"
                      aria-current="page"
                      to="/"
                    >
                      Home
                    </NavLink>

                  </li>
                  <li className="nav-item">

                    <NavLink
                      activeClassName="menu-active"
                      className="nav-link active"
                      to="/about"
                    >
                      About
                    </NavLink>

                  </li>
                  <li className="nav-item">
                    
                    <NavLink
                      activeClassName="menu-active"
                      className="nav-link active"
                      to="/contact"
                    >
                      Contact
                    </NavLink>

                  </li>
                  <li className="nav-item">
                  
                    <NavLink
                      activeClassName="menu-active"
                      className="nav-link active"
                      to="/services"
                    >
                      Games
                    </NavLink>
                    </li>

                    <li>
                    <NavLink
                      activeClassName="menu-active"
                      className="nav-link active"
                      to="/login"
                    >
                      Login/Register
                    </NavLink>
                    </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Navbar;