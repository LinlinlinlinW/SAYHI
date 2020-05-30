import React, {Component} from 'react';
import "../index.css"

class Navbar extends Component {
    render(){
        return(
            <div id={"nav-bar"}>
                <nav id="nav-menu" role="navigation">
                    <a className="nav-buttons nav-link" href="../../public/index.html">HOME</a>
                </nav>
            </div>
        )
    }
}

export default Navbar;
/*<a className="nav-buttons nav-link" href="contact.html">ABOUT</a>*/