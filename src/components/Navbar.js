import React, {Component} from 'react';
import "../index.css"
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render(){
        return(
            <div id={"nav-bar"}>
                <nav id="nav-menu" role="navigation">
                    <Link to={"/"}>
                        <li>HOME</li>

                    </Link>
                    <Link to={"/about"}>
                        <li>ABOUT</li>
                    </Link>
                </nav>
            </div>
        )
    }
}

export default Navbar;
