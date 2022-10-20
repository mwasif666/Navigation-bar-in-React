import React from "react";
import { Link } from "react-router-dom";
import './index.css';
 
const Navigation=()=>{

    return(
        <div className="maimoona">
            <h1>Wasi</h1>
        
        <ul>
            <li>

            <Link id="wasi" to={"/"}>Home</Link>
            
            </li>
            <li>

            <Link id="wasi" to={"About"}>About</Link>
            
            </li>
            <li>

            <Link id="wasi" to={"Contact"}>Contact</Link>
            
            </li>

        </ul>
        
        </div>
    )

}
export default Navigation;