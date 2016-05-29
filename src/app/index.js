import ReactDOM from 'react-dom';
import React, {Component, PropTypes} from 'react';
import Common from './common';
import HeadTop from './headTop';

const Style = {
  'loginbox': {'marginTop' : '50px'},
  'loginAlert': {'display':'none'},
  'inputGroup': {'marginBottom': '25px'},
  'panel': {'marginTop': '40px'}
};

class Index extends Component {

  doLogin() {
    const refs = this.refs;
    const username = refs.username.value;
    const password = refs.password.value;
    var data = {
      userName: username,
      passWord: password
    }
    Common.postMethod('/login', data, (val) => {
      console.log(val);
    })
  }

  render () {
    return(
      <div>
        <HeadTop></HeadTop>
        <div className="container">
          <div id="loginbox" style={Style.loginbox} className="mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
            <div className="panel panel-info" style={Style.panel}>
              <div className="panel-heading">
                <div className="panel-title"> 登录</div>
              </div>
              <div style={Style.panelBody} className="panel-body">
                <div style={Style.loginAlert} id="login-alert" className="alert alert-danger col-sm-12"></div>
                <form id="loginform" className="form-horizontal" role="form" action="" method="POST">
                  <div className="alert alert-danger" role="alert">
                    <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                    <span className="sr-only"></span>
                  </div>
                  <div style={Style.inputGroup} className="input-group">
                    <span className="input-group-addon"><i className="icon-user"></i></span>
                    <input id="login-username" type="text" className="form-control" name="username" value="" placeholder="用户名" />
                  </div>
                  <div style={Style.inputGroup} className="input-group">
                    <span className="input-group-addon"><i className="icon-key"></i></span>
                    <input id="login-password" type="password" className="form-control" name="password"
                      placeholder="密码" />
                  </div>
                  <div className="input-group">
                    <div className="form-group">
                      <div className="col-sm-12 controls">
                        <button id="btn-login" type="submit" className="btn btn-success"> 登录 </button>
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

ReactDOM.render(<Index />, document.getElementById('body'));
