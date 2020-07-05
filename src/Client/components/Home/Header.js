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
        <ParallaxComponent speed={1.8} zindex="0" top="300px" textAlign="right">
          <p style={{ fontSize: "60px" }}>SAY</p>
        </ParallaxComponent>

        <ParallaxComponent speed={2.5} zindex="0" top="300px" textAlign="left">
          <p style={{ fontSize: "60px" }}>HI</p>
        </ParallaxComponent>
      </div>
    );
  }
}

export default Header;
