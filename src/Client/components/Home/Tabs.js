import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "./css/tabs.css";
import MessageDisplayCard from "./MessageDisplayCard";
import MessageSearchCard from "./MessageSearchCard";

class Tab_List extends Component {
  render() {
    return (
      <Tabs>
        <TabList>
          <Tab>History</Tab>
          <Tab>Search</Tab>
        </TabList>

        <TabPanel>
          <MessageDisplayCard />
        </TabPanel>
        <TabPanel>
          <MessageSearchCard />
        </TabPanel>
      </Tabs>
    );
  }
}

export default Tab_List;
