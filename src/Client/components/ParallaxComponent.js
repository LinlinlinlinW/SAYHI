import React, { Component } from "react";

class parallaxElement extends Component {
  constructor(props) {
    super(props);

    this.state = {
      speed: this.props.speed || 1,

      //   width: "50%",
      flex: "50%",
      height: this.props.height || "100%",
      textAlign: this.props.textAlign,

      top: this.props.top || "0%",
      left: this.props.left,
      right: this.props.right,

      position: "relative",
      zIndex: this.props.zindex || "0",

      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundColor: "transparent",
    };

    this.myRef = React.createRef();
    this.handleScroll = this.throttle(this.handleScroll.bind(this), 10);
    this.top = this.getTop();
  }

  componentDidMount = () => {
    window.addEventListener("scroll", this.handleScroll);
  };

  componentWillUnmount = () => {
    window.removeEventListener("scroll", this.handleScroll);
  };

  handleScroll = () => {
    const speed = this.props.speed;
    const top = this.top;

    const pageTop = window.scrollY;
    const newTop = top - pageTop * speed;
    // console.log(">> pageTop:", pageTop);
    // console.log(">> newTop:", newTop);

    this.myRef.current.style.top = `${newTop}px`;
  };

  getTop() {
    const top = this.props.top;
    return top.indexOf("%") > -1
      ? window.innerHeight * (top.replace("%", "") / 100)
      : parseInt(top, 10);
  }

  throttle(fn, wait) {
    let time = Date.now();

    return function () {
      if (time + wait - Date.now() < 0) {
        fn();
        time = Date.now();
      }
    };
  }

  render() {
    return (
      <div ref={this.myRef} style={{ ...this.state }}>
        {this.props.children}
      </div>
    );
  }
}

export default parallaxElement;
