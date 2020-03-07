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
  </PageHeaderWrapper>
);
