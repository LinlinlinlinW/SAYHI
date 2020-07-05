import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "../About/css/aboutme.css";
import "../About/css/timeline.css";
import "../About/css/timelineComponent.css";

import React, { Component } from "react";

export default class parallaxElement extends Component {
  render() {
    return (
      <div className={"msg_block"} id={"SAYHI"}>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "transparent", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #fbc8ec" }}
            date="May 2020"
          >
            <h2 className="vertical-timeline-element-title">SAYHI</h2>
            <p>Message Display website</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "transparent", color: "#fff" }}
              contentArrowStyle={{ borderRight: "7px solid  #fbc8ec" }}
              date="May 2020"
          >
            <h2 className="vertical-timeline-element-title">SAYHI</h2>
            <p>Message Display website</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    );
  }
}
