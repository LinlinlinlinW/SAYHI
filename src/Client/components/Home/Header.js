import React, { Component } from "react";
import "../../../Client/index.css";
import ParallaxComponent from "./ParallaxComponent";

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id={"container-div"}>
        <ParallaxComponent speed={0.4} zindex="0" top="100px" textAlign="right">
          <h1>SAY</h1>
        </ParallaxComponent>

        <ParallaxComponent speed={2.5} zindex="0" top="170px" textAlign="left">
          <h1>HI</h1>
        </ParallaxComponent>
      </div>
    );
  }
}

export default Header;
