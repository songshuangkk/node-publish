import ReactDOM from 'react-dom';
import React, {Component, PropTypes} from 'react';
import Common from './common';
import HeadTop from './headTop';
import Home from './home';
import Config from './config';
import DeployLog from './deployLog';
import ApplicationLog from './applicationLog';

import { Router, Route, hashHistory, Link , browserHistory} from 'react-router'

const Styles = {
  'loginbox': {'marginTop' : '50px'},
  'loginAlert': {'display':'none'},
  'inputGroup': {'marginBottom': '25px'},
  'panel': {'marginTop': '40px'},
  'container': {'marginTop': '100px'}
};

class Index extends Component {

  constructor() {
    super();
  }

  chageLoginAlertState() {
    Styles.loginAlert = {'display': 'block'};
  }

  doLogin() {
    event.preventDefault();
    let refs = this.refs;
    let username = refs.username.value;
    let password = refs.password.value;
    let data = {
      userName: username,
      passWord: password
    }
    Common.postMethod('/login', data, (val) => {
        if (!val.OK) {
          // no data to change the state
          this.chageLoginAlertState();
          this.context.router.push('/');
        } else {
          this.context.router.push('/home');
        }
    })
  }

  render () {
    return(
      <div>
        <HeadTop></HeadTop>
        <div className="container" style={Styles.container}>
          <div id="loginbox" style={Styles.loginbox} className="mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
            <div className="panel panel-info" Styles={Styles.panel}>
              <div className="panel-heading">
                <div className="panel-title"> 登录</div>
              </div>
              <div style={Styles.panelBody} className="panel-body">
                <div style={Styles.loginAlert} id="login-alert" className="alert alert-danger col-sm-12">用户名或密码错误</div>
                <form id="loginform" className="form-horizontal" role="form" action="" method="POST">
                  <div style={Styles.inputGroup} className="input-group">
                    <span className="input-group-addon"><i className="icon-user"></i></span>
                    <input className="form-control" ref="username" placeholder="用户名" />
                  </div>
                  <div style={Styles.inputGroup} className="input-group">
                    <span className="input-group-addon"><i className="icon-key"></i></span>
                    <input type="password" className="form-control" ref="password"
                      placeholder="密码" />
                  </div>
                  <div className="input-group">
                    <div className="form-group">
                      <div className="col-sm-12 controls">
                        <button id="btn-login" type="submit" onClick={() => {this.doLogin()}} className="btn btn-success"> 登录 </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Index.contextTypes = {
  router: React.PropTypes.object
}

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={Index}/>
    <Route path="/home" component={Home}/>
    <Route path="/config_env" component={Config}/>
    <Route path="/deployLog" component={DeployLog}/>
    <Route path="/applicationLog" component={ApplicationLog} />
  </Router>
), document.getElementById('body'))
