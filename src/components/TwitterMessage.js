import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
        value: ""
    };
  }

  handleChange = (event) => {

      const val = event.target.value;

      this.setState({value:val})
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.value} onChange={this.handleChange}/>
        <span>  Chars left: {this.props.maxChars - this.state.value.length}</span>
      </div>
    );
  }
}

export default TwitterMessage;
