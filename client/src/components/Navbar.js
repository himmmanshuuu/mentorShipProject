import React from "react";
import "bootstrap/dist/css/bootstrap.css";

function Navbar() {
  return (
    <>
      <nav className="main-nav">
         <div className="logo">
          <ul>
            <li> 
                <NavLink to="/">Home</NavLink>
            </li>
          </ul>
         </div>
      </nav>
    </>
  );
}

export default Navbar;
