import React, {Component} from 'react';

import HeadTop from './headTop';
import ServerOperatingBtn from './serverOperatingBtn';

const Styles = {
  'ServerOperatingBtn': {'marginTop': '10px;'},
  'HeadTop': {'marginBottom': '50px'}
}

class Home extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <HeadTop></HeadTop>
        <ServerOperatingBtn style={Styles.ServerOperatingBtn}></ServerOperatingBtn>
      </div>
    );
  }
}

export default Home;
