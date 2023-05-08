import React, { Component } from "react";
import LoaderGif from "./cat_spinner.gif";

export default class PageLoader extends Component {
  constructor() {
    super();
  }

  render() {
    if (!this.props.loading) return null;

    return (
      <div>
        <img src={LoaderGif} />
      </div>
    );
  }
}
