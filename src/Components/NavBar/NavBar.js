import React from "react";
import "./NavBar.css";
import logo from "../../assets/images/logo.png";

function NavBar() {
  return (
    <div className="navBar">
      <div className="logo">
        <img className="logoImage" src={logo} width="180" height="170" alt="" />
      </div>

      <div className="navBarComponents">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: true ? "5px" : "0px",
          }}
          className="navBarComponent"
        >
          Home
          <div>
            <hr className="selectionLine" />
          </div>
        </div>

        <div className="navBarComponent">About</div>

        <div className="navBarComponent">Jobs</div>

        <div className="navBarContactBtn">Contact Us</div>
      </div>
    </div>
  );
}

export default NavBar;
