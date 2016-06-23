import React, {Component, PropTypes} from 'react';
import HeadTop from './headTop';

const Styles = {
  logStyles: {'width': '100%', 'height': '40em', 'overflowY': 'scroll'},
  'container': {'marginTop': '100px'}
};


class ApplicationLog extends Component {
  render() {
    return (
      <div>
        <HeadTop></HeadTop>
        <div>
          <input type="checkbox" checked/> 自动滚动到底部
          <textarea id="log" style={Styles.logStyles}></textarea>
        </div>
      </div>
    );
  }
}


export default ApplicationLog;
