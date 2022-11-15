import React from "react";
import { Button, Checkbox, Form, Input } from "antd";

const Login = () => {
	return (
		<Form labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
			<Form.Item
				label="Username"
				name="username"
				rules={[{ required: true, message: "Please input your username!" }]}
			>
				<Input />
			</Form.Item>

			<Form.Item
				label="Password"
				name="password"
				rules={[{ required: true, message: "Please input your password!" }]}
			>
				<Input.Password />
			</Form.Item>
			<Form.Item wrapperCol={{ offset: 8, span: 16 }}>
				<Button type="primary" htmlType="submit">
          登入
				</Button>
			</Form.Item>
		</Form>
	);
};
export default Login;
