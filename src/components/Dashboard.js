import React, { Component, useState } from "react";
import Loading from "./Loading";
import Panel from "./Panel";

import classnames from "classnames";

const data = [
  {
    id: 1,
    label: "Total Interviews",
    value: 6,
  },
  {
    id: 2,
    label: "Least Popular Time Slot",
    value: "1pm",
  },
  {
    id: 3,
    label: "Most Popular Day",
    value: "Wednesday",
  },
  {
    id: 4,
    label: "Interviews Per Day",
    value: "2.3",
  },
];

class Dashboard extends Component {
  
  state = { loading: false, focused: null};

  selectPanel(id) {
  
    this.setState(previousState => ({
      focused: previousState.focused !== null ? null : id
    }));
  }

  

  render() {

    const dashboardClasses = classnames("dashboard", {"dashboard--focused": this.state.focused});
    if (this.state.loading) {
      return <Loading />;
    }

    const panels = data
    .filter(
      panel => this.state.focused === null || this.state.focused === panel.id
    )
    .map((x) => (
      <Panel key={x.id} id={x.id} label={x.label} value={x.value} onSelect={() => this.selectPanel(x.id)} />
    ));

    return <main className={dashboardClasses}>{panels}</main>;
  }
}

export default Dashboard;
