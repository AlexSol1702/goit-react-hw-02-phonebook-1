import { Component } from "react";

export class Filter extends Component {
  state = {
    text: "",
  };

  handleChange = (e) => {
     
      this.setState({ text: e.target.value });
      this.props.onChangeFilter(this.state.text);
      
  };

  render() {
    return (
      <label>
        <p>Find contacts by name</p>
        <input
          type="text"
          value={this.state.text}
          onChange={this.handleChange}
        />
      </label>
    );
  }
}
