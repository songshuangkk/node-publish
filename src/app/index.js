import ReactDOM from 'react-dom';
import React, {Component, PropTypes} from 'react';

class Index extends Component {
  render() {
    return(
      <div>
        <div>
          <div>登入</div>
        </div>
        <div>
          <form>
            <div>
              <span>用户名</span>
              <input></input>
            </div>
            <div>
              <span>密码</span>
              <input></input>
            </div>
            <div>
              <input type="submit" name="登入"/>
            </div>
          </form>
        </div>
      </div>
    );
  };
}

ReactDOM.render(<Index />, document.getElementById('body'));
