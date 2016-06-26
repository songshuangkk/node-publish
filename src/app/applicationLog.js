import React, {Component, PropTypes} from 'react';
import HeadTop from './headTop';
import SOCKET from './socket';

const Styles = {
  logStyles: {'width': '100%', 'height': '40em', 'overflowY': 'scroll'},
  'container': {'marginTop': '100px'}
};


class ApplicationLog extends Component {

  constructor() {
    super();
    SOCKET.emit('applicationLog', {message: 'halsdfsa'});
    SOCKET.on('getApplicationLog', (msg) => {

    });

    this.state = {
      textarea: ''
    }
  }

  render() {
    return (
      <div>
        <HeadTop></HeadTop>
        <div>
          <input type="checkbox" checked/> 自动滚动到底部
          <textarea id="log" style={Styles.logStyles} value={this.state.textarea}></textarea>
        </div>
      </div>
    );
  }
}


export default ApplicationLog;
