/*
* 用于定义头部导航栏
*/
import React, {Component, PropTypes} from 'react';

const Style = {
  'a': {'color': '#f93'}
};

class HeadTop extends Component {
  render() {
    return (
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar"
              aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">后台系统管理<sup style={Style.a}>beta</sup></a>
          </div>
          <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav">
              <li className="active"><a href="/"> 首页 </a></li>

              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">环境
                  <span className="caret"></span></a>
                <ul className="dropdown-menu" role="menu">
                  <li className="dropdown-header">买好车前台环境</li>
                  <li><a href="http://haimaiche.com:8888">前台部署</a></li>
                  <li className="divider"></li>
                  <li className="dropdown-header">买好车后台环境</li>
                  <li><a href="http://admin.haimaiche.com:8888/?site=mhc&module=admin">后台部署</a></li>
                  <li className="divider"></li>
                  <li className="dropdown-header">前端环境</li>
                  <li><a href="http://haimaiche.com:8888/ue">前端部署</a></li>
                  <li><a href="http://haimaiche.com:8888/bdpush">百度数据推送</a></li>
                </ul>
              </li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">
                  <span className="caret"></span>
                </a>
                <ul className="dropdown-menu" role="menu">
                  <li><a href="{{serverUri}}/auth/change_pwd">修改密码</a></li>
                  <li><a href="{{serverUri}}/auth/logout">退出登录</a></li>
                </ul>
              </li>
              <li><a href="{{serverUri}}/auth/login">登录</a></li>
            </ul>
          </div>
        </div>
      </nav>
      );
  }
}

export default HeadTop;
