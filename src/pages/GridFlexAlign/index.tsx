import React from "react";
import styles from "./index.less";
import { Alert, Card, Row, Col, Typography } from "antd";
import BarCodeHistory from '../BarCodeHistory';
import SkuQueue from '../SkuQueue';

const CodePreview = ({ children }) => (
  <pre className={styles.pre}>
    <code>
      <Typography.Text copyable>
        {children}
      </Typography.Text>
    </code>
  </pre>
);

export default () => (
  <div className={styles.container}>
    <div id="components-grid-demo-flex-align">
      <div>
        <Row type="flex" justify="center" align="top" gutter={12}>
          <Col span={14}>
            <Card>
              <Row>
                <Col>
                  <Typography.Text strong>
                    <p target="_blank" color="blue" rel="noopener noreferrer">
                      扫码结果
                    </p>
                  </Typography.Text>
                </Col>
                <Col offset={3}>
                  <CodePreview>
                    B50647853
                  </CodePreview>
                </Col>
              </Row>
              <Row>
                <BarCodeHistory/>
              </Row>
            </Card>
          </Col>
          <Col span={10}>
            <Card value={80} className={styles.tableFlex}>
              <SkuQueue/>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  </div>
);
