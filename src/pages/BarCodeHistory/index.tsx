import React from 'react';
import styles from './index.less';
import { Table, Typography } from 'antd';

const columns = [
  {
    title: 'Barcode',
    dataIndex: 'barcode',
  },
  {
    title: 'Time',
    dataIndex: 'time',
  },
];

const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    barcode: 'B50647802',
    time: '2020-1-24',
  });
}

export default () => (
  <div className={styles.container}>
    <div id="components-table-demo-size">
      <div>
        <Typography.Text strong>
          <p target="_blank" color="blue" rel="noopener noreferrer">
            历史数据
          </p>
        </Typography.Text>
        <Table columns={columns} dataSource={data} size="small" pagination={{ pageSize: 4 }} />
      </div>
    </div>
  </div>
);
