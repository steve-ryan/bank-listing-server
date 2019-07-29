import React from "react";
import { Link } from "@reach/router";

function Navbar(props) {
    // const { uri } = props;
    return (
        <div className="Bkapp-container">
            <div className="Bkapp-navbar">
            <a href="/">Home</a>
            <div className="Bkapp-dropdown">
                <button className="Bkapp-dropbtn">
                    Category->
                </button>
                <div className="dropdown-category">
                    <Link to="/local">Local</Link>
                    <Link to="/international">International</Link>
                </div>
            </div>
            <Link to="/Branch">Branch</Link>
            <Link to="/Admin">Admin</Link>
        </div>
        </div>
        
    );
}
export default Navbar;
