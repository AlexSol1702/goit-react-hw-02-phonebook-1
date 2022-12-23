import { Component } from "react";

export class Filter extends Component { 

  render() {
    const value = this.props.value
    const onChangeFilter = this.props.onChangeFilter
    return (
      <label>
        <p>Find contacts by name</p>
        <input
          type="text"
          value={value}
          onChange={e => onChangeFilter(e.target.value)}
        />
      </label>
    );
  }
}
