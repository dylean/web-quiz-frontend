import React, { Component } from 'react';
import { Table, Button, message } from 'antd';
const { Column } = Table;
import axios from 'axios'

class Order extends Component {
    state = {
        data: [],
    }

    componentDidMount() {
        axios.get("http://localhost:8080/order").then(data => {
            this.setState({ data: data.data })
        })
    }

    delete = async (id) => {
        await axios.delete(`http://localhost:8080/order/${id}`)

        message.success('删除成功')

        this.setState({
            data: this.state.data.filter((cur => cur.id !== id))
        })
    }

    render() {
        return (
            <Table dataSource={this.state.data}>
                <Column title="名字" dataIndex="goodsName" key="name" />
                <Column title="单价" dataIndex="price" key="price" />
                <Column title="数量" dataIndex="count" key="count" />
                <Column title="单位" dataIndex="unit" key="unit" />
                <Column
                    title="操作"
                    key="action"
                    render={(_, record) => (
                        <Button type="primary" htmlType="submit" onClick={() => this.delete(record.id)}>
                            删除
                        </Button>
                    )}
                />
            </Table>
        );
    }
}

export default Order;