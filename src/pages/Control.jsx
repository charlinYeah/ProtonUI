import React from 'react';
import { PageHeaderWrapper, GridContent } from '@ant-design/pro-layout';
import { Statistic, Card, Row, Col } from 'antd';
import numeral from 'numeral';
import CarouselFade from './CarouselFade';
import MotionControl from './MotionControl';
import FunctionControl from './FunctionControl';

const divStyle = {
  color: 'blue',
  background: `url(${require("./example2.jpg")})`,
};

export default () => (
  <PageHeaderWrapper>
    <GridContent>
      <React.Fragment>
        <Row gutter={24}>
          <Col
            xl={14}
            lg={24}
            md={24}
            sm={24}
            xs={24}
            style={{
              marginBottom: 24,
            }}
          >
            <Card title="实时观测台" bordered={false}>
              <div style={divStyle}>
              <Row type="flex" justify="center" align="top" gutter={12}>
                <Col md={6} sm={12} xs={24}>
                  <Statistic title="总车数" suffix="辆" value={numeral(5).format('0,0')} />
                </Col>
                <Col md={6} sm={12} xs={24}>
                  <Statistic title="订单饱和率" value="47%" />
                </Col>
                <Col md={6} sm={12} xs={24}>
                  <Statistic title="总件数" suffix="件" value={numeral(229).format('0,0')} />
                </Col>
                <Col md={6} sm={12} xs={24}>
                  <Statistic title="总时长" suffix="秒" value={numeral(718).format('0,0')} />
                </Col>
              </Row>
              <Row
                style={{
                  marginTop: 16,
                }}
              ></Row>
              <CarouselFade />
              </div>
            </Card>
          </Col>
          <Col xl={8} lg={24} md={24} sm={24} xs={24}>
            <Card
              title="运动控制"
              style={{
                marginBottom: 24,
              }}
              bordered={false}
            >
              <MotionControl />
            </Card>
            <Card
              title="功能控制"
              style={{
                marginBottom: 24,
              }}
              bodyStyle={{
                textAlign: 'center',
              }}
              bordered={false}
            >
              <FunctionControl />
            </Card>
          </Col>
        </Row>
      </React.Fragment>
    </GridContent>
    <p
      style={{
        textAlign: 'center',
        marginTop: 24,
      }}
    >
      Want to add more pages? Please refer to{' '}
      <a href="https://pro.ant.design/docs/block-cn" target="_blank" rel="noopener noreferrer">
        use block
      </a>
      。
    </p>
  </PageHeaderWrapper>
);
