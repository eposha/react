import React, { Component } from "react";
import Message from "./Message";

const text1 = "Hello, world!";
const text2 = "Another excitingtext.";

class Page extends Component {
  state = {
    text: null
  };
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       text: null
  //     };
  //   }

  setText = text => {
    this.setState({
      text
    });
  };

  render() {
    return (
      <div className="page">
        <Message text={this.state.text} />
        <div className="actions">
          <button className="btn" onClick={() => this.setText(text1)}>
            Text1
          </button>
          <button className="btn" onClick={() => this.setText(text2)}>
            Text2
          </button>
          <button className="btn" onClick={() => this.setText("")}>
            Clear
          </button>
        </div>
      </div>
    );
  }
}

export default Page;
