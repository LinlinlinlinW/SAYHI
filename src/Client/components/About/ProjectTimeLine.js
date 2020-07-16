import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "../About/css/aboutme.css";
import cuteProfile from "../About/css/cuteProfile.jpg";

import "../About/css/timeline.css";
import "../About/css/timelineComponent.css";

import React, { Component } from "react";

export default class parallaxElement extends Component {
  render() {
    return (
      <div id={"intro"}>
        <div className={"msg_block"}>
          <label className={"card-container-first-row"}>Bolin Wang</label>
          <br />
          <div>
            <img id={"profile"} src={cuteProfile} alt="CUTEEEE" />
            <p className={"card-container-second-row"}>
              {" "}
              introduction to be determined{" "}
            </p>
          </div>
        </div>

        <div className={"msg_block"}>
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "transparent", color: "#fff" }}
              contentArrowStyle={{ borderRight: "7px solid  #fbc8ec" }}
            >
              <h2 className="vertical-timeline-element-title">SAYHI</h2>
              <h4>May 2020</h4>
              <p>
                Message Display website <br />
                by HTML, CSS, JavaScript, React-Redux, MongoDB
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "transparent", color: "#fff" }}
              contentArrowStyle={{ borderRight: "7px solid  #fbc8ec" }}
            >
              <h2 className="vertical-timeline-element-title">SuperRent</h2>
              <h4>Sept 2019</h4>
              <p>
                Car rental system <br />
                by Java, Oracle SQL
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "transparent", color: "#fff" }}
              contentArrowStyle={{ borderRight: "7px solid  #fbc8ec" }}
            >
              <h2 className="vertical-timeline-element-title">TimeManager</h2>
              <h4>Sept 2018</h4>
              <p>
                Weather query and schedule management system <br />
                by Java
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "transparent", color: "#fff" }}
              contentArrowStyle={{ borderRight: "7px solid  #fbc8ec" }}
            >
              <h2 className="vertical-timeline-element-title">TankFighter</h2>
              <h4>May 2018</h4>
              <p>
                Classical Tank War <br />
                by Unity 3D, C#
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    );
  }
}
