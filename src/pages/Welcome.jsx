import React from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { Card, Alert } from 'antd';
import TableBasic from './TableBasic';
import GridFlexAlign from './GridFlexAlign';

export default () => (
  <PageHeaderWrapper>
    <Alert
      message="新商品码已成功录入"
      type="success"
      showIcon
      banner
      style={{
        margin: -8,
        marginBottom: 24,
      }}
    />
    <Card
      style={{
        marginTop: 16,
      }}
    >
      <GridFlexAlign />
    </Card>
    <Card
      style={{
        marginTop: 16,
      }}
    >
      <TableBasic />
    </Card>
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
