import React, {Component, PropTypes} from 'react';
import Common from './common';

const Styles = {
  'panelDefault': {'border': '2px solid #7EB3CE'},
  'nginxPort': {'width': '50px'},
  'progressInfoContainer': {'display': 'none'},
  'colLg': {'marginTop': '100px'},
  'buildPid': {'color': 'red'}
}

class ServerOperatingBtn extends Component {

  constructor() {
    super();
    this.state = {
      buildPid: ''
    }
  }

  // To build the application
  build() {
    event.preventDefault();
    var data = {};
    Common.getMethod('/build', data, (value) => {
      this.setState({
        buildPid: value.pid
      });
    });
  }

  // To restart the application
  restart() {

  }
  // To show deploy log
  showDeployLog() {
    this.context.router.push({
      pathname: '/deployLog',
      query: {
        buildPid: this.state.buildPid
      }
    });
  }
  // To show application log
  showApplicationLog() {
    this.context.router.push('/applicationLog');
  }

  render() {
    return (
      <div className="col-lg-12" style={Styles.colLg}>
        <div className="panel panel-default" style={Styles.panelDefault}>
          <div className="panel-heading" data-id="" data-port="">
            <h2><label>部署端口：</label><a href="http://haimaiche.com" target="_blank"></a></h2>
            <span className="label" id="pid-info"></span>
            <span className="label" id="http-status-info"></span>
          </div>
          <div className="panel-body">
            <div>
              <p><label>分支：</label>&nbsp;&nbsp;&nbsp;<label>描述：</label>&nbsp;&nbsp;&nbsp;&nbsp;<label>部署进程：<span style={Styles.buildPid}>{this.state.buildPid}</span></label></p>
            </div>
            <div className="alert alert-info" id="progress_info_container" data-id="" style={Styles.progressInfoContainer}>
              <button type="button" className="close" data-dismiss="alert">×</button>
              <p><i className="icon-spinner icon-spin"></i> <span id="progress_info" data-id="" data-env="daily"></span>
              </p>
            </div>
            <p className="center btn-container" data-id=""
              data-port=""
              data-branch=""
              data-module="">
              <button className="btn btn-primary btn-sm" id="btn-build"
                data-command-name="build"
                data-build-uid="" onClick={() => {this.build()}}><i className="icon-play"></i>
                开始部署
              </button>
              <button className="btn btn-primary btn-sm" id="btn-template-start"
                data-command-name="template"
                data-build-uid=""><i className="icon-refresh"></i> 模板同步
              </button>
              <button className="btn btn-primary btn-sm" id="btn-restart"
                data-command-name="restart"
                data-build-uid=""
                onClick={() => {this.restart();}}
              ><i className="icon-step-forward"></i> 重启应用
              </button>
              <a className="btn btn-primary btn-sm show-log" target="_blank"
                data-log-file=""
                onClick={() => {this.showDeployLog()}}
              ><i className="icon-eye-open" ></i> 部署日志</a>
              <a className="btn btn-primary btn-sm show-log" target="_blank"
                data-log-file="" onClick={() => {this.showApplicationLog()}}>
                <i className="icon-eye-open"></i> 应用日志</a>
            </p>
          </div>
        </div>

        <div className="col-lg-12">
          <div className="panel panel-default">
            <div className="panel-body">
              NGINX代理端口:<input type="text" name="nginx-port" id="nginx-port" value="" maxlength="5" style={Styles.nginxPort}/>
              <button type="button" className="btn btn-default btn-xs" data-command-name="change_nginx_port">更改</button>
              (当前:<span id="current-port"></span>)
              <br/><br/>
              <a type="button" href="" className="btn btn-default btn-sm" target="_blank">
                <i className="icon-edit"></i>修改部署信息
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ServerOperatingBtn.contextTypes = {
  router: React.PropTypes.object
}





export default ServerOperatingBtn;
