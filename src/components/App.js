import React from 'react'
import {Menu} from 'antd';
import {MailOutlined, AppstoreOutlined, SettingOutlined} from '@ant-design/icons';
import {Route, BrowserRouter, Link, Switch} from "react-router-dom";
import 'antd/dist/antd.css'
import Goods from './Goods'
import Home from './Home'
import Order from './Order'

const {SubMenu} = Menu;

class App extends React.Component {
    state = {
        current: 'mail',
    };

    handleClick = e => {
        console.log('click ', e);
        this.setState({current: e.key});
    };

    render() {
        const {current} = this.state;
        return (
            <BrowserRouter>
                <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
                    <Menu.Item key="home" icon={<MailOutlined/>}>
                        <Link to="/">商城</Link>
                    </Menu.Item>
                    <Menu.Item key="order" icon={<AppstoreOutlined/>}>
                        <Link to="/order">订单</Link>
                    </Menu.Item>
                    <Menu.Item key="goods" icon={<AppstoreOutlined/>}>
                        <Link to="/goods">添加商品</Link>
                    </Menu.Item>
                </Menu>

                <Route exact path='/' component={Home} />
                <Route exact path='/order' component={Order} />
                <Route exact path='/goods' component={Goods} />
            </BrowserRouter>
        );
    }
}


export default App
