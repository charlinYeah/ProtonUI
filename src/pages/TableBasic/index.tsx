import React from "react";
import styles from "./index.less";
import { Table, Divider, Tag } from "antd";

const columns = [
  {
    title: "订单号",
    dataIndex: "orderId",
    key: "orderId",
    render: text => <a>{text}</a>
  },
  {
    title: "总件数",
    dataIndex: "totalNumber",
    key: "totalNumber"
  },
  {
    title: "完成率",
    dataIndex: "percentage",
    key: "percentage"
  },
  {
    title: "货架位置",
    dataIndex: "location",
    key: "location"
  },
  {
    title: "标签",
    key: "tags",
    dataIndex: "tags",
    render: tags => (
      <span>
        {tags.map(tag => {
          let color = tag.toString() === "已完成" ? "geekblue" : "green";
          if (tag === "error") {
            color = "volcano";
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </span>
    )
  },
  {
    title: "操作",
    key: "action",
    render: (text, record) => (
      <span>
        <a>详情 {record.name}</a>
        <Divider type="vertical" />
        <a>删除</a>
      </span>
    )
  }
];

const data = [
  {
    key: "1",
    orderId: "N04001",
    totalNumber: 6,
    percentage: 0.33,
    location: "Row 1, Col 2",
    tags: ["未完成"]
  },
  {
    key: "2",
    orderId: "N04002",
    totalNumber: 3,
    percentage: 1,
    location: "Row 1, Col 4",
    tags: ["已完成"]
  },
  {
    key: "3",
    orderId: "N04008",
    totalNumber: 5,
    percentage: 0.8,
    location: "Row 4, Col 3",
    tags: ["未完成"]
  }
];

export default () => (
  <div className={styles.container}>
    <div id="components-table-demo-basic">
      <Table columns={columns} dataSource={data} />
    </div>
  </div>
);
