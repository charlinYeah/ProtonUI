import React from "react";
import styles from "./index.less";
import { Button, Row } from "antd";

export default () => {

  const state = {
    orderMsg: ["#start -a#","#stop -a#","#finish#","#test#"],
    orderIndex: {
      start: 0,
      pause: 1,
      finish: 2,
      test: 3
    },
    testModuleFlag: 0
  };

  const buttonHandler = async (orderId)=>{
    let orderInfo;
    if(orderId === state.orderIndex.test)
      if(state.testModuleFlag ===0) {
        state.testModuleFlag = 1;
        orderInfo = "#testModule#";
      }
      else {
        state.testModuleFlag = 0;
        orderInfo = "#normalModule#";
      }
    else
      orderInfo = state.orderMsg[orderId];

    await fetch('http://localhost:4000/dashboard/control', {
      method: 'PUT', // or 'PUT'
      body: JSON.stringify({
        id: orderId,
        order: orderInfo
      }), // data can be `string` or {object}!
      headers: new Headers({
        'Accept':'application/json,text/plain,*/*'
      })
    }).then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => console.log('Success:', response));
  };

  return (
    <div className={styles.container}>
      <Row type="flex" justify="center" align="top" gutter={40}>
        <Button type="primary" className="super-lg" size={"large"} onClick={()=>buttonHandler(state.orderIndex.start)}>
          开始
        </Button>
        <Button type="primary" className="super-lg" size={"large"} onClick={()=>buttonHandler(state.orderIndex.pause)}>
          暂停
        </Button>
      </Row>
      <Row type="flex" justify="center" align="top" gutter={40}>
        <Button type="primary" className="super-lg" size={"large"} onClick={()=>buttonHandler(state.orderIndex.finish)}>
          终止
        </Button>
        <Button type="primary" className="super-lg" size={"large"} disabled>
          加车
        </Button>
      </Row>
    </div>
  )
};

