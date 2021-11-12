import React, { Component } from "react";

class Panel extends Component {
  render() {
    const { label, value, id, onSelect } = this.props;

    return (
      <section
        className="dashboard__panel"
      >
        <h1 className="dashboard__panel-header">{label}</h1>
        <p className="dashboard__panel-value" onClick={onSelect}>{value}</p>
      </section>
    );
  }
}

export default Panel;