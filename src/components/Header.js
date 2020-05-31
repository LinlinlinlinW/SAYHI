import React, {Component} from 'react';
import "../index.css"


class Header extends Component {

    render() {
        return(
            <div id={"container-div"}>
                <ul className={"title-ul"}>
                    <li className={"scroll text"} data-rate={"-1.1"} data-direction={"vertical"}>SAY</li>
                    <li className={"scroll text"} data-rate={"-1.5"} data-direction={"vertical"}>HI</li>
                </ul>
            </div>
        )
    }

}

export default Header;