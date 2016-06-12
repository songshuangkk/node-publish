import React, {Component, PropTypes} from 'react';
import HeadTop from './headTop';
import Common from './common';

const Styles = {
  'loginbox': {'marginTop' : '50px'},
  'loginAlert': {'display':'none'},
  'inputGroup': {'marginBottom': '25px', 'marginTop': '20px'},
  'panel': {'marginTop': '40px'},
  'container': {'marginTop': '100px'}
};

class Config extends Component {

  constructor() {
    super();
  }

  submitConfig() {
    event.preventDefault();
    let refs = this.refs;

    let data = {
      javaHome: refs.javaHome.value,
      javaOptions: refs.javaOptions.value,
      jettyHome: refs.jettyHome.value,
      mavenHome: refs.mavenHome.value
    };
    // To request server to edit the env;

    Common.postMethod('/editEnv', data, (result)=>{
      // To do something
      alert('OK');
      this.context.router.push('/home');
    });
  }

  render() {
    return (
      <div>
        <HeadTop></HeadTop>
        <div className="container" style={Styles.container}>
          <div id="loginbox" style={Styles.loginbox} className="mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
            <div className="panel panel-info" Styles={Styles.panel}>
              <div style={Styles.panelBody} className="panel-body">
                <form id="loginform" className="form-horizontal" role="form" action="" method="POST">
                  <div style={Styles.inputGroup} className="input-group">
                    <span className="input-group-addon"><i className="icon-user"></i></span>
                    <input className="form-control" ref="javaHome" placeholder="JAVA_HOME" />
                  </div>
                  <div style={Styles.inputGroup} className="input-group">
                    <span className="input-group-addon"><i className="icon-key"></i></span>
                    <input className="form-control" ref="javaOptions" placeholder="JAVA_OPTIONS" />
                  </div>
                  <div style={Styles.inputGroup} className="input-group">
                    <span className="input-group-addon"><i className="icon-key"></i></span>
                    <input className="form-control" ref="jettyHome" placeholder="JETTY_HOME" />
                  </div>
                  <div style={Styles.inputGroup} className="input-group">
                    <span className="input-group-addon"><i className="icon-key"></i></span>
                    <input className="form-control" ref="mavenHome" placeholder="MAVEN_HOME" />
                  </div>
                  <div className="form-group">
                    <div className="col-sm-12 controls">
                      <button id="btn-login" type="submit" onClick={() => {this.submitConfig()}} className="btn btn-success"> 提交 </button>
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

Config.contextTypes = {
  router: React.PropTypes.object
}

export default Config;
