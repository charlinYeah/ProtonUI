import React, {Component} from 'react';
import { Carousel} from "antd";
import RobFlashWindow from "../user/data/RobFlashWindow.js"

class Home extends Component {

  render() {
    const lunboSetting = {
      dots: true,
      lazyLoad: true,
    };
    return (
      <div>
        <Carousel {...lunboSetting} ref={el => (this.slider = el)}>
          <div key={1} align="center"><h3><RobFlashWindow/></h3></div>
          <div key={2}><h3></h3></div>
        </Carousel>
      </div>
    )
  }
}

export default Home;
