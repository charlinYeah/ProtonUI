import React from "react";
import styles from "./index.less";
import { Timeline, Typography } from "antd";

export default () => (
  <div className={styles.container}>
    <Typography.Text strong>
      <p target="_blank" color="blue" rel="noopener noreferrer">
        货物队列
      </p>
    </Typography.Text>
    <div id="components-timeline-demo-color">
      <Timeline>
        <Timeline.Item color="green">
          <p>Barcode:B50647853 ------ RobId:1</p>
        </Timeline.Item>
        <Timeline.Item color="green">
          <p>Barcode:B50647853 ------ RobId:3</p>
        </Timeline.Item>
        <Timeline.Item color="red">
          <p>Invalid barcode ------ Error</p>
        </Timeline.Item>
        <Timeline.Item color="gray">
          <p>Barcode:B50647853</p>
        </Timeline.Item>
        <Timeline.Item color="gray">
          <p>Barcode:B50647853</p>
        </Timeline.Item>
      </Timeline>
    </div>
  </div>
);
