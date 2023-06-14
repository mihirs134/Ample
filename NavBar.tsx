import React from "react";
import { Nav, NavLink, NavMenu }
    from "./NavbarElements";
import "C:/Users/mihir/.vscode/amplewebsite/src/index.css"
import amplelogo from "C:/Users/mihir/.vscode/amplewebsite/src/assets/AmpleSmal.png";
import instagram from "C:/Users/mihir/.vscode/amplewebsite/src/assets/InstagramLogo.png";


function Navbar() {
    
    return (
        <>

            <Nav className = "nav">
                <NavLink to="/">
                    <div style = {{width: "30%"}}>
                        <img src={amplelogo} ></img> 
                    </div>    
                </NavLink>
                <NavMenu>
                    <NavLink to="/about" >
                        <h6> About Us </h6>
                    </NavLink>
                    <NavLink to="/issue">
                    <h6> What is the Issue? </h6>
                    </NavLink>
                    <NavLink to="/Programs" >
                    <h6> Current Programs </h6>
                    </NavLink>
                    <NavLink to="/action" >
                    <h6> Action  </h6>
                    </NavLink>
                    <NavLink to="/youcanhelp" >
                    <h6> You Can Help! </h6>
                    </NavLink>
                    <NavLink to="/resources">
                    <h6> Resources </h6>
                    </NavLink>
                    <NavLink to="https://www.instagram.com/ample.mh/">
                    <div className="image" style={{ width: "30px" }}>
                            <a href="https://www.instagram.com/ample.mh/" target="_blank">
                        <img src={instagram}></img>
                    </a>
                        </div>
                    </NavLink>
                    
                </NavMenu>
            </Nav>
        </>
    );
};
 
export default Navbar;