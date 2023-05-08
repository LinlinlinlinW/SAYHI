import React, {Component} from 'react';
import "../index.css"
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render(){
        return(
            <div id={"nav-bar"}>
                <nav id="nav-menu" role="navigation">
                    <Link to={"/"} className={"nav-buttons nav-link"}>
                        <div style={{background:"transparent"}}>HOME</div>
                    </Link>

                    <Link to={"/about"} className={"nav-buttons nav-link"} >
                        <div style={{background:"transparent"}}>ABOUT</div>
                    </Link>
                </nav>
            </div>
        )
    }
}

export default Navbar;
