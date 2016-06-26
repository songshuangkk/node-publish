import React, {Component, PropTypes} from 'react';
import HeadTop from './headTop';
import SOCKET from './socket';

const Styles = {
  logStyles: {'width': '100%', 'height': '40em', 'overflowY': 'scroll'},
  'container': {'marginTop': '100px'}
};

class DeployLog extends Component {

  componentDidMount() {
    // To get build pid
    this.state.buildPid =  this.props.location.query.buildPid;
    SOCKET.emit('deployLog', {buildPid: this.state.buildPid});
    SOCKET.on('getDeployLog', (msg) => {
        console.log(msg);
    });
  }

  constructor () {
    super();
    this.state = {
      textarea: '',
      checked: 'checked'
    }
  }

  checkBoxChange(event) {
    // this.setState({checked: true})
  }

  render() {
    return (
      <div>
        <HeadTop></HeadTop>
        <div style={Styles.container}>
          <input type="checkbox" onChange={()=> {this.checkBoxChange()}}/> 自动滚动到底部
          <textarea id="log" style={Styles.logStyles} defaultValue={this.state.textarea}></textarea>
        </div>
      </div>
    );
  }
}

export default DeployLog;
