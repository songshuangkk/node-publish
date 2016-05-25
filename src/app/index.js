import ReactDOM from 'react-dom';
import React, {Component, PropTypes} from 'react';

class Index extends Component {
  render() {
    return(
      <div>Hello World</div>);
  };
}

ReactDOM.render(<Index />, document.getElementById('body'));
