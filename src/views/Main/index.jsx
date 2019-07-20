import React from 'react'
import {
    NavLink,
    Route,
    Redirect
} from 'react-router-dom'
import HeadContent from '../../components/public/Header'
import Home from './Home'
import Comment from './Comment'
import Blog from './Blog'
import User from './User'
import './index.less'

import { Layout, Menu, Breadcrumb, Icon } from 'antd'
const { Header, Content, Footer, Sider } = Layout

class MainLayout extends React.Component {
    state = {
        collapsed: false
    };

    onCollapse = collapsed => {
        this.setState({ collapsed });
    };

    render() {
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <Sider collapsed={this.state.collapsed}
                    collapsible
                    onCollapse={this.onCollapse}
                >
                    <div className="logo" />
                    <Menu defaultSelectedKeys={['home']}
                        mode="inline"
                        theme="dark"
                    >
                        <Menu.Item key="home">
                            <Icon type="home" />
                            <span>主页</span>
                            <NavLink exact
                                to="/admin/home"
                            />
                        </Menu.Item>
                        <Menu.Item key="comment">
                            <Icon type="contacts" />
                            <span>评论管理</span>
                            <NavLink exact
                                to="/admin/comment"
                            />
                        </Menu.Item>
                        <Menu.Item key="blog">
                            <Icon type="read" />
                            <span>文章管理</span>
                            <NavLink exact
                                to="/admin/blog"
                            />
                        </Menu.Item>
                        <Menu.Item key="user">
                            <Icon type="user" />
                            <span>用户管理</span>
                            <NavLink exact
                                to="/admin/user"
                            />
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }} >
                        <HeadContent />
                    </Header>
                    <Content style={{ margin: '0 16px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Route component={Home}
                                path="/admin/home"
                            />
                            <Route component={Comment}
                                path="/admin/comment"
                            />
                            <Route component={Blog}
                                path="/admin/blog"
                            />
                            <Route component={User}
                                path="/admin/user"
                            />
                            <Redirect to="/admin/home" />
                        </Breadcrumb>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </Layout>
        );
    }
}

export default MainLayout