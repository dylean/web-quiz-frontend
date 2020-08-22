import React, { Component } from 'react';
import { Card, message } from 'antd';
import { EllipsisOutlined } from '@ant-design/icons';
const { Meta } = Card;
import axios from 'axios'

class Home extends Component {
    state = {
        data: []
    }

    componentDidMount() {
        axios.get("http://localhost:8080/goods").then(data => {
            this.setState({ data: data.data })
        })
    }

    addToCart = async (id) => {
        await axios.post(`http://localhost:8080/order/${id}`)
        message.success('添加成功')
    }

    render() {
        return (<div>
            {
                this.state.data.map((cur, index) => (
                    <Card
                        key={index}
                        hoverable
                        style={{ width: 200 }}
                        cover={<img alt="example" src={cur.goodsUrl} />}
                        actions={
                            [<EllipsisOutlined key="ellipsis" onClick={() => this.addToCart(cur.id)} />]
                        }
                    >
                        <Meta title={cur.goodsName} description={`单价：${cur.price}元/${cur.unit}`} />
                    </Card>
                ))
            }


        </div>);
    }
}

export default Home;