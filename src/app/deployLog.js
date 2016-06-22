import React, {Component, PropTypes} from 'react';
import HeadTop from './headTop';

const Styles = {
  
};

class DeployLog extends Component {
  render() {
    return (
      <div>
        <HeadTop></HeadTop>
        <input type="checkbox" id="auto_scroll_bottom_checkbox" checked="checked"/> 自动滚动到底部
        <textarea id="log" style="width:100%; height: 40em; overflow-y: scroll;" readonly="readonly"></textarea>
      </div>
    );
  }
}

export default DeployLog;
