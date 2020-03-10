import React from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { Form, Input, InputNumber, Button, Checkbox } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import styles from './account.less';
const layout = {
  labelCol: { span: 2 },
  wrapperCol: { span: 8 },
};
const tailLayout = {
  wrapperCol: { offset: 2, span: 8 },
};
const validateMessages = {
  required: '此项必填',
  types: {
    email: '无效的邮箱格式',
    number: '这不是个数字',
  },
  number: {
    range: '必须是 ${min} ~ ${max} 之间',
  },
};
export default () => (
  <PageHeaderWrapper>
    <Form
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
      validateMessages={validateMessages}
      // onFinish={onFinish}
      // onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="用户名"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="密码"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item name={['user', 'email']} label="邮箱" rules={[{ type: 'email' }]}>
        <Input />
      </Form.Item>
      <Form.Item name={['user', 'age']} label="年龄" rules={[{ type: 'number', min: 0, max: 150 }]}>
        <InputNumber />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          退出登录
        </Button>
      </Form.Item>
    </Form>
  </PageHeaderWrapper>
);
