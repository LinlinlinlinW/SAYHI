import React, { Component } from "react";
import LoaderGif from "./css/cat_spinner.gif";

export default class PageLoader extends Component {

  render() {
    if (!this.props.loading) return null;

    return (
      <div>
        <img src={LoaderGif} alt="cat cat" />
      </div>
    );
  }
}
