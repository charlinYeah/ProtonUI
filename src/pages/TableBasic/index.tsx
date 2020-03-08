import React from 'react';
import style from './index.less';
import { Table, Divider, Tag } from 'antd';

const detail = {
  display: false,
  orderId: 'N04001',
  totalNumber: '6',
  percentage: '0.33',
  location: 'Row 1, Col 2',
  tags: '未完成',
  info: '详情详情详情详情详情详情',
};

const columns = [
  {
    title: '订单号',
    dataIndex: 'orderId',
    key: 'orderId',
    render: text => <a>{text}</a>,
  },
  {
    title: '总件数',
    dataIndex: 'totalNumber',
    key: 'totalNumber',
  },
  {
    title: '完成率',
    dataIndex: 'percentage',
    key: 'percentage',
  },
  {
    title: '货架位置',
    dataIndex: 'location',
    key: 'location',
  },
  {
    title: '标签',
    key: 'tags',
    dataIndex: 'tags',
    render: tags => (
      <span>
        {tags.map(tag => {
          let color = tag.toString() === '已完成' ? 'geekblue' : 'green';
          if (tag === 'error') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </span>
    ),
  },
  {
    title: '操作',
    key: 'action',
    render: (text, record) => (
      <span>
        <a>详情 {record.name}</a>
        <Divider type="vertical" />
        <a>删除</a>
      </span>
    ),
  },
];

const data = [
  {
    key: '1',
    orderId: 'N04001',
    totalNumber: 6,
    percentage: 0.33,
    location: 'Row 1, Col 2',
    tags: ['未完成'],
  },
  {
    key: '2',
    orderId: 'N04002',
    totalNumber: 3,
    percentage: 1,
    location: 'Row 1, Col 4',
    tags: ['已完成'],
  },
  {
    key: '3',
    orderId: 'N04008',
    totalNumber: 5,
    percentage: 0.8,
    location: 'Row 4, Col 3',
    tags: ['未完成'],
  },
];

export default () => (
  <div className={style.container}>
    <div id="components-table-demo-basic">
      <Table columns={columns} dataSource={data} />
    </div>
    <div className={style.detail}>
      <div className={style.orderId}>订单号: {detail.orderId}</div>
      <div className={style.totalNumber}>总件数: {detail.totalNumber}</div>
      <div className={style.percentage}>完成率: {detail.percentage}</div>
      <div className={style.location}>货架位置: {detail.location}</div>
      <div className={style.tags}>标签: {detail.tags}</div>
      <div className={style.info}>详情: {detail.info}</div>
      <div className={style.action}>
        <a>确认</a>
      </div>
    </div>
  </div>
);
