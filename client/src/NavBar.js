import React from "react";

function Navbar() {
    return (
        <div className="Bkapp-container">
            <div className="Bkapp-navbar">
            <a href="//home">Home</a>
            <div className="Bkapp-dropdown">
                <button className="Bkapp-dropbtn">
                    Category->
                </button>
                <div className="dropdown-category">
                    <a href="//local">Local</a>
                    <a href="//international">International</a>
                </div>
            </div>
            <a href="//branch">Branch</a>
            <a href="//Admin">Admin</a>
        </div>
        </div>
    );
}
export default Navbar;
