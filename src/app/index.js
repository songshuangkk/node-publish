import ReactDOM from 'react-dom';
import React, {Component, PropTypes} from 'react';

class Index extends Component {

  doLogin() {
    debugger;
    console.log(this);
  }

  render () {
    return(
      <div>
        <div>
          <div>登入</div>
        </div>
        <div>
          <form onSubmit={this.doLogin}>
            <div>
              <span>用户名</span>
              <input ref="username"></input>
            </div>
            <div>
              <span>密码</span>
              <input ref="password"></input>
            </div>
            <div>
              <button type="submit">登入</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById('body'));
