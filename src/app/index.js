import ReactDOM from 'react-dom';
import React, {Component, PropTypes} from 'react';
import Common from './common';

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
    })
  }

  render () {
    return(
      <div>
        <div>
          <div>登入</div>
        </div>
        <div>
          <div>
            <span>用户名</span>
            <input ref="username"/>
          </div>
          <div>
            <span>密码</span>
            <input ref="password"/>
          </div>
          <div>
            <button type="submit" onClick={this.doLogin.bind(this)} >登入</button>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById('body'));
