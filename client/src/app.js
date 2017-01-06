import React, {Component} from 'react';
import ReactDOM from "react-dom";

// const Test = (props) => {
//   return (
    //   <h1>Test</h1>
    // );
// }
class Test extends Component {
  render() {
    return (
      <h1>Do it again</h1>
    );
  }
}

const main = document.getElementById('main');

ReactDOM.render(<Test/>, main);
