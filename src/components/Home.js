import React, { Component } from 'react';
import { Card } from 'antd';
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

    addToCart = () => {
        console.log('click');
    }

    render() {
        return (<div>
            {
                this.state.data.map(cur => (
                    <Card
                        hoverable
                        style={{ width: 200 }}
                        cover={<img alt="example" src={cur.goodsUrl} />}
                        actions={
                            [<EllipsisOutlined key="ellipsis" onClick={this.addToCart} />]
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