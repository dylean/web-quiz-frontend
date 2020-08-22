import React from 'react';
import { Form, Input, Button, message } from 'antd';
import axios from 'axios'
import { browserHistory } from 'react-router';

const Goods = () => {
    const [form] = Form.useForm();

    const onFinish = values => {
        axios.post('http://localhost:8080/goods', values)
            .then(() => {
                message.success('添加物品成功')
                form.resetFields()
            })
            .catch(err => message.error("名称已存在"))
    };

    return (
        <Form form={form} name="control-hooks" onFinish={onFinish}>
            <Form.Item
                key="goodsName"
                name="goodsName"
                label="名称"
                rules={[{ required: true, }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                key="price"
                name="price"
                label="价格"
                rules={[{ required: true, }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                key="unit"
                name="unit"
                label="单位"
                rules={[{ required: true, }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                key="goodsUrl"
                name="goodsUrl"
                label="图片"
                rules={[{ required: true, },]}
            >
                <Input />
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit">
                    提交
                </Button>
            </Form.Item>
        </Form>
    );
}

export default Goods;