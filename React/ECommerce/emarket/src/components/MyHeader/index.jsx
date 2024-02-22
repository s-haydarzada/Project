import React from 'react';
import "./style.css";
import { useSelector } from 'react-redux';
import { LoginOutlined, UserAddOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Layout, Col, Row, Menu, Button, Space, Tooltip } from 'antd';
import { NavLink } from 'react-router-dom';
const { Header } = Layout;



const items = [
    {
        label: (
            <NavLink to="/" >
                Home
            </NavLink>
        ),
        key: 1,
    },
    {
        label: (
            <NavLink to="/product" >
                Products
            </NavLink>
        ),
        key: 2,
    },
    {
        label: (
            <NavLink to="/about" >
                About
            </NavLink>
        ),
        key: 3,
    },
    {
        label: (
            <NavLink to="/contact" >
                Contact
            </NavLink>
        ),
        key: 4,
    },

]

const MyHeader = () => {

    const cart = useSelector(state => state.postAdded);

    return (
        <div>
            <Header style={{ backgroundColor: "white" }} s>
                <Row justify="space-between">
                    <Col span={3}><h2 style={{ color: "black", fontWeight: "bold" }}>H&M</h2></Col>
                    <Col className='items' span={13} style={{ paddingLeft: 60 }}>
                        <Menu style={{ fontSize: 16 }} mode="horizontal" items={items} />
                    </Col>
                    <Col span={8}>
                        <Space direction="vertical" className='vertical'>
                            <Space size="small" style={{ marginLeft: 50 }}>
                                <Button href='/signin' type="primary" icon={<LoginOutlined />}>
                                    Login
                                </Button>
                                <Button href='/signup' type="primary" icon={<UserAddOutlined />}>
                                    Register
                                </Button>
                                <Button href='/cart' type="primary" icon={<ShoppingCartOutlined />}>
                                    Cart ({cart.basket.length})
                                </Button>
                            </Space>
                        </Space>
                        <Space direction="horizontal" style={{ width: "60%" }} className='horizontal'>
                            <Space size="middle" style={{ marginLeft: 40, border: "2px solid red" }}>
                                <Tooltip title="login">
                                    <Button href='/signin' shape="circle" icon={<LoginOutlined />}></Button>
                                </Tooltip>
                                <Tooltip title="register">
                                    <Button href='/signup' shape="circle" icon={<UserAddOutlined />} />
                                </Tooltip>
                                <Tooltip title="cart">
                                    <Button href='/cart' shape="circle" icon={<ShoppingCartOutlined />} >({cart.basket.length})</Button>
                                </Tooltip>
                            </Space>
                        </Space>

                    </Col>


                </Row>
            </Header>
        </div>
    );
}

export default MyHeader;